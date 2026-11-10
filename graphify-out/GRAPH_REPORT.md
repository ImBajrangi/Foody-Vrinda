# Graph Report - Foody-Vrinda  (2026-11-10)

## Corpus Check
- 257 files · ~459,015 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 3166 nodes · 5783 edges · 169 communities (135 shown, 34 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.63)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `363393d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- developer_panel.dart
- theme.dart
- user_preferences_provider.dart
- hit_soochi_service.dart
- lottie_assets.dart
- home_screen.dart
- shop_service.dart
- order_model.dart
- shop_model.dart
- cart_screen.dart
- menu_screen.dart
- delivery_dashboard_view.dart
- design_system.dart
- delivery_view.dart
- NotificationService
- dashboard_view.dart
- kitchen_view.dart
- animations.dart
- auth_provider.dart
- order_service.dart
- cards.dart
- user_model.dart
- location_service.dart
- fv_wallet_model.dart
- auth_service.dart
- location_picker_dialog.dart
- search_screen.dart
- cart_provider.dart
- address_autocomplete_field.dart
- inputs.dart
- .ensureSubscribed
- menu_item_model.dart
- main.dart
- order_notification_manager.dart
- login_screen.dart
- users.service.js
- notification_settings_screen.dart
- supabase.monolith.backup.js
- fvWalletService.js
- app_config.dart
- supabase_service.dart
- notification_sound_settings.dart
- NotificationManager
- test-role-and-tutorial.mjs
- CustomerView.jsx
- String?
- notification_model.dart
- kitchen_alarm_service.dart
- search_service.dart
- NativeNotificationService
- telegram_page_route.dart
- package:audioplayers_web/audioplayers_web.dart
- App.jsx
- CompleteProfileModal.jsx
- bool get
- supabase_config.dart
- FastOrderMonitor
- verify_roles_and_db_sync.mjs
- AuthProvider
- foody_cache_service.dart
- menus.service.js
- 🏛️ MASTER UI/UX & FULL-STACK APP ENGINEERING PLAYBOOK
- Foody Vrinda - Cloud Kitchen Mobile App
- 🔔 Custom Notification Sounds - Implementation Summary
- sw.js
- 🔔 Custom Notification Sounds Setup Guide
- isTableMissing
- 🔔 Custom Notification Sounds - Quick Reference
- @example
- setup_notification_sounds.sh
- pressable_scale.dart
- cart_item_model.dart
- package:cloud_firestore_web/cloud_firestore_web.dart
- package:firebase_auth_web/firebase_auth_web.dart
- package:firebase_core_web/firebase_core_web.dart
- package:flutter_web_plugins/flutter_web_plugins.dart
- package:fluttertoast/fluttertoast_web.dart
- package:geolocator_web/geolocator_web.dart
- Key Accomplishments
- package:google_maps_flutter_web/google_maps_flutter_web.dart
- Foody Vrinda - Authentic Satvik Cloud Kitchen
- Foody Vrinda App Rules & Guidelines
- Foody Vrinda (v3)
- Integration Guide: Adding Notifications to Order Service
- package:google_sign_in_web/google_sign_in_web.dart
- Implementation Plan - Universal Search
- Proposed Changes
- package:package_info_plus/src/package_info_plus_web.dart
- 🛠️ The "Fix it for Everytime" Solution
- Proposed Changes
- Foody Vrinda - Project Rules & Guidelines
- Loader.jsx
- AMPMToggle.jsx
- DayNightSwitch.jsx
- HamburgerToggle.jsx
- NeumorphicToggle.jsx
- ProductCard.jsx
- RealismButton.jsx
- RewardButton.jsx
- SciFiLoader.jsx
- StarRating.jsx
- package:shared_preferences_web/shared_preferences_web.dart
- package:url_launcher_web/url_launcher_web.dart
- StackedBars.tsx
- order_widgets.dart
- orders.service.js
- fv_wallet_service.dart
- dispatchSafeEvent
- DeveloperView.jsx
- 🛡️ Foody Vrinda v5.3.1 — Core Production Security Validation Complete
- test-order-name-fixes.js
- .ensureSubscribed
- test-delivery-and-customer-handshake.mjs
- StatefulWidget
- Foody Vrinda — Design System & Theme Architecture Specification
- CreateMenu.tsx
- test-shop-isolation.mjs
- Multi-Environment & Production Safety
- run-android.js
- 🌟 Foody Vrinda: System Architecture & Delivery Verification Updates
- test-live-rls-regression.mjs
- Implementation Sequence
- fast_transcribe.sh
- runTestSuite
- OneTimeCode.tsx
- test_push_workflow.mjs
- notification_sound_config.dart
- 2. Step-by-Step Recovery Execution Chain
- verify-delivery-hardened-evidence.js
- static const String
- seed-synthetic-beta-data.js
- AuthModal.jsx
- getCachedItem
- verify-dr-integrity.js
- lint-migrations.js
- runBrowserTests
- fv_rewards_sheet.dart
- test-wallet-multiplex.mjs
- run-production-test-audit.mjs
- review_service.dart
- release-apk.mjs
- resource_cache_service.dart
- getCachedShops
- verify-supabase-parity.js
- Foody Vrinda animations (React + Capacitor)
- RollingCounter.tsx
- ErrorBoundary
- StatelessWidget
- backHandlerService.js
- MockLocalStorage
- CashStatus
- test-combo-engine.mjs
- foodySplash.core.js
- run-all-tests.mjs
- order_tracking_screen.dart
- test-user-flow-e2e.mjs
- AppUpdateService
- ../config/theme.dart
- HitSoochiService
- runAtomicShopDeletionTests
- test-developer-api-sync.mjs
- package:flutter/material.dart
- OwnerView.jsx

## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 59 edges
2. `DeveloperView()` - 43 edges
3. `dispatchSafeEvent()` - 42 edges
4. `getOrderDisplayToken()` - 37 edges
5. `NativeNotificationService` - 34 edges
6. `getCachedShops()` - 32 edges
7. `CustomerView()` - 32 edges
8. `setCachedItem()` - 30 edges
9. `dispatchSafeEvent()` - 30 edges
10. `useAuth()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `React + Vite Entry Point` --conceptually_related_to--> `Foody Vrinda - Authentic Satvik Cloud Kitchen`  [INFERRED]
  foody_vrinda_v3/index.html → README.md
- `build` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/dashboard/dashboard_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `_loadStats` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/dashboard/dashboard_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `_showSettlementConfirm` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/dashboard/dashboard_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `build` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/kitchen/kitchen_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart

## Import Cycles
- None detected.

## Communities (169 total, 34 thin omitted)

### Community 0 - "developer_panel.dart"
Cohesion: 0.01
Nodes (164): ../../config/menu_images.dart, _addStaff, _addStaffUser, _allOrders, _allUsers, amount, _applyHistoryFilter, _authService (+156 more)

### Community 1 - "theme.dart"
Cohesion: 0.04
Nodes (53): accentCoral, accentOrange, accentYellow, AppTheme, background, border, borderColor, borderLight (+45 more)

### Community 2 - "user_preferences_provider.dart"
Cohesion: 0.11
Nodes (17): _addressLabel, _customGreetingName, _deliveryInstructions, _dietaryFilter, _keyAddressLabel, _keyCustomGreetingName, _keyDeliveryInstructions, _keyDietaryFilter (+9 more)

### Community 3 - "hit_soochi_service.dart"
Cohesion: 0.08
Nodes (47): bool?, _baseUrl, boostReason, category, confidence, configure, cta, description (+39 more)

### Community 4 - "lottie_assets.dart"
Cohesion: 0.04
Nodes (45): badCat, build, celebration, checkmark, chefPizza, clock, confetti, cooking (+37 more)

### Community 5 - "home_screen.dart"
Cohesion: 0.05
Nodes (43): ../../config/emoji_to_icon.dart, ../dashboard/dashboard_view.dart, ../delivery/delivery_dashboard_view.dart, ../delivery/delivery_view.dart, ../developer/developer_panel.dart, _buildCategoryChip, _buildCustomerBottomNavBar, _buildCustomerView (+35 more)

### Community 6 - "shop_service.dart"
Cohesion: 0.09
Nodes (22): addMenuItem, _cachedShops, createShop, deleteMenuItem, deleteShop, getAllMenuItems, getAvailableMenuItems, getCachedMenuItems (+14 more)

### Community 7 - "order_model.dart"
Cohesion: 0.04
Nodes (46): cashCollectedAt, cashSettledAt, collectedBy, contactAttempts, copyWith, createdAt, customerLatitude, customerLongitude (+38 more)

### Community 8 - "shop_model.dart"
Cohesion: 0.05
Nodes (39): address, AlarmSettings, closeTime, copyWith, createdAt, daysOpen, deliveryCharge, deliveryReady (+31 more)

### Community 9 - "cart_screen.dart"
Cohesion: 0.05
Nodes (41): ../auth/login_screen.dart, _addressController, _availableFvPoints, _buildEmptyCart, _buildPaymentChip, _buildPaymentChipWithCallback, _buildPaymentOption, _buildPriceRow (+33 more)

### Community 10 - "menu_screen.dart"
Cohesion: 0.10
Nodes (20): ../cart/cart_screen.dart, ../../config/design_system.dart, _buildCategoryTabBar, _buildInfoPanel, _buildReviewTile, createState, _formatDate, MenuScreen (+12 more)

### Community 11 - "delivery_dashboard_view.dart"
Cohesion: 0.05
Nodes (38): amount, _buildAllTimeStats, _buildCashPanel, _buildFilterChip, _buildHeader, _buildLegendItem, _buildLocationPanel, _buildTodayStats (+30 more)

### Community 12 - "design_system.dart"
Cohesion: 0.06
Nodes (34): dart:math, accentOrangeDark, accentOrangeLight, ambientGoldGradient, borderSubtle, bounceClickable, brightness, charcoalDark (+26 more)

### Community 13 - "delivery_view.dart"
Cohesion: 0.06
Nodes (34): _buildAlarmBanner, _buildAllShopsDelivery, _buildHeader, _buildMultiShopDelivery, _buildOrdersList, _buildSingleShopDelivery, _callCustomer, _checkForNewOrders (+26 more)

### Community 14 - "NotificationService"
Cohesion: 0.09
Nodes (34): FlutterLocalNotificationsPlugin, completeOrderWorkflow, createOrderWithNotifications, initializeNotifications, _notificationService, NotificationUsageExample, notifyCustomerOfOrderStatus, notifyDeliveryStaffOfReadyOrder (+26 more)

### Community 15 - "dashboard_view.dart"
Cohesion: 0.06
Nodes (33): _acknowledgeReturn, amount, build, _buildCashManagement, _buildChartsRow, _buildHeader, _buildKPICards, _buildOrderHistory (+25 more)

### Community 16 - "kitchen_view.dart"
Cohesion: 0.07
Nodes (29): _alarmService, _bellAnimation, _bellController, build, _buildAlarmBanner, _buildHeader, createState, dispose (+21 more)

### Community 17 - "animations.dart"
Cohesion: 0.06
Nodes (31): actionLabel, animate, animationType, _bounceAnimation, build, CelebrationOverlay, child, color (+23 more)

### Community 18 - "auth_provider.dart"
Cohesion: 0.05
Nodes (36): AuthService, AuthStatus get, AuthStatus, _clearCachedUserData, clearError, _error, _initAuth, isAdmin (+28 more)

### Community 19 - "order_service.dart"
Cohesion: 0.10
Nodes (33): collectCash, createOrder, deleteCashTransaction, deleteOrder, getAllOrders, getCashTransactions, getCompletedOrders, getDeliveryOrders (+25 more)

### Community 20 - "cards.dart"
Cohesion: 0.06
Nodes (31): EdgeInsetsGeometry?, address, AppCard, backgroundColor, build, _buildPlaceholder, child, cuisines (+23 more)

### Community 21 - "user_model.dart"
Cohesion: 0.12
Nodes (29): canAccessDevPanel, copyWith, createdAt, deliveryAddress, deliveryStatus, deliveryType, devPermissions, displayName (+21 more)

### Community 22 - "location_service.dart"
Cohesion: 0.07
Nodes (26): _apiKey, _calculateStraightLineDistance, description, distanceMeters, DistanceResult, distanceText, durationSeconds, durationText (+18 more)

### Community 23 - "fv_wallet_model.dart"
Cohesion: 0.06
Nodes (35): amount, availablePoints, balanceAfter, channelType, createdAt, description, displayName, fromJson (+27 more)

### Community 24 - "auth_service.dart"
Cohesion: 0.17
Nodes (11): ../../config/app_config.dart, AuthService, getAllUsers, getUserData, _supabaseService, updateUserProfile, updateUserRole, SupabaseService (+3 more)

### Community 25 - "location_picker_dialog.dart"
Cohesion: 0.07
Nodes (27): _addressDisplay, build, _buildAddressCard, _buildCenterPin, _buildFooter, _buildHeader, _buildLoadingState, _buildLocationFAB (+19 more)

### Community 26 - "search_screen.dart"
Cohesion: 0.07
Nodes (29): FocusNode, build, _buildBody, _buildCategoryChip, _buildEmptyState, _buildNoResults, _buildPopularShopsList, _buildPopularShopTile (+21 more)

### Community 27 - "cart_provider.dart"
Cohesion: 0.09
Nodes (27): addItem, CartProvider, clear, clearAndSetShop, decrementItem, formattedTotal, getItemQuantity, hasItem (+19 more)

### Community 28 - "address_autocomplete_field.dart"
Cohesion: 0.07
Nodes (27): dart:ui, _inputDecoration, AddressAutocompleteField, _AddressAutocompleteFieldState, build, controller, createState, _debounce (+19 more)

### Community 29 - "inputs.dart"
Cohesion: 0.11
Nodes (18): AppDropdown, AppInputField, build, controller, enabled, hintText, items, keyboardType (+10 more)

### Community 30 - ".ensureSubscribed"
Cohesion: 0.17
Nodes (6): app, auth, db, broadcastCloudNotification(), RealtimeMultiplexer, subscribeCloudOffers()

### Community 31 - "menu_item_model.dart"
Cohesion: 0.10
Nodes (20): double?, category, copyWith, createdAt, description, formattedOriginalPrice, formattedPrice, fromMap (+12 more)

### Community 32 - "main.dart"
Cohesion: 0.09
Nodes (21): _bounceAnimation, _bounceController, build, createState, dispose, _fadeAnimation, _fadeController, FoodyVrindaApp (+13 more)

### Community 33 - "order_notification_manager.dart"
Cohesion: 0.07
Nodes (26): delivery_alarm_service.dart, _currentShopId, _currentUserId, _currentUserRole, _handleNewOrderArrival, _handleNotificationsSnapshot, _handleOrdersSnapshot, _handleOrderStatusTransition (+18 more)

### Community 34 - "login_screen.dart"
Cohesion: 0.05
Nodes (44): _addressEditController, _buildAlertBanner, _buildAuthenticatedProfileView, _buildHeaderRow, _buildInputField, _buildMethodTab, _buildPasswordField, _buildRoleChip (+36 more)

### Community 35 - "users.service.js"
Cohesion: 0.12
Nodes (40): dispatchSafeEvent(), getDefaultActiveShopId(), normalizeDevPermissions(), safeStorage, setCachedItem(), _forbiddenWriteTables, isForbiddenError(), isTableWriteForbidden() (+32 more)

### Community 36 - "notification_settings_screen.dart"
Cohesion: 0.12
Nodes (16): class, ../../config/notification_sound_config.dart, _audioPlayer, _availableSounds, build, _buildSoundTile, createState, dispose (+8 more)

### Community 37 - "supabase.monolith.backup.js"
Cohesion: 0.05
Nodes (33): ALLOWED_ORDER_TRANSITIONS, broadcastAlarmEvent(), CACHE_TTL_MS, calculateDistanceInMeters(), calculateDistanceKm(), calculateOptimalDispatchWindow(), checkDeliveryGeofence(), COMPLETE_FOODY_DATABASE_SCHEMA_SQL (+25 more)

### Community 38 - "fvWalletService.js"
Cohesion: 0.09
Nodes (25): filtered, rawMockDbLeaderboard, AppInstallModal(), FVRewardsDashboard(), hasDevPermission(), Header(), FoodyVrindaLogo(), FoodyVrindaWordmark() (+17 more)

### Community 39 - "app_config.dart"
Cohesion: 0.09
Nodes (20): adminEmails, AppConfig, appName, appTagline, appVersion, defaultFoodImage, defaultShopImage, defaultUserAvatar (+12 more)

### Community 40 - "supabase_service.dart"
Cohesion: 0.05
Nodes (36): _client, createCloudUser, createMenuItem, createOffer, createOrder, createShop, deleteMenuItem, deleteOffer (+28 more)

### Community 41 - "notification_sound_settings.dart"
Cohesion: 0.11
Nodes (19): _audioPlayer, availableSounds, build, _buildRoleCard, _buildTestButton, createState, dispose, _getRoleIcon (+11 more)

### Community 43 - "test-role-and-tutorial.mjs"
Cohesion: 0.17
Nodes (25): deliveryAliases, mockSessionStorage, mockStorage, negativeRoles, ownerAliases, progressAfterStep1, restaurantAliases, App() (+17 more)

### Community 44 - "CustomerView.jsx"
Cohesion: 0.09
Nodes (41): mockStorage, ActiveOrderCapsule(), BouncingLoader(), StyledWrapper, AuthContext, AUTHORIZED_ADMIN_EMAILS, AUTHORIZED_DEV_EMAILS, AuthProvider() (+33 more)

### Community 45 - "String?"
Cohesion: 0.07
Nodes (27): DateTime?, amount, CashTransactionModel, CashTransactionType, formattedAmount, fromMap, id, notes (+19 more)

### Community 46 - "notification_model.dart"
Cohesion: 0.08
Nodes (24): category, copyWith, createdAt, data, fromMap, fromString, id, isRead (+16 more)

### Community 47 - "kitchen_alarm_service.dart"
Cohesion: 0.08
Nodes (39): AudioPlayer, ChangeNotifier, dart:async, acknowledgeAll, acknowledgeOrder, _audioPlayer, DeliveryAlarmService, dispose (+31 more)

### Community 48 - "search_service.dart"
Cohesion: 0.10
Nodes (32): ShopModel, HitSoochiService, original, RecommendationResponse, confidence, detectedIntent, enhancedSearch, EnhancedSearchResponse (+24 more)

### Community 49 - "NativeNotificationService"
Cohesion: 0.13
Nodes (4): SoundTrialsModal(), FoodyContinuousAlarm, NativeNotificationService, NOTIFICATION_TRIALS

### Community 50 - "telegram_page_route.dart"
Cohesion: 0.22
Nodes (17): child, TelegramPageRoute, UserPreferencesProvider, _showLoginRequiredDialog, _openOrdersOnMap, _buildCustomerHomeTab, _buildHeader, _buildOfferCard (+9 more)

### Community 52 - "App.jsx"
Cohesion: 0.11
Nodes (17): AppInstallModal, AppUpdateModal, AuthModal, CompleteProfileModal, CustomerView, DeveloperView, hasDevPermission(), KitchenView (+9 more)

### Community 53 - "CompleteProfileModal.jsx"
Cohesion: 0.27
Nodes (13): CompleteProfileModal(), MapPicker(), useGeolocation(), fetchAddressSuggestions(), getStorageCache(), memoryReverseCache, memorySuggestionsCache, reverseGeocodeCoords() (+5 more)

### Community 54 - "bool get"
Cohesion: 0.15
Nodes (12): bool get, dispose, initialize, _initialized, _instance, isSupported, isWeb, openCheckout (+4 more)

### Community 55 - "supabase_config.dart"
Cohesion: 0.15
Nodes (12): loggedUsersTable, menusTable, notificationsTable, offersTable, ordersTable, reviewsTable, rolesTable, shopsTable (+4 more)

### Community 57 - "verify_roles_and_db_sync.mjs"
Cohesion: 0.50
Nodes (4): recordTest(), results, runTestSuite(), supabase

### Community 58 - "AuthProvider"
Cohesion: 0.09
Nodes (23): AuthProvider, build, _handleEmailSubmit, _handleGoogleSignIn, _handlePhoneSubmit, initState, _saveProfileEdits, _loadWalletPoints (+15 more)

### Community 59 - "foody_cache_service.dart"
Cohesion: 0.16
Nodes (22): dart:convert, foody_cache_service.dart, _cacheExpiry, cacheMenuItems, cacheShops, clearAllCache, FoodyCacheService, getCachedMenuItems (+14 more)

### Community 60 - "menus.service.js"
Cohesion: 0.13
Nodes (34): COLORS, pass(), runTestSuite(), section(), QUANTITIES, QuantityPickerSheet(), UnifiedSearchModal(), activePresetDishes (+26 more)

### Community 61 - "🏛️ MASTER UI/UX & FULL-STACK APP ENGINEERING PLAYBOOK"
Cohesion: 0.07
Nodes (29): 1.1 The Golden Rule of Modern Aesthetics, 1.2 Dual-Theme Chromatic Architecture, 1.3 Modern Typography Stack, 1.4 Tactile Surface Physics & Glassmorphism, 1. CORE DESIGN ENGINEERING & VISUAL HIERARCHY, 2.1 Hardware-Accelerated Rendering (GPU Offloading), 2.2 Eliminating Re-Render Storms in React, 2.3 DOM Capping & Asset Delivery (+21 more)

### Community 62 - "Foody Vrinda - Cloud Kitchen Mobile App"
Cohesion: 0.10
Nodes (19): Firebase BaaS, Flutter Pubspec Configuration, Build Commands, Customer Features, Features, Firebase Configuration, Foody Vrinda - Cloud Kitchen Mobile App, for emulator (+11 more)

### Community 63 - "🔔 Custom Notification Sounds - Implementation Summary"
Cohesion: 0.08
Nodes (23): 1. **Core Functionality**, 2. **Files Created**, 3. **Updated Files**, Automatic Sound Selection, Basic Usage, 🎉 Benefits, Configuration & Services, 🔔 Custom Notification Sounds - Implementation Summary (+15 more)

### Community 65 - "🔔 Custom Notification Sounds Setup Guide"
Cohesion: 0.08
Nodes (23): Advanced Usage, Basic Usage, Code Integration, 🔔 Custom Notification Sounds Setup Guide, File Structure, How It Works, Migration from Old Code, Option A: Automatic (Recommended) (+15 more)

### Community 66 - "isTableMissing"
Cohesion: 0.20
Nodes (21): createCloudMenuItem(), createCloudOffer(), createCloudPreset(), deleteCloudMenuItem(), deleteCloudOffer(), deleteCloudPreset(), getCachedOffers(), getCachedPresets() (+13 more)

### Community 67 - "🔔 Custom Notification Sounds - Quick Reference"
Cohesion: 0.12
Nodes (16): 💻 Code Snippets, ⚡ Common Issues & Fixes, 🔔 Custom Notification Sounds - Quick Reference, 🔗 Documentation Links, 📂 File Locations, 🔍 Free Sound Resources, Import, Initialize (in main.dart) (+8 more)

### Community 72 - "pressable_scale.dart"
Cohesion: 0.11
Nodes (18): Animation, AnimationController, Duration, _animation, build, child, _controller, createState (+10 more)

### Community 73 - "cart_item_model.dart"
Cohesion: 0.18
Nodes (10): double get, CartItemModel, copyWith, formattedTotal, menuItem, quantity, total, MenuItemModel (+2 more)

### Community 80 - "Key Accomplishments"
Cohesion: 0.14
Nodes (13): Developer Panel - Shop Assignment, 🟢 Firebase Google Sign-In Fix, Fluent Asset Loading, Key Accomplishments, 🟢 Local Resource Caching, 🟢 Many-to-Many Delivery Assignment, 🟢 Perfect Image Rendering, Role-Based Views (+5 more)

### Community 82 - "Foody Vrinda - Authentic Satvik Cloud Kitchen"
Cohesion: 0.29
Nodes (6): React + Vite Entry Point, 📁 Directory Structure, 🌟 Features, Foody Vrinda - Authentic Satvik Cloud Kitchen, 🚀 Getting Started, 🛠️ Tech Stack

### Community 83 - "Foody Vrinda App Rules & Guidelines"
Cohesion: 0.50
Nodes (3): 1. Dynamic Style Linting Rule, 2. Explicit Type Casting for Iterative Map Lists, Foody Vrinda App Rules & Guidelines

### Community 84 - "Foody Vrinda (v3)"
Cohesion: 0.40
Nodes (4): ⚡ Architecture & Tech Stack, 🚀 Development & Build, 🔐 Emergency Recovery, Foody Vrinda (v3)

### Community 85 - "Integration Guide: Adding Notifications to Order Service"
Cohesion: 0.15
Nodes (12): Complete Integration Checklist, Integration Guide: Adding Notifications to Order Service, Next Steps, Notes, Step 1: Update Order Service, Step 2: Notify Staff When Order is Created, Step 3: Notify Delivery Staff When Order is Ready, Step 4: Notify Users of Status Updates (+4 more)

### Community 87 - "Implementation Plan - Universal Search"
Cohesion: 0.17
Nodes (11): Data Flow, [Home Screen Integration], Implementation Plan - Universal Search, Manual Verification, [MODIFY] [home_screen.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/home/home_screen.dart), [NEW] [search_screen.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/search/search_screen.dart), [NEW] [search_service.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/services/search_service.dart), Proposed Changes (+3 more)

### Community 88 - "Proposed Changes"
Cohesion: 0.18
Nodes (10): Implementation Plan - Optimized Image Rendering, Manual Verification, [MODIFY] [cards.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/widgets/cards.dart), [MODIFY] [menu_screen.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/menu/menu_screen.dart), [MODIFY] [theme.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/config/theme.dart), Proposed Changes, [Shop Details], [Theme & Styles] (+2 more)

### Community 90 - "🛠️ The "Fix it for Everytime" Solution"
Cohesion: 0.20
Nodes (9): Common Reasons:, Fixing Google Sign-In `DEVELOPER_ERROR` (Code 10), Root Cause, Step 1: Collect ALL your Fingerprints, Step 2: Add to Firebase Console, Step 3: Configure the OAuth Consent Screen, Step 4: Use the correct Client ID in Code, Step 5: (If Play Store) Add Production SHA (+1 more)

### Community 91 - "Proposed Changes"
Cohesion: 0.22
Nodes (8): [Developer Panel], Implementation Plan - Multi-Shop Delivery Assignment, Manual Verification, [Models], [MODIFY] [developer_panel.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/developer/developer_panel.dart), Proposed Changes, [Services], Verification Plan

### Community 92 - "Foody Vrinda - Project Rules & Guidelines"
Cohesion: 0.12
Nodes (15): 1. UI/UX Design System & Palette, 2. Dynamic Island Toast Notifications (From Vrinda Tours Standard), 3. Mobile Ergonomics & Overlap Prevention (From Chitra Vrinda Standard), 4. Performance, Image & Caching Standards, 5. Build & Verification Standard, 6. Emergency Master Access & Lockout Prevention System, Credentials, Deployment Rules (+7 more)

### Community 106 - "StackedBars.tsx"
Cohesion: 0.19
Nodes (11): Bar, CATS, fmt(), fmtDay(), LAST, makeBars(), Mode, MONTHS (+3 more)

### Community 107 - "order_widgets.dart"
Cohesion: 0.10
Nodes (21): OrderModel, OrderStatus, OrderStatusExtension, build, currentStatus, _getColor, _getIcon, icon (+13 more)

### Community 108 - "orders.service.js"
Cohesion: 0.10
Nodes (38): COLORS, runAdversarialTestSuite(), section(), OrderSuccessCelebrationModal(), getCachedItem(), createCloudNotification(), getRiderCashLedger(), getUserTrustScore() (+30 more)

### Community 109 - "fv_wallet_service.dart"
Cohesion: 0.10
Nodes (20): _client, exchangeRate, FVWalletService, generateWhatsAppShareUrl, getCommunityLinks, getLeaderboard, getWalletDashboard, initUserWallet (+12 more)

### Community 110 - "dispatchSafeEvent"
Cohesion: 0.30
Nodes (20): adminBlockUser(), adminRevokeUser(), adminUnblockUser(), createCloudReview(), createCloudUser(), deleteCloudUser(), dispatchSafeEvent(), getCachedUsers() (+12 more)

### Community 111 - "DeveloperView.jsx"
Cohesion: 0.11
Nodes (40): assert(), errors, evaluateCustomerDeliveryAvailable(), runTest(), supabase, CURRENT_APP_VERSION, nativeNotify, addDeletedShopId() (+32 more)

### Community 112 - "🛡️ Foody Vrinda v5.3.1 — Core Production Security Validation Complete"
Cohesion: 0.07
Nodes (26): 1. Executive Summary, 2. Test Execution Matrix (22 / 22 Regression Tests), 3. Security Property Verification & Evidence Status, 4.1 Request Processing & Verification Pipeline, 4.2 Separation of Privilege & Execution Pipelines, 4. Architectural Analysis: End-to-End Control Flow, 5.1 Caller Identity Binding (`claim_order_pickup_atomic` & `verify_delivery_otp_atomic`), 5.2 One-Time Use OTP Verification (+18 more)

### Community 113 - "test-order-name-fixes.js"
Cohesion: 0.29
Nodes (5): autoGenCases, scenario1, scenario2, scenario3, testCases

### Community 114 - ".ensureSubscribed"
Cohesion: 0.15
Nodes (10): claimDeliveryOrder(), invalidateCache(), RealtimeMultiplexer, subscribeCloudMenus(), subscribeCloudNotifications(), subscribeCloudOffers(), subscribeCloudOrders(), subscribeCloudShops() (+2 more)

### Community 115 - "test-delivery-and-customer-handshake.mjs"
Cohesion: 0.43
Nodes (6): assert(), errors, evaluateCustomerDeliveryAvailable(), runTest(), simulateTransportViewMount(), supabase

### Community 116 - "StatefulWidget"
Cohesion: 0.13
Nodes (29): SplashScreen, _SplashScreenState, DeveloperPanel, _DeveloperPanelState, _FullShopDashboard, _FullShopDashboardState, _AnimatedAlarmBanner, _AnimatedAlarmBannerState (+21 more)

### Community 117 - "Foody Vrinda — Design System & Theme Architecture Specification"
Cohesion: 0.08
Nodes (23): 1. Executive Summary & Philosophy, 2.1 CSS Semantic Tokens Definition, 2. Global Semantic Color Token Matrix, 3.1 Typography Scale & Weights, 3.2 Spacing & Padding Scale, 3.3 Component Dimensions & Touch Targets, 3.4 Iconography Sizing Matrix, 3. Comprehensive Sizing, Spacing & Dimension Matrix (+15 more)

### Community 118 - "CreateMenu.tsx"
Cohesion: 0.29
Nodes (6): clamp(), Create(), CreateMenu, ITEMS, LIQUID, LIQUID_STILL

### Community 119 - "test-shop-isolation.mjs"
Cohesion: 0.67
Nodes (3): assert(), runTests(), supabase

### Community 120 - "Multi-Environment & Production Safety"
Cohesion: 0.12
Nodes (15): Active Engineering Rules, CI/CD, Token & Cost Protection Invariant, Commands, Credentials, Deployment Rules, Disaster Recovery & Rollback Standard, Environment Isolation, Foody Vrinda v3 — Project Commands & Rules (+7 more)

### Community 121 - "run-android.js"
Cohesion: 0.27
Nodes (10): ANDROID_DIR, APK_PATH, __dirname, ensureDeviceReady(), __filename, getConnectedDevices(), log(), main() (+2 more)

### Community 122 - "🌟 Foody Vrinda: System Architecture & Delivery Verification Updates"
Cohesion: 0.22
Nodes (8): 🧪 Build & Quality Verification, 🛡️ Daily Rotating Sarathi Token (`getDailySarathiCode`), 📊 End-to-End Chain-of-Custody Audit Fields, 📌 Executive Summary of System Enhancements, 🌟 Foody Vrinda: System Architecture & Delivery Verification Updates, 📁 Key File Links, 🗄️ Supabase Database Migration DDL, 🔄 Two-Stage OTP Handover Lifecycle

### Community 123 - "test-live-rls-regression.mjs"
Cohesion: 0.28
Nodes (7): anonClient, isBlocked(), isBlockedOrEmpty(), log(), results, rpcFunctions, test()

### Community 124 - "Implementation Sequence"
Cohesion: 0.06
Nodes (32): Anti-Fraud Enforcement Points, Architecture Overview, Core RPCs, Critical Constraints & Indexes, Database Schema Design, Estimated File Count, 🏛️ Foody Vrinda — Digital Dynasty & FV Referral System, Frontend Components (+24 more)

### Community 126 - "runTestSuite"
Cohesion: 0.33
Nodes (4): CDPClient, fetchJson(), runTestSuite(), sleep()

### Community 128 - "OneTimeCode.tsx"
Cohesion: 0.26
Nodes (10): clamp(), MERGE, mix(), OneTimeCode(), OneTimeCodeProps, Otp, Phase, smooth() (+2 more)

### Community 130 - "notification_sound_config.dart"
Cohesion: 0.12
Nodes (16): _cachedSounds, defaultDeliverySound, defaultKitchenSound, defaultOwnerSound, getAssetPath, getChannelId, getChannelName, _getNotificationTypeDisplay (+8 more)

### Community 131 - "2. Step-by-Step Recovery Execution Chain"
Cohesion: 0.17
Nodes (11): 1. DR Acceptance Criteria Chain, 2. Step-by-Step Recovery Execution Chain, 3. Disaster Recovery Log Template, Foody Vrinda — Enterprise Disaster Recovery (DR) Runbook & Drill Protocol, Phase 1: Backup Selection & Integrity Attestation, Phase 2: Isolated Environment Provisioning (Zero Production Touch), Phase 3: Schema & Migration Parity Verification, Phase 4: RLS & Kernel Security Direct SQL Re-Verification (+3 more)

### Community 132 - "verify-delivery-hardened-evidence.js"
Cohesion: 0.32
Nodes (9): banner(), clampServerRadius(), COLORS, computeHaversineKm(), NOTE: delivery_coordinates is intentionally omitted pre-claim, runDeliveryHardeningEvidence(), sanitizeCoordinates(), simulateDiscoveryQuery() (+1 more)

### Community 133 - "static const String"
Cohesion: 0.22
Nodes (8): apiKey, appId, authDomain, FirebaseConfig, messagingSenderId, projectId, storageBucket, static const String

### Community 134 - "seed-synthetic-beta-data.js"
Cohesion: 0.25
Nodes (6): envName, supabase, SYNTHETIC_MENUS, SYNTHETIC_SHOPS, targetKey, targetUrl

### Community 135 - "AuthModal.jsx"
Cohesion: 0.09
Nodes (28): ActiveOrderTrackingModal(), AuthModal(), DESK_CONFIG, NotificationPanel(), OrderHistoryDrawer(), CHEF_TAGS, ReviewModal(), RIDER_TAGS (+20 more)

### Community 136 - "getCachedItem"
Cohesion: 0.15
Nodes (17): calculateAuthoritativeOrderTotals(), claimOrderPickupAtomic(), computeSha256Hex(), createCloudOrder(), dispatchOrderPushNotificationAsync(), generateSecureOrderOTP(), generateWhatsAppOrderShareLink(), getCachedItem() (+9 more)

### Community 137 - "verify-dr-integrity.js"
Cohesion: 0.40
Nodes (3): CRITICAL_TABLES, startTime, supabase

### Community 139 - "runBrowserTests"
Cohesion: 0.36
Nodes (4): CDPClient, fetchJson(), runBrowserTests(), sleep()

### Community 140 - "fv_rewards_sheet.dart"
Cohesion: 0.06
Nodes (34): _activeTab, build, _buildBulletRule, _buildClubTab, _buildHistoryTab, _buildLeagueTab, _buildMetricTile, _buildNavTab (+26 more)

### Community 141 - "test-wallet-multiplex.mjs"
Cohesion: 0.29
Nodes (5): activeWalletSubscriptions, createdChannels, mockSupabase, removedChannels, unsubA

### Community 142 - "run-production-test-audit.mjs"
Cohesion: 0.38
Nodes (4): COLORS, logHeader(), logInfo(), runDatabaseAudit()

### Community 143 - "review_service.dart"
Cohesion: 0.29
Nodes (10): ../config/supabase_config.dart, addReview, getPendingOrderCount, getReviews, hasUserReviewed, ReviewService, streamPendingOrderCount, _supabase (+2 more)

### Community 144 - "release-apk.mjs"
Cohesion: 0.19
Nodes (12): ANDROID_DIR, BUILD_GRADLE_PATH, BUILT_APK_PATH, __dirname, __filename, getGitHubToken(), LATEST_APK_PATH, log() (+4 more)

### Community 145 - "resource_cache_service.dart"
Cohesion: 0.15
Nodes (12): ../config/lottie_assets.dart, dart:developer, DefaultCacheManager, _cacheAsset, cacheImages, _cacheManager, _instance, preCacheResources (+4 more)

### Community 146 - "getCachedShops"
Cohesion: 0.44
Nodes (10): addDeletedShopId(), createCloudShop(), deleteCloudShop(), getCachedShops(), getCloudShops(), getDeletedShopIds(), normalizeShop(), removeDeletedShopId() (+2 more)

### Community 147 - "verify-supabase-parity.js"
Cohesion: 0.22
Nodes (7): BACKUP_PATH, baselineExports, currentExports, __dirname, __filename, missingExports, TARGET_PATH

### Community 149 - "Foody Vrinda animations (React + Capacitor)"
Cohesion: 0.29
Nodes (6): 1. Copy, 2. Fonts (important in a Capacitor app: it must work offline), 3. Capacitor: native splash -> animated React splash, 4. Order-done hop (web + app), Foody Vrinda animations (React + Capacitor), Notes

### Community 150 - "RollingCounter.tsx"
Cohesion: 0.36
Nodes (6): clamp(), Col, Counter(), RollingCounter, springOf(), stillness()

### Community 151 - "ErrorBoundary"
Cohesion: 0.21
Nodes (4): ErrorBoundary, createFoodyHop(), hopMarkup, FoodyOrderHop

### Community 152 - "StatelessWidget"
Cohesion: 0.08
Nodes (24): _CashSummaryCard, _CompletedOrderTile, _FilterChip, _AllTimeCard, _CashSummaryCard, _LocationButton, _RecentDeliveryTile, _StatItem (+16 more)

### Community 153 - "backHandlerService.js"
Cohesion: 0.29
Nodes (5): backHandlers, executeTopBackHandler(), handleKeyboardOrInputDismiss(), initKeyboardListeners(), shouldAllowAppExit()

### Community 156 - "test-combo-engine.mjs"
Cohesion: 0.53
Nodes (5): assert(), calculateComboFinancials(), runComboEngineTests(), supabase, validateComboPayload()

### Community 158 - "foodySplash.core.js"
Cohesion: 0.23
Nodes (8): ACD, Cp, createFoodySplash(), DOTD, G, splashMarkup, uTable, FoodySplash()

### Community 159 - "run-all-tests.mjs"
Cohesion: 0.67
Nodes (3): main(), runChildSuite(), SUITES

### Community 160 - "order_tracking_screen.dart"
Cohesion: 0.09
Nodes (24): ../../config/telegram_page_route.dart, isInline, OrderHistoryScreen, build, _buildDeliveryMap, _buildInfoRow, _buildSimpleCard, _calculateETA (+16 more)

### Community 161 - "test-user-flow-e2e.mjs"
Cohesion: 0.67
Nodes (3): assert(), runRealUserFlowTests(), supabase

### Community 163 - "../config/theme.dart"
Cohesion: 0.06
Nodes (31): Color?, ../config/theme.dart, AppButton, backgroundColor, build, DangerButton, _getButtonColor, height (+23 more)

### Community 165 - "runAtomicShopDeletionTests"
Cohesion: 0.67
Nodes (3): assert(), runAtomicShopDeletionTests(), supabase

### Community 166 - "test-developer-api-sync.mjs"
Cohesion: 0.67
Nodes (3): assert(), runDeveloperApiSyncTests(), supabase

### Community 167 - "package:flutter/material.dart"
Cohesion: 0.20
Nodes (8): EmojiToIcon, getIcon, getIconWidget, main, package:flutter/material.dart, package:flutter_test/flutter_test.dart, package:foody_vrinda/main.dart, package:iconsax/iconsax.dart

### Community 168 - "OwnerView.jsx"
Cohesion: 0.11
Nodes (33): testRealtime(), ActiveAlarmBanner(), DynamicToast(), NativeTimePicker(), CURATED_CRAVINGS_VISUALS, POPULAR_CATEGORIES, useAuth(), DEFAULT_SEEDS (+25 more)

## Knowledge Gaps
- **1659 isolated node(s):** `fast_transcribe.sh script`, `AppConfig`, `developerEmail`, `developerPassword`, `defaultShopImage` (+1654 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **34 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `STAFF_ROLES` connect `CustomerView.jsx` to `users.service.js`, `dispatchSafeEvent`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `AuthProvider` connect `AuthProvider` to `developer_panel.dart`, `order_tracking_screen.dart`, `login_screen.dart`, `home_screen.dart`, `cart_screen.dart`, `delivery_dashboard_view.dart`, `fv_rewards_sheet.dart`, `delivery_view.dart`, `kitchen_alarm_service.dart`, `dashboard_view.dart`, `kitchen_view.dart`, `auth_provider.dart`, `telegram_page_route.dart`, `StatefulWidget`, `StatelessWidget`, `cart_provider.dart`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `NativeNotificationService` connect `NativeNotificationService` to `DeveloperView.jsx`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `fast_transcribe.sh script`, `AppConfig`, `developerEmail` to the rest of the system?**
  _1659 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `developer_panel.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.012121212121212121 - nodes in this community are weakly interconnected._
- **Should `theme.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._
- **Should `user_preferences_provider.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._