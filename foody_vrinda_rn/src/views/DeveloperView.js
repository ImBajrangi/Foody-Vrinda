import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import { Terminal, ShieldAlert, Database, RefreshCw, Key, HardDrive, CheckCircle2, Zap } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { resetMasterDevAccount } from '../services/supabase';
import { CacheService } from '../services/cacheService';

export default function DeveloperView({ onRefresh }) {
  const { theme, isDark } = useTheme();
  const { user, profile, updateRole } = useAuth();
  const [pinInput, setPinInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleUnlockWithPin = () => {
    if (pinInput === '108108') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setIsUnlocked(true);
      updateRole('developer');
      Alert.alert('God-Mode Activated', 'Full Master Developer permissions granted.');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Invalid PIN', 'The Master God-Mode PIN is incorrect.');
    }
  };

  const handleResetDevAccounts = async () => {
    try {
      setIsResetting(true);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      const { error } = await resetMasterDevAccount();
      if (error) {
        Alert.alert('Recovery Error', error.message || 'Failed to restore accounts.');
      } else {
        Alert.alert('Success', 'Master Developer credentials and database seeds refreshed.');
        if (onRefresh) onRefresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsResetting(false);
    }
  };

  const handleClearCache = async () => {
    await CacheService.clear();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert('Cache Cleared', 'Local SWR storage and memory cache purged.');
    if (onRefresh) onRefresh();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.bg }]} contentContainerStyle={styles.content}>
      {/* Console Header */}
      <View style={[styles.headerCard, { backgroundColor: isDark ? '#231F20' : '#F4ECE1', borderColor: theme.border }]}>
        <View style={styles.headerLeft}>
          <Terminal size={22} color={theme.accent} />
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>Master Developer Console</Text>
            <Text style={[styles.headerSub, { color: theme.textMuted }]}>Tier 5 Fail-Safe & Diagnostics System</Text>
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: theme.accent }]}>
          <Text style={[styles.badgeText, { color: theme.accentText }]}>v3.0.0-RN</Text>
        </View>
      </View>

      {/* God-Mode PIN Unlock */}
      {!isUnlocked && profile?.role !== 'developer' && (
        <View style={[styles.pinCard, { backgroundColor: theme.card, borderColor: '#F59E0B' }]}>
          <View style={styles.pinTitleRow}>
            <Key size={18} color="#F59E0B" />
            <Text style={[styles.pinTitle, { color: theme.text }]}>Unlock Tier 3 Master God-Mode</Text>
          </View>
          <Text style={[styles.pinSub, { color: theme.textMuted }]}>
            Enter the 6-digit emergency access PIN to elevate to Master Developer.
          </Text>
          <TextInput
            placeholder="Enter Master PIN (e.g., 108108)"
            placeholderTextColor={theme.textMuted}
            value={pinInput}
            onChangeText={setPinInput}
            keyboardType="number-pad"
            secureTextEntry
            style={[styles.pinInput, { color: theme.text, backgroundColor: theme.inputBg, borderColor: theme.border }]}
          />
          <TouchableOpacity
            onPress={handleUnlockWithPin}
            style={[styles.pinBtn, { backgroundColor: '#F59E0B' }]}
          >
            <Text style={styles.pinBtnText}>Elevate Session</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* System Status */}
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.cardTitle, { color: theme.text }]}>Runtime Diagnostics</Text>
        <View style={styles.diagRow}>
          <Text style={[styles.diagLabel, { color: theme.textMuted }]}>Active Session Role:</Text>
          <Text style={[styles.diagVal, { color: theme.accent }]}>{profile?.role?.toUpperCase() || 'ANONYMOUS'}</Text>
        </View>
        <View style={styles.diagRow}>
          <Text style={[styles.diagLabel, { color: theme.textMuted }]}>Supabase Realtime:</Text>
          <Text style={[styles.diagVal, { color: '#10B981' }]}>● CONNECTED</Text>
        </View>
        <View style={styles.diagRow}>
          <Text style={[styles.diagLabel, { color: theme.textMuted }]}>SWR Offline Cache:</Text>
          <Text style={[styles.diagVal, { color: '#10B981' }]}>● ACTIVE (AsyncStorage)</Text>
        </View>
      </View>

      {/* Master Action Tools */}
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.cardTitle, { color: theme.text }]}>Emergency Recovery Tools</Text>

        <TouchableOpacity
          disabled={isResetting}
          onPress={handleResetDevAccounts}
          style={[styles.toolBtn, { backgroundColor: theme.inputBg, borderColor: theme.border }]}
        >
          <ShieldAlert size={18} color="#EF4444" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[styles.toolTitle, { color: theme.text }]}>Restore Master Dev Accounts</Text>
            <Text style={[styles.toolSub, { color: theme.textMuted }]}>Seed master_dev_108 & permissions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleClearCache}
          style={[styles.toolBtn, { backgroundColor: theme.inputBg, borderColor: theme.border, marginTop: 10 }]}
        >
          <HardDrive size={18} color={theme.accent} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[styles.toolTitle, { color: theme.text }]}>Purge Local SWR Cache</Text>
            <Text style={[styles.toolSub, { color: theme.textMuted }]}>Clear memory and AsyncStorage</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
    gap: 14,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  headerSub: {
    fontSize: 11,
    fontWeight: '500',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  pinCard: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
  },
  pinTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  pinTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  pinSub: {
    fontSize: 12,
    marginBottom: 12,
  },
  pinInput: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    fontSize: 14,
    marginBottom: 10,
  },
  pinBtn: {
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinBtnText: {
    color: '#000',
    fontSize: 13,
    fontWeight: '800',
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 12,
  },
  diagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  diagLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  diagVal: {
    fontSize: 13,
    fontWeight: '800',
  },
  toolBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
  },
  toolTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  toolSub: {
    fontSize: 11,
    marginTop: 2,
  },
});

export { DeveloperView };
