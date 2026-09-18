import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SEED_SHOPS, DEFAULT_PRASAD_ITEMS, SEED_MENU_ITEMS, SEED_ORDERS } from '../constants/seedData';
import { CacheService } from './cacheService';

const SUPABASE_URL = 'https://mrsxliwyqodtwjuyqmts.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yc3hsaXd5cW9kdHdqdXlxbXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4NzQxMjcsImV4cCI6MjEwNDQ1MDEyN30.UZteyeZ3LtuVpMJoUqZogPKffmSlHN3Hn9fLtis7lBg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Fetch menu items with SWR cache
export async function fetchMenuItems() {
  try {
    const { data, error } = await supabase
      .from('menus')
      .select('*')
      .order('id', { ascending: true });
    if (!error && data && data.length > 0) {
      CacheService.set('@foody_vrinda_menu', data);
      return { data, error: null };
    }
  } catch (err) {
    console.warn('fetchMenuItems error, using fallback:', err.message);
  }
  const cached = CacheService.get('@foody_vrinda_menu', SEED_MENU_ITEMS);
  return { data: cached || SEED_MENU_ITEMS, error: null };
}

// Fetch orders with SWR cache
export async function fetchOrders() {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data && data.length > 0) {
      CacheService.set(CacheService.KEYS.ORDERS, data);
      return { data, error: null };
    }
  } catch (err) {
    console.warn('fetchOrders error, using fallback:', err.message);
  }
  const cached = CacheService.get(CacheService.KEYS.ORDERS, SEED_ORDERS);
  return { data: cached || SEED_ORDERS, error: null };
}

// Subscribe to realtime orders
export function subscribeToOrders(callback) {
  try {
    const channel = supabase
      .channel('public:orders_realtime_rn')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, (payload) => {
        if (payload.new) {
          callback(payload.new);
        } else if (payload.old) {
          callback(payload.old);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  } catch (err) {
    console.warn('subscribeToOrders error:', err.message);
    return () => {};
  }
}

// Update order status (Kitchen / Sarathi)
export async function updateOrderStatus(orderId, newStatus) {
  try {
    const { error } = await supabase
      .from('orders')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', orderId);

    // Update local cache optimistically
    const prevOrders = CacheService.get(CacheService.KEYS.ORDERS, SEED_ORDERS) || [];
    const updatedOrders = prevOrders.map((o) =>
      o.id === orderId ? { ...o, status: newStatus } : o
    );
    CacheService.set(CacheService.KEYS.ORDERS, updatedOrders);

    return { error };
  } catch (err) {
    // Offline local fallback update
    const prevOrders = CacheService.get(CacheService.KEYS.ORDERS, SEED_ORDERS) || [];
    const updatedOrders = prevOrders.map((o) =>
      o.id === orderId ? { ...o, status: newStatus } : o
    );
    CacheService.set(CacheService.KEYS.ORDERS, updatedOrders);
    return { error: null };
  }
}

// Toggle item stock / availability (Owner)
export async function toggleItemAvailability(itemId, isAvailable) {
  try {
    const { error } = await supabase
      .from('menus')
      .update({ isAvailable, is_available: isAvailable })
      .eq('id', itemId);

    const prevMenu = CacheService.get('@foody_vrinda_menu', SEED_MENU_ITEMS) || [];
    const updatedMenu = prevMenu.map((m) =>
      m.id === itemId ? { ...m, isAvailable, is_available: isAvailable } : m
    );
    CacheService.set('@foody_vrinda_menu', updatedMenu);

    return { error };
  } catch (err) {
    const prevMenu = CacheService.get('@foody_vrinda_menu', SEED_MENU_ITEMS) || [];
    const updatedMenu = prevMenu.map((m) =>
      m.id === itemId ? { ...m, isAvailable, is_available: isAvailable } : m
    );
    CacheService.set('@foody_vrinda_menu', updatedMenu);
    return { error: null };
  }
}

// Reset master dev account & seed data
export async function resetMasterDevAccount() {
  try {
    CacheService.set(CacheService.KEYS.ORDERS, SEED_ORDERS);
    CacheService.set('@foody_vrinda_menu', SEED_MENU_ITEMS);
    CacheService.set(CacheService.KEYS.SHOPS, SEED_SHOPS);
    return { error: null };
  } catch (err) {
    return { error: err };
  }
}

// Realtime & Database Services (Backwards Compatibility)
export const DataService = {
  async fetchShops() {
    try {
      const { data, error } = await supabase.from('shops').select('*');
      if (!error && data && data.length > 0) {
        CacheService.set(CacheService.KEYS.SHOPS, data);
        return data;
      }
    } catch (_) {}
    return CacheService.get(CacheService.KEYS.SHOPS, SEED_SHOPS);
  },

  async fetchMenu(shopId) {
    try {
      let query = supabase.from('menus').select('*').eq('isAvailable', true);
      if (shopId) {
        query = query.eq('shopId', shopId);
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (_) {}
    return DEFAULT_PRASAD_ITEMS;
  },

  async placeOrder(orderPayload) {
    try {
      const { data, error } = await supabase.from('orders').insert([orderPayload]).select().single();
      if (!error && data) {
        return { success: true, order: data };
      }
    } catch (_) {}
    // Offline local fallback order
    const localOrder = {
      ...orderPayload,
      id: `ord-${Date.now()}`,
      created_at: new Date().toISOString(),
      status: 'pending'
    };
    const prevOrders = CacheService.get(CacheService.KEYS.ORDERS, []);
    CacheService.set(CacheService.KEYS.ORDERS, [localOrder, ...prevOrders]);
    return { success: true, order: localOrder };
  },

  subscribeToLiveOrders(onOrderUpdate) {
    const channel = supabase
      .channel('public:orders_realtime_rn')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, (payload) => {
        onOrderUpdate?.(payload);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }
};
