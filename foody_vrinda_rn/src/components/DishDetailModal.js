import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Flame, Sparkles, ShieldCheck } from 'lucide-react-native';

export function DishDetailModal({ visible, dish, onClose }) {
  const { isDark, colors } = useTheme();
  const { addToCart } = useCart();
  const [selectedSpice, setSelectedSpice] = useState('Mild');
  const [quantity, setQuantity] = useState(1);

  if (!dish) return null;

  const handleAdd = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    for (let i = 0; i < quantity; i++) {
      addToCart(dish, selectedSpice);
    }
    onClose();
  };

  const imageUri = dish.imageUrl || dish.image_url || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80';

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.sheetContainer, { backgroundColor: colors.canvas, borderColor: colors.border }]}>
          
          {/* Top Showcase Container (Warm Ivory Cream) */}
          <View style={styles.topShowcase}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={18} color="#1C1917" />
            </TouchableOpacity>

            <Image source={{ uri: imageUri }} style={styles.heroImage} resizeMode="contain" />

            <View style={styles.satvikPill}>
              <ShieldCheck size={12} color="#10B981" />
              <Text style={styles.satvikText}>100% Satvik · Pure Desi Ghee</Text>
            </View>
          </View>

          <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
            {/* Title & Price Header */}
            <View style={styles.headerInfo}>
              <Text style={[styles.title, { color: colors.textPrimary }]}>{dish.name}</Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{dish.subtitle}</Text>
              <Text style={[styles.price, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>
                ₹{dish.price}
              </Text>
            </View>

            {/* Description */}
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              {dish.description}
            </Text>

            {/* Spiciness Level Selector */}
            <View style={styles.sectionWrapper}>
              <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
                SPICINESS LEVEL
              </Text>
              <View style={[styles.spiceRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                {[
                  { id: 'Mild', label: 'Mild', color: '#10B981' },
                  { id: 'Medium', label: 'Medium', color: '#F59E0B' },
                  { id: 'Spicy', label: 'Spicy', color: '#F43F5E' },
                ].map(spice => {
                  const isSelected = selectedSpice === spice.id;
                  return (
                    <TouchableOpacity
                      key={spice.id}
                      onPress={() => setSelectedSpice(spice.id)}
                      style={[
                        styles.spiceButton,
                        isSelected && (isDark ? styles.spiceSelectedDark : styles.spiceSelectedLight)
                      ]}
                    >
                      <View style={[styles.spiceDot, { backgroundColor: spice.color }]} />
                      <Text style={[
                        styles.spiceLabel,
                        { color: isSelected ? (isDark ? '#E0FF33' : '#1C1917') : colors.textSecondary },
                        isSelected && { fontWeight: '900' }
                      ]}>
                        {spice.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Nutrition Information */}
            {dish.nutrition && (
              <View style={[styles.nutritionBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <Sparkles size={14} color={isDark ? '#E0FF33' : '#D97706'} />
                <Text style={[styles.nutritionText, { color: colors.textPrimary }]}>
                  {dish.nutrition}
                </Text>
              </View>
            )}
          </ScrollView>

          {/* Bottom Action Bar */}
          <View style={[styles.actionBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
            <View style={[styles.stepper, { backgroundColor: colors.recessed, borderColor: colors.border }]}>
              <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))} style={styles.stepBtn}>
                <Minus size={14} color={colors.textPrimary} />
              </TouchableOpacity>
              <Text style={[styles.qtyText, { color: colors.textPrimary }]}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.stepBtn}>
                <Plus size={14} color={colors.textPrimary} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleAdd} style={[styles.checkoutBtn, isDark ? styles.btnDark : styles.btnLight]}>
              <Text style={[styles.checkoutText, isDark ? styles.textDark : styles.textLight]}>
                Add to Basket · ₹{dish.price * quantity}
              </Text>
            </TouchableOpacity>
          </View>

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
    maxHeight: '88%',
    overflow: 'hidden',
  },
  topShowcase: {
    backgroundColor: '#FAF5EB',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDE6DC',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  heroImage: {
    width: '100%',
    height: 160,
  },
  satvikPill: {
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 9999,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  satvikText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#065F46',
  },
  contentScroll: {
    padding: 20,
  },
  headerInfo: {
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '900',
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 18,
  },
  sectionWrapper: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  spiceRow: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    padding: 4,
    gap: 4,
  },
  spiceButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },
  spiceSelectedDark: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  spiceSelectedLight: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  spiceDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  spiceLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
  nutritionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
    marginBottom: 20,
  },
  nutritionText: {
    fontSize: 12,
    fontWeight: '700',
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    gap: 12,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 12,
  },
  stepBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: {
    fontSize: 14,
    fontWeight: '900',
  },
  checkoutBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDark: {
    backgroundColor: '#E0FF33',
  },
  btnLight: {
    backgroundColor: '#1C1917',
  },
  checkoutText: {
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

export default DishDetailModal;
