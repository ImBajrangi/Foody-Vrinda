// Foody Vrinda Theme & Design System Tokens

export const COLORS = {
  // Obsidian Luxury Palette (Dark Mode Default)
  dark: {
    canvas: '#1E1B1C',
    surface: '#282526',
    recessed: '#151314',
    card: '#221F20',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    textPrimary: '#FFFFFF',
    textSecondary: '#A1A1AA',
    textTertiary: '#71717A',
    accent: '#E0FF33', // Neon Chartreuse
    accentDark: '#1E1B1C',
    accentMuted: 'rgba(224, 255, 51, 0.15)',
    divider: 'rgba(255, 255, 255, 0.06)',
    inputBg: '#151314',
    tagBg: 'rgba(255, 255, 255, 0.05)',
  },
  // Divine Light Palette
  light: {
    canvas: '#FAF7F2',
    surface: '#FFFFFF',
    recessed: '#F4EFE6',
    card: '#FFFFFF',
    border: 'rgba(28, 25, 23, 0.08)',
    borderStrong: 'rgba(28, 25, 23, 0.16)',
    textPrimary: '#1C1917',
    textSecondary: '#57534E',
    textTertiary: '#A8A29E',
    accent: '#D97706', // Warm Amber
    accentDark: '#FFFFFF',
    accentMuted: 'rgba(217, 119, 6, 0.12)',
    divider: 'rgba(28, 25, 23, 0.06)',
    inputBg: '#F4EFE6',
    tagBg: 'rgba(28, 25, 23, 0.04)',
  },
  // Shared Brand Tokens
  brand: {
    satvikGreen: '#10B981',
    satvikGreenMuted: 'rgba(16, 185, 129, 0.15)',
    amber: '#F59E0B',
    amberMuted: 'rgba(245, 158, 11, 0.15)',
    cyan: '#06B6D4',
    cyanMuted: 'rgba(6, 182, 212, 0.15)',
    purple: '#A855F7',
    purpleMuted: 'rgba(168, 85, 247, 0.15)',
    rose: '#F43F5E',
    roseMuted: 'rgba(244, 63, 94, 0.15)',
    softMint: '#CEF3E7',
    softPeach: '#FFF2E6',
    warmIvory: '#FAF5EB',
  }
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const RADIUS = {
  xs: 6,
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  xxl: 36,
  pill: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 8,
  },
  glowChartreuse: {
    shadowColor: '#E0FF33',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 6,
  },
  glowAmber: {
    shadowColor: '#D97706',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 6,
  }
};
