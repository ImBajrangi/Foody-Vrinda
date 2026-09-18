import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Flame, Sparkles } from 'lucide-react-native';

export function DishCard({ item, dish, index = 0, onSelectDish, onPress }) {
  const { isDark, colors } = useTheme();
  const { cart, addToCart, updateQuantity } = useCart();

  const currentItem = item || dish;
  if (!currentItem) return null;

  // Alternating card colors from design system standard
  const isEven = index % 2 === 0;
  const organicBgLight = isEven ? '#CEF3E7' : '#FFF2E6';

  // Check if item is in cart
  const cartItem = cart?.find((c) => c.id === currentItem.id);
  const inCartQty = cartItem?.quantity || 0;

  const handleSelect = () => {
    if (onSelectDish) onSelectDish(currentItem);
    else if (onPress) onPress(currentItem);
  };

  const handleAdd = (e) => {
    e?.stopPropagation?.();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    addToCart(currentItem, currentItem.spicyLevel || 'Mild');
  };

  const handleIncrement = (e) => {
    e?.stopPropagation?.();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    updateQuantity(currentItem.id, cartItem?.spicyLevel || 'Mild', inCartQty + 1);
  };

  const handleDecrement = (e) => {
    e?.stopPropagation?.();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    updateQuantity(currentItem.id, cartItem?.spicyLevel || 'Mild', inCartQty - 1);
  };

  const imageUri = currentItem.imageUrl || currentItem.image_url || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80';

  return (
    <TouchableOpacity
      activeOpacity={0.92}
      onPress={handleSelect}
      style={[
        styles.card,
        isDark 
          ? { backgroundColor: colors.surface, borderColor: colors.border } 
          : { backgroundColor: organicBgLight, borderColor: 'rgba(0,0,0,0.03)' }
      ]}
    >
      {/* Top Details & Badges */}
      <View style={styles.topContent}>
        <View style={styles.badgeRow}>
          {!!currentItem.tag && (
            <View style={[styles.tagBadge, isDark ? styles.tagDark : styles.tagLight]}>
              <Sparkles size={10} color={isDark ? '#E0FF33' : '#D97706'} />
              <Text style={[styles.tagText, isDark ? styles.tagTextDark : styles.tagTextLight]}>
                {currentItem.tag}
              </Text>
            </View>
          )}

          {!!currentItem.kcal && (
            <View style={[styles.kcalBadge, isDark ? styles.kcalDark : styles.kcalLight]}>
              <Flame size={10} color={isDark ? '#F59E0B' : '#D97706'} />
              <Text style={[styles.kcalText, isDark ? { color: '#F59E0B' } : { color: '#B45309' }]}>
                {currentItem.kcal}
              </Text>
            </View>
          )}
        </View>

        <Text style={[styles.dishTitle, isDark ? { color: '#FFFFFF' } : { color: '#1C1917' }]} numberOfLines={2}>
          {currentItem.name || 'Sacred Offering'}
        </Text>
        <Text style={[styles.dishSubtitle, isDark ? { color: '#A1A1AA' } : { color: '#57534E' }]} numberOfLines={1}>
          {currentItem.subtitle || currentItem.category || 'Satvik delicacy'}
        </Text>
      </View>

      {/* Center Image Cutout */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={styles.dishImage}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Price + Add / Stepper Row */}
      <View style={styles.bottomRow}>
        <View>
          <Text style={[styles.priceLabel, isDark ? { color: '#A1A1AA' } : { color: '#78716C' }]}>
            Price
          </Text>
          <Text style={[styles.priceValue, isDark ? { color: '#E0FF33' } : { color: '#1C1917' }]}>
            ₹{currentItem.price || 0}
          </Text>
        </View>

        {inCartQty > 0 ? (
          <View style={[styles.stepperContainer, isDark ? styles.stepperDark : styles.stepperLight]}>
            <TouchableOpacity onPress={handleDecrement} style={styles.stepperBtn}>
              <Minus size={13} color={isDark ? '#121011' : '#FFFFFF'} />
            </TouchableOpacity>
            <Text style={[styles.stepperNum, isDark ? { color: '#121011' } : { color: '#FFFFFF' }]}>
              {inCartQty}
            </Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.stepperBtn}>
              <Plus size={13} color={isDark ? '#121011' : '#FFFFFF'} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleAdd}
            style={[styles.addButton, isDark ? styles.addDark : styles.addLight]}
          >
            <Text style={[styles.addText, isDark ? styles.addTextDark : styles.addTextLight]}>
              Order Now
            </Text>
            <Plus size={14} color={isDark ? '#1E1B1C' : '#FFFFFF'} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  topContent: {
    marginBottom: 6,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  tagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 9999,
    gap: 4,
  },
  tagDark: {
    backgroundColor: 'rgba(224, 255, 51, 0.15)',
  },
  tagLight: {
    backgroundColor: 'rgba(217, 119, 6, 0.12)',
  },
  tagText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  tagTextDark: {
    color: '#E0FF33',
  },
  tagTextLight: {
    color: '#D97706',
  },
  kcalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 9999,
    gap: 3,
  },
  kcalDark: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
  },
  kcalLight: {
    backgroundColor: 'rgba(217, 119, 6, 0.1)',
  },
  kcalText: {
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  dishTitle: {
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 22,
    letterSpacing: -0.3,
  },
  dishSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  dishImage: {
    width: '100%',
    height: '100%',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  priceLabel: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  priceValue: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 9999,
    gap: 6,
  },
  addDark: {
    backgroundColor: '#E0FF33',
  },
  addLight: {
    backgroundColor: '#1C1917',
  },
  addText: {
    fontSize: 12,
    fontWeight: '900',
  },
  addTextDark: {
    color: '#1E1B1C',
  },
  addTextLight: {
    color: '#FFFFFF',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 9999,
    gap: 8,
  },
  stepperDark: {
    backgroundColor: '#E0FF33',
  },
  stepperLight: {
    backgroundColor: '#1C1917',
  },
  stepperBtn: {
    padding: 4,
  },
  stepperNum: {
    fontSize: 13,
    fontWeight: '900',
    minWidth: 16,
    textAlign: 'center',
  },
});

export default DishCard;
