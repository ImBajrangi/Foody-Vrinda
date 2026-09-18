import React, { createContext, useContext, useState, useEffect } from 'react';
import { CacheService } from '../services/cacheService';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null); // { message, type: 'success'|'info'|'warning', count }
  const [activeOrder, setActiveOrder] = useState(null);
  const [fulfillmentType, setFulfillmentType] = useState('delivery'); // 'delivery' | 'pickup'

  useEffect(() => {
    const cachedCart = CacheService.get(CacheService.KEYS.CART);
    if (cachedCart && Array.isArray(cachedCart)) {
      setCart(cachedCart);
    }
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    CacheService.set(CacheService.KEYS.CART, newCart);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(prev => (prev?.message === message ? null : prev));
    }, 2800);
  };

  const addToCart = (item, spicyLevel = 'Mild') => {
    const existingIndex = cart.findIndex(i => i.id === item.id && (i.spicyLevel || 'Mild') === spicyLevel);
    let updatedCart;
    if (existingIndex > -1) {
      updatedCart = cart.map((ci, idx) => {
        if (idx === existingIndex) {
          return { ...ci, quantity: (ci.quantity || 1) + 1 };
        }
        return ci;
      });
    } else {
      updatedCart = [...cart, { ...item, quantity: 1, spicyLevel }];
    }
    saveCart(updatedCart);
    showToast(`+1 ${item.name} · ₹${item.price}`);
  };

  const updateQuantity = (itemId, spicyLevel, newQty) => {
    if (newQty <= 0) {
      removeFromCart(itemId, spicyLevel);
      return;
    }
    const updated = cart.map(i => {
      if (i.id === itemId && (i.spicyLevel || 'Mild') === spicyLevel) {
        return { ...i, quantity: newQty };
      }
      return i;
    });
    saveCart(updated);
  };

  const removeFromCart = (itemId, spicyLevel) => {
    const updated = cart.filter(i => !(i.id === itemId && (i.spicyLevel || 'Mild') === spicyLevel));
    saveCart(updated);
    showToast('Item removed from basket', 'info');
  };

  const clearCart = () => {
    saveCart([]);
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const gstAmount = Math.round(subtotal * 0.05);
  const deliveryCharge = fulfillmentType === 'pickup' || subtotal === 0 ? 0 : 20;
  const totalAmount = subtotal + gstAmount + deliveryCharge;

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalItemsCount,
      cartCount: totalItemsCount,
      count: totalItemsCount,
      subtotal,
      gstAmount,
      deliveryCharge,
      totalAmount,
      cartTotal: totalAmount,
      total: totalAmount,
      fulfillmentType,
      setFulfillmentType,
      toast,
      showToast,
      activeOrder,
      setActiveOrder
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext) || {
  cart: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItemsCount: 0,
  cartCount: 0,
  subtotal: 0,
  gstAmount: 0,
  deliveryCharge: 0,
  totalAmount: 0,
  cartTotal: 0,
  toast: null,
  showToast: () => {}
};
export default CartContext;
