import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { MapPin, Sun, Moon, ShoppingBag, Bell, Search, Sparkles, ChevronDown } from 'lucide-react-native';

export function Header({
  onOpenAuth,
  onOpenCart,
  onOpenSearch,
  onOpenNotifications,
  activeShop,
  onOpenShopSelector,
  activeRole = 'customer',
  onRoleChange,
  onOpenActiveOrder,
  hasActiveOrder = false,
}) {
  const { isDark, toggleTheme, colors } = useTheme();
  const { user, userRole, userData, isDeveloper, isKitchen, isRider, isOwner } = useAuth();
  const { totalItemsCount } = useCart();
  const [avatarError, setAvatarError] = useState(false);

  const isElevated = isDeveloper || isKitchen || isRider || isOwner;

  const roles = [
    { id: 'customer', label: 'Store' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'transport', label: 'Rider' },
    { id: 'owner', label: 'Owner Desk' },
    ...(isDeveloper ? [{ id: 'developer', label: 'Dev Console' }] : []),
  ];

  const displayName = userData?.displayName?.split(' ')[0] || user?.user_metadata?.full_name?.split(' ')[0] || 'Devotee';
  const rawAvatar = user?.photoURL || userData?.photoURL || userData?.avatar_url || user?.user_metadata?.avatar_url;
  const avatarUri = (!avatarError && rawAvatar && typeof rawAvatar === 'string' && rawAvatar.length > 5)
    ? rawAvatar
    : 'https://mrsxliwyqodtwjuyqmts.supabase.co/storage/v1/object/public/assets/foody-vrinda-logo.webp';

  return (
    <View style={styles.wrapper}>
      {/* Top Identity Row */}
      <View style={styles.topRow}>
        <View style={styles.brandContainer}>
          <TouchableOpacity onPress={onOpenAuth} activeOpacity={0.85} style={styles.avatarButton}>
            <View style={[styles.avatarRing, isDark ? styles.ringDark : styles.ringLight]}>
              <Image 
                source={{ uri: avatarUri }}
                style={styles.avatarImage}
                onError={() => setAvatarError(true)}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.greetingContainer}>
            <View style={styles.brandBadgeRow}>
              <Text style={[styles.brandTitle, isDark ? styles.brandDark : styles.brandLight]}>
                वृन्दोपनिषद्
              </Text>
              <Text style={[styles.brandSubscript, { color: colors.textTertiary }]}>
                (vrindopnishad)
              </Text>
            </View>
            <Text style={[styles.greetingText, { color: colors.textPrimary }]} numberOfLines={1}>
              Hi, {displayName}
            </Text>
            <Text style={[styles.welcomeSub, { color: colors.textSecondary }]}>
              Welcome to Foody Vrinda
            </Text>
          </View>
        </View>

        {/* Action Controls: Active Order + Search + Theme + Cart */}
        <View style={styles.actionGroup}>
          {hasActiveOrder && (
            <TouchableOpacity
              onPress={onOpenActiveOrder}
              activeOpacity={0.8}
              style={[styles.liveOrderPill, { backgroundColor: isDark ? '#231F20' : '#FAF5EB', borderColor: '#10B981' }]}
            >
              <View style={styles.liveDot} />
              <Text style={styles.liveOrderText}>Live Order</Text>
            </TouchableOpacity>
          )}

          {onOpenSearch && (
            <TouchableOpacity
              onPress={onOpenSearch}
              style={[styles.iconButton, { backgroundColor: colors.surface, borderColor: colors.border }]}
            >
              <Search size={17} color={colors.textSecondary} />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={toggleTheme}
            style={[styles.iconButton, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            {isDark ? (
              <Sun size={17} color="#E0FF33" />
            ) : (
              <Moon size={17} color="#D97706" />
            )}
          </TouchableOpacity>

          {onOpenCart && (
            <TouchableOpacity
              onPress={onOpenCart}
              style={[styles.cartButton, isDark ? styles.cartDark : styles.cartLight]}
            >
              <ShoppingBag size={18} color={isDark ? '#1E1B1C' : '#FFFFFF'} />
              {totalItemsCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{totalItemsCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Role Navigation Strip (Operational Pill Strip) */}
      {onRoleChange && isElevated && (
        <View style={styles.roleStrip}>
          {roles.map((r) => {
            const isSelected = activeRole === r.id;
            return (
              <TouchableOpacity
                key={r.id}
                onPress={() => onRoleChange(r.id)}
                style={[
                  styles.roleTab,
                  isSelected
                    ? { backgroundColor: isDark ? '#E0FF33' : '#1C1917', borderColor: isDark ? '#E0FF33' : '#1C1917' }
                    : { backgroundColor: colors.surface, borderColor: colors.border }
                ]}
              >
                <Text
                  style={[
                    styles.roleTabText,
                    isSelected
                      ? { color: isDark ? '#121011' : '#FFFFFF', fontWeight: '900' }
                      : { color: colors.textSecondary }
                  ]}
                >
                  {r.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* Store Location Bar */}
      <TouchableOpacity
        activeOpacity={onOpenShopSelector ? 0.8 : 1}
        onPress={onOpenShopSelector}
        style={[styles.locationBar, { backgroundColor: colors.surface, borderColor: colors.border }]}
      >
        <MapPin size={14} color={isDark ? '#E0FF33' : '#D97706'} />
        <Text style={[styles.locationText, { color: colors.textPrimary }]} numberOfLines={1}>
          {activeShop?.name || 'Vrinda Cloud Kitchen (Main)'} · Raman Reti
        </Text>
        <View style={styles.openPill}>
          <View style={styles.openDot} />
          <Text style={styles.openText}>Open Now</Text>
        </View>
        {onOpenShopSelector && <ChevronDown size={14} color={colors.textSecondary} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarButton: {
    marginRight: 10,
  },
  avatarRing: {
    width: 44,
    height: 44,
    borderRadius: 22,
    padding: 2,
    borderWidth: 1.5,
  },
  ringDark: {
    borderColor: '#E0FF33',
  },
  ringLight: {
    borderColor: '#D97706',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  greetingContainer: {
    marginLeft: 2,
  },
  brandBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 1,
  },
  brandTitle: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  brandSubscript: {
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  brandDark: {
    color: '#E0FF33',
  },
  brandLight: {
    color: '#D97706',
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.3,
  },
  welcomeSub: {
    fontSize: 11,
    fontWeight: '600',
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cartDark: {
    backgroundColor: '#E0FF33',
  },
  cartLight: {
    backgroundColor: '#D97706',
  },
  cartBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    gap: 6,
  },
  locationText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
  },
  openPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 9999,
    gap: 4,
  },
  openDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
  openText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#10B981',
  },
  liveOrderPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999,
    borderWidth: 1,
    gap: 6,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  liveOrderText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#10B981',
  },
  roleStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  roleTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999,
    borderWidth: 1,
  },
  roleTabText: {
    fontSize: 11,
    fontWeight: '700',
  },
});

export default Header;
