import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import { Bike, Navigation, Phone, CheckCircle2, PackageCheck, MapPin, RefreshCw } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { updateOrderStatus } from '../services/supabase';

export default function TransportView({ orders = [], onRefresh }) {
  const { theme, isDark } = useTheme();
  const [isOnline, setIsOnline] = useState(true);
  const [loadingOrderId, setLoadingOrderId] = useState(null);

  const deliveryOrders = orders.filter((o) =>
    ['ready', 'ready_for_pickup', 'out_for_delivery'].includes(o.status?.toLowerCase())
  );

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setLoadingOrderId(orderId);
      const { error } = await updateOrderStatus(orderId, newStatus);
      if (error) {
        Alert.alert('Update Failed', error.message || 'Could not update delivery status.');
      } else {
        if (onRefresh) onRefresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingOrderId(null);
    }
  };

  const handleCallCustomer = (phone) => {
    if (!phone) return;
    Linking.openURL(`tel:${phone}`);
  };

  const handleOpenMap = (address) => {
    const query = encodeURIComponent(address || 'Vrindavan, Uttar Pradesh');
    Linking.openURL(`https://maps.google.com/?q=${query}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Rider Status & Stats Header */}
      <View style={[styles.statsCard, { backgroundColor: isDark ? '#231F20' : '#F4ECE1', borderColor: theme.border }]}>
        <View style={styles.riderProfileRow}>
          <View style={styles.riderAvatarBox}>
            <Bike size={24} color={theme.accent} />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={[styles.riderName, { color: theme.text }]}>Sarathi Seva Partner</Text>
            <Text style={[styles.riderStatusText, { color: isOnline ? '#10B981' : theme.textMuted }]}>
              {isOnline ? '● Active in Vrindavan Zone' : '○ Offline'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsOnline(!isOnline)}
            style={[
              styles.dutyToggle,
              { backgroundColor: isOnline ? '#10B981' : theme.inputBg, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.dutyToggleText, { color: isOnline ? '#FFF' : theme.textMuted }]}>
              {isOnline ? 'ON DUTY' : 'OFF DUTY'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Mini stats */}
        <View style={[styles.statsRow, { borderColor: theme.border }]}>
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: theme.text }]}>{deliveryOrders.length}</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Active Drops</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: theme.accent }]}>₹840</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Today's Seva</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statBox}>
            <Text style={[styles.statNum, { color: '#10B981' }]}>100%</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Rating</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Active Delivery Queue</Text>
        <TouchableOpacity onPress={onRefresh} style={styles.refreshIcon}>
          <RefreshCw size={16} color={theme.textMuted} />
        </TouchableOpacity>
      </View>

      {/* Orders list */}
      <FlatList
        data={deliveryOrders}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isOut = item.status === 'out_for_delivery';
          const address = item.delivery_address || 'Parikrama Marg, Raman Reti, Vrindavan';
          const phone = item.customer_phone || '+91 98765 43210';

          return (
            <View style={[styles.orderCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <View style={styles.cardTop}>
                <View>
                  <Text style={[styles.orderId, { color: theme.text }]}>
                    #{item.id?.slice?.(0, 8) || item.id}
                  </Text>
                  <Text style={[styles.orderAmount, { color: theme.accent }]}>
                    ₹{item.total_amount || 280} (Prepaid / UPI)
                  </Text>
                </View>
                <View style={[styles.badge, { backgroundColor: isOut ? '#F59E0B20' : '#10B98120' }]}>
                  <Text style={[styles.badgeText, { color: isOut ? '#F59E0B' : '#10B981' }]}>
                    {isOut ? 'IN TRANSIT' : 'READY TO PICK'}
                  </Text>
                </View>
              </View>

              {/* Destination Address */}
              <View style={[styles.destBox, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
                <MapPin size={16} color={theme.accent} />
                <Text style={[styles.destText, { color: theme.text }]} numberOfLines={2}>
                  {address}
                </Text>
              </View>

              {/* Action buttons */}
              <View style={styles.buttonsRow}>
                <TouchableOpacity
                  onPress={() => handleCallCustomer(phone)}
                  style={[styles.actionIconButton, { backgroundColor: theme.inputBg, borderColor: theme.border }]}
                >
                  <Phone size={16} color={theme.text} />
                  <Text style={[styles.actionIconLabel, { color: theme.text }]}>Call</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleOpenMap(address)}
                  style={[styles.actionIconButton, { backgroundColor: theme.inputBg, borderColor: theme.border }]}
                >
                  <Navigation size={16} color={theme.text} />
                  <Text style={[styles.actionIconLabel, { color: theme.text }]}>Map</Text>
                </TouchableOpacity>

                {!isOut ? (
                  <TouchableOpacity
                    disabled={loadingOrderId === item.id}
                    onPress={() => handleUpdateStatus(item.id, 'out_for_delivery')}
                    style={[styles.primaryActionBtn, { backgroundColor: theme.accent }]}
                  >
                    <Bike size={16} color={theme.accentText} />
                    <Text style={[styles.primaryActionText, { color: theme.accentText }]}>Pick & Depart</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    disabled={loadingOrderId === item.id}
                    onPress={() => handleUpdateStatus(item.id, 'delivered')}
                    style={[styles.primaryActionBtn, { backgroundColor: '#10B981' }]}
                  >
                    <PackageCheck size={16} color="#FFF" />
                    <Text style={[styles.primaryActionText, { color: '#FFF' }]}>Handover Prasad</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ fontSize: 48, marginBottom: 10 }}>🚲</Text>
            <Text style={[styles.emptyTitle, { color: theme.text }]}>No Pending Pickups</Text>
            <Text style={[styles.emptySub, { color: theme.textMuted }]}>
              All orders are delivered. Stay stationed in Vrindavan Zone!
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
  statsCard: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
  },
  riderProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  riderAvatarBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  riderName: {
    fontSize: 15,
    fontWeight: '800',
  },
  riderStatusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  dutyToggle: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  dutyToggleText: {
    fontSize: 11,
    fontWeight: '800',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  statBox: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 18,
    fontWeight: '900',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
  },
  refreshIcon: {
    padding: 4,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  orderCard: {
    borderRadius: 22,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  orderAmount: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  destBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
    gap: 8,
  },
  destText: {
    fontSize: 13,
    fontWeight: '500',
    flex: 1,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionIconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    gap: 6,
  },
  actionIconLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
  primaryActionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
    gap: 6,
  },
  primaryActionText: {
    fontSize: 13,
    fontWeight: '800',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  emptySub: {
    fontSize: 13,
    textAlign: 'center',
  },
});

export { TransportView };
