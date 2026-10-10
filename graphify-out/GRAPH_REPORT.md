# Graph Report - Foody-Vrinda  (2026-10-10)

## Corpus Check
- 209 files · ~369,196 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2890 nodes · 5095 edges · 151 communities (117 shown, 34 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.59)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `117e7620`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- developer_panel.dart
- theme.dart
- notification_sound_settings.dart
- hit_soochi_service.dart
- lottie_assets.dart
- home_screen.dart
- shop_service.dart
- order_model.dart
- shop_model.dart
- cart_screen.dart
- presetDishes.js
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
- StatelessWidget
- order_tracking_screen.dart
- String?
- main.dart
- order_notification_manager.dart
- login_screen.dart
- review_service.dart
- menu_screen.dart
- supabase.monolith.backup.js
- delivery_alarm_service.dart
- app_config.dart
- supabase_service.dart
- StatefulWidget
- NotificationManager
- ../config/theme.dart
- OwnerView.jsx
- cash_transaction_model.dart
- buttons.dart
- kitchen_alarm_service.dart
- search_service.dart
- NativeNotificationService
- App.jsx
- package:audioplayers_web/audioplayers_web.dart
- telegram_page_route.dart
- resource_cache_service.dart
- payment_service.dart
- supabase_config.dart
- FastOrderMonitor
- verify_roles_and_db_sync.mjs
- cart_item_model.dart
- foody_cache_service.dart
- static const String
- 🏛️ MASTER UI/UX & FULL-STACK APP ENGINEERING PLAYBOOK
- Foody Vrinda - Cloud Kitchen Mobile App
- 🔔 Custom Notification Sounds - Implementation Summary
- sw.js
- 🔔 Custom Notification Sounds Setup Guide
- isTableMissing
- 🔔 Custom Notification Sounds - Quick Reference
- @example
- setup_notification_sounds.sh
- notification_settings_screen.dart
- notification_sound_config.dart
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
- user_preferences_provider.dart
- CustomerView.jsx
- time_period_selector.dart
- fv_wallet_service.dart
- dispatchSafeEvent
- AuthModal.jsx
- 🛡️ Foody Vrinda v5.3.1 — Core Production Security Validation Complete
- dispatchSafeEvent
- .ensureSubscribed
- firebase.js
- .ensureSubscribed
- Foody Vrinda — Design System & Theme Architecture Specification
- orders.service.js
- test-shop-isolation.mjs
- Multi-Environment & Production Safety
- run-android.js
- 🌟 Foody Vrinda: System Architecture & Delivery Verification Updates
- test-live-rls-regression.mjs
- Implementation Sequence
- fast_transcribe.sh
- notification_model.dart
- fvWalletService.js
- test_push_workflow.mjs
- cache.js
- 2. Step-by-Step Recovery Execution Chain
- verify-delivery-hardened-evidence.js
- AuthContext.jsx
- seed-synthetic-beta-data.js
- pressable_scale.dart
- getCachedItem
- verify-dr-integrity.js
- lint-migrations.js
- runBrowserTests
- AuthProvider
- test-wallet-multiplex.mjs
- operations.service.js
- package:flutter/material.dart
- release-apk.mjs
- review_model.dart
- getCachedShops
- verify-supabase-parity.js
- CashStatus
- PaymentMethod

## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 50 edges
2. `dispatchSafeEvent()` - 36 edges
3. `DeveloperView()` - 34 edges
4. `dispatchSafeEvent()` - 30 edges
5. `useAuth()` - 27 edges
6. `setCachedItem()` - 26 edges
7. `NativeNotificationService` - 25 edges
8. `updateCloudUser()` - 23 edges
9. `getDefaultActiveShopId()` - 21 edges
10. `supabase` - 21 edges

## Surprising Connections (you probably didn't know these)
- `React + Vite Entry Point` --conceptually_related_to--> `Foody Vrinda - Authentic Satvik Cloud Kitchen`  [INFERRED]
  foody_vrinda_v3/index.html → README.md
- `_loadStats` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/dashboard/dashboard_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `build` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/kitchen/kitchen_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `_initNotificationListener` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/kitchen/kitchen_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `processOfflineOrderQueue()` --calls--> `updateCloudOrderStatus()`  [EXTRACTED]
  foody_vrinda_v3/src/services/supabase/riders.service.js → foody_vrinda_v3/src/services/supabase/orders.service.js

## Import Cycles
- None detected.

## Communities (151 total, 34 thin omitted)

### Community 0 - "developer_panel.dart"
Cohesion: 0.01
Nodes (162): ../../config/menu_images.dart, _addStaff, _addStaffUser, _allOrders, _allUsers, amount, _applyHistoryFilter, _authService (+154 more)

### Community 1 - "theme.dart"
Cohesion: 0.04
Nodes (53): accentCoral, accentOrange, accentYellow, AppTheme, background, border, borderColor, borderLight (+45 more)

### Community 2 - "notification_sound_settings.dart"
Cohesion: 0.11
Nodes (18): _audioPlayer, availableSounds, build, _buildRoleCard, _buildTestButton, createState, dispose, _getRoleIcon (+10 more)

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
Cohesion: 0.05
Nodes (39): cashCollectedAt, cashSettledAt, collectedBy, contactAttempts, copyWith, createdAt, customerLatitude, customerLongitude (+31 more)

### Community 8 - "shop_model.dart"
Cohesion: 0.05
Nodes (39): address, AlarmSettings, closeTime, copyWith, createdAt, daysOpen, deliveryCharge, deliveryReady (+31 more)

### Community 9 - "cart_screen.dart"
Cohesion: 0.05
Nodes (39): ../auth/login_screen.dart, _addressController, _buildEmptyCart, _buildPaymentChip, _buildPaymentChipWithCallback, _buildPaymentOption, _buildPriceRow, _codEnabled (+31 more)

### Community 10 - "presetDishes.js"
Cohesion: 0.36
Nodes (7): activePresetDishes, DEFAULT_PRESET_DISHES, findPresetByKeyword(), getPresetDishById(), getPresetDishes(), loadPresetDishes(), PRESET_CATEGORIES

### Community 11 - "delivery_dashboard_view.dart"
Cohesion: 0.05
Nodes (38): amount, _buildAllTimeStats, _buildCashPanel, _buildFilterChip, _buildHeader, _buildLegendItem, _buildLocationPanel, _buildTodayStats (+30 more)

### Community 12 - "design_system.dart"
Cohesion: 0.06
Nodes (34): dart:math, accentOrangeDark, accentOrangeLight, ambientGoldGradient, borderSubtle, bounceClickable, brightness, charcoalDark (+26 more)

### Community 13 - "delivery_view.dart"
Cohesion: 0.06
Nodes (35): _buildAlarmBanner, _buildAllShopsDelivery, _buildHeader, _buildMultiShopDelivery, _buildOrdersList, _buildSingleShopDelivery, _callCustomer, _checkForNewOrders (+27 more)

### Community 14 - "NotificationService"
Cohesion: 0.09
Nodes (34): FlutterLocalNotificationsPlugin, completeOrderWorkflow, createOrderWithNotifications, initializeNotifications, _notificationService, NotificationUsageExample, notifyCustomerOfOrderStatus, notifyDeliveryStaffOfReadyOrder (+26 more)

### Community 15 - "dashboard_view.dart"
Cohesion: 0.07
Nodes (30): _acknowledgeReturn, amount, _buildCashManagement, _buildChartsRow, _buildHeader, _buildKPICards, _buildOrderHistory, _buildOrderStatusCard (+22 more)

### Community 16 - "kitchen_view.dart"
Cohesion: 0.07
Nodes (30): _alarmService, _bellAnimation, _bellController, build, _buildAlarmBanner, _buildHeader, createState, dispose (+22 more)

### Community 17 - "animations.dart"
Cohesion: 0.06
Nodes (31): actionLabel, animate, animationType, _bounceAnimation, build, CelebrationOverlay, child, color (+23 more)

### Community 18 - "auth_provider.dart"
Cohesion: 0.06
Nodes (35): AuthService, AuthStatus get, AuthStatus, _clearCachedUserData, clearError, _error, _initAuth, isAdmin (+27 more)

### Community 19 - "order_service.dart"
Cohesion: 0.10
Nodes (33): collectCash, createOrder, deleteCashTransaction, deleteOrder, getAllOrders, getCashTransactions, getCompletedOrders, getDeliveryOrders (+25 more)

### Community 20 - "cards.dart"
Cohesion: 0.06
Nodes (31): EdgeInsetsGeometry?, address, AppCard, backgroundColor, build, _buildPlaceholder, child, cuisines (+23 more)

### Community 21 - "user_model.dart"
Cohesion: 0.14
Nodes (26): canAccessDevPanel, copyWith, createdAt, deliveryAddress, devPermissions, displayName, email, fromJson (+18 more)

### Community 22 - "location_service.dart"
Cohesion: 0.07
Nodes (27): _apiKey, _calculateStraightLineDistance, description, distanceMeters, DistanceResult, distanceText, durationSeconds, durationText (+19 more)

### Community 23 - "fv_wallet_model.dart"
Cohesion: 0.06
Nodes (35): amount, availablePoints, balanceAfter, channelType, createdAt, description, displayName, fromJson (+27 more)

### Community 24 - "auth_service.dart"
Cohesion: 0.17
Nodes (11): ../../config/app_config.dart, AuthService, getAllUsers, getUserData, _supabaseService, updateUserProfile, updateUserRole, SupabaseService (+3 more)

### Community 25 - "location_picker_dialog.dart"
Cohesion: 0.07
Nodes (27): dart:ui, _addressDisplay, build, _buildAddressCard, _buildCenterPin, _buildFooter, _buildHeader, _buildLoadingState (+19 more)

### Community 26 - "search_screen.dart"
Cohesion: 0.07
Nodes (29): FocusNode, build, _buildBody, _buildCategoryChip, _buildEmptyState, _buildNoResults, _buildPopularShopsList, _buildPopularShopTile (+21 more)

### Community 27 - "cart_provider.dart"
Cohesion: 0.09
Nodes (27): addItem, CartProvider, clear, clearAndSetShop, decrementItem, formattedTotal, getItemQuantity, hasItem (+19 more)

### Community 28 - "address_autocomplete_field.dart"
Cohesion: 0.07
Nodes (27): _inputDecoration, AddressAutocompleteField, _AddressAutocompleteFieldState, build, controller, createState, _debounce, decoration (+19 more)

### Community 29 - "StatelessWidget"
Cohesion: 0.05
Nodes (44): OrderModel, OrderStatus, OrderStatusExtension, _CashSummaryCard, _CompletedOrderTile, _FilterChip, _KPICard, _AllTimeCard (+36 more)

### Community 30 - "order_tracking_screen.dart"
Cohesion: 0.09
Nodes (24): ../../config/telegram_page_route.dart, isInline, OrderHistoryScreen, build, _buildDeliveryMap, _buildInfoRow, _buildSimpleCard, _calculateETA (+16 more)

### Community 31 - "String?"
Cohesion: 0.09
Nodes (22): double?, category, copyWith, createdAt, description, formattedOriginalPrice, formattedPrice, fromMap (+14 more)

### Community 32 - "main.dart"
Cohesion: 0.09
Nodes (21): _bounceAnimation, _bounceController, build, createState, dispose, _fadeAnimation, _fadeController, FoodyVrindaApp (+13 more)

### Community 33 - "order_notification_manager.dart"
Cohesion: 0.09
Nodes (22): delivery_alarm_service.dart, _currentShopId, _currentUserId, _currentUserRole, _handleNewOrderArrival, _handleOrdersSnapshot, _handleOrderStatusTransition, _initNotifications (+14 more)

### Community 34 - "login_screen.dart"
Cohesion: 0.05
Nodes (44): _addressEditController, _buildAlertBanner, _buildAuthenticatedProfileView, _buildHeaderRow, _buildInputField, _buildMethodTab, _buildPasswordField, _buildRoleChip (+36 more)

### Community 35 - "review_service.dart"
Cohesion: 0.29
Nodes (10): ../config/supabase_config.dart, addReview, getPendingOrderCount, getReviews, hasUserReviewed, ReviewService, streamPendingOrderCount, _supabase (+2 more)

### Community 36 - "menu_screen.dart"
Cohesion: 0.10
Nodes (20): ../cart/cart_screen.dart, ../../config/design_system.dart, _buildCategoryTabBar, _buildInfoPanel, _buildReviewTile, createState, _formatDate, MenuScreen (+12 more)

### Community 37 - "supabase.monolith.backup.js"
Cohesion: 0.05
Nodes (33): ALLOWED_ORDER_TRANSITIONS, broadcastAlarmEvent(), CACHE_TTL_MS, calculateDistanceInMeters(), calculateDistanceKm(), calculateOptimalDispatchWindow(), checkDeliveryGeofence(), COMPLETE_FOODY_DATABASE_SCHEMA_SQL (+25 more)

### Community 38 - "delivery_alarm_service.dart"
Cohesion: 0.11
Nodes (18): ChangeNotifier, acknowledgeAll, acknowledgeOrder, _audioPlayer, DeliveryAlarmService, dispose, initialize, _instance (+10 more)

### Community 39 - "app_config.dart"
Cohesion: 0.09
Nodes (20): adminEmails, AppConfig, appName, appTagline, appVersion, defaultFoodImage, defaultShopImage, defaultUserAvatar (+12 more)

### Community 40 - "supabase_service.dart"
Cohesion: 0.06
Nodes (34): _client, createCloudUser, createMenuItem, createOffer, createOrder, createShop, deleteMenuItem, deleteOffer (+26 more)

### Community 41 - "StatefulWidget"
Cohesion: 0.11
Nodes (33): SplashScreen, _SplashScreenState, _DeliveryMapView, _DeliveryMapViewState, DeveloperPanel, _DeveloperPanelState, _FullShopDashboard, _FullShopDashboardState (+25 more)

### Community 43 - "../config/theme.dart"
Cohesion: 0.11
Nodes (17): ../config/theme.dart, AppDropdown, AppInputField, build, controller, enabled, hintText, items (+9 more)

### Community 44 - "OwnerView.jsx"
Cohesion: 0.09
Nodes (45): MapPicker(), ActiveAlarmBanner(), DynamicToast(), NativeTimePicker(), SearchableDropdown(), POPULAR_CATEGORIES, UnifiedSearchModal(), useAuth() (+37 more)

### Community 45 - "cash_transaction_model.dart"
Cohesion: 0.13
Nodes (14): amount, CashTransactionModel, CashTransactionType, formattedAmount, fromMap, id, notes, orderId (+6 more)

### Community 46 - "buttons.dart"
Cohesion: 0.12
Nodes (16): Color?, AppButton, backgroundColor, build, DangerButton, _getButtonColor, height, icon (+8 more)

### Community 47 - "kitchen_alarm_service.dart"
Cohesion: 0.19
Nodes (18): acknowledgeAll, acknowledgeOrder, _alarmSoundFile, _audioPlayer, dispose, initialize, _instance, isAlarmActive (+10 more)

### Community 48 - "search_service.dart"
Cohesion: 0.10
Nodes (32): ShopModel, HitSoochiService, original, RecommendationResponse, confidence, detectedIntent, enhancedSearch, EnhancedSearchResponse (+24 more)

### Community 50 - "App.jsx"
Cohesion: 0.06
Nodes (47): deliveryAliases, mockSessionStorage, mockStorage, negativeRoles, ownerAliases, progressAfterStep1, restaurantAliases, App() (+39 more)

### Community 52 - "telegram_page_route.dart"
Cohesion: 0.22
Nodes (17): child, TelegramPageRoute, UserPreferencesProvider, _showLoginRequiredDialog, _openOrdersOnMap, _buildCustomerHomeTab, _buildHeader, _buildOfferCard (+9 more)

### Community 53 - "resource_cache_service.dart"
Cohesion: 0.15
Nodes (12): ../config/lottie_assets.dart, dart:developer, DefaultCacheManager, _cacheAsset, cacheImages, _cacheManager, _instance, preCacheResources (+4 more)

### Community 54 - "payment_service.dart"
Cohesion: 0.15
Nodes (12): bool get, dispose, initialize, _initialized, _instance, isSupported, isWeb, openCheckout (+4 more)

### Community 55 - "supabase_config.dart"
Cohesion: 0.15
Nodes (12): loggedUsersTable, menusTable, notificationsTable, offersTable, ordersTable, reviewsTable, rolesTable, shopsTable (+4 more)

### Community 57 - "verify_roles_and_db_sync.mjs"
Cohesion: 0.50
Nodes (4): recordTest(), results, runTestSuite(), supabase

### Community 58 - "cart_item_model.dart"
Cohesion: 0.20
Nodes (9): double get, CartItemModel, copyWith, formattedTotal, menuItem, quantity, total, menu_item_model.dart (+1 more)

### Community 59 - "foody_cache_service.dart"
Cohesion: 0.16
Nodes (22): dart:convert, foody_cache_service.dart, _cacheExpiry, cacheMenuItems, cacheShops, clearAllCache, FoodyCacheService, getCachedMenuItems (+14 more)

### Community 60 - "static const String"
Cohesion: 0.22
Nodes (8): apiKey, appId, authDomain, FirebaseConfig, messagingSenderId, projectId, storageBucket, static const String

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

### Community 72 - "notification_settings_screen.dart"
Cohesion: 0.12
Nodes (16): AudioPlayer, class, ../../config/notification_sound_config.dart, _audioPlayer, _availableSounds, build, _buildSoundTile, createState (+8 more)

### Community 73 - "notification_sound_config.dart"
Cohesion: 0.12
Nodes (16): _cachedSounds, defaultDeliverySound, defaultKitchenSound, defaultOwnerSound, getAssetPath, getChannelId, getChannelName, _getNotificationTypeDisplay (+8 more)

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

### Community 106 - "user_preferences_provider.dart"
Cohesion: 0.11
Nodes (17): _addressLabel, _customGreetingName, _deliveryInstructions, _dietaryFilter, _keyAddressLabel, _keyCustomGreetingName, _keyDeliveryInstructions, _keyDietaryFilter (+9 more)

### Community 107 - "CustomerView.jsx"
Cohesion: 0.09
Nodes (28): MockLocalStorage, mockStorage, ActiveOrderCapsule(), CompleteProfileModal(), BouncingLoader(), StyledWrapper, useGeolocation(), fetchAddressSuggestions() (+20 more)

### Community 108 - "time_period_selector.dart"
Cohesion: 0.13
Nodes (14): build, isSelected, onChanged, onTap, period, selectedPeriods, showHeader, _TimePeriodCard (+6 more)

### Community 109 - "fv_wallet_service.dart"
Cohesion: 0.10
Nodes (20): dart:async, _client, exchangeRate, FVWalletService, generateWhatsAppShareUrl, getCommunityLinks, getLeaderboard, getWalletDashboard (+12 more)

### Community 110 - "dispatchSafeEvent"
Cohesion: 0.30
Nodes (20): adminBlockUser(), adminRevokeUser(), adminUnblockUser(), createCloudReview(), createCloudUser(), deleteCloudUser(), dispatchSafeEvent(), getCachedUsers() (+12 more)

### Community 111 - "AuthModal.jsx"
Cohesion: 0.13
Nodes (19): ActiveOrderTrackingModal(), AuthModal(), DESK_CONFIG, Header(), NotificationPanel(), OrderHistoryDrawer(), SoundTrialsModal(), SocialLinksBar() (+11 more)

### Community 112 - "🛡️ Foody Vrinda v5.3.1 — Core Production Security Validation Complete"
Cohesion: 0.07
Nodes (26): 1. Executive Summary, 2. Test Execution Matrix (22 / 22 Regression Tests), 3. Security Property Verification & Evidence Status, 4.1 Request Processing & Verification Pipeline, 4.2 Separation of Privilege & Execution Pipelines, 4. Architectural Analysis: End-to-End Control Flow, 5.1 Caller Identity Binding (`claim_order_pickup_atomic` & `verify_delivery_otp_atomic`), 5.2 One-Time Use OTP Verification (+18 more)

### Community 113 - "dispatchSafeEvent"
Cohesion: 0.17
Nodes (30): QUANTITIES, QuantityPickerSheet(), dispatchSafeEvent(), invalidateCache(), _forbiddenWriteTables, isTableError(), isTableMissing(), markTableMissing() (+22 more)

### Community 114 - ".ensureSubscribed"
Cohesion: 0.15
Nodes (10): claimDeliveryOrder(), invalidateCache(), RealtimeMultiplexer, subscribeCloudMenus(), subscribeCloudNotifications(), subscribeCloudOffers(), subscribeCloudOrders(), subscribeCloudShops() (+2 more)

### Community 115 - "firebase.js"
Cohesion: 0.50
Nodes (3): app, auth, db

### Community 117 - "Foody Vrinda — Design System & Theme Architecture Specification"
Cohesion: 0.08
Nodes (23): 1. Executive Summary & Philosophy, 2.1 CSS Semantic Tokens Definition, 2. Global Semantic Color Token Matrix, 3.1 Typography Scale & Weights, 3.2 Spacing & Padding Scale, 3.3 Component Dimensions & Touch Targets, 3.4 Iconography Sizing Matrix, 3. Comprehensive Sizing, Spacing & Dimension Matrix (+15 more)

### Community 118 - "orders.service.js"
Cohesion: 0.15
Nodes (18): COLORS, runAdversarialTestSuite(), section(), COLORS, pass(), runTestSuite(), section(), getCachedItem() (+10 more)

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

### Community 126 - "notification_model.dart"
Cohesion: 0.12
Nodes (16): copyWith, createdAt, fromMap, fromString, id, isRead, message, NotificationModel (+8 more)

### Community 128 - "fvWalletService.js"
Cohesion: 0.09
Nodes (20): filtered, rawMockDbLeaderboard, FVRewardsDashboard(), AppUpdateService, activeWalletSubscriptions, FV_EXCHANGE_RATE, FV_POINTS_PER_RUPEE, generateWhatsAppShareUrl() (+12 more)

### Community 130 - "cache.js"
Cohesion: 0.25
Nodes (17): addDeletedShopId(), CACHE_TTL_MS, calculateDistanceKm(), getCachedShops(), getDeletedShopIds(), getRecommendedRiders(), memoryCache, memoryStore (+9 more)

### Community 131 - "2. Step-by-Step Recovery Execution Chain"
Cohesion: 0.17
Nodes (11): 1. DR Acceptance Criteria Chain, 2. Step-by-Step Recovery Execution Chain, 3. Disaster Recovery Log Template, Foody Vrinda — Enterprise Disaster Recovery (DR) Runbook & Drill Protocol, Phase 1: Backup Selection & Integrity Attestation, Phase 2: Isolated Environment Provisioning (Zero Production Touch), Phase 3: Schema & Migration Parity Verification, Phase 4: RLS & Kernel Security Direct SQL Re-Verification (+3 more)

### Community 132 - "verify-delivery-hardened-evidence.js"
Cohesion: 0.32
Nodes (9): banner(), clampServerRadius(), COLORS, computeHaversineKm(), NOTE: delivery_coordinates is intentionally omitted pre-claim, runDeliveryHardeningEvidence(), sanitizeCoordinates(), simulateDiscoveryQuery() (+1 more)

### Community 133 - "AuthContext.jsx"
Cohesion: 0.12
Nodes (43): PRESET_DISHES, AuthContext, AUTHORIZED_ADMIN_EMAILS, AUTHORIZED_DEV_EMAILS, AuthProvider(), isAdminUser(), isDeveloperUser(), isStaffRole() (+35 more)

### Community 134 - "seed-synthetic-beta-data.js"
Cohesion: 0.25
Nodes (6): envName, supabase, SYNTHETIC_MENUS, SYNTHETIC_SHOPS, targetKey, targetUrl

### Community 135 - "pressable_scale.dart"
Cohesion: 0.10
Nodes (21): Animation, AnimationController, Duration, _animation, build, child, _controller, createState (+13 more)

### Community 136 - "getCachedItem"
Cohesion: 0.15
Nodes (17): calculateAuthoritativeOrderTotals(), claimOrderPickupAtomic(), computeSha256Hex(), createCloudOrder(), dispatchOrderPushNotificationAsync(), generateSecureOrderOTP(), generateWhatsAppOrderShareLink(), getCachedItem() (+9 more)

### Community 137 - "verify-dr-integrity.js"
Cohesion: 0.40
Nodes (3): CRITICAL_TABLES, startTime, supabase

### Community 139 - "runBrowserTests"
Cohesion: 0.36
Nodes (4): CDPClient, fetchJson(), runBrowserTests(), sleep()

### Community 140 - "AuthProvider"
Cohesion: 0.09
Nodes (22): AuthProvider, build, _handleEmailSubmit, _handleGoogleSignIn, _handlePhoneSubmit, initState, _saveProfileEdits, build (+14 more)

### Community 141 - "test-wallet-multiplex.mjs"
Cohesion: 0.29
Nodes (5): activeWalletSubscriptions, createdChannels, mockSupabase, removedChannels, unsubA

### Community 142 - "operations.service.js"
Cohesion: 0.21
Nodes (12): CHEF_TAGS, ReviewModal(), RIDER_TAGS, getDefaultActiveShopId(), safeStorage, getRiderCashLedger(), getUserTrustScore(), recordCashSettlement() (+4 more)

### Community 143 - "package:flutter/material.dart"
Cohesion: 0.20
Nodes (8): EmojiToIcon, getIcon, getIconWidget, main, package:flutter/material.dart, package:flutter_test/flutter_test.dart, package:foody_vrinda/main.dart, package:iconsax/iconsax.dart

### Community 144 - "release-apk.mjs"
Cohesion: 0.19
Nodes (12): ANDROID_DIR, BUILD_GRADLE_PATH, BUILT_APK_PATH, __dirname, __filename, getGitHubToken(), LATEST_APK_PATH, log() (+4 more)

### Community 145 - "review_model.dart"
Cohesion: 0.15
Nodes (12): DateTime?, comment, createdAt, fromMap, id, rating, ReviewModel, shopId (+4 more)

### Community 146 - "getCachedShops"
Cohesion: 0.44
Nodes (10): addDeletedShopId(), createCloudShop(), deleteCloudShop(), getCachedShops(), getCloudShops(), getDeletedShopIds(), normalizeShop(), removeDeletedShopId() (+2 more)

### Community 147 - "verify-supabase-parity.js"
Cohesion: 0.22
Nodes (7): BACKUP_PATH, baselineExports, currentExports, __dirname, __filename, missingExports, TARGET_PATH

## Knowledge Gaps
- **1562 isolated node(s):** `fast_transcribe.sh script`, `AppConfig`, `developerEmail`, `developerPassword`, `defaultShopImage` (+1557 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **34 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `AuthProvider` to `developer_panel.dart`, `login_screen.dart`, `home_screen.dart`, `delivery_alarm_service.dart`, `cart_screen.dart`, `StatefulWidget`, `delivery_dashboard_view.dart`, `delivery_view.dart`, `dashboard_view.dart`, `kitchen_view.dart`, `auth_provider.dart`, `telegram_page_route.dart`, `cart_provider.dart`, `order_tracking_screen.dart`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `STAFF_ROLES` connect `AuthContext.jsx` to `.ensureSubscribed`, `dispatchSafeEvent`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `SupabaseService` connect `auth_service.dart` to `order_notification_manager.dart`, `review_service.dart`, `shop_service.dart`, `supabase_service.dart`, `search_service.dart`, `auth_provider.dart`, `order_service.dart`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `fast_transcribe.sh script`, `AppConfig`, `developerEmail` to the rest of the system?**
  _1562 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `developer_panel.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.012269938650306749 - nodes in this community are weakly interconnected._
- **Should `theme.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._
- **Should `notification_sound_settings.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._