import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEYS = {
  CART: '@foody_vrinda_cart',
  USER: '@foody_vrinda_user',
  THEME: '@foody_vrinda_theme',
  SHOPS: '@foody_vrinda_shops',
  ACTIVE_SHOP: '@foody_vrinda_active_shop',
  ORDERS: '@foody_vrinda_orders',
  CUSTOM_ADDRESS: '@foody_vrinda_address',
  CUSTOM_NAME: '@foody_vrinda_name',
  CUSTOM_PHONE: '@foody_vrinda_phone',
};

export const CacheService = {
  // Sync SWR Memory Cache
  _memoryStore: new Map(),

  async init() {
    try {
      const keys = Object.values(CACHE_KEYS);
      const stores = await AsyncStorage.multiGet(keys);
      stores.forEach(([k, v]) => {
        if (v !== null) {
          try {
            this._memoryStore.set(k, JSON.parse(v));
          } catch (_) {
            this._memoryStore.set(k, v);
          }
        }
      });
    } catch (e) {
      console.warn('CacheService init error:', e);
    }
  },

  get(key, fallback = null) {
    if (this._memoryStore.has(key)) {
      return this._memoryStore.get(key);
    }
    return fallback;
  },

  async set(key, value) {
    this._memoryStore.set(key, value);
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('CacheService set error:', e);
    }
  },

  async remove(key) {
    this._memoryStore.delete(key);
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.warn('CacheService remove error:', e);
    }
  },

  async clear() {
    this._memoryStore.clear();
    try {
      const keys = Object.values(CACHE_KEYS);
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.warn('CacheService clear error:', e);
    }
  },

  KEYS: CACHE_KEYS
};
