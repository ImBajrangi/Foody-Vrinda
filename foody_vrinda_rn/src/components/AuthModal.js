import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { X, Sun, Moon, Phone, MapPin, Sparkles, ShieldCheck, Terminal, LogOut, LogIn, ArrowRight, Store, ChefHat, Bike, ShieldAlert } from 'lucide-react-native';

export function AuthModal({ visible, onClose, onSelectWorkspace }) {
  const { isDark, isLight, setTheme, colors } = useTheme();
  const { user, userData, userRole, loginWithPhone, switchRole, logout, isDeveloper } = useAuth();

  const [phoneInput, setPhoneInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [showPinModal, setShowPinModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneSignIn = async () => {
    if (phoneInput.length < 10) return;
    setLoading(true);
    await loginWithPhone(phoneInput);
    setLoading(false);
    onClose();
  };

  const handlePinUnlock = () => {
    if (pinInput === '108108') {
      switchRole('developer');
      setShowPinModal(false);
      setPinInput('');
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
          
          {/* Top Header */}
          <View style={[styles.headerRow, { borderBottomColor: colors.border }]}>
            <View>
              <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>Account & Profile</Text>
              <Text style={[styles.headerSub, { color: colors.textSecondary }]}>
                {user ? (user.phone || userData.displayName) : 'Sign in to sync your prasad orders'}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={[styles.closeBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <X size={16} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {user ? (
              /* Authenticated User View */
              <>
                {/* Devotee Profile Card */}
                <View style={[styles.profileCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <View style={styles.cardTop}>
                    <View>
                      <Text style={[styles.profileName, { color: colors.textPrimary }]}>{userData?.displayName || 'Devotee'}</Text>
                      <Text style={[styles.profileRole, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>
                        {userRole.toUpperCase()}
                      </Text>
                    </View>
                    <View style={[styles.roleBadge, { backgroundColor: isDark ? 'rgba(224,255,51,0.15)' : 'rgba(217,119,6,0.12)' }]}>
                      <Text style={[styles.roleBadgeText, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>
                        {userRole}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.contactRow}>
                    <View style={[styles.contactPill, { backgroundColor: colors.recessed, borderColor: colors.border }]}>
                      <Phone size={13} color={isDark ? '#E0FF33' : '#D97706'} />
                      <Text style={[styles.contactText, { color: colors.textPrimary }]}>
                        {userData?.phone ? `+91 ${userData.phone}` : 'No phone linked'}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* App Theme Preference */}
                <View style={[styles.settingRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <View style={styles.settingLeft}>
                    {isDark ? <Moon size={16} color="#E0FF33" /> : <Sun size={16} color="#D97706" />}
                    <Text style={[styles.settingLabel, { color: colors.textPrimary }]}>App Theme</Text>
                  </View>
                  <View style={[styles.themeTogglePill, { backgroundColor: colors.recessed }]}>
                    <TouchableOpacity
                      onPress={() => setTheme('light')}
                      style={[styles.toggleOption, !isDark && styles.toggleActiveLight]}
                    >
                      <Text style={[styles.toggleText, !isDark && styles.toggleTextActiveLight]}>Divine Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setTheme('dark')}
                      style={[styles.toggleOption, isDark && styles.toggleActiveDark]}
                    >
                      <Text style={[styles.toggleText, isDark && styles.toggleTextActiveDark]}>Dark Obsidian</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Multi-Role Operational Switcher */}
                <View style={[styles.switcherCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <View style={styles.switcherHeader}>
                    <Terminal size={14} color={isDark ? '#E0FF33' : '#D97706'} />
                    <Text style={[styles.switcherTitle, { color: colors.textPrimary }]}>OPERATIONAL WORKSPACES</Text>
                  </View>

                  <View style={styles.gridWorkspaces}>
                    {[
                      { role: 'customer', label: 'Storefront', icon: Store },
                      { role: 'kitchen', label: 'Kitchen KDS', icon: ChefHat },
                      { role: 'delivery', label: 'Rider Sarathi', icon: Bike },
                      { role: 'owner', label: 'Store Owner', icon: ShieldCheck },
                      { role: 'developer', label: 'Dev Console', icon: ShieldAlert },
                    ].map(w => {
                      const Icon = w.icon;
                      const isCurrent = userRole === w.role;
                      return (
                        <TouchableOpacity
                          key={w.role}
                          onPress={() => {
                            switchRole(w.role);
                            onSelectWorkspace?.(w.role);
                            onClose();
                          }}
                          style={[
                            styles.workspaceBtn,
                            { backgroundColor: colors.recessed, borderColor: colors.border },
                            isCurrent && (isDark ? styles.wsActiveDark : styles.wsActiveLight)
                          ]}
                        >
                          <Icon size={14} color={isCurrent ? (isDark ? '#1E1B1C' : '#FFFFFF') : colors.textPrimary} />
                          <Text style={[
                            styles.wsText,
                            { color: isCurrent ? (isDark ? '#1E1B1C' : '#FFFFFF') : colors.textPrimary },
                            isCurrent && { fontWeight: '900' }
                          ]}>
                            {w.label}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity onPress={logout} style={[styles.logoutBtn, { borderColor: colors.border }]}>
                  <LogOut size={16} color="#EF4444" />
                  <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableOpacity>
              </>
            ) : (
              /* Quick Sign-In View */
              <View style={styles.loginContainer}>
                <Text style={[styles.loginTitle, { color: colors.textPrimary }]}>Quick Mobile Sign In</Text>
                <Text style={[styles.loginDesc, { color: colors.textSecondary }]}>
                  Instant access for customers, kitchen staff, and delivery riders.
                </Text>

                <View style={[styles.phoneInputBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <Text style={[styles.phonePrefix, isDark ? { color: '#E0FF33' } : { color: '#D97706' }]}>+91</Text>
                  <TextInput
                    value={phoneInput}
                    onChangeText={setPhoneInput}
                    placeholder="Enter 10-digit mobile number"
                    placeholderTextColor={colors.textTertiary}
                    keyboardType="phone-pad"
                    maxLength={10}
                    style={[styles.phoneTextInput, { color: colors.textPrimary }]}
                  />
                </View>

                <TouchableOpacity
                  onPress={handlePhoneSignIn}
                  disabled={loading || phoneInput.length < 10}
                  style={[styles.signInBtn, isDark ? styles.btnDark : styles.btnLight, phoneInput.length < 10 && { opacity: 0.5 }]}
                >
                  <Text style={[styles.signInBtnText, isDark ? styles.textDark : styles.textLight]}>
                    {loading ? 'Verifying...' : 'Sign In with Mobile'}
                  </Text>
                  <ArrowRight size={16} color={isDark ? '#1E1B1C' : '#FFFFFF'} />
                </TouchableOpacity>

                {/* God Mode Emergency Unlock */}
                <TouchableOpacity onPress={() => setShowPinModal(true)} style={styles.emergencyDevBtn}>
                  <ShieldAlert size={12} color={colors.textTertiary} />
                  <Text style={[styles.emergencyDevText, { color: colors.textTertiary }]}>
                    Developer God-Mode PIN Unlock
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Emergency PIN Input Box */}
            {showPinModal && (
              <View style={[styles.pinBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <Text style={[styles.pinTitle, { color: colors.textPrimary }]}>Enter Master PIN (108108)</Text>
                <TextInput
                  value={pinInput}
                  onChangeText={setPinInput}
                  placeholder="PIN"
                  placeholderTextColor={colors.textTertiary}
                  keyboardType="numeric"
                  secureTextEntry
                  maxLength={6}
                  style={[styles.pinInput, { backgroundColor: colors.recessed, color: colors.textPrimary }]}
                />
                <TouchableOpacity onPress={handlePinUnlock} style={[styles.pinSubmitBtn, isDark ? styles.btnDark : styles.btnLight]}>
                  <Text style={[styles.pinSubmitText, isDark ? styles.textDark : styles.textLight]}>Unlock Developer</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>

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
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
  },
  headerSub: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
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
    padding: 20,
  },
  profileCard: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '900',
  },
  profileRole: {
    fontSize: 11,
    fontWeight: '800',
    marginTop: 2,
  },
  roleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  roleBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  contactRow: {},
  contactPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  contactText: {
    fontSize: 12,
    fontWeight: '700',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingLabel: {
    fontSize: 13,
    fontWeight: '800',
  },
  themeTogglePill: {
    flexDirection: 'row',
    padding: 3,
    borderRadius: 9999,
  },
  toggleOption: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999,
  },
  toggleActiveDark: {
    backgroundColor: '#E0FF33',
  },
  toggleActiveLight: {
    backgroundColor: '#D97706',
  },
  toggleText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#71717A',
  },
  toggleTextActiveDark: {
    color: '#1E1B1C',
  },
  toggleTextActiveLight: {
    color: '#FFFFFF',
  },
  switcherCard: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  switcherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  switcherTitle: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  gridWorkspaces: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  workspaceBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    gap: 6,
  },
  wsActiveDark: {
    backgroundColor: '#E0FF33',
    borderColor: '#E0FF33',
  },
  wsActiveLight: {
    backgroundColor: '#D97706',
    borderColor: '#D97706',
  },
  wsText: {
    fontSize: 12,
    fontWeight: '700',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    gap: 6,
    marginBottom: 20,
  },
  logoutText: {
    color: '#EF4444',
    fontSize: 13,
    fontWeight: '800',
  },
  loginContainer: {
    paddingVertical: 10,
    gap: 12,
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: '900',
  },
  loginDesc: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 8,
  },
  phoneInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    minHeight: 54,
  },
  phonePrefix: {
    fontSize: 15,
    fontWeight: '900',
    marginRight: 10,
  },
  phoneTextInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
  },
  signInBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 9999,
    gap: 8,
    marginTop: 6,
  },
  btnDark: {
    backgroundColor: '#E0FF33',
  },
  btnLight: {
    backgroundColor: '#D97706',
  },
  signInBtnText: {
    fontSize: 14,
    fontWeight: '900',
  },
  textDark: {
    color: '#1E1B1C',
  },
  textLight: {
    color: '#FFFFFF',
  },
  emergencyDevBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 6,
  },
  emergencyDevText: {
    fontSize: 11,
    fontWeight: '700',
  },
  pinBox: {
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 12,
    gap: 10,
  },
  pinTitle: {
    fontSize: 13,
    fontWeight: '800',
  },
  pinInput: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '800',
  },
  pinSubmitBtn: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinSubmitText: {
    fontSize: 13,
    fontWeight: '900',
  },
});

export default AuthModal;
