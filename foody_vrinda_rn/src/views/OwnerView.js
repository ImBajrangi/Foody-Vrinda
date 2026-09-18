import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Switch,
  StyleSheet,
  Alert,
} from 'react-native';
import { Store, DollarSign, Package, CheckSquare, Sparkles, RefreshCw, Layers } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { toggleItemAvailability } from '../services/supabase';

export default function OwnerView({ menuItems = [], orders = [], onRefresh }) {
  const { theme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'stats'
  const [togglingId, setTogglingId] = useState(null);

  const totalRevenue = orders.reduce((sum, o) => sum + (Number(o.total_amount) || 0), 0);
  const pendingOrders = orders.filter((o) => o.status === 'pending').length;

  const handleToggleStock = async (item) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      const newStatus = !item.is_available;
      setTogglingId(item.id);
      const { error } = await toggleItemAvailability(item.id, newStatus);
      if (error) {
        Alert.alert('Error', error.message || 'Could not update item stock.');
      } else {
        if (onRefresh) onRefresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setTogglingId(null);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Store status banner */}
      <View style={[styles.storeCard, { backgroundColor: isDark ? '#231F20' : '#F4ECE1', borderColor: theme.border }]}>
        <View style={styles.storeCardTop}>
          <View style={styles.storeIconBox}>
            <Store size={22} color={theme.accent} />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={[styles.storeName, { color: theme.text }]}>Foody Vrinda Divine Rasoi</Text>
            <Text style={[styles.storeHours, { color: theme.textMuted }]}>
              {isOpen ? '🟢 Open & Taking Live Bhog Orders' : '🔴 Closed for Seva'}
            </Text>
          </View>
          <Switch
            value={isOpen}
            onValueChange={(val) => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              setIsOpen(val);
            }}
            trackColor={{ false: '#475569', true: theme.accent }}
            thumbColor={isOpen ? theme.accentText : '#F8FAFC'}
          />
        </View>

        {/* 3 Metric Cards */}
        <View style={styles.metricsGrid}>
          <View style={[styles.metricCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.metricVal, { color: theme.accent }]}>₹{totalRevenue}</Text>
            <Text style={[styles.metricTitle, { color: theme.textMuted }]}>Today's Seva</Text>
          </View>
          <View style={[styles.metricCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.metricVal, { color: '#F59E0B' }]}>{pendingOrders}</Text>
            <Text style={[styles.metricTitle, { color: theme.textMuted }]}>Pending</Text>
          </View>
          <View style={[styles.metricCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.metricVal, { color: theme.text }]}>{menuItems.length}</Text>
            <Text style={[styles.metricTitle, { color: theme.textMuted }]}>Catalog Items</Text>
          </View>
        </View>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          onPress={() => setActiveTab('menu')}
          style={[
            styles.tabBtn,
            {
              backgroundColor: activeTab === 'menu' ? theme.accent : theme.card,
              borderColor: activeTab === 'menu' ? theme.accent : theme.border,
            },
          ]}
        >
          <Layers size={16} color={activeTab === 'menu' ? theme.accentText : theme.text} />
          <Text
            style={[
              styles.tabBtnText,
              {
                color: activeTab === 'menu' ? theme.accentText : theme.text,
                fontWeight: activeTab === 'menu' ? '800' : '600',
              },
            ]}
          >
            Menu Inventory
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('orders')}
          style={[
            styles.tabBtn,
            {
              backgroundColor: activeTab === 'orders' ? theme.accent : theme.card,
              borderColor: activeTab === 'orders' ? theme.accent : theme.border,
            },
          ]}
        >
          <CheckSquare size={16} color={activeTab === 'orders' ? theme.accentText : theme.text} />
          <Text
            style={[
              styles.tabBtnText,
              {
                color: activeTab === 'orders' ? theme.accentText : theme.text,
                fontWeight: activeTab === 'orders' ? '800' : '600',
              },
            ]}
          >
            Recent Orders ({orders.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content List */}
      {activeTab === 'menu' ? (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const isAvailable = item.is_available !== false;
            return (
              <View style={[styles.inventoryCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.itemName, { color: theme.text }]}>{item.name}</Text>
                  <Text style={[styles.itemSub, { color: theme.textMuted }]}>
                    ₹{item.price} • {item.category || 'Satvik Bhog'}
                  </Text>
                </View>
                <View style={styles.stockToggle}>
                  <Text style={[styles.stockLabel, { color: isAvailable ? '#10B981' : '#EF4444' }]}>
                    {isAvailable ? 'In Stock' : 'Sold Out'}
                  </Text>
                  <Switch
                    disabled={togglingId === item.id}
                    value={isAvailable}
                    onValueChange={() => handleToggleStock(item)}
                    trackColor={{ false: '#EF4444', true: '#10B981' }}
                    thumbColor="#FFF"
                  />
                </View>
              </View>
            );
          }}
        />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={[styles.inventoryCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.itemName, { color: theme.text }]}>
                  Order #{item.id?.slice?.(0, 8) || item.id}
                </Text>
                <Text style={[styles.itemSub, { color: theme.textMuted }]}>
                  ₹{item.total_amount || 0} • Status: {item.status?.toUpperCase()}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storeCard: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
  },
  storeCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  storeIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeName: {
    fontSize: 15,
    fontWeight: '800',
  },
  storeHours: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  metricCard: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  metricVal: {
    fontSize: 16,
    fontWeight: '900',
  },
  metricTitle: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 12,
    gap: 8,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    gap: 6,
  },
  tabBtnText: {
    fontSize: 13,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  inventoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '800',
  },
  itemSub: {
    fontSize: 12,
    marginTop: 2,
  },
  stockToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stockLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
});

export { OwnerView };
