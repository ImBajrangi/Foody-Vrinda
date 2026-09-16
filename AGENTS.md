# Foody Vrinda - Project Rules & Guidelines

## 1. UI/UX Design System & Palette
- **Canvas & Surfaces**: Always maintain the Obsidian dark luxury aesthetic (`#1E1B1C`) with elevated cards (`#282526`) and recessed inputs (`#151314`).
- **Accent Tokens**: Neon Chartreuse `#E0FF33` on interactive CTAs and active indicators.
- **Organic Dish Cards**: Alternating Soft Mint (`#CEF3E7`) and Soft Peach (`#FFF2E6`) cards with borderless rounded containers (`rounded-[32px] sm:rounded-[42px]`).
- **Product Detail Container**: Warm Ivory Cream (`#FAF5EB`) top section with high-res transparent food cutouts and floating pill badges.
- **Typography**: `Outfit` for bold display headings, `Plus Jakarta Sans` for clean body typography.

## 2. Dynamic Island Toast Notifications (From Vrinda Tours Standard)
- **Physics & Animation**: All toast notifications must utilize the Apple Dynamic Island morphing capsule standard (`appleDynamicIslandEnter`, `appleDynamicIslandExit`, `appleLiveAura`).
- **Ergonomics**: Positioned at the top of the viewport (`top: max(18px, env(safe-area-inset-top) + 14px)`), single-line pill capsule (`border-radius: 9999px`), swipe-up to dismiss on touch devices, and auto-dismiss after duration.
- **Concise & Informative (Zero Clipping Rule)**: Always keep notifications minimal, punchy, and highly informative without long filler text (e.g., `+1 Satvik Burger · ₹140` instead of `Added Cheese With Satvik Burger to basket!`). Ensure single-line fit with zero text truncation.
- **Z-Index**: Toasts must sit above general content (`z-index: 99999999`) without occluding bottom navigation bars or active bottom drawers.

## 3. Mobile Ergonomics & Overlap Prevention (From Chitra Vrinda Standard)
- **Floating Banner Offset Standard**: Toast notifications, bottom bars, and floating docks must respect safe areas and never overlap or occlude interactive buttons.
- **Horizontal Button Row Standard**: Action rows on mobile viewports must maintain horizontal button alignment (stepper + CTA) with zero awkward multi-line text wrapping.
- **Horizontal Chip Strip**: Category filters on mobile must provide smooth horizontal inertia scrolling with `no-scrollbar` and touch-friendly paddings.
- **Tactile Feedback**: Immediate state updates (toast notification, quantity updates, micro-scale button feedback) on every user interaction.

## 4. Performance, Image & Caching Standards
- **Layout Shift Prevention (CLS)**: Always specify `loading="lazy"`, `decoding="async"`, and `onError` fallback handlers on all image cutouts to ensure zero layout flickering.
- **Offline & Local Cache**: Cache cart state, customer preferences, and delivery coordinates in `localStorage` for instantaneous load times.
- **Collection Naming**: Always query the `menus` collection (plural) matching Firestore security rules.

## 5. Build & Verification Standard
- **Zero Compilation Errors**: Run `npm run build` after editing code to guarantee 0 build errors.
- Always run `npm run build` after touching imports or context files to guarantee zero compilation breaks before handoff.
- Prefer Supabase Realtime Channels with memory cache fallback over polling for zero egress waste and sub-millisecond response times.

## 6. Emergency Master Access & Lockout Prevention System
A 5-tier fail-safe hierarchy ensures developers and system administrators are never permanently locked out of the platform:
- **Tier 1 (Whitelisted Master Accounts)**: Hard-coded protection for `developer@foodyvrinda.com` / `master_dev_108`. Protected against accidental deletion, demotion, or role stripping.
- **Tier 2 (Global Emergency Keybinding)**: Press `Ctrl + Shift + D` (or `Cmd + Shift + D` on macOS) anywhere across the application to summon the Emergency Master Access modal.
- **Tier 3 (Master God-Mode PIN)**: Unlock instantaneous Developer elevation with PIN `108108`.
- **Tier 4 (URL Override)**: Access Developer mode anytime by navigating with the URL parameter `?dev_override=108`.
- **Tier 5 (1-Click Recovery Tool)**: "Restore Master Dev Accounts" button in the Developer panel instantly resets seed administrative records in Supabase and local cache.

Grand Admin users still appear in the user list (for visibility), but you manage the role assignment directly via Supabase tables as requested. The stats card and filter tab are gone from the UI.

Rule — Shared Database Contract:
"When updating database schemas, tables, or model payloads, always update both foody_vrinda_v3 (web) and foody_vrinda_app (Flutter) simultaneously to maintain 100% schema parity."

Rule — Cache-First SWR Pattern:
"All cloud data services must implement stale-while-revalidate (SWR): render synchronously from local cache first for zero perceived latency, then fetch in the background and update UI via events without full page reloads."

Rule [Auto-Theme Contrast Guard]: Whenever new components or views are created, always ensure CSS variables/utility classes support both Light & Dark modes without hardcoding un-swappable hex colors.
Rule [Egress-Free Performance Check]: All cache invalidations and UI re-renders must debounce network traffic and maintain 60fps responsiveness on low-tier mobile devices.

