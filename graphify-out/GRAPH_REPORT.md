# Graph Report - Foody-Vrinda  (2026-06-06)

## Corpus Check
- 99 files · ~125,620 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1914 nodes · 2931 edges · 86 communities (76 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9eed63bb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Developer Developer Panel|Developer Developer Panel]]
- [[_COMMUNITY_Config Theme|Config Theme]]
- [[_COMMUNITY_Developer Notification Sound|Developer Notification Sound]]
- [[_COMMUNITY_Services Hit Soochi|Services Hit Soochi]]
- [[_COMMUNITY_Config Lottie Assets|Config Lottie Assets]]
- [[_COMMUNITY_Home Home Screen|Home Home Screen]]
- [[_COMMUNITY_Services Shop Service|Services Shop Service]]
- [[_COMMUNITY_Models Order Model|Models Order Model]]
- [[_COMMUNITY_Models Shop Model|Models Shop Model]]
- [[_COMMUNITY_Cart Cart Screen|Cart Cart Screen]]
- [[_COMMUNITY_Src Firebase|Src Firebase]]
- [[_COMMUNITY_Delivery Delivery Dashboard|Delivery Delivery Dashboard]]
- [[_COMMUNITY_Config Design System|Config Design System]]
- [[_COMMUNITY_Delivery Delivery View|Delivery Delivery View]]
- [[_COMMUNITY_Services Notification Service|Services Notification Service]]
- [[_COMMUNITY_Dashboard Dashboard View|Dashboard Dashboard View]]
- [[_COMMUNITY_Kitchen Kitchen View|Kitchen Kitchen View]]
- [[_COMMUNITY_Widgets Animations|Widgets Animations]]
- [[_COMMUNITY_Providers Auth Provider|Providers Auth Provider]]
- [[_COMMUNITY_Services Order Service|Services Order Service]]
- [[_COMMUNITY_Widgets Cards|Widgets Cards]]
- [[_COMMUNITY_Models User Model|Models User Model]]
- [[_COMMUNITY_Services Location Service|Services Location Service]]
- [[_COMMUNITY_Services Search Service|Services Search Service]]
- [[_COMMUNITY_Services Auth Service|Services Auth Service]]
- [[_COMMUNITY_Widgets Location Picker|Widgets Location Picker]]
- [[_COMMUNITY_Search Search Screen|Search Search Screen]]
- [[_COMMUNITY_Providers Cart Provider|Providers Cart Provider]]
- [[_COMMUNITY_Widgets Address Autocomplete|Widgets Address Autocomplete]]
- [[_COMMUNITY_Developer Developer Panel|Developer Developer Panel]]
- [[_COMMUNITY_Order Order Tracking|Order Order Tracking]]
- [[_COMMUNITY_Models Menu Item|Models Menu Item]]
- [[_COMMUNITY_Lib Main|Lib Main]]
- [[_COMMUNITY_Services Order Notification|Services Order Notification]]
- [[_COMMUNITY_Auth Login Screen|Auth Login Screen]]
- [[_COMMUNITY_Widgets Animations|Widgets Animations]]
- [[_COMMUNITY_Menu Menu Screen|Menu Menu Screen]]
- [[_COMMUNITY_Delivery Delivery|Delivery Delivery]]
- [[_COMMUNITY_Services Delivery Alarm|Services Delivery Alarm]]
- [[_COMMUNITY_Config App Config|Config App Config]]
- [[_COMMUNITY_Providers User Preferences|Providers User Preferences]]
- [[_COMMUNITY_Widgets Order Widgets|Widgets Order Widgets]]
- [[_COMMUNITY_Js Notify|Js Notify]]
- [[_COMMUNITY_Widgets Inputs|Widgets Inputs]]
- [[_COMMUNITY_Widgets Pressable Scale|Widgets Pressable Scale]]
- [[_COMMUNITY_Doc Implementation Summary|Doc Implementation Summary]]
- [[_COMMUNITY_Widgets Buttons|Widgets Buttons]]
- [[_COMMUNITY_Services Kitchen Alarm|Services Kitchen Alarm]]
- [[_COMMUNITY_Models Notification Model|Models Notification Model]]
- [[_COMMUNITY_Widgets Time Period|Widgets Time Period]]
- [[_COMMUNITY_Models Cash Transaction|Models Cash Transaction]]
- [[_COMMUNITY_Dartpad Web Plugin|Dartpad Web Plugin]]
- [[_COMMUNITY_Models Review Model|Models Review Model]]
- [[_COMMUNITY_Services Resource Cache|Services Resource Cache]]
- [[_COMMUNITY_Services Payment Service|Services Payment Service]]
- [[_COMMUNITY_Doc Notification Sounds|Doc Notification Sounds]]
- [[_COMMUNITY_Js Fast Notify|Js Fast Notify]]
- [[_COMMUNITY_Config Emoji To|Config Emoji To]]
- [[_COMMUNITY_Models Cart Item|Models Cart Item]]
- [[_COMMUNITY_Services Foody Cache|Services Foody Cache]]
- [[_COMMUNITY_Config Firebase Config|Config Firebase Config]]
- [[_COMMUNITY_Lib Firebase Options|Lib Firebase Options]]
- [[_COMMUNITY_Foody Vrinda App|Foody Vrinda App]]
- [[_COMMUNITY_Readme Foody Vrinda|Readme Foody Vrinda]]
- [[_COMMUNITY_Js Sw|Js Sw]]
- [[_COMMUNITY_Models Order Model|Models Order Model]]
- [[_COMMUNITY_Models Order Model|Models Order Model]]
- [[_COMMUNITY_Models Order Model|Models Order Model]]
- [[_COMMUNITY_Annotation Example|Annotation Example]]
- [[_COMMUNITY_Foody Vrinda App|Foody Vrinda App]]
- [[_COMMUNITY_Settings Notification Settings|Settings Notification Settings]]
- [[_COMMUNITY_Config Notification Sound|Config Notification Sound]]
- [[_COMMUNITY_Doc Quick Reference|Doc Quick Reference]]
- [[_COMMUNITY_Doc Walkthrough|Doc Walkthrough]]
- [[_COMMUNITY_Doc Integration Guide|Doc Integration Guide]]
- [[_COMMUNITY_Doc Search Implementation|Doc Search Implementation]]
- [[_COMMUNITY_Doc Image Rendering|Doc Image Rendering]]
- [[_COMMUNITY_Doc Google Sign|Doc Google Sign]]
- [[_COMMUNITY_Order Order History|Order Order History]]
- [[_COMMUNITY_Doc Multi Shop|Doc Multi Shop]]
- [[_COMMUNITY_Readme Foody Vrinda|Readme Foody Vrinda]]
- [[_COMMUNITY_Foody Vrinda App|Foody Vrinda App]]
- [[_COMMUNITY_Foody Vrinda V3|Foody Vrinda V3]]
- [[_COMMUNITY_Search Search Screen|Search Search Screen]]

## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 46 edges
2. `useAuth()` - 23 edges
3. `CartProvider` - 15 edges
4. `NotificationManager` - 15 edges
5. `TelegramPageRoute` - 14 edges
6. `🔔 Custom Notification Sounds - Quick Reference` - 13 edges
7. `UserPreferencesProvider` - 12 edges
8. `🔔 Custom Notification Sounds - Implementation Summary` - 12 edges
9. `Integration Guide: Adding Notifications to Order Service` - 12 edges
10. `db` - 11 edges

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

## Communities (86 total, 10 thin omitted)

### Community 0 - "Developer Developer Panel"
Cohesion: 0.01
Nodes (161): ../../config/menu_images.dart, _addStaff, _addStaffUser, _allOrders, _allUsers, amount, _applyHistoryFilter, _authService (+153 more)

### Community 1 - "Config Theme"
Cohesion: 0.04
Nodes (53): accentCoral, accentOrange, accentYellow, AppTheme, background, border, borderColor, borderLight (+45 more)

### Community 2 - "Developer Notification Sound"
Cohesion: 0.10
Nodes (20): _audioPlayer, availableSounds, build, _buildRoleCard, _buildTestButton, createState, dispose, _getRoleIcon (+12 more)

### Community 3 - "Services Hit Soochi"
Cohesion: 0.08
Nodes (47): bool?, hit_soochi_service.dart, package:http/http.dart, _baseUrl, boostReason, category, confidence, configure (+39 more)

### Community 4 - "Config Lottie Assets"
Cohesion: 0.04
Nodes (45): badCat, build, celebration, checkmark, chefPizza, clock, confetti, cooking (+37 more)

### Community 5 - "Home Home Screen"
Cohesion: 0.05
Nodes (43): ../../config/emoji_to_icon.dart, ../dashboard/dashboard_view.dart, ../delivery/delivery_dashboard_view.dart, ../delivery/delivery_view.dart, ../developer/developer_panel.dart, _buildCategoryChip, _buildCustomerBottomNavBar, _buildCustomerView (+35 more)

### Community 6 - "Services Shop Service"
Cohesion: 0.09
Nodes (22): addMenuItem, _cachedShops, createShop, deleteMenuItem, deleteShop, _firestore, getAllMenuItems, getAvailableMenuItems (+14 more)

### Community 7 - "Models Order Model"
Cohesion: 0.05
Nodes (42): cashCollectedAt, cashSettledAt, collectedBy, contactAttempts, copyWith, createdAt, customerLatitude, customerLongitude (+34 more)

### Community 8 - "Models Shop Model"
Cohesion: 0.05
Nodes (41): address, AlarmSettings, closeTime, copyWith, createdAt, daysOpen, deliveryCharge, deliveryReady (+33 more)

### Community 9 - "Cart Cart Screen"
Cohesion: 0.05
Nodes (38): ../auth/login_screen.dart, _addressController, _buildEmptyCart, _buildPaymentChip, _buildPaymentChipWithCallback, _buildPaymentOption, _buildPriceRow, _codEnabled (+30 more)

### Community 10 - "Src Firebase"
Cohesion: 0.13
Nodes (27): AuthModal(), Header(), NotificationPanel(), UnifiedSearchModal(), AuthContext, AuthProvider(), useAuth(), CartContext (+19 more)

### Community 11 - "Delivery Delivery Dashboard"
Cohesion: 0.05
Nodes (41): amount, _buildAllTimeStats, _buildCashPanel, _buildFilterChip, _buildHeader, _buildLegendItem, _buildLocationPanel, _buildTodayStats (+33 more)

### Community 12 - "Config Design System"
Cohesion: 0.06
Nodes (34): accentOrangeDark, accentOrangeLight, ambientGoldGradient, borderSubtle, bounceClickable, brightness, charcoalDark, culinaryFlameGradient (+26 more)

### Community 13 - "Delivery Delivery View"
Cohesion: 0.06
Nodes (36): _buildAlarmBanner, _buildAllShopsDelivery, _buildHeader, _buildMultiShopDelivery, _buildOrdersList, _buildSingleShopDelivery, _callCustomer, _checkForNewOrders (+28 more)

### Community 14 - "Services Notification Service"
Cohesion: 0.09
Nodes (34): completeOrderWorkflow, createOrderWithNotifications, initializeNotifications, _notificationService, NotificationUsageExample, notifyCustomerOfOrderStatus, notifyDeliveryStaffOfReadyOrder, notifyKitchenOfNewOrder (+26 more)

### Community 15 - "Dashboard Dashboard View"
Cohesion: 0.07
Nodes (27): _acknowledgeReturn, amount, _buildCashManagement, _buildChartsRow, _buildHeader, _buildKPICards, _buildOrderHistory, _buildOrderStatusCard (+19 more)

### Community 16 - "Kitchen Kitchen View"
Cohesion: 0.07
Nodes (29): _alarmService, _bellAnimation, _bellController, _buildAlarmBanner, _buildHeader, createState, dispose, _initAlarmListener (+21 more)

### Community 17 - "Widgets Animations"
Cohesion: 0.06
Nodes (31): actionLabel, animate, animationType, _bounceAnimation, build, CelebrationOverlay, child, color (+23 more)

### Community 18 - "Providers Auth Provider"
Cohesion: 0.06
Nodes (30): AuthService, AuthStatus get, UserModel, _authService, AuthStatus, _clearCachedUserData, clearError, _error (+22 more)

### Community 19 - "Services Order Service"
Cohesion: 0.09
Nodes (42): FirebaseFirestore, ../models/cart_item_model.dart, ../models/cash_transaction_model.dart, ../models/order_model.dart, ../models/review_model.dart, OrderService, package:cloud_firestore/cloud_firestore.dart, ReviewService (+34 more)

### Community 20 - "Widgets Cards"
Cohesion: 0.07
Nodes (28): EdgeInsetsGeometry?, address, AppCard, backgroundColor, build, _buildPlaceholder, child, cuisines (+20 more)

### Community 21 - "Models User Model"
Cohesion: 0.14
Nodes (27): canAccessDevPanel, copyWith, createdAt, deliveryAddress, devPermissions, displayName, email, fromFirestore (+19 more)

### Community 22 - "Services Location Service"
Cohesion: 0.07
Nodes (26): _apiKey, _calculateStraightLineDistance, description, distanceMeters, DistanceResult, distanceText, durationSeconds, durationText (+18 more)

### Community 23 - "Services Search Service"
Cohesion: 0.11
Nodes (32): double?, List, MenuItemModel, ShopModel, SearchService, HitSoochiService, original, RecommendationResponse (+24 more)

### Community 24 - "Services Auth Service"
Cohesion: 0.08
Nodes (24): ../config/app_config.dart, FirebaseAuth, package:firebase_auth/firebase_auth.dart, package:google_sign_in/google_sign_in.dart, _auth, AuthService, authStateChanges, _createOrUpdateUserDocument (+16 more)

### Community 25 - "Widgets Location Picker"
Cohesion: 0.08
Nodes (26): LatLng?, MapController, package:flutter_map/flutter_map.dart, package:geocoding/geocoding.dart, _addressDisplay, build, _buildAddressCard, _buildCenterPin (+18 more)

### Community 26 - "Search Search Screen"
Cohesion: 0.07
Nodes (26): ../menu/menu_screen.dart, build, _buildBody, _buildCategoryChip, _buildEmptyState, _buildNoResults, _buildPopularShopsList, _buildPopularShopTile (+18 more)

### Community 27 - "Providers Cart Provider"
Cohesion: 0.10
Nodes (24): build, _CartScreenState, _loadShop, _placeOrder, _showOrderConfirmation, initState, addItem, CartProvider (+16 more)

### Community 28 - "Widgets Address Autocomplete"
Cohesion: 0.08
Nodes (24): dart:ui, _inputDecoration, ../services/location_service.dart, Timer?, AddressAutocompleteField, _AddressAutocompleteFieldState, build, controller (+16 more)

### Community 29 - "Developer Developer Panel"
Cohesion: 0.10
Nodes (21): _CashSummaryCard, _CompletedOrderTile, _FilterChip, _KPICard, _AllTimeCard, _CashSummaryCard, _AnalyticsCard, _AuditSummaryCard (+13 more)

### Community 30 - "Order Order Tracking"
Cohesion: 0.13
Nodes (14): build, _buildDeliveryMap, _buildInfoRow, _buildSimpleCard, _calculateETA, _callShop, createState, initState (+6 more)

### Community 31 - "Models Menu Item"
Cohesion: 0.10
Nodes (19): category, copyWith, createdAt, description, formattedOriginalPrice, formattedPrice, fromFirestore, hasDiscount (+11 more)

### Community 32 - "Lib Main"
Cohesion: 0.09
Nodes (21): firebase_options.dart, _bounceAnimation, _bounceController, build, createState, dispose, _fadeAnimation, _fadeController (+13 more)

### Community 33 - "Services Order Notification"
Cohesion: 0.10
Nodes (19): notification_service.dart, _currentShopId, _currentUserRole, _firestore, _handleOrdersSnapshot, _initNotifications, _instance, _isFirstLoad (+11 more)

### Community 34 - "Auth Login Screen"
Cohesion: 0.10
Nodes (20): build, createState, dispose, _emailController, _formKey, _GoogleSignInButton, isLoading, LoginScreen (+12 more)

### Community 35 - "Widgets Animations"
Cohesion: 0.10
Nodes (32): CartScreen, DashboardView, _DashboardViewState, DeveloperPanel, _DeveloperPanelState, _FullShopDashboard, _FullShopDashboardState, HomeScreen (+24 more)

### Community 36 - "Menu Menu Screen"
Cohesion: 0.11
Nodes (17): ../cart/cart_screen.dart, ../../config/design_system.dart, _buildCategoryTabBar, _buildInfoPanel, _buildReviewTile, createState, _formatDate, _menuStream (+9 more)

### Community 37 - "Delivery Delivery"
Cohesion: 0.10
Nodes (21): build, _loadStats, _showSettlementConfirm, build, _buildDeliveryHistory, _buildRecentDeliveries, _DeliveryMapView, _DeliveryMapViewState (+13 more)

### Community 38 - "Services Delivery Alarm"
Cohesion: 0.11
Nodes (18): ChangeNotifier, acknowledgeAll, acknowledgeOrder, _audioPlayer, DeliveryAlarmService, dispose, _instance, isAlarmActive (+10 more)

### Community 39 - "Config App Config"
Cohesion: 0.11
Nodes (17): AppConfig, appName, appTagline, appVersion, defaultFoodImage, defaultShopImage, defaultUserAvatar, developerEmail (+9 more)

### Community 40 - "Providers User Preferences"
Cohesion: 0.09
Nodes (36): _showLoginRequiredDialog, child, TelegramPageRoute, _openOrdersOnMap, _buildCustomerHomeTab, _buildHeader, _buildOfferCard, _buildProfileTab (+28 more)

### Community 41 - "Widgets Order Widgets"
Cohesion: 0.11
Nodes (18): OrderModel, build, currentStatus, _getColor, _getIcon, icon, isCompleted, isCurrent (+10 more)

### Community 43 - "Widgets Inputs"
Cohesion: 0.11
Nodes (17): IconData, TextEditingController?, TextInputType?, AppDropdown, AppInputField, build, controller, enabled (+9 more)

### Community 44 - "Widgets Pressable Scale"
Cohesion: 0.11
Nodes (19): AnimationController, package:flutter/services.dart, Widget, _animation, build, child, _controller, createState (+11 more)

### Community 45 - "Doc Implementation Summary"
Cohesion: 0.08
Nodes (23): 1. **Core Functionality**, 2. **Files Created**, 3. **Updated Files**, Automatic Sound Selection, Basic Usage, 🎉 Benefits, Configuration & Services, 🔔 Custom Notification Sounds - Implementation Summary (+15 more)

### Community 46 - "Widgets Buttons"
Cohesion: 0.12
Nodes (16): Color?, AppButton, backgroundColor, build, DangerButton, _getButtonColor, height, icon (+8 more)

### Community 47 - "Services Kitchen Alarm"
Cohesion: 0.18
Nodes (20): AudioPlayer, dart:async, int get, kitchen_alarm_service.dart, package:audioplayers/audioplayers.dart, acknowledgeAll, acknowledgeOrder, _alarmSoundFile (+12 more)

### Community 48 - "Models Notification Model"
Cohesion: 0.12
Nodes (16): copyWith, createdAt, fromFirestore, fromString, id, isRead, message, NotificationModel (+8 more)

### Community 49 - "Widgets Time Period"
Cohesion: 0.13
Nodes (14): package:lottie/lottie.dart, ValueChanged, VoidCallback, build, isSelected, onChanged, onTap, period (+6 more)

### Community 50 - "Models Cash Transaction"
Cohesion: 0.12
Nodes (15): DateTime?, amount, CashTransactionModel, CashTransactionType, formattedAmount, fromFirestore, id, notes (+7 more)

### Community 51 - "Dartpad Web Plugin"
Cohesion: 0.12
Nodes (16): registerPlugins, registrar, package:audioplayers_web/audioplayers_web.dart, package:cloud_firestore_web/cloud_firestore_web.dart, package:firebase_auth_web/firebase_auth_web.dart, package:firebase_core_web/firebase_core_web.dart, package:flutter_web_plugins/flutter_web_plugins.dart, package:fluttertoast/fluttertoast_web.dart (+8 more)

### Community 52 - "Models Review Model"
Cohesion: 0.15
Nodes (12): comment, createdAt, fromFirestore, id, rating, ReviewModel, shopId, toFirestore (+4 more)

### Community 53 - "Services Resource Cache"
Cohesion: 0.15
Nodes (12): ../config/lottie_assets.dart, dart:developer, DefaultCacheManager, ../models/user_model.dart, package:flutter_cache_manager/flutter_cache_manager.dart, _cacheAsset, cacheImages, _cacheManager (+4 more)

### Community 54 - "Services Payment Service"
Cohesion: 0.17
Nodes (11): bool get, dispose, initialize, _initialized, _instance, isSupported, isWeb, openCheckout (+3 more)

### Community 55 - "Doc Notification Sounds"
Cohesion: 0.08
Nodes (23): Advanced Usage, Basic Usage, Code Integration, 🔔 Custom Notification Sounds Setup Guide, File Structure, How It Works, Migration from Old Code, Option A: Automatic (Recommended) (+15 more)

### Community 57 - "Config Emoji To"
Cohesion: 0.20
Nodes (8): EmojiToIcon, getIcon, getIconWidget, package:flutter/material.dart, package:flutter_test/flutter_test.dart, package:foody_vrinda/main.dart, package:iconsax/iconsax.dart, main

### Community 58 - "Models Cart Item"
Cohesion: 0.20
Nodes (9): double get, menu_item_model.dart, CartItemModel, copyWith, formattedTotal, menuItem, quantity, total (+1 more)

### Community 59 - "Services Foody Cache"
Cohesion: 0.16
Nodes (22): dart:convert, foody_cache_service.dart, ../models/menu_item_model.dart, ../models/shop_model.dart, _cacheExpiry, cacheMenuItems, cacheShops, clearAllCache (+14 more)

### Community 60 - "Config Firebase Config"
Cohesion: 0.22
Nodes (8): apiKey, appId, authDomain, FirebaseConfig, messagingSenderId, projectId, storageBucket, static const String

### Community 61 - "Lib Firebase Options"
Cohesion: 0.25
Nodes (7): android, DefaultFirebaseOptions, ios, web, package:firebase_core/firebase_core.dart, package:flutter/foundation.dart, static const FirebaseOptions

### Community 62 - "Foody Vrinda App"
Cohesion: 0.10
Nodes (19): Firebase BaaS, Flutter Pubspec Configuration, Build Commands, Customer Features, Features, Firebase Configuration, Foody Vrinda - Cloud Kitchen Mobile App, for emulator (+11 more)

### Community 72 - "Settings Notification Settings"
Cohesion: 0.12
Nodes (17): class, ../../config/notification_sound_config.dart, ../config/theme.dart, _audioPlayer, _availableSounds, build, _buildSoundTile, createState (+9 more)

### Community 73 - "Config Notification Sound"
Cohesion: 0.12
Nodes (16): _cachedSounds, defaultDeliverySound, defaultKitchenSound, defaultOwnerSound, getAssetPath, getChannelId, getChannelName, _getNotificationTypeDisplay (+8 more)

### Community 74 - "Doc Quick Reference"
Cohesion: 0.12
Nodes (16): 💻 Code Snippets, ⚡ Common Issues & Fixes, 🔔 Custom Notification Sounds - Quick Reference, 🔗 Documentation Links, 📂 File Locations, 🔍 Free Sound Resources, Import, Initialize (in main.dart) (+8 more)

### Community 75 - "Doc Walkthrough"
Cohesion: 0.14
Nodes (13): Developer Panel - Shop Assignment, 🟢 Firebase Google Sign-In Fix, Fluent Asset Loading, Key Accomplishments, 🟢 Local Resource Caching, 🟢 Many-to-Many Delivery Assignment, 🟢 Perfect Image Rendering, Role-Based Views (+5 more)

### Community 76 - "Doc Integration Guide"
Cohesion: 0.15
Nodes (12): Complete Integration Checklist, Integration Guide: Adding Notifications to Order Service, Next Steps, Notes, Step 1: Update Order Service, Step 2: Notify Staff When Order is Created, Step 3: Notify Delivery Staff When Order is Ready, Step 4: Notify Users of Status Updates (+4 more)

### Community 77 - "Doc Search Implementation"
Cohesion: 0.17
Nodes (11): Data Flow, [Home Screen Integration], Implementation Plan - Universal Search, Manual Verification, [MODIFY] [home_screen.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/home/home_screen.dart), [NEW] [search_screen.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/search/search_screen.dart), [NEW] [search_service.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/services/search_service.dart), Proposed Changes (+3 more)

### Community 78 - "Doc Image Rendering"
Cohesion: 0.18
Nodes (10): Implementation Plan - Optimized Image Rendering, Manual Verification, [MODIFY] [cards.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/widgets/cards.dart), [MODIFY] [menu_screen.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/menu/menu_screen.dart), [MODIFY] [theme.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/config/theme.dart), Proposed Changes, [Shop Details], [Theme & Styles] (+2 more)

### Community 79 - "Doc Google Sign"
Cohesion: 0.20
Nodes (9): Common Reasons:, Fixing Google Sign-In `DEVELOPER_ERROR` (Code 10), Root Cause, Step 1: Collect ALL your Fingerprints, Step 2: Add to Firebase Console, Step 3: Configure the OAuth Consent Screen, Step 4: Use the correct Client ID in Code, Step 5: (If Play Store) Add Production SHA (+1 more)

### Community 80 - "Order Order History"
Cohesion: 0.22
Nodes (8): ../../config/telegram_page_route.dart, isInline, OrderHistoryScreen, package:provider/provider.dart, ../../providers/auth_provider.dart, ../../services/order_service.dart, ../../widgets/animations.dart, ../../widgets/order_widgets.dart

### Community 81 - "Doc Multi Shop"
Cohesion: 0.22
Nodes (8): [Developer Panel], Implementation Plan - Multi-Shop Delivery Assignment, Manual Verification, [Models], [MODIFY] [developer_panel.dart](file:///Users/mr.bajrangi/Visual%20Studio%20Code/Projects/Cloud-Kitchen/foody_vrinda_app/lib/screens/developer/developer_panel.dart), Proposed Changes, [Services], Verification Plan

### Community 82 - "Readme Foody Vrinda"
Cohesion: 0.33
Nodes (5): 📁 Directory Structure, 🌟 Features, Foody Vrinda - Authentic Satvik Cloud Kitchen, 🚀 Getting Started, 🛠️ Tech Stack

### Community 83 - "Foody Vrinda App"
Cohesion: 0.50
Nodes (3): 1. Dynamic Style Linting Rule, 2. Explicit Type Casting for Iterative Map Lists, Foody Vrinda App Rules & Guidelines

### Community 84 - "Foody Vrinda V3"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + Vite

## Knowledge Gaps
- **1199 isolated node(s):** `registrar`, `registerPlugins`, `AppConfig`, `developerEmail`, `developerPassword` (+1194 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `Delivery Delivery` to `Developer Developer Panel`, `Auth Login Screen`, `Widgets Animations`, `Home Home Screen`, `Services Delivery Alarm`, `Providers User Preferences`, `Cart Cart Screen`, `Delivery Delivery Dashboard`, `Delivery Delivery View`, `Dashboard Dashboard View`, `Kitchen Kitchen View`, `Order Order History`, `Providers Auth Provider`, `Providers Cart Provider`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `ShopModel` connect `Services Search Service` to `Developer Developer Panel`, `Cart Cart Screen`, `Menu Menu Screen`, `Models Shop Model`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `registrar`, `registerPlugins`, `AppConfig` to the rest of the system?**
  _1200 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Developer Developer Panel` be split into smaller, more focused modules?**
  _Cohesion score 0.012345679012345678 - nodes in this community are weakly interconnected._
- **Should `Config Theme` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._
- **Should `Developer Notification Sound` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Services Hit Soochi` be split into smaller, more focused modules?**
  _Cohesion score 0.08156028368794327 - nodes in this community are weakly interconnected._