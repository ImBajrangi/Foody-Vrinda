# Foody Vrinda - Project Rules & Guidelines

## 1. UI/UX Design System & Palette
- **Canvas & Surfaces**: Always maintain the Obsidian dark luxury aesthetic (`#1E1B1C`) with elevated cards (`#282526`) and recessed inputs (`#151314`).
- **Accent Tokens**: Terracotta Rust `#CB785C` on interactive CTAs and active indicators.
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
Rule [Native Bottom Sheet Invariant]: "Interactive bottom sheets and swipe-down drawers must never use CSS keyframe animations with fill-mode: both/forwards or :not(.sheet-dragging) selectors. Dismissal transitions must interpolate continuously from the user's release position (translate3d(0, ${finalDiff}px, 0)) to 105% with cubic-bezier(0.32, 0.72, 0, 1) without premature React re-renders or origin resets."

Rule — Core Service Modularization Invariant:
"For any mission-critical core module >1,000 LOC (such as supabase.js):
1. Never modify downstream import paths during extraction.
2. Preserve the existing public API through a stable facade.
3. Create a Git isolation branch before modification.
4. Preserve the original implementation as a temporary rollback snapshot.
5. Extract one bounded domain at a time.
6. After every extraction:
   - npm run build
   - lint/typecheck
   - export parity check
   - relevant tests
7. Do not delete the monolith until:
   - 100% public-export parity is verified
   - application build passes
   - runtime smoke tests pass
   - no stale imports remain
8. Remove the backup only after the refactor is proven stable."

## Multi-Environment & Production Safety

### Environment Isolation

- Alpha/Dev, Beta/Staging, and Production MUST use separate Supabase projects.
- Production customer, order, payment, address, and restaurant data MUST NOT be copied into Alpha or Beta in raw form.
- Beta may use synthetic or sanitized/anonymized production-like data only.

### Production Database Rules

NEVER directly perform:
- DROP
- TRUNCATE
- DELETE without an explicit WHERE clause
- destructive UPDATE without an explicit WHERE clause
- mock/test seed insertion
- ad-hoc schema modifications

against the Production database.

### Migration Rules

- Every schema change MUST be implemented as a version-controlled migration.
- Every migration MUST be tested on Alpha first.
- Every production-bound migration MUST pass Beta/Staging validation.
- Production migrations MUST be backward-compatible whenever possible.
- Prefer Expand → Migrate → Contract for breaking schema changes.

### Deployment Rules

feature/* → Alpha/Dev
beta → Beta/Staging
main → Production

Production deployment requires:
1. Migration validation
2. Application tests
3. Security/RLS validation
4. Beta/UAT approval
5. Backup/recovery readiness

### Credentials

- Environment credentials MUST never be committed to Git.
- Production service-role credentials MUST never be exposed to frontend code.
- Each environment MUST use its own Supabase credentials.

### Production Data

Production data MUST be treated as immutable business data.
Testing MUST use synthetic/test accounts and test shops.

### Disaster Recovery & Rollback Standard

All disaster recovery procedures and rollback drills MUST strictly follow the reproducible runbook at `foody_vrinda_v3/ProductDetails/DISASTER_RECOVERY_RUNBOOK.md`. A DR drill is certified successful only when an independent authorized engineer can reproduce the full restore, schema verification, and critical smoke flows with logged RTO and RPO metrics without touching production infrastructure.
