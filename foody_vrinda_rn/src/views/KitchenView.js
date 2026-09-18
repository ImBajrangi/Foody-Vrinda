import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { Clock, ChefHat, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { updateOrderStatus } from '../services/supabase';

const STATUS_FILTERS = [
  { id: 'all', label: 'All Orders' },
  { id: 'pending', label: 'New Orders' },
  { id: 'preparing', label: 'Preparing' },
  { id: 'ready', label: 'Ready for Sarathi' },
];

export default function KitchenView({ orders = [], onRefresh }) {
  const { theme, isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [loadingOrderId, setLoadingOrderId] = useState(null);

  const filteredOrders = orders.filter((order) => {
    if (selectedFilter === 'all') return true;
    return order.status?.toLowerCase() === selectedFilter;
  });

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setLoadingOrderId(orderId);
      const { error } = await updateOrderStatus(orderId, newStatus);
      if (error) {
        Alert.alert('Update Failed', error.message || 'Could not update order status.');
      } else {
        if (onRefresh) onRefresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingOrderId(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return '#F59E0B';
      case 'preparing':
        return '#3B82F6';
      case 'ready':
      case 'ready_for_pickup':
        return '#10B981';
      case 'completed':
      case 'delivered':
        return '#64748B';
      default:
        return theme.accent;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* KDS Header Banner */}
      <View style={[styles.kdsHeader, { backgroundColor: isDark ? '#231F20' : '#F4ECE1', borderColor: theme.border }]}>
        <View style={styles.kdsHeaderLeft}>
          <ChefHat size={24} color={theme.accent} />
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.kdsTitle, { color: theme.text }]}>Satvik Kitchen Station (KDS)</Text>
            <Text style={[styles.kdsSubtitle, { color: theme.textMuted }]}>Real-time Order Preparation & Dispatch</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onRefresh}
          style={[styles.refreshBtn, { backgroundColor: theme.card, borderColor: theme.border }]}
        >
          <RefreshCw size={16} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Filter Chips */}
      <View style={styles.filterRow}>
        {STATUS_FILTERS.map((f) => {
          const isSelected = selectedFilter === f.id;
          return (
            <TouchableOpacity
              key={f.id}
              onPress={() => setSelectedFilter(f.id)}
              style={[
                styles.filterChip,
                {
                  backgroundColor: isSelected ? theme.accent : theme.card,
                  borderColor: isSelected ? theme.accent : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: isSelected ? theme.accentText : theme.text,
                    fontWeight: isSelected ? '800' : '600',
                  },
                ]}
              >
                {f.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Order Tickets */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const statusColor = getStatusColor(item.status);
          const isUpdating = loadingOrderId === item.id;

          return (
            <View style={[styles.ticketCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
              {/* Ticket Top Row */}
              <View style={styles.ticketHeader}>
                <View>
                  <Text style={[styles.ticketId, { color: theme.text }]}>
                    #{item.id?.slice?.(0, 8) || item.id}
                  </Text>
                  <View style={styles.timeRow}>
                    <Clock size={12} color={theme.textMuted} />
                    <Text style={[styles.timeText, { color: theme.textMuted }]}>
                      {new Date(item.created_at || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                  </View>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: `${statusColor}20` }]}>
                  <Text style={[styles.statusBadgeText, { color: statusColor }]}>
                    {item.status?.toUpperCase()}
                  </Text>
                </View>
              </View>

              {/* Items List */}
              <View style={[styles.itemsDivider, { borderColor: theme.border }]} />
              <View style={styles.itemsSection}>
                {(item.items || []).map((dish, i) => (
                  <View key={i} style={styles.dishRow}>
                    <View style={[styles.dishQtyBadge, { backgroundColor: theme.inputBg }]}>
                      <Text style={[styles.dishQtyText, { color: theme.accent }]}>{dish.quantity || 1}x</Text>
                    </View>
                    <Text style={[styles.dishName, { color: theme.text }]}>
                      {dish.name || dish.dish_name || 'Satvik Offering'}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Action Buttons */}
              <View style={styles.actionRow}>
                {item.status === 'pending' && (
                  <TouchableOpacity
                    disabled={isUpdating}
                    onPress={() => handleUpdateStatus(item.id, 'preparing')}
                    style={[styles.actionBtn, { backgroundColor: '#3B82F6' }]}
                  >
                    <ChefHat size={16} color="#FFF" />
                    <Text style={styles.actionBtnText}>Start Preparing</Text>
                  </TouchableOpacity>
                )}

                {item.status === 'preparing' && (
                  <TouchableOpacity
                    disabled={isUpdating}
                    onPress={() => handleUpdateStatus(item.id, 'ready')}
                    style={[styles.actionBtn, { backgroundColor: '#10B981' }]}
                  >
                    <CheckCircle size={16} color="#FFF" />
                    <Text style={styles.actionBtnText}>Mark Ready for Rider</Text>
                  </TouchableOpacity>
                )}

                {item.status === 'ready' && (
                  <TouchableOpacity
                    disabled={isUpdating}
                    onPress={() => handleUpdateStatus(item.id, 'out_for_delivery')}
                    style={[styles.actionBtn, { backgroundColor: theme.accent }]}
                  >
                    <Text style={[styles.actionBtnText, { color: theme.accentText }]}>Dispatched with Sarathi</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ fontSize: 48, marginBottom: 10 }}>🧘</Text>
            <Text style={[styles.emptyTitle, { color: theme.text }]}>No Kitchen Tickets</Text>
            <Text style={[styles.emptySub, { color: theme.textMuted }]}>
              All orders are prepared or in queue.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kdsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  kdsHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kdsTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  kdsSubtitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  refreshBtn: {
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  filterText: {
    fontSize: 12,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  ticketCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
    marginBottom: 14,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketId: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '800',
  },
  itemsDivider: {
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  itemsSection: {
    gap: 8,
    marginBottom: 14,
  },
  dishRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dishQtyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 10,
  },
  dishQtyText: {
    fontSize: 12,
    fontWeight: '800',
  },
  dishName: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    gap: 6,
  },
  actionBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 13,
    textAlign: 'center',
  },
});

export { KitchenView };
