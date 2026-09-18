import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import {
  X,
  CheckCircle2,
  Utensils,
  PackageCheck,
  Bike,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Heart,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export function ActiveOrderModal({ visible, order, onClose }) {
  const { isDark, colors, theme } = useTheme();

  if (!order) return null;

  const milestones = [
    { key: 'pending', title: 'Order Confirmed', desc: 'Received by Sacred Kitchen', icon: Sparkles },
    { key: 'preparing', title: 'Cooking in Pure Desi Ghee', desc: 'Simmering with divine herbs', icon: Utensils },
    { key: 'ready', title: 'Packed & Blessed', desc: 'Awaiting Sarathi pickup', icon: PackageCheck },
    { key: 'out_for_delivery', title: 'On the Way with Sarathi', desc: 'Live GPS Express Route', icon: Bike },
    { key: 'delivered', title: 'Delivered Safely & Warm', desc: 'Handed with blessings', icon: CheckCircle2 },
  ];

  const getStepIndex = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 0;
      case 'preparing':
      case 'cooking':
        return 1;
      case 'ready':
      case 'ready_for_pickup':
        return 2;
      case 'out_for_delivery':
      case 'dispatched':
        return 3;
      case 'delivered':
      case 'completed':
        return 4;
      default:
        return 1;
    }
  };

  const currentStep = getStepIndex(order.status);

  const handleCallRider = () => {
    try {
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      Linking.openURL('tel:+919876543210');
    } catch (e) {
      console.log('Call rider error:', e);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.sheetContainer, { backgroundColor: colors.canvas, borderColor: colors.border }]}>
          
          {/* Sacred Blessing Pill */}
          <View style={[styles.sacredTopBar, { backgroundColor: isDark ? '#231F20' : '#FFF2E6' }]}>
            <Sparkles size={13} color={isDark ? '#E0FF33' : '#D97706'} />
            <Text style={[styles.sacredTopText, { color: isDark ? '#E0FF33' : '#D97706' }]}>
              ॥ श्री राधे ॥ Sacred Prasad Freshly Prepared
            </Text>
          </View>

          {/* Header */}
          <View style={[styles.headerRow, { borderBottomColor: colors.border }]}>
            <View>
              <Text style={[styles.headerSub, { color: colors.textSecondary }]}>LIVE SWR TRACKING</Text>
              <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
                Order #{order.id?.slice ? order.id.slice(-6).toUpperCase() : '108108'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (Platform.OS !== 'web') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                onClose();
              }}
              style={[styles.closeBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
            >
              <X size={16} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Live ETA Card */}
            <View style={[styles.etaCard, { backgroundColor: isDark ? '#282526' : '#FFFFFF', borderColor: colors.border }]}>
              <View style={styles.etaLeft}>
                <Clock size={20} color={isDark ? '#E0FF33' : '#D97706'} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={[styles.etaTitle, { color: colors.textPrimary }]}>Estimated Delivery</Text>
                  <Text style={[styles.etaSubtitle, { color: colors.textSecondary }]}>15 - 20 mins to Raman Reti</Text>
                </View>
              </View>
              <View style={[styles.etaBadge, { backgroundColor: isDark ? 'rgba(224, 255, 51, 0.15)' : 'rgba(217, 119, 6, 0.15)' }]}>
                <Text style={[styles.etaBadgeText, { color: isDark ? '#E0FF33' : '#D97706' }]}>LIVE</Text>
              </View>
            </View>

            {/* Live Progress Milestones */}
            <View style={[styles.milestonesCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                const isPassed = idx <= currentStep;
                const isCurrent = idx === currentStep;
                return (
                  <View key={m.key} style={styles.milestoneRow}>
                    <View style={styles.stepIndicator}>
                      <View style={[
                        styles.iconCircle,
                        isPassed ? (isDark ? styles.circlePassedDark : styles.circlePassedLight) : styles.circlePending
                      ]}>
                        <Icon size={14} color={isPassed ? (isDark ? '#1E1B1C' : '#FFFFFF') : colors.textTertiary} />
                      </View>
                      {idx < milestones.length - 1 && (
                        <View style={[styles.stepLine, isPassed ? { backgroundColor: isDark ? '#E0FF33' : '#D97706' } : { backgroundColor: colors.border }]} />
                      )}
                    </View>

                    <View style={styles.stepContent}>
                      <Text style={[
                        styles.stepTitle,
                        { color: isPassed ? colors.textPrimary : colors.textTertiary },
                        isCurrent && { fontWeight: '900', color: isDark ? '#E0FF33' : '#D97706' }
                      ]}>
                        {m.title}
                      </Text>
                      <Text style={[styles.stepDesc, { color: colors.textSecondary }]}>
                        {m.desc}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            {/* Rider Details Card */}
            <View style={[styles.riderCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={[styles.riderAvatar, { backgroundColor: isDark ? 'rgba(224, 255, 51, 0.15)' : 'rgba(217, 119, 6, 0.15)' }]}>
                <Bike size={20} color={isDark ? '#E0FF33' : '#D97706'} />
              </View>
              <View style={styles.riderInfo}>
                <Text style={[styles.riderName, { color: colors.textPrimary }]}>Gaurav Devotee (Sarathi)</Text>
                <Text style={[styles.riderStatus, { color: colors.textSecondary }]}>Vedic Express · Electric Scooter</Text>
              </View>
              <TouchableOpacity
                onPress={handleCallRider}
                style={[styles.callBtn, isDark ? styles.btnDark : styles.btnLight]}
              >
                <Phone size={15} color={isDark ? '#1E1B1C' : '#FFFFFF'} />
              </TouchableOpacity>
            </View>

            {/* Order Items Summary */}
            <View style={[styles.summaryCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[styles.summaryTitle, { color: colors.textSecondary }]}>PRASAD ORDER SUMMARY</Text>
              {order.items?.map((item, idx) => (
                <View key={idx} style={styles.summaryItemRow}>
                  <Text style={[styles.itemQty, { color: isDark ? '#E0FF33' : '#D97706' }]}>{item.quantity || 1}x</Text>
                  <Text style={[styles.summaryItemName, { color: colors.textPrimary }]} numberOfLines={1}>
                    {item.name || item.dish?.name}
                  </Text>
                  <Text style={[styles.summaryItemPrice, { color: colors.textPrimary }]}>
                    ₹{(item.price || item.dish?.price || 140) * (item.quantity || 1)}
                  </Text>
                </View>
              ))}
              <View style={[styles.summaryTotalRow, { borderTopColor: colors.border }]}>
                <Text style={[styles.sumTotalLabel, { color: colors.textPrimary }]}>Total Paid</Text>
                <Text style={[styles.sumTotalVal, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>
                  ₹{order.total_amount || order.totalAmount || 140}
                </Text>
              </View>
            </View>

            {/* Satvik Safety Guarantee */}
            <View style={[styles.guaranteeBox, { borderColor: colors.border }]}>
              <ShieldCheck size={16} color={isDark ? '#CEF3E7' : '#059669'} />
              <Text style={[styles.guaranteeText, { color: colors.textSecondary }]}>
                100% Pure Satvik Assurance · Zero Onion/Garlic · Divine Kitchen Sealed
              </Text>
            </View>

            <View style={{ height: 40 }} />
          </ScrollView>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.78)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderWidth: 1,
    maxHeight: '90%',
    overflow: 'hidden',
  },
  sacredTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 6,
  },
  sacredTopText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  headerSub: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
  },
  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  scrollContent: {
    padding: 20,
  },
  etaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  etaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  etaTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  etaSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  etaBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  etaBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  milestonesCard: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  milestoneRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stepIndicator: {
    alignItems: 'center',
    marginRight: 12,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circlePassedDark: {
    backgroundColor: '#E0FF33',
  },
  circlePassedLight: {
    backgroundColor: '#D97706',
  },
  circlePending: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  stepLine: {
    width: 2,
    flex: 1,
    marginVertical: 4,
  },
  stepContent: {
    flex: 1,
    paddingTop: 4,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  stepDesc: {
    fontSize: 12,
    marginTop: 2,
  },
  riderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    gap: 12,
  },
  riderAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  riderInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 14,
    fontWeight: '900',
  },
  riderStatus: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  callBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDark: {
    backgroundColor: '#E0FF33',
  },
  btnLight: {
    backgroundColor: '#D97706',
  },
  summaryCard: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    gap: 8,
  },
  summaryTitle: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  summaryItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemQty: {
    fontSize: 13,
    fontWeight: '800',
    marginRight: 8,
  },
  summaryItemName: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
  },
  summaryItemPrice: {
    fontSize: 13,
    fontWeight: '800',
  },
  summaryTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    marginTop: 6,
  },
  sumTotalLabel: {
    fontSize: 15,
    fontWeight: '900',
  },
  sumTotalVal: {
    fontSize: 18,
    fontWeight: '900',
  },
  guaranteeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
  },
  guaranteeText: {
    fontSize: 11,
    fontWeight: '600',
    flex: 1,
  },
});

export default ActiveOrderModal;
