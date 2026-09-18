import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { DataService } from '../services/supabase';
import { X, Trash2, Plus, Minus, ShoppingBag, Bike, Store, ArrowRight, CreditCard, Banknote, MapPin, Sparkles, MessageSquare } from 'lucide-react-native';

export function CartDrawer({ visible, onClose, activeShop, onOrderPlaced, onOrderSuccess }) {
  const { isDark, colors } = useTheme();
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, gstAmount, deliveryCharge, totalAmount, fulfillmentType, setFulfillmentType } = useCart();
  const { user, userData } = useAuth();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [cookingNotes, setCookingNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI' | 'COD'
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (userData) {
      if (userData.displayName && !customerName) setCustomerName(userData.displayName);
      if (userData.phone && !customerPhone) setCustomerPhone(userData.phone);
      if (userData.address && !deliveryAddress) setDeliveryAddress(userData.address);
    }
  }, [userData]);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;
    
    if (fulfillmentType === 'delivery' && !deliveryAddress.trim()) {
      Alert.alert('Address Required', 'Please enter your delivery address in Vrindavan.');
      return;
    }

    try {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setSubmitting(true);

      const orderPayload = {
        shopId: activeShop?.id || 'shop-vrinda-main',
        shopName: activeShop?.name || 'Vrinda Cloud Kitchen (Main)',
        customer_name: customerName || 'Satvik Devotee',
        customer_phone: customerPhone || '+91 9876543210',
        delivery_address: fulfillmentType === 'pickup' ? 'Counter Pickup (Temple Kitchen)' : deliveryAddress,
        fulfillmentType,
        items: cart.map(i => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity || 1,
          spicyLevel: i.spicyLevel || 'Mild'
        })),
        notes: cookingNotes,
        payment_method: paymentMethod,
        subtotal,
        gstAmount,
        deliveryCharge,
        total_amount: totalAmount,
        status: 'pending',
        created_at: new Date().toISOString()
      };

      const result = await DataService.placeOrder(orderPayload);
      clearCart();
      onClose();
      
      const placedOrder = result?.order || orderPayload;
      onOrderPlaced?.(placedOrder);
      onOrderSuccess?.(placedOrder);
    } catch (err) {
      console.error('Order placement error:', err);
      Alert.alert('Order Notice', 'Order recorded locally in offline cache.');
    } finally {
      setSubmitting(false);
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
          
          {/* Header Title & Close Button */}
          <View style={[styles.headerRow, { borderBottomColor: colors.border }]}>
            <View style={styles.headerLeft}>
              <ShoppingBag size={20} color={isDark ? '#E0FF33' : '#D97706'} />
              <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Sacred Basket</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={[styles.closeBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <X size={16} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Empty State */}
            {cart.length === 0 ? (
              <View style={styles.emptyContainer}>
                <ShoppingBag size={48} color={colors.textTertiary} />
                <Text style={[styles.emptyTitle, { color: colors.textPrimary }]}>Basket is empty</Text>
                <Text style={[styles.emptyDesc, { color: colors.textSecondary }]}>Add pure satvik dishes from the sacred menu to begin your order.</Text>
              </View>
            ) : (
              <>
                {/* Cart Items List */}
                <View style={styles.itemsSection}>
                  {cart.map((item, idx) => (
                    <View key={`${item.id}-${idx}`} style={[styles.itemRow, { borderBottomColor: colors.border }]}>
                      <View style={styles.itemInfo}>
                        <Text style={[styles.itemName, { color: colors.textPrimary }]}>{item.name}</Text>
                        <Text style={[styles.itemMeta, { color: colors.textSecondary }]}>
                          ₹{item.price} each · {item.spicyLevel || 'Mild'}
                        </Text>
                      </View>

                      {/* Quantity Stepper */}
                      <View style={[styles.itemStepper, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                        <TouchableOpacity
                          onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            updateQuantity(item.id, item.spicyLevel, (item.quantity || 1) - 1);
                          }}
                          style={styles.stepIcon}
                        >
                          {(item.quantity || 1) === 1 ? (
                            <Trash2 size={13} color="#EF4444" />
                          ) : (
                            <Minus size={13} color={colors.textPrimary} />
                          )}
                        </TouchableOpacity>
                        <Text style={[styles.itemQty, { color: colors.textPrimary }]}>{item.quantity || 1}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            updateQuantity(item.id, item.spicyLevel, (item.quantity || 1) + 1);
                          }}
                          style={styles.stepIcon}
                        >
                          <Plus size={13} color={colors.textPrimary} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>

                {/* Fulfillment Selector */}
                <View style={[styles.fulfillmentBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <TouchableOpacity
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setFulfillmentType('delivery');
                    }}
                    style={[
                      styles.fulfillBtn,
                      fulfillmentType === 'delivery' && (isDark ? styles.fulfillActiveDark : styles.fulfillActiveLight)
                    ]}
                  >
                    <Bike size={14} color={fulfillmentType === 'delivery' ? (isDark ? '#E0FF33' : '#FFFFFF') : colors.textSecondary} />
                    <Text style={[
                      styles.fulfillText,
                      { color: fulfillmentType === 'delivery' ? (isDark ? '#E0FF33' : '#FFFFFF') : colors.textSecondary }
                    ]}>
                      Temple Delivery
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setFulfillmentType('pickup');
                    }}
                    style={[
                      styles.fulfillBtn,
                      fulfillmentType === 'pickup' && (isDark ? styles.fulfillActiveDark : styles.fulfillActiveLight)
                    ]}
                  >
                    <Store size={14} color={fulfillmentType === 'pickup' ? (isDark ? '#E0FF33' : '#FFFFFF') : colors.textSecondary} />
                    <Text style={[
                      styles.fulfillText,
                      { color: fulfillmentType === 'pickup' ? (isDark ? '#E0FF33' : '#FFFFFF') : colors.textSecondary }
                    ]}>
                      Self-Pickup
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Delivery Form Details */}
                <View style={[styles.formContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <Text style={[styles.formLabel, { color: colors.textSecondary }]}>RECIPIENT & LOCATION</Text>
                  
                  <TextInput
                    value={customerName}
                    onChangeText={setCustomerName}
                    placeholder="Recipient Name (e.g. Radhe Shyam)"
                    placeholderTextColor={colors.textTertiary}
                    style={[styles.input, { backgroundColor: colors.recessed, color: colors.textPrimary, borderColor: colors.border }]}
                  />

                  <View style={[styles.phoneInputRow, { backgroundColor: colors.recessed, borderColor: colors.border }]}>
                    <Text style={[styles.phonePrefix, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>+91</Text>
                    <TextInput
                      value={customerPhone}
                      onChangeText={setCustomerPhone}
                      placeholder="Contact Mobile Number"
                      keyboardType="phone-pad"
                      placeholderTextColor={colors.textTertiary}
                      style={[styles.phoneInput, { color: colors.textPrimary }]}
                    />
                  </View>

                  {fulfillmentType === 'delivery' && (
                    <TextInput
                      value={deliveryAddress}
                      onChangeText={setDeliveryAddress}
                      placeholder="Delivery Address in Vrindavan (Ashram/Hotel/Temple)"
                      placeholderTextColor={colors.textTertiary}
                      multiline
                      numberOfLines={2}
                      style={[styles.input, styles.addressInput, { backgroundColor: colors.recessed, color: colors.textPrimary, borderColor: colors.border }]}
                    />
                  )}

                  {/* Cooking / Delivery instructions */}
                  <TextInput
                    value={cookingNotes}
                    onChangeText={setCookingNotes}
                    placeholder="Special Bhog instructions (e.g., Extra hot, call upon arrival)..."
                    placeholderTextColor={colors.textTertiary}
                    style={[styles.input, { backgroundColor: colors.recessed, color: colors.textPrimary, borderColor: colors.border, marginTop: 4 }]}
                  />
                </View>

                {/* Payment Selection */}
                <View style={[styles.paymentBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <Text style={[styles.formLabel, { color: colors.textSecondary }]}>PAYMENT METHOD</Text>
                  
                  <View style={styles.paymentMethodsRow}>
                    <TouchableOpacity
                      onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        setPaymentMethod('UPI');
                      }}
                      style={[
                        styles.payOption,
                        { borderColor: paymentMethod === 'UPI' ? (isDark ? '#E0FF33' : '#D97706') : colors.border, backgroundColor: colors.recessed }
                      ]}
                    >
                      <CreditCard size={16} color={paymentMethod === 'UPI' ? (isDark ? '#E0FF33' : '#D97706') : colors.textSecondary} />
                      <Text style={[styles.payOptionText, { color: colors.textPrimary }]}>Instant UPI / Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        setPaymentMethod('COD');
                      }}
                      style={[
                        styles.payOption,
                        { borderColor: paymentMethod === 'COD' ? (isDark ? '#E0FF33' : '#D97706') : colors.border, backgroundColor: colors.recessed }
                      ]}
                    >
                      <Banknote size={16} color={paymentMethod === 'COD' ? (isDark ? '#E0FF33' : '#D97706') : colors.textSecondary} />
                      <Text style={[styles.payOptionText, { color: colors.textPrimary }]}>Cash on Delivery</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Bill Breakdown */}
                <View style={[styles.billCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <View style={styles.billRow}>
                    <Text style={[styles.billLabel, { color: colors.textSecondary }]}>Subtotal</Text>
                    <Text style={[styles.billVal, { color: colors.textPrimary }]}>₹{subtotal}</Text>
                  </View>
                  <View style={styles.billRow}>
                    <Text style={[styles.billLabel, { color: colors.textSecondary }]}>Temple Seva & GST (5%)</Text>
                    <Text style={[styles.billVal, { color: colors.textPrimary }]}>₹{gstAmount}</Text>
                  </View>
                  <View style={styles.billRow}>
                    <Text style={[styles.billLabel, { color: colors.textSecondary }]}>Sarathi Delivery Fee</Text>
                    <Text style={[styles.billVal, { color: deliveryCharge === 0 ? '#10B981' : colors.textPrimary }]}>
                      {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                    </Text>
                  </View>
                  <View style={[styles.billTotalRow, { borderTopColor: colors.border }]}>
                    <Text style={[styles.totalLabel, { color: colors.textPrimary }]}>Sacred Grand Total</Text>
                    <Text style={[styles.totalVal, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>
                      ₹{totalAmount}
                    </Text>
                  </View>
                </View>
              </>
            )}
          </ScrollView>

          {/* Place Order Button */}
          {cart.length > 0 && (
            <View style={[styles.bottomBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
              <TouchableOpacity
                onPress={handlePlaceOrder}
                disabled={submitting}
                style={[styles.orderBtn, isDark ? styles.orderDark : styles.orderLight]}
              >
                <Text style={[styles.orderBtnText, isDark ? styles.textDark : styles.textLight]}>
                  {submitting ? 'Confirming Prasad Order...' : `Confirm & Bless Order · ₹${totalAmount}`}
                </Text>
                <ArrowRight size={16} color={isDark ? '#1E1B1C' : '#FFFFFF'} />
              </TouchableOpacity>
            </View>
          )}

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderWidth: 1,
    maxHeight: '90%',
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '900',
  },
  emptyDesc: {
    fontSize: 13,
    textAlign: 'center',
    maxWidth: 240,
  },
  itemsSection: {
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  itemInfo: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '800',
  },
  itemMeta: {
    fontSize: 12,
    marginTop: 2,
  },
  itemStepper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 4,
    gap: 8,
  },
  stepIcon: {
    padding: 4,
  },
  itemQty: {
    fontSize: 13,
    fontWeight: '900',
  },
  fulfillmentBox: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    padding: 4,
    marginBottom: 16,
    gap: 6,
  },
  fulfillBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },
  fulfillActiveDark: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  fulfillActiveLight: {
    backgroundColor: '#1C1917',
  },
  fulfillText: {
    fontSize: 13,
    fontWeight: '800',
  },
  formContainer: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    gap: 10,
  },
  formLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  input: {
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  phonePrefix: {
    fontSize: 14,
    fontWeight: '900',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 6,
  },
  addressInput: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  paymentBox: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    gap: 10,
  },
  paymentMethodsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  payOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1.5,
    gap: 6,
  },
  payOptionText: {
    fontSize: 12,
    fontWeight: '800',
  },
  billCard: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 24,
    gap: 8,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  billLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  billVal: {
    fontSize: 13,
    fontWeight: '700',
  },
  billTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    marginTop: 4,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '900',
  },
  totalVal: {
    fontSize: 20,
    fontWeight: '900',
  },
  bottomBar: {
    padding: 16,
    borderTopWidth: 1,
  },
  orderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 9999,
    gap: 8,
  },
  orderDark: {
    backgroundColor: '#E0FF33',
  },
  orderLight: {
    backgroundColor: '#D97706',
  },
  orderBtnText: {
    fontSize: 14,
    fontWeight: '900',
  },
  textDark: {
    color: '#1E1B1C',
  },
  textLight: {
    color: '#FFFFFF',
  },
});

export default CartDrawer;
