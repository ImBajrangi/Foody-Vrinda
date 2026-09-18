import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, Sparkles, Info } from 'lucide-react-native';

export function DynamicIslandToast() {
  const { toast } = useCart();
  const { isDark } = useTheme();

  if (!toast) return null;

  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={[styles.pill, isDark ? styles.pillDark : styles.pillLight]}>
        <View style={styles.iconWrapper}>
          {toast.type === 'info' ? (
            <Info size={14} color="#06B6D4" />
          ) : (
            <Sparkles size={14} color={isDark ? '#E0FF33' : '#D97706'} />
          )}
        </View>
        <Text numberOfLines={1} style={[styles.message, isDark ? styles.textDark : styles.textLight]}>
          {toast.message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 54,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 999999,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 9999,
    maxWidth: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  pillDark: {
    backgroundColor: '#1E1B1C',
    borderWidth: 1,
    borderColor: 'rgba(224, 255, 51, 0.3)',
  },
  pillLight: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(217, 119, 6, 0.25)',
  },
  iconWrapper: {
    marginRight: 8,
  },
  message: {
    fontSize: 13,
    fontWeight: '800',
  },
  textDark: {
    color: '#FFFFFF',
  },
  textLight: {
    color: '#1C1917',
  },
});

export default DynamicIslandToast;
