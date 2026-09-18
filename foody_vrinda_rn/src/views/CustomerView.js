import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { Search, Sparkles, ShoppingBag, Flame, Filter, ChevronRight, MapPin } from 'lucide-react-native';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import DishCard from '../components/DishCard';

const CATEGORIES = [
  { id: 'all', label: 'All Satvik', icon: '✨' },
  { id: 'thalis', label: 'Mahaprasad & Thalis', icon: '🍱' },
  { id: 'bites', label: 'Snacks & Quick Bites', icon: '🥟' },
  { id: 'sweets', label: 'Desi Ghee Sweets', icon: '🍮' },
  { id: 'beverages', label: 'Sacred Beverages', icon: '🥛' },
  { id: 'chaat', label: 'Braj Chaat', icon: '🥙' },
];

export default function CustomerView({ menuItems = [], onSelectDish, onOpenCart }) {
  const { theme, isDark } = useTheme();
  const { cartCount, cartTotal } = useCart();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const numColumns = width >= 768 ? 3 : (width >= 480 ? 2 : 1);
  const cardWidth = numColumns > 1 
    ? (Math.min(width, 1080) - 32 - (numColumns - 1) * 14) / numColumns 
    : '100%';

  const filteredDishes = useMemo(() => {
    return menuItems.filter((dish) => {
      const matchesSearch =
        dish.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.category?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'all' ||
        (selectedCategory === 'thalis' && (dish.category === 'Thalis' || dish.name?.toLowerCase().includes('thali') || dish.name?.toLowerCase().includes('mahabhog') || dish.name?.toLowerCase().includes('meals'))) ||
        (selectedCategory === 'bites' && (dish.category === 'Snacks' || dish.category === 'Quick Bites' || dish.name?.toLowerCase().includes('samosa') || dish.name?.toLowerCase().includes('burger') || dish.name?.toLowerCase().includes('pizza'))) ||
        (selectedCategory === 'sweets' && (dish.category === 'Sweets' || dish.name?.toLowerCase().includes('kheer') || dish.name?.toLowerCase().includes('rabdi') || dish.name?.toLowerCase().includes('ladoo') || dish.name?.toLowerCase().includes('jamun'))) ||
        (selectedCategory === 'beverages' && (dish.category === 'Drinks' || dish.category === 'Beverages' || dish.name?.toLowerCase().includes('lassi') || dish.name?.toLowerCase().includes('chai') || dish.name?.toLowerCase().includes('thandai'))) ||
        (selectedCategory === 'chaat' && (dish.category === 'Chaat' || dish.name?.toLowerCase().includes('chaat') || dish.name?.toLowerCase().includes('puri')));

      return matchesSearch && matchesCat;
    });
  }, [menuItems, searchQuery, selectedCategory]);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Search Header Strip */}
      <View style={styles.searchSection}>
        <View style={[styles.searchBar, { backgroundColor: theme.inputBg, borderColor: theme.border }]}>
          <Search size={18} color={theme.textMuted} />
          <TextInput
            placeholder="Search 100% Onion-Garlic Free Delicacies..."
            placeholderTextColor={theme.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={[styles.searchInput, { color: theme.text }]}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      {/* Main List */}
      <FlatList
        key={`grid-${numColumns}`}
        data={filteredDishes}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        numColumns={numColumns}
        columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: cartCount > 0 ? 120 : 40 },
        ]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Promo Banner */}
            <View style={[styles.banner, { backgroundColor: isDark ? '#262223' : '#FFF9E6', borderColor: isDark ? '#383335' : '#FFE899' }]}>
              <View style={styles.bannerLeft}>
                <View style={[styles.bannerBadge, { backgroundColor: theme.accent }]}>
                  <Text style={[styles.bannerBadgeText, { color: theme.accentText }]}>100% PURE SATVIK</Text>
                </View>
                <Text style={[styles.bannerTitle, { color: theme.text }]}>Direct from Holy Vrindavan</Text>
                <Text style={[styles.bannerSub, { color: theme.textMuted }]}>Prepared with sacred Desi Ghee & pure devotions</Text>
              </View>
              <View style={styles.bannerIcon}>
                <Text style={{ fontSize: 36 }}>🦚</Text>
              </View>
            </View>

            {/* Categories Strip */}
            <View style={styles.catHeader}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>Browse Categories</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScroll}
            >
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <TouchableOpacity
                    key={cat.id}
                    activeOpacity={0.8}
                    onPress={() => setSelectedCategory(cat.id)}
                    style={[
                      styles.categoryChip,
                      {
                        backgroundColor: isSelected ? theme.accent : theme.card,
                        borderColor: isSelected ? theme.accent : theme.border,
                      },
                    ]}
                  >
                    <Text style={styles.catEmoji}>{cat.icon}</Text>
                    <Text
                      style={[
                        styles.catLabel,
                        {
                          color: isSelected ? theme.accentText : theme.text,
                          fontWeight: isSelected ? '800' : '600',
                        },
                      ]}
                    >
                      {cat.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <View style={styles.dishesHeader}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>
                {selectedCategory === 'all' ? 'Featured Bhog Offerings' : CATEGORIES.find(c => c.id === selectedCategory)?.label}
              </Text>
              <Text style={[styles.dishCount, { color: theme.textMuted }]}>
                {filteredDishes.length} Items
              </Text>
            </View>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={[styles.cardItemWrapper, { width: cardWidth }]}>
            <DishCard
              item={item}
              dish={item}
              index={index}
              onSelectDish={() => onSelectDish && onSelectDish(item)}
              onPress={() => onSelectDish && onSelectDish(item)}
            />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ fontSize: 48, marginBottom: 12 }}>🌸</Text>
            <Text style={[styles.emptyTitle, { color: theme.text }]}>No dishes found</Text>
            <Text style={[styles.emptySub, { color: theme.textMuted }]}>
              Try adjusting your search or category filter.
            </Text>
          </View>
        }
      />

      {/* Floating Bottom Cart Bar */}
      {cartCount > 0 && (
        <View style={styles.floatingCartContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onOpenCart}
            style={[styles.floatingCartBar, { backgroundColor: theme.accent }]}
          >
            <View style={styles.cartBarLeft}>
              <View style={[styles.cartBadge, { backgroundColor: theme.accentText }]}>
                <Text style={[styles.cartBadgeNum, { color: theme.accent }]}>{cartCount}</Text>
              </View>
              <View>
                <Text style={[styles.cartBarTotal, { color: theme.accentText }]}>₹{cartTotal}</Text>
                <Text style={[styles.cartBarSub, { color: theme.accentText, opacity: 0.8 }]}>Plus delivery & taxes</Text>
              </View>
            </View>
            <View style={styles.cartBarRight}>
              <Text style={[styles.cartBarCta, { color: theme.accentText }]}>View Sacred Basket</Text>
              <ChevronRight size={18} color={theme.accentText} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 14,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 18,
    marginTop: 4,
  },
  bannerLeft: {
    flex: 1,
    marginRight: 12,
  },
  bannerBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 6,
  },
  bannerBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  bannerTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 2,
  },
  bannerSub: {
    fontSize: 12,
    fontWeight: '500',
  },
  bannerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  catHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  categoryScroll: {
    paddingBottom: 16,
    gap: 8,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  catEmoji: {
    fontSize: 15,
    marginRight: 6,
  },
  catLabel: {
    fontSize: 13,
  },
  dishesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 4,
  },
  dishCount: {
    fontSize: 13,
    fontWeight: '600',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardItemWrapper: {
    marginBottom: 0,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
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
  floatingCartContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    zIndex: 999,
  },
  floatingCartBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  cartBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 10,
  },
  cartBadgeNum: {
    fontSize: 13,
    fontWeight: '900',
  },
  cartBarTotal: {
    fontSize: 16,
    fontWeight: '900',
  },
  cartBarSub: {
    fontSize: 10,
    fontWeight: '600',
  },
  cartBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cartBarCta: {
    fontSize: 14,
    fontWeight: '800',
  },
});
