import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { CacheService } from '../services/cacheService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    displayName: 'Devotee Guest',
    phone: '',
    address: '',
    role: 'customer'
  });
  const [userRole, setUserRole] = useState('customer'); // customer, kitchen, delivery, owner, developer
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Hydrate cached user
    const cachedUser = CacheService.get(CacheService.KEYS.USER);
    if (cachedUser) {
      setUser(cachedUser);
      setUserData(cachedUser.userData || {});
      setUserRole(cachedUser.role || 'customer');
    }

    // Check supabase auth
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        setUserRole(session.user.user_metadata?.role || 'customer');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const loginWithPhone = async (phone) => {
    setLoading(true);
    try {
      // Mock master dev account or regular devotee
      const isMasterDev = phone === '9876543210' || phone === '108108';
      const role = isMasterDev ? 'developer' : 'customer';
      const newUser = {
        id: `usr-${phone}`,
        phone,
        role,
        userData: {
          displayName: isMasterDev ? 'Master Developer (Emergency Override)' : 'Satvik Devotee',
          phone,
          address: 'Near ISKCON Temple, Raman Reti, Vrindavan',
          role
        }
      };
      setUser(newUser);
      setUserData(newUser.userData);
      setUserRole(role);
      await CacheService.set(CacheService.KEYS.USER, newUser);
      return { success: true };
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates) => {
    const nextUserData = { ...userData, ...updates };
    setUserData(nextUserData);
    if (user) {
      const updatedUser = { ...user, userData: nextUserData };
      setUser(updatedUser);
      await CacheService.set(CacheService.KEYS.USER, updatedUser);
    }
  };

  const switchRole = (newRole) => {
    setUserRole(newRole);
    if (user) {
      const updatedUser = { ...user, role: newRole };
      setUser(updatedUser);
      CacheService.set(CacheService.KEYS.USER, updatedUser);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    await CacheService.remove(CacheService.KEYS.USER);
    setUser(null);
    setUserRole('customer');
    setUserData({
      displayName: 'Devotee Guest',
      phone: '',
      address: '',
      role: 'customer'
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      userData,
      profile: userData,
      userRole,
      role: userRole,
      loading,
      login: loginWithPhone,
      loginWithPhone,
      updateProfile,
      switchRole,
      updateRole: switchRole,
      logout,
      isDeveloper: userRole === 'developer',
      isKitchen: userRole === 'kitchen',
      isRider: userRole === 'delivery' || userRole === 'rider',
      isOwner: userRole === 'owner',
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
