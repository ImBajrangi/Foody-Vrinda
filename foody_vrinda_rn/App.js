import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Context Providers
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { CartProvider, useCart } from './src/context/CartContext';

// Components & Views
import Header from './src/components/Header';
import DynamicIslandToast from './src/components/DynamicIslandToast';
import DishDetailModal from './src/components/DishDetailModal';
import CartDrawer from './src/components/CartDrawer';
import ActiveOrderModal from './src/components/ActiveOrderModal';
import AuthModal from './src/components/AuthModal';

// Role Screen Views
import CustomerView from './src/views/CustomerView';
import KitchenView from './src/views/KitchenView';
import TransportView from './src/views/TransportView';
import OwnerView from './src/views/OwnerView';
import DeveloperView from './src/views/DeveloperView';

// Services
import { fetchMenuItems, fetchOrders, subscribeToOrders } from './src/services/supabase';
import { SEED_MENU_ITEMS, SEED_ORDERS } from './src/constants/seedData';

function MainApp() {
  const { theme, isDark } = useTheme();
  const { user, profile } = useAuth();
  const { toast } = useCart();

  // Navigation / Role View State
  const [activeRole, setActiveRole] = useState('customer'); // 'customer' | 'kitchen' | 'transport' | 'owner' | 'developer'

  // Data States (SWR Initialized)
  const [menuItems, setMenuItems] = useState(SEED_MENU_ITEMS || []);
  const [orders, setOrders] = useState(SEED_ORDERS || []);
  const [loading, setLoading] = useState(false);

  // Modal States
  const [selectedDish, setSelectedDish] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isActiveOrderOpen, setIsActiveOrderOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Active customer order
  const activeOrder = Array.isArray(orders)
    ? orders.find(
        (o) => o?.status && !['delivered', 'cancelled'].includes(o.status.toLowerCase())
      )
    : null;

  // Load Menu Items and Orders with SWR pattern
  const loadData = useCallback(async () => {
    try {
      const [menuRes, ordersRes] = await Promise.all([
        fetchMenuItems(),
        fetchOrders(),
      ]);

      if (menuRes.data && menuRes.data.length > 0) {
        setMenuItems(menuRes.data);
      }
      if (ordersRes.data && ordersRes.data.length > 0) {
        setOrders(ordersRes.data);
      }
    } catch (err) {
      console.log('Using cached data:', err.message);
    }
  }, []);

  useEffect(() => {
    loadData();

    // Setup Supabase Realtime Channel
    const unsubscribe = subscribeToOrders((newOrder) => {
      setOrders((prev) => {
        const index = prev.findIndex((o) => o.id === newOrder.id);
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = newOrder;
          return updated;
        }
        return [newOrder, ...prev];
      });
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [loadData]);

  // Sync role with profile if elevated
  useEffect(() => {
    if (profile?.role === 'kitchen' && activeRole === 'customer') {
      setActiveRole('kitchen');
    } else if (profile?.role === 'rider' && activeRole === 'customer') {
      setActiveRole('transport');
    } else if (profile?.role === 'owner' && activeRole === 'customer') {
      setActiveRole('owner');
    }
  }, [profile]);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      {/* Dynamic Island Capsule Toast */}
      <DynamicIslandToast toast={toast} />

      {/* Main Header Strip */}
      <SafeAreaView style={{ backgroundColor: theme.headerBg }}>
        <Header
          activeRole={activeRole}
          onRoleChange={setActiveRole}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenActiveOrder={() => setIsActiveOrderOpen(true)}
          hasActiveOrder={!!activeOrder}
        />
      </SafeAreaView>

      {/* View Switcher Router */}
      <View style={styles.viewWrapper}>
        {activeRole === 'customer' && (
          <CustomerView
            menuItems={menuItems}
            onSelectDish={(dish) => setSelectedDish(dish)}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {activeRole === 'kitchen' && (
          <KitchenView
            orders={orders}
            onRefresh={loadData}
          />
        )}

        {activeRole === 'transport' && (
          <TransportView
            orders={orders}
            onRefresh={loadData}
          />
        )}

        {activeRole === 'owner' && (
          <OwnerView
            menuItems={menuItems}
            orders={orders}
            onRefresh={loadData}
          />
        )}

        {activeRole === 'developer' && (
          <DeveloperView
            onRefresh={loadData}
          />
        )}
      </View>

      {/* Modals & Bottom Drawers */}
      <DishDetailModal
        dish={selectedDish}
        visible={!!selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      <CartDrawer
        visible={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOrderSuccess={(newOrder) => {
          setIsCartOpen(false);
          if (newOrder) {
            setOrders((prev) => [newOrder, ...prev]);
            setIsActiveOrderOpen(true);
          }
        }}
      />

      <ActiveOrderModal
        visible={isActiveOrderOpen}
        onClose={() => setIsActiveOrderOpen(false)}
        order={activeOrder}
      />

      <AuthModal
        visible={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <MainApp />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
  },
});
