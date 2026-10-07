# Graph Report - Foody-Vrinda  (2026-10-05)

## Corpus Check
- 192 files · ~329,341 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2646 nodes · 4477 edges · 146 communities (110 shown, 36 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.64)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fb44cb14`
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
- AuthProvider
- delivery_alarm_service.dart
- app_config.dart
- supabase_service.dart
- order_widgets.dart
- NotificationManager
- inputs.dart
- TransportView.jsx
- cash_transaction_model.dart
- buttons.dart
- kitchen_alarm_service.dart
- search_service.dart
- NativeNotificationService
- UnifiedSearchModal.jsx
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
- supabase.js
- Foody Vrinda - Cloud Kitchen Mobile App
- 🔔 Custom Notification Sounds - Implementation Summary
- sw.js
- 🔔 Custom Notification Sounds Setup Guide
- test-role-and-tutorial.mjs
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
- OwnerView.jsx
- AuthModal.jsx
- 🛡️ Foody Vrinda v5.3.1 — Core Production Security Validation Complete
- .ensureSubscribed
- getCachedShops
- firebase.js
- package:flutter/material.dart
- Foody Vrinda — Design System & Theme Architecture Specification
- App.jsx
- test-shop-isolation.mjs
- Multi-Environment & Production Safety
- run-android.js
- 🌟 Foody Vrinda: System Architecture & Delivery Verification Updates
- test-live-rls-regression.mjs
- Implementation Sequence
- fast_transcribe.sh
- AppUpdateService
- fvWalletService.js
- test_push_workflow.mjs
- useBottomSheetDrag
- 2. Step-by-Step Recovery Execution Chain
- verify-delivery-hardened-evidence.js
- DeveloperView.jsx
- seed-synthetic-beta-data.js
- ErrorBoundary
- StatefulWidget
- verify-dr-integrity.js
- lint-migrations.js
- runBrowserTests
- pressable_scale.dart
- test-wallet-multiplex.mjs
- MockLocalStorage
- notification_usage_example.dart
- CashStatus
- PaymentMethod

## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 50 edges
2. `DeveloperView()` - 34 edges
3. `dispatchSafeEvent()` - 30 edges
4. `useAuth()` - 27 edges
5. `NativeNotificationService` - 25 edges
6. `setCachedItem()` - 22 edges
7. `TransportView()` - 21 edges
8. `updateCloudUser()` - 20 edges
9. `CustomerView()` - 20 edges
10. `OwnerView()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `React + Vite Entry Point` --conceptually_related_to--> `Foody Vrinda - Authentic Satvik Cloud Kitchen`  [INFERRED]
  foody_vrinda_v3/index.html → README.md
- `_showSettlementConfirm` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/dashboard/dashboard_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `build` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/kitchen/kitchen_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `_initNotificationListener` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/kitchen/kitchen_view.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `Kitchen Entry Point` --references--> `Firebase BaaS`  [EXTRACTED]
  kitchen.html → README.md

## Import Cycles
- None detected.

## Communities (146 total, 36 thin omitted)

### Community 0 - "developer_panel.dart"
Cohesion: 0.01
Nodes (162): ../../config/menu_images.dart, _addStaff, _addStaffUser, _allOrders, _allUsers, amount, _applyHistoryFilter, _authService (+154 more)

### Community 1 - "theme.dart"
Cohesion: 0.04
Nodes (53): accentCoral, accentOrange, accentYellow, AppTheme, background, border, borderColor, borderLight (+45 more)

### Community 2 - "notification_sound_settings.dart"
Cohesion: 0.10
Nodes (20): _audioPlayer, availableSounds, build, _buildRoleCard, _buildTestButton, createState, dispose, _getRoleIcon (+12 more)

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
Cohesion: 0.21
Nodes (15): activePresetDishes, DEFAULT_PRESET_DISHES, findPresetByKeyword(), getPresetDishById(), getPresetDishes(), loadPresetDishes(), PRESET_CATEGORIES, createCloudPreset() (+7 more)

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
Cohesion: 0.17
Nodes (20): FlutterLocalNotificationsPlugin, cancelAllNotifications, cancelNotification, _getAndroidDetails, _getIOSDetails, initialize, _instance, _isInitialized (+12 more)

### Community 15 - "dashboard_view.dart"
Cohesion: 0.06
Nodes (31): _acknowledgeReturn, amount, _buildCashManagement, _buildChartsRow, _buildHeader, _buildKPICards, _buildOrderHistory, _buildOrderStatusCard (+23 more)

### Community 16 - "kitchen_view.dart"
Cohesion: 0.07
Nodes (29): _alarmService, _bellAnimation, _bellController, build, _buildAlarmBanner, _buildHeader, createState, dispose (+21 more)

### Community 17 - "animations.dart"
Cohesion: 0.06
Nodes (31): actionLabel, animate, animationType, _bounceAnimation, build, CelebrationOverlay, child, color (+23 more)

### Community 18 - "auth_provider.dart"
Cohesion: 0.06
Nodes (35): AuthService, AuthStatus get, AuthStatus, _clearCachedUserData, clearError, _error, _initAuth, isAdmin (+27 more)

### Community 19 - "order_service.dart"
Cohesion: 0.10
Nodes (32): collectCash, createOrder, deleteCashTransaction, deleteOrder, getAllOrders, getCashTransactions, getCompletedOrders, getDeliveryOrders (+24 more)

### Community 20 - "cards.dart"
Cohesion: 0.06
Nodes (31): EdgeInsetsGeometry?, address, AppCard, backgroundColor, build, _buildPlaceholder, child, cuisines (+23 more)

### Community 21 - "user_model.dart"
Cohesion: 0.05
Nodes (54): DateTime?, copyWith, createdAt, fromMap, fromString, id, isRead, message (+46 more)

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
Nodes (27): _addressDisplay, build, _buildAddressCard, _buildCenterPin, _buildFooter, _buildHeader, _buildLoadingState, _buildLocationFAB (+19 more)

### Community 26 - "search_screen.dart"
Cohesion: 0.07
Nodes (29): FocusNode, build, _buildBody, _buildCategoryChip, _buildEmptyState, _buildNoResults, _buildPopularShopsList, _buildPopularShopTile (+21 more)

### Community 27 - "cart_provider.dart"
Cohesion: 0.09
Nodes (26): addItem, CartProvider, clear, clearAndSetShop, decrementItem, formattedTotal, getItemQuantity, hasItem (+18 more)

### Community 28 - "address_autocomplete_field.dart"
Cohesion: 0.07
Nodes (27): dart:ui, _inputDecoration, AddressAutocompleteField, _AddressAutocompleteFieldState, build, controller, createState, _debounce (+19 more)

### Community 29 - "StatelessWidget"
Cohesion: 0.09
Nodes (23): _CashSummaryCard, _CompletedOrderTile, _KPICard, _AllTimeCard, _CashSummaryCard, _LocationButton, _RecentDeliveryTile, _StatItem (+15 more)

### Community 30 - "order_tracking_screen.dart"
Cohesion: 0.09
Nodes (22): ../../config/telegram_page_route.dart, isInline, OrderHistoryScreen, build, _buildDeliveryMap, _buildInfoRow, _buildSimpleCard, _calculateETA (+14 more)

### Community 31 - "String?"
Cohesion: 0.09
Nodes (22): double?, category, copyWith, createdAt, description, formattedOriginalPrice, formattedPrice, fromMap (+14 more)

### Community 32 - "main.dart"
Cohesion: 0.09
Nodes (22): _bounceAnimation, _bounceController, build, createState, dispose, _fadeAnimation, _fadeController, FoodyVrindaApp (+14 more)

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
Cohesion: 0.11
Nodes (19): ../cart/cart_screen.dart, ../../config/design_system.dart, _buildCategoryTabBar, _buildInfoPanel, _buildReviewTile, createState, _formatDate, MenuScreen (+11 more)

### Community 37 - "AuthProvider"
Cohesion: 0.09
Nodes (22): AuthProvider, build, _handleEmailSubmit, _handleGoogleSignIn, _handlePhoneSubmit, initState, _saveProfileEdits, build (+14 more)

### Community 38 - "delivery_alarm_service.dart"
Cohesion: 0.10
Nodes (20): AudioPlayer, ChangeNotifier, acknowledgeAll, acknowledgeOrder, _audioPlayer, DeliveryAlarmService, dispose, initialize (+12 more)

### Community 39 - "app_config.dart"
Cohesion: 0.09
Nodes (20): adminEmails, AppConfig, appName, appTagline, appVersion, defaultFoodImage, defaultShopImage, defaultUserAvatar (+12 more)

### Community 40 - "supabase_service.dart"
Cohesion: 0.06
Nodes (34): _client, createCloudUser, createMenuItem, createOffer, createOrder, createShop, deleteMenuItem, deleteOffer (+26 more)

### Community 41 - "order_widgets.dart"
Cohesion: 0.09
Nodes (22): OrderModel, OrderStatus, OrderStatusExtension, build, currentStatus, _getColor, _getIcon, icon (+14 more)

### Community 43 - "inputs.dart"
Cohesion: 0.11
Nodes (17): AppDropdown, AppInputField, build, controller, enabled, hintText, items, keyboardType (+9 more)

### Community 44 - "TransportView.jsx"
Cohesion: 0.13
Nodes (34): Header(), ActiveAlarmBanner(), useAuth(), DEFAULT_SEEDS, NotificationContext, NotificationProvider(), useNotifications(), getAudioContext() (+26 more)

### Community 45 - "cash_transaction_model.dart"
Cohesion: 0.13
Nodes (14): amount, CashTransactionModel, CashTransactionType, formattedAmount, fromMap, id, notes, orderId (+6 more)

### Community 46 - "buttons.dart"
Cohesion: 0.11
Nodes (17): Color?, AppButton, backgroundColor, build, DangerButton, _getButtonColor, height, icon (+9 more)

### Community 47 - "kitchen_alarm_service.dart"
Cohesion: 0.18
Nodes (19): dart:async, acknowledgeAll, acknowledgeOrder, _alarmSoundFile, _audioPlayer, dispose, initialize, _instance (+11 more)

### Community 48 - "search_service.dart"
Cohesion: 0.10
Nodes (32): ShopModel, HitSoochiService, original, RecommendationResponse, confidence, detectedIntent, enhancedSearch, EnhancedSearchResponse (+24 more)

### Community 50 - "UnifiedSearchModal.jsx"
Cohesion: 0.17
Nodes (7): DynamicToast(), POPULAR_CATEGORIES, UnifiedSearchModal(), CURRENT_APP_VERSION, HitSoochiService, LOCAL_SATVIK_ONTOLOGY, supabase

### Community 52 - "telegram_page_route.dart"
Cohesion: 0.23
Nodes (15): child, TelegramPageRoute, _showLoginRequiredDialog, _openOrdersOnMap, _buildHeader, _buildOfferCard, _buildProfileTab, _buildTrendingItemCard (+7 more)

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

### Community 61 - "supabase.js"
Cohesion: 0.06
Nodes (34): COLORS, runAdversarialTestSuite(), section(), CHEF_TAGS, ReviewModal(), RIDER_TAGS, ALLOWED_ORDER_TRANSITIONS, CACHE_TTL_MS (+26 more)

### Community 62 - "Foody Vrinda - Cloud Kitchen Mobile App"
Cohesion: 0.10
Nodes (19): Firebase BaaS, Flutter Pubspec Configuration, Build Commands, Customer Features, Features, Firebase Configuration, Foody Vrinda - Cloud Kitchen Mobile App, for emulator (+11 more)

### Community 63 - "🔔 Custom Notification Sounds - Implementation Summary"
Cohesion: 0.08
Nodes (23): 1. **Core Functionality**, 2. **Files Created**, 3. **Updated Files**, Automatic Sound Selection, Basic Usage, 🎉 Benefits, Configuration & Services, 🔔 Custom Notification Sounds - Implementation Summary (+15 more)

### Community 65 - "🔔 Custom Notification Sounds Setup Guide"
Cohesion: 0.08
Nodes (23): Advanced Usage, Basic Usage, Code Integration, 🔔 Custom Notification Sounds Setup Guide, File Structure, How It Works, Migration from Old Code, Option A: Automatic (Recommended) (+15 more)

### Community 66 - "test-role-and-tutorial.mjs"
Cohesion: 0.26
Nodes (16): deliveryAliases, mockStorage, negativeRoles, progressAfterStep1, restaurantAliases, RoleBasedTutorialTour(), SELECTOR_FALLBACKS, getCanonicalRole() (+8 more)

### Community 67 - "🔔 Custom Notification Sounds - Quick Reference"
Cohesion: 0.12
Nodes (16): 💻 Code Snippets, ⚡ Common Issues & Fixes, 🔔 Custom Notification Sounds - Quick Reference, 🔗 Documentation Links, 📂 File Locations, 🔍 Free Sound Resources, Import, Initialize (in main.dart) (+8 more)

### Community 72 - "notification_settings_screen.dart"
Cohesion: 0.12
Nodes (17): class, ../../config/notification_sound_config.dart, ../config/theme.dart, _audioPlayer, _availableSounds, build, _buildSoundTile, createState (+9 more)

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
Cohesion: 0.10
Nodes (21): _addressLabel, _customGreetingName, _deliveryInstructions, _dietaryFilter, _keyAddressLabel, _keyCustomGreetingName, _keyDeliveryInstructions, _keyDietaryFilter (+13 more)

### Community 107 - "CustomerView.jsx"
Cohesion: 0.13
Nodes (24): mockStorage, ActiveOrderCapsule(), CompleteProfileModal(), MapPicker(), QUANTITIES, QuantityPickerSheet(), BouncingLoader(), StyledWrapper (+16 more)

### Community 108 - "time_period_selector.dart"
Cohesion: 0.13
Nodes (14): build, isSelected, onChanged, onTap, period, selectedPeriods, showHeader, _TimePeriodCard (+6 more)

### Community 109 - "fv_wallet_service.dart"
Cohesion: 0.10
Nodes (19): _client, exchangeRate, FVWalletService, generateWhatsAppShareUrl, getCommunityLinks, getLeaderboard, getWalletDashboard, initUserWallet (+11 more)

### Community 110 - "OwnerView.jsx"
Cohesion: 0.22
Nodes (20): COLORS, pass(), runTestSuite(), section(), NativeTimePicker(), PRESET_DISHES, calculateDistanceKm(), createCloudMenuItem() (+12 more)

### Community 111 - "AuthModal.jsx"
Cohesion: 0.26
Nodes (7): DESK_CONFIG, SoundTrialsModal(), SocialLinksBar(), SOCIAL_CHANNELS, SOCIAL_LINKS, nativeNotify, NOTIFICATION_TRIALS

### Community 112 - "🛡️ Foody Vrinda v5.3.1 — Core Production Security Validation Complete"
Cohesion: 0.07
Nodes (26): 1. Executive Summary, 2. Test Execution Matrix (22 / 22 Regression Tests), 3. Security Property Verification & Evidence Status, 4.1 Request Processing & Verification Pipeline, 4.2 Separation of Privilege & Execution Pipelines, 4. Architectural Analysis: End-to-End Control Flow, 5.1 Caller Identity Binding (`claim_order_pickup_atomic` & `verify_delivery_otp_atomic`), 5.2 One-Time Use OTP Verification (+18 more)

### Community 113 - ".ensureSubscribed"
Cohesion: 0.26
Nodes (3): RealtimeMultiplexer, subscribeCloudOffers(), subscribeCloudShops()

### Community 114 - "getCachedShops"
Cohesion: 0.42
Nodes (10): addDeletedShopId(), createCloudShop(), deleteCloudShop(), getCachedShops(), getCloudShops(), getDeletedShopIds(), normalizeShop(), removeDeletedShopId() (+2 more)

### Community 115 - "firebase.js"
Cohesion: 0.50
Nodes (3): app, auth, db

### Community 116 - "package:flutter/material.dart"
Cohesion: 0.20
Nodes (8): EmojiToIcon, getIcon, getIconWidget, main, package:flutter/material.dart, package:flutter_test/flutter_test.dart, package:foody_vrinda/main.dart, package:iconsax/iconsax.dart

### Community 117 - "Foody Vrinda — Design System & Theme Architecture Specification"
Cohesion: 0.08
Nodes (23): 1. Executive Summary & Philosophy, 2.1 CSS Semantic Tokens Definition, 2. Global Semantic Color Token Matrix, 3.1 Typography Scale & Weights, 3.2 Spacing & Padding Scale, 3.3 Component Dimensions & Touch Targets, 3.4 Iconography Sizing Matrix, 3. Comprehensive Sizing, Spacing & Dimension Matrix (+15 more)

### Community 118 - "App.jsx"
Cohesion: 0.12
Nodes (19): App(), CustomerView, DeveloperView, KitchenView, OwnerView, TransportView, ActiveOrderTrackingModal(), AppUpdateModal() (+11 more)

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

### Community 128 - "fvWalletService.js"
Cohesion: 0.17
Nodes (18): filtered, rawMockDbLeaderboard, FVRewardsDashboard(), RewardsModal(), activeWalletSubscriptions, FV_EXCHANGE_RATE, FV_POINTS_PER_RUPEE, generateWhatsAppShareUrl() (+10 more)

### Community 130 - "useBottomSheetDrag"
Cohesion: 0.23
Nodes (11): AuthModal(), NotificationPanel(), OrderHistoryDrawer(), SearchableDropdown(), CartContext, CartProvider(), useCart(), ThemeContext (+3 more)

### Community 131 - "2. Step-by-Step Recovery Execution Chain"
Cohesion: 0.17
Nodes (11): 1. DR Acceptance Criteria Chain, 2. Step-by-Step Recovery Execution Chain, 3. Disaster Recovery Log Template, Foody Vrinda — Enterprise Disaster Recovery (DR) Runbook & Drill Protocol, Phase 1: Backup Selection & Integrity Attestation, Phase 2: Isolated Environment Provisioning (Zero Production Touch), Phase 3: Schema & Migration Parity Verification, Phase 4: RLS & Kernel Security Direct SQL Re-Verification (+3 more)

### Community 132 - "verify-delivery-hardened-evidence.js"
Cohesion: 0.32
Nodes (9): banner(), clampServerRadius(), COLORS, computeHaversineKm(), NOTE: delivery_coordinates is intentionally omitted pre-claim, runDeliveryHardeningEvidence(), sanitizeCoordinates(), simulateDiscoveryQuery() (+1 more)

### Community 133 - "DeveloperView.jsx"
Cohesion: 0.18
Nodes (35): AuthContext, AUTHORIZED_ADMIN_EMAILS, AUTHORIZED_DEV_EMAILS, AuthProvider(), isAdminUser(), isDeveloperUser(), adminBlockUser(), adminForceSignout() (+27 more)

### Community 134 - "seed-synthetic-beta-data.js"
Cohesion: 0.25
Nodes (6): envName, supabase, SYNTHETIC_MENUS, SYNTHETIC_SHOPS, targetKey, targetUrl

### Community 136 - "StatefulWidget"
Cohesion: 0.13
Nodes (29): SplashScreen, _SplashScreenState, _DeliveryMapView, _DeliveryMapViewState, DeveloperPanel, _DeveloperPanelState, _FullShopDashboard, _FullShopDashboardState (+21 more)

### Community 137 - "verify-dr-integrity.js"
Cohesion: 0.40
Nodes (3): CRITICAL_TABLES, startTime, supabase

### Community 139 - "runBrowserTests"
Cohesion: 0.36
Nodes (4): CDPClient, fetchJson(), runBrowserTests(), sleep()

### Community 140 - "pressable_scale.dart"
Cohesion: 0.10
Nodes (20): Animation, AnimationController, Duration, _animation, build, child, _controller, createState (+12 more)

### Community 141 - "test-wallet-multiplex.mjs"
Cohesion: 0.29
Nodes (5): activeWalletSubscriptions, createdChannels, mockSupabase, removedChannels, unsubA

### Community 143 - "notification_usage_example.dart"
Cohesion: 0.13
Nodes (14): completeOrderWorkflow, createOrderWithNotifications, initializeNotifications, _notificationService, NotificationUsageExample, notifyCustomerOfOrderStatus, notifyDeliveryStaffOfReadyOrder, notifyKitchenOfNewOrder (+6 more)

## Knowledge Gaps
- **1498 isolated node(s):** `fast_transcribe.sh script`, `AppConfig`, `developerEmail`, `developerPassword`, `defaultShopImage` (+1493 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **36 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `AuthProvider` to `developer_panel.dart`, `login_screen.dart`, `home_screen.dart`, `delivery_alarm_service.dart`, `StatefulWidget`, `cart_screen.dart`, `user_preferences_provider.dart`, `delivery_dashboard_view.dart`, `delivery_view.dart`, `dashboard_view.dart`, `kitchen_view.dart`, `auth_provider.dart`, `telegram_page_route.dart`, `cart_provider.dart`, `order_tracking_screen.dart`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `SupabaseService` connect `auth_service.dart` to `order_notification_manager.dart`, `review_service.dart`, `shop_service.dart`, `supabase_service.dart`, `search_service.dart`, `auth_provider.dart`, `order_service.dart`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `ShopModel` connect `search_service.dart` to `shop_model.dart`, `cart_screen.dart`, `menu_screen.dart`, `developer_panel.dart`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `fast_transcribe.sh script`, `AppConfig`, `developerEmail` to the rest of the system?**
  _1498 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `developer_panel.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.012269938650306749 - nodes in this community are weakly interconnected._
- **Should `theme.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._
- **Should `notification_sound_settings.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._