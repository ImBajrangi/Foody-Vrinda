# Graph Report - Foody-Vrinda  (2026-09-09)

## Corpus Check
- 126 files · ~159,874 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2039 nodes · 3197 edges · 111 communities (82 shown, 29 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `961a17ff`
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
- notification_model.dart
- delivery_dashboard_view.dart
- design_system.dart
- delivery_view.dart
- NotificationService
- dashboard_view.dart
- kitchen_view.dart
- animations.dart
- auth_provider.dart
- OrderService
- cards.dart
- user_model.dart
- location_service.dart
- App.jsx
- auth_service.dart
- location_picker_dialog.dart
- search_screen.dart
- cart_provider.dart
- address_autocomplete_field.dart
- StatelessWidget
- order_tracking_screen.dart
- menu_item_model.dart
- main.dart
- order_notification_manager.dart
- login_screen.dart
- package:cloud_firestore/cloud_firestore.dart
- menu_screen.dart
- AuthProvider
- delivery_alarm_service.dart
- app_config.dart
- UnifiedSearchModal.jsx
- order_widgets.dart
- NotificationManager
- inputs.dart
- pressable_scale.dart
- cash_transaction_model.dart
- buttons.dart
- kitchen_alarm_service.dart
- search_service.dart
- time_period_selector.dart
- review_model.dart
- package:audioplayers_web/audioplayers_web.dart
- _DeliveryViewState
- resource_cache_service.dart
- payment_service.dart
- FastOrderMonitor
- package:flutter/material.dart
- cart_item_model.dart
- foody_cache_service.dart
- static const String
- package:flutter/foundation.dart
- Foody Vrinda - Cloud Kitchen Mobile App
- 🔔 Custom Notification Sounds - Implementation Summary
- sw.js
- 🔔 Custom Notification Sounds Setup Guide
- user_preferences_provider.dart
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
- React + Vite
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
- CustomerView.jsx
- supabase.js
- KitchenView.jsx
- AuthContext.jsx
- RealtimeMultiplexer
- StatefulWidget

## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 46 edges
2. `useAuth()` - 21 edges
3. `CartProvider` - 15 edges
4. `TelegramPageRoute` - 14 edges
5. `useCart()` - 13 edges
6. `🔔 Custom Notification Sounds - Quick Reference` - 13 edges
7. `UserPreferencesProvider` - 12 edges
8. `subscribeCloudOrders()` - 12 edges
9. `NotificationManager` - 12 edges
10. `🔔 Custom Notification Sounds - Implementation Summary` - 12 edges

## Surprising Connections (you probably didn't know these)
- `React + Vite Entry Point` --conceptually_related_to--> `Foody Vrinda - Authentic Satvik Cloud Kitchen`  [INFERRED]
  foody_vrinda_v3/index.html → README.md
- `build` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/auth/login_screen.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `_submit` --references--> `AuthProvider`  [EXTRACTED]
  foody_vrinda_app/lib/screens/auth/login_screen.dart → foody_vrinda_app/lib/providers/auth_provider.dart
- `Kitchen Entry Point` --references--> `Firebase BaaS`  [EXTRACTED]
  kitchen.html → README.md
- `Kitchen Entry Point` --references--> `Razorpay SDK`  [EXTRACTED]
  kitchen.html → README.md

## Import Cycles
- None detected.

## Communities (111 total, 29 thin omitted)

### Community 0 - "developer_panel.dart"
Cohesion: 0.01
Nodes (162): ../../config/menu_images.dart, _addStaff, _addStaffUser, _allOrders, _allUsers, amount, _applyHistoryFilter, _authService (+154 more)

### Community 1 - "theme.dart"
Cohesion: 0.04
Nodes (53): accentCoral, accentOrange, accentYellow, AppTheme, background, border, borderColor, borderLight (+45 more)

### Community 2 - "notification_sound_settings.dart"
Cohesion: 0.10
Nodes (21): _audioPlayer, availableSounds, build, _buildRoleCard, _buildTestButton, createState, dispose, _getRoleIcon (+13 more)

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
Nodes (22): addMenuItem, _cachedShops, createShop, deleteMenuItem, deleteShop, _firestore, getAllMenuItems, getAvailableMenuItems (+14 more)

### Community 7 - "order_model.dart"
Cohesion: 0.04
Nodes (48): cashCollectedAt, cashSettledAt, CashStatus, CashStatusExtension, collectedBy, contactAttempts, copyWith, createdAt (+40 more)

### Community 8 - "shop_model.dart"
Cohesion: 0.05
Nodes (41): address, AlarmSettings, closeTime, copyWith, createdAt, daysOpen, deliveryCharge, deliveryReady (+33 more)

### Community 9 - "cart_screen.dart"
Cohesion: 0.05
Nodes (39): ../auth/login_screen.dart, _addressController, _buildEmptyCart, _buildPaymentChip, _buildPaymentChipWithCallback, _buildPaymentOption, _buildPriceRow, _codEnabled (+31 more)

### Community 10 - "notification_model.dart"
Cohesion: 0.12
Nodes (16): copyWith, createdAt, fromFirestore, fromString, id, isRead, message, NotificationModel (+8 more)

### Community 11 - "delivery_dashboard_view.dart"
Cohesion: 0.05
Nodes (36): amount, _buildAllTimeStats, _buildCashPanel, _buildFilterChip, _buildHeader, _buildLegendItem, _buildLocationPanel, _buildTodayStats (+28 more)

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
Nodes (32): _acknowledgeReturn, amount, _buildCashManagement, _buildChartsRow, _buildHeader, _buildKPICards, _buildOrderHistory, _buildOrderStatusCard (+24 more)

### Community 16 - "kitchen_view.dart"
Cohesion: 0.07
Nodes (28): _alarmService, _bellAnimation, _bellController, _buildAlarmBanner, _buildHeader, createState, dispose, _initAlarmListener (+20 more)

### Community 17 - "animations.dart"
Cohesion: 0.06
Nodes (31): actionLabel, animate, animationType, _bounceAnimation, build, CelebrationOverlay, child, color (+23 more)

### Community 18 - "auth_provider.dart"
Cohesion: 0.06
Nodes (30): AuthService, AuthStatus get, _authService, AuthStatus, _clearCachedUserData, clearError, _error, _firestore (+22 more)

### Community 19 - "OrderService"
Cohesion: 0.12
Nodes (31): cancelOrder, collectCash, createOrder, deleteCashTransaction, _firestore, getActiveOrders, getAllOrders, getCashTransactions (+23 more)

### Community 20 - "cards.dart"
Cohesion: 0.07
Nodes (29): EdgeInsetsGeometry?, address, AppCard, backgroundColor, build, _buildPlaceholder, child, cuisines (+21 more)

### Community 21 - "user_model.dart"
Cohesion: 0.13
Nodes (28): canAccessDevPanel, copyWith, createdAt, deliveryAddress, devPermissions, displayName, email, fromFirestore (+20 more)

### Community 22 - "location_service.dart"
Cohesion: 0.07
Nodes (26): _apiKey, _calculateStraightLineDistance, description, distanceMeters, DistanceResult, distanceText, durationSeconds, durationText (+18 more)

### Community 23 - "App.jsx"
Cohesion: 0.17
Nodes (18): App(), AuthModal(), DESK_CONFIG, Header(), NotificationPanel(), RewardsModal(), UnauthorizedAccessScreen(), useAuth() (+10 more)

### Community 24 - "auth_service.dart"
Cohesion: 0.08
Nodes (25): ../config/app_config.dart, FirebaseAuth, _auth, AuthService, authStateChanges, _createOrUpdateUserDocument, currentUser, _firestore (+17 more)

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
Cohesion: 0.08
Nodes (26): _inputDecoration, AddressAutocompleteField, _AddressAutocompleteFieldState, build, controller, createState, _debounce, decoration (+18 more)

### Community 29 - "StatelessWidget"
Cohesion: 0.10
Nodes (21): _CashSummaryCard, _AllTimeCard, _CashSummaryCard, _LocationButton, _RecentDeliveryTile, _StatItem, _AnalyticsCard, _AuditSummaryCard (+13 more)

### Community 30 - "order_tracking_screen.dart"
Cohesion: 0.11
Nodes (19): build, _buildDeliveryMap, _buildInfoRow, _buildSimpleCard, _calculateETA, _callShop, createState, initState (+11 more)

### Community 31 - "menu_item_model.dart"
Cohesion: 0.10
Nodes (19): category, copyWith, createdAt, description, formattedOriginalPrice, formattedPrice, fromFirestore, hasDiscount (+11 more)

### Community 32 - "main.dart"
Cohesion: 0.09
Nodes (22): firebase_options.dart, _bounceAnimation, _bounceController, build, createState, dispose, _fadeAnimation, _fadeController (+14 more)

### Community 33 - "order_notification_manager.dart"
Cohesion: 0.09
Nodes (22): delivery_alarm_service.dart, _currentShopId, _currentUserId, _currentUserRole, _firestore, _handleNewOrderArrival, _handleOrdersSnapshot, _handleOrderStatusTransition (+14 more)

### Community 34 - "login_screen.dart"
Cohesion: 0.10
Nodes (21): build, createState, dispose, _emailController, _formKey, _GoogleSignInButton, isLoading, LoginScreen (+13 more)

### Community 35 - "package:cloud_firestore/cloud_firestore.dart"
Cohesion: 0.30
Nodes (11): FirebaseFirestore, addReview, _firestore, getPendingOrderCount, getReviews, hasUserReviewed, ReviewService, streamPendingOrderCount (+3 more)

### Community 36 - "menu_screen.dart"
Cohesion: 0.10
Nodes (21): ../cart/cart_screen.dart, ../../config/design_system.dart, ../../config/telegram_page_route.dart, _buildCategoryTabBar, _buildInfoPanel, _buildReviewTile, createState, _formatDate (+13 more)

### Community 37 - "AuthProvider"
Cohesion: 0.09
Nodes (23): AuthProvider, build, _loadStats, _showSettlementConfirm, build, _buildDeliveryHistory, _buildRecentDeliveries, _loadStats (+15 more)

### Community 38 - "delivery_alarm_service.dart"
Cohesion: 0.11
Nodes (19): ChangeNotifier, acknowledgeAll, acknowledgeOrder, _audioPlayer, DeliveryAlarmService, dispose, _instance, isAlarmActive (+11 more)

### Community 39 - "app_config.dart"
Cohesion: 0.11
Nodes (17): AppConfig, appName, appTagline, appVersion, defaultFoodImage, defaultShopImage, defaultUserAvatar, developerEmail (+9 more)

### Community 40 - "UnifiedSearchModal.jsx"
Cohesion: 0.29
Nodes (5): UnifiedSearchModal(), HitSoochiService, LOCAL_SATVIK_ONTOLOGY, getCloudMenus(), resolveDishCutout()

### Community 41 - "order_widgets.dart"
Cohesion: 0.11
Nodes (18): OrderModel, build, currentStatus, _getColor, _getIcon, icon, isCompleted, isCurrent (+10 more)

### Community 43 - "inputs.dart"
Cohesion: 0.11
Nodes (17): AppDropdown, AppInputField, build, controller, enabled, hintText, items, keyboardType (+9 more)

### Community 44 - "pressable_scale.dart"
Cohesion: 0.10
Nodes (20): Animation, AnimationController, Duration, _animation, build, child, _controller, createState (+12 more)

### Community 45 - "cash_transaction_model.dart"
Cohesion: 0.13
Nodes (14): amount, CashTransactionModel, CashTransactionType, formattedAmount, fromFirestore, id, notes, orderId (+6 more)

### Community 46 - "buttons.dart"
Cohesion: 0.11
Nodes (17): Color?, AppButton, backgroundColor, build, DangerButton, _getButtonColor, height, icon (+9 more)

### Community 47 - "kitchen_alarm_service.dart"
Cohesion: 0.18
Nodes (19): AudioPlayer, dart:async, acknowledgeAll, acknowledgeOrder, _alarmSoundFile, _audioPlayer, dispose, initialize (+11 more)

### Community 48 - "search_service.dart"
Cohesion: 0.10
Nodes (34): double?, MenuItemModel, ShopModel, HitSoochiService, original, RecommendationResponse, confidence, detectedIntent (+26 more)

### Community 49 - "time_period_selector.dart"
Cohesion: 0.13
Nodes (14): build, isSelected, onChanged, onTap, period, selectedPeriods, showHeader, _TimePeriodCard (+6 more)

### Community 50 - "review_model.dart"
Cohesion: 0.15
Nodes (12): DateTime?, comment, createdAt, fromFirestore, id, rating, ReviewModel, shopId (+4 more)

### Community 53 - "resource_cache_service.dart"
Cohesion: 0.15
Nodes (12): ../config/lottie_assets.dart, dart:developer, DefaultCacheManager, _cacheAsset, cacheImages, _cacheManager, _instance, preCacheResources (+4 more)

### Community 54 - "payment_service.dart"
Cohesion: 0.17
Nodes (11): bool get, dispose, initialize, _initialized, _instance, isSupported, isWeb, openCheckout (+3 more)

### Community 57 - "package:flutter/material.dart"
Cohesion: 0.20
Nodes (8): EmojiToIcon, getIcon, getIconWidget, main, package:flutter/material.dart, package:flutter_test/flutter_test.dart, package:foody_vrinda/main.dart, package:iconsax/iconsax.dart

### Community 58 - "cart_item_model.dart"
Cohesion: 0.20
Nodes (9): double get, CartItemModel, copyWith, formattedTotal, menuItem, quantity, total, menu_item_model.dart (+1 more)

### Community 59 - "foody_cache_service.dart"
Cohesion: 0.16
Nodes (22): dart:convert, foody_cache_service.dart, _cacheExpiry, cacheMenuItems, cacheShops, clearAllCache, FoodyCacheService, getCachedMenuItems (+14 more)

### Community 60 - "static const String"
Cohesion: 0.22
Nodes (8): apiKey, appId, authDomain, FirebaseConfig, messagingSenderId, projectId, storageBucket, static const String

### Community 61 - "package:flutter/foundation.dart"
Cohesion: 0.25
Nodes (7): android, DefaultFirebaseOptions, ios, web, package:firebase_core/firebase_core.dart, package:flutter/foundation.dart, static const FirebaseOptions

### Community 62 - "Foody Vrinda - Cloud Kitchen Mobile App"
Cohesion: 0.10
Nodes (19): Firebase BaaS, Flutter Pubspec Configuration, Build Commands, Customer Features, Features, Firebase Configuration, Foody Vrinda - Cloud Kitchen Mobile App, for emulator (+11 more)

### Community 63 - "🔔 Custom Notification Sounds - Implementation Summary"
Cohesion: 0.08
Nodes (23): 1. **Core Functionality**, 2. **Files Created**, 3. **Updated Files**, Automatic Sound Selection, Basic Usage, 🎉 Benefits, Configuration & Services, 🔔 Custom Notification Sounds - Implementation Summary (+15 more)

### Community 65 - "🔔 Custom Notification Sounds Setup Guide"
Cohesion: 0.08
Nodes (23): Advanced Usage, Basic Usage, Code Integration, 🔔 Custom Notification Sounds Setup Guide, File Structure, How It Works, Migration from Old Code, Option A: Automatic (Recommended) (+15 more)

### Community 66 - "user_preferences_provider.dart"
Cohesion: 0.09
Nodes (33): child, TelegramPageRoute, _addressLabel, _customGreetingName, _deliveryInstructions, _dietaryFilter, _keyAddressLabel, _keyCustomGreetingName (+25 more)

### Community 67 - "🔔 Custom Notification Sounds - Quick Reference"
Cohesion: 0.12
Nodes (16): 💻 Code Snippets, ⚡ Common Issues & Fixes, 🔔 Custom Notification Sounds - Quick Reference, 🔗 Documentation Links, 📂 File Locations, 🔍 Free Sound Resources, Import, Initialize (in main.dart) (+8 more)

### Community 72 - "notification_settings_screen.dart"
Cohesion: 0.12
Nodes (16): class, ../../config/notification_sound_config.dart, ../config/theme.dart, _audioPlayer, _availableSounds, build, _buildSoundTile, createState (+8 more)

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

### Community 84 - "React + Vite"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + Vite

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
Cohesion: 0.29
Nodes (6): 1. UI/UX Design System & Palette, 2. Dynamic Island Toast Notifications (From Vrinda Tours Standard), 3. Mobile Ergonomics & Overlap Prevention (From Chitra Vrinda Standard), 4. Performance, Image & Caching Standards, 5. Build & Verification Standard, Foody Vrinda - Project Rules & Guidelines

### Community 107 - "CustomerView.jsx"
Cohesion: 0.13
Nodes (19): ActiveOrderCapsule(), ActiveOrderTrackingModal(), OrderHistoryDrawer(), QUANTITIES, QuantityPickerSheet(), REVIEW_TAGS, ReviewModal(), BouncingLoader() (+11 more)

### Community 109 - "supabase.js"
Cohesion: 0.20
Nodes (17): MapPicker(), CACHE_TTL_MS, createCloudMenuItem(), DEFAULT_PRASAD_ITEMS, deleteCloudMenuItem(), getCachedItem(), getCloudShops(), invalidateCache() (+9 more)

### Community 110 - "KitchenView.jsx"
Cohesion: 0.34
Nodes (10): ActiveAlarmBanner(), DynamicToast(), getAudioContext(), useAudioAlarm(), useFastNotify(), createCloudNotification(), subscribeCloudOrders(), updateCloudOrderStatus() (+2 more)

### Community 111 - "AuthContext.jsx"
Cohesion: 0.27
Nodes (10): AuthContext, AUTHORIZED_ADMIN_EMAILS, AUTHORIZED_DEV_EMAILS, AuthProvider(), isAdminUser(), isDeveloperUser(), app, auth (+2 more)

### Community 114 - "StatefulWidget"
Cohesion: 0.13
Nodes (29): SplashScreen, _SplashScreenState, DeliveryDashboardView, _DeliveryDashboardViewState, _DeliveryMapView, _DeliveryMapViewState, DeveloperPanel, _DeveloperPanelState (+21 more)

## Knowledge Gaps
- **1219 isolated node(s):** `AppConfig`, `developerEmail`, `developerPassword`, `defaultShopImage`, `defaultFoodImage` (+1214 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **29 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `AuthProvider` to `developer_panel.dart`, `login_screen.dart`, `user_preferences_provider.dart`, `home_screen.dart`, `delivery_alarm_service.dart`, `cart_screen.dart`, `delivery_dashboard_view.dart`, `delivery_view.dart`, `dashboard_view.dart`, `kitchen_view.dart`, `auth_provider.dart`, `StatefulWidget`, `_DeliveryViewState`, `cart_provider.dart`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `NotificationService` connect `NotificationService` to `kitchen_view.dart`, `order_notification_manager.dart`, `delivery_view.dart`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `ShopService` connect `shop_service.dart` to `developer_panel.dart`, `menu_screen.dart`, `home_screen.dart`, `cart_screen.dart`, `delivery_view.dart`, `kitchen_view.dart`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `AppConfig`, `developerEmail`, `developerPassword` to the rest of the system?**
  _1219 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `developer_panel.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.012269938650306749 - nodes in this community are weakly interconnected._
- **Should `theme.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._
- **Should `notification_sound_settings.dart` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._