# Graph Report - .  (2026-06-03)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1652 nodes · 2337 edges · 72 communities (64 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5fec3e1c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]

## God Nodes (most connected - your core abstractions)
1. `AuthProvider` - 40 edges
2. `useAuth()` - 20 edges
3. `NotificationManager` - 12 edges
4. `db` - 11 edges
5. `FastOrderMonitor` - 10 edges
6. `KitchenNotifier` - 8 edges
7. `ShopModel` - 5 edges
8. `_HomeScreenState` - 5 edges
9. `auth` - 5 edges
10. `_SplashScreenState` - 4 edges

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

## Communities (72 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.01
Nodes (158): ../../config/menu_images.dart, _addStaff, _addStaffUser, _allOrders, _allUsers, amount, _applyHistoryFilter, _authService (+150 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (50): accentCoral, accentOrange, accentYellow, AppTheme, background, border, borderColor, borderLight (+42 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (46): class, _cachedSounds, ../../config/notification_sound_config.dart, defaultDeliverySound, defaultKitchenSound, defaultOwnerSound, getAssetPath, getChannelId (+38 more)

### Community 3 - "Community 3"
Cohesion: 0.04
Nodes (46): bool?, hit_soochi_service.dart, _baseUrl, boostReason, category, confidence, configure, cta (+38 more)

### Community 4 - "Community 4"
Cohesion: 0.04
Nodes (44): badCat, build, celebration, checkmark, chefPizza, clock, confetti, cooking (+36 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (43): ../../config/emoji_to_icon.dart, ../dashboard/dashboard_view.dart, ../delivery/delivery_dashboard_view.dart, ../delivery/delivery_view.dart, ../developer/developer_panel.dart, _buildCategoryChip, _buildCustomerBottomNavBar, _buildCustomerView (+35 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (43): dart:convert, foody_cache_service.dart, ../models/menu_item_model.dart, ../../models/shop_model.dart, _cacheExpiry, cacheMenuItems, cacheShops, clearAllCache (+35 more)

### Community 7 - "Community 7"
Cohesion: 0.05
Nodes (42): cashCollectedAt, cashSettledAt, collectedBy, contactAttempts, copyWith, createdAt, customerLatitude, customerLongitude (+34 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (41): address, AlarmSettings, closeTime, copyWith, createdAt, daysOpen, deliveryCharge, deliveryReady (+33 more)

### Community 9 - "Community 9"
Cohesion: 0.05
Nodes (37): ../auth/login_screen.dart, _addressController, _buildEmptyCart, _buildPaymentChip, _buildPaymentChipWithCallback, _buildPaymentOption, _buildPriceRow, _codEnabled (+29 more)

### Community 10 - "Community 10"
Cohesion: 0.17
Nodes (19): AuthModal(), Header(), AuthContext, AuthProvider(), useAuth(), CartProvider(), useCart(), NotificationProvider() (+11 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (36): amount, _buildAllTimeStats, _buildCashPanel, _buildFilterChip, _buildHeader, _buildLegendItem, _buildLocationPanel, _buildTodayStats (+28 more)

### Community 12 - "Community 12"
Cohesion: 0.06
Nodes (33): accentOrangeDark, accentOrangeLight, ambientGoldGradient, borderSubtle, bounceClickable, brightness, charcoalDark, culinaryFlameGradient (+25 more)

### Community 13 - "Community 13"
Cohesion: 0.06
Nodes (33): _buildAlarmBanner, _buildAllShopsDelivery, _buildHeader, _buildMultiShopDelivery, _buildOrdersList, _buildSingleShopDelivery, _callCustomer, _checkForNewOrders (+25 more)

### Community 14 - "Community 14"
Cohesion: 0.06
Nodes (31): completeOrderWorkflow, createOrderWithNotifications, initializeNotifications, notifyCustomerOfOrderStatus, notifyDeliveryStaffOfReadyOrder, notifyKitchenOfNewOrder, notifyOwnerOfNewOrder, OrderServiceIntegrationExample (+23 more)

### Community 15 - "Community 15"
Cohesion: 0.07
Nodes (29): _acknowledgeReturn, amount, _buildCashManagement, _buildChartsRow, _buildHeader, _buildKPICards, _buildOrderHistory, _buildOrderStatusCard (+21 more)

### Community 16 - "Community 16"
Cohesion: 0.07
Nodes (29): _alarmService, _bellAnimation, _bellController, _buildAlarmBanner, _buildHeader, createState, dispose, _initAlarmListener (+21 more)

### Community 17 - "Community 17"
Cohesion: 0.07
Nodes (29): actionLabel, animate, animationType, _bounceAnimation, build, CelebrationOverlay, child, color (+21 more)

### Community 18 - "Community 18"
Cohesion: 0.07
Nodes (28): AuthService, AuthStatus get, _authService, AuthStatus, _clearCachedUserData, clearError, _error, _firestore (+20 more)

### Community 19 - "Community 19"
Cohesion: 0.07
Nodes (29): ../../models/cash_transaction_model.dart, OrderService, cancelOrder, collectCash, createOrder, deleteCashTransaction, _firestore, getActiveOrders (+21 more)

### Community 20 - "Community 20"
Cohesion: 0.07
Nodes (27): EdgeInsetsGeometry?, address, backgroundColor, build, _buildPlaceholder, child, cuisines, deliveryTime (+19 more)

### Community 21 - "Community 21"
Cohesion: 0.08
Nodes (27): canAccessDevPanel, copyWith, createdAt, deliveryAddress, devPermissions, displayName, email, fromFirestore (+19 more)

### Community 22 - "Community 22"
Cohesion: 0.07
Nodes (26): package:http/http.dart, _apiKey, _calculateStraightLineDistance, description, distanceMeters, DistanceResult, distanceText, durationSeconds (+18 more)

### Community 23 - "Community 23"
Cohesion: 0.08
Nodes (26): ShopModel, SearchService, original, RecommendationResponse, confidence, detectedIntent, enhancedSearch, _firestore (+18 more)

### Community 24 - "Community 24"
Cohesion: 0.08
Nodes (24): ../config/app_config.dart, FirebaseAuth, package:firebase_auth/firebase_auth.dart, package:google_sign_in/google_sign_in.dart, _auth, AuthService, authStateChanges, _createOrUpdateUserDocument (+16 more)

### Community 25 - "Community 25"
Cohesion: 0.08
Nodes (24): LatLng?, MapController, package:flutter_map/flutter_map.dart, package:geocoding/geocoding.dart, _addressDisplay, build, _buildAddressCard, _buildCenterPin (+16 more)

### Community 26 - "Community 26"
Cohesion: 0.08
Nodes (23): ../menu/menu_screen.dart, build, _buildBody, _buildCategoryChip, _buildEmptyState, _buildPopularShopsList, _buildPopularShopTile, _buildQuickActionTile (+15 more)

### Community 27 - "Community 27"
Cohesion: 0.09
Nodes (22): build, _loadShop, _placeOrder, _showOrderConfirmation, ../models/cart_item_model.dart, addItem, clear, clearAndSetShop (+14 more)

### Community 28 - "Community 28"
Cohesion: 0.09
Nodes (22): dart:ui, _inputDecoration, ../services/location_service.dart, Timer?, build, controller, createState, _debounce (+14 more)

### Community 29 - "Community 29"
Cohesion: 0.09
Nodes (23): _CashSummaryCard, _AllTimeCard, _CashSummaryCard, _LocationButton, _RecentDeliveryTile, _StatItem, _AnalyticsCard, _AuditSummaryCard (+15 more)

### Community 30 - "Community 30"
Cohesion: 0.10
Nodes (20): ../../models/order_model.dart, isInline, build, _buildDeliveryMap, _buildInfoRow, _buildSimpleCard, _calculateETA, _callShop (+12 more)

### Community 31 - "Community 31"
Cohesion: 0.10
Nodes (20): double?, category, copyWith, createdAt, description, formattedOriginalPrice, formattedPrice, fromFirestore (+12 more)

### Community 32 - "Community 32"
Cohesion: 0.10
Nodes (20): firebase_options.dart, _bounceAnimation, _bounceController, build, createState, dispose, _fadeAnimation, _fadeController (+12 more)

### Community 33 - "Community 33"
Cohesion: 0.10
Nodes (19): dart:async, notification_service.dart, _currentShopId, _currentUserRole, _firestore, _handleOrdersSnapshot, _initNotifications, _instance (+11 more)

### Community 34 - "Community 34"
Cohesion: 0.11
Nodes (18): build, createState, dispose, _emailController, _formKey, _GoogleSignInButton, isLoading, _obscurePassword (+10 more)

### Community 35 - "Community 35"
Cohesion: 0.15
Nodes (19): _CartScreenState, _DashboardViewState, _DeliveryMapView, _FullShopDashboard, _HomeScreenState, _AnimatedAlarmBanner, SplashScreen, _SplashScreenState (+11 more)

### Community 36 - "Community 36"
Cohesion: 0.11
Nodes (18): ../cart/cart_screen.dart, ../../config/design_system.dart, ../../config/telegram_page_route.dart, _buildCategoryTabBar, _buildInfoPanel, _buildReviewTile, createState, _formatDate (+10 more)

### Community 37 - "Community 37"
Cohesion: 0.11
Nodes (19): build, _loadStats, _showSettlementConfirm, build, _buildDeliveryHistory, _buildRecentDeliveries, _loadStats, build (+11 more)

### Community 38 - "Community 38"
Cohesion: 0.11
Nodes (17): AudioPlayer, ChangeNotifier, int get, package:audioplayers/audioplayers.dart, acknowledgeAll, acknowledgeOrder, _audioPlayer, dispose (+9 more)

### Community 39 - "Community 39"
Cohesion: 0.11
Nodes (16): AppConfig, appName, appTagline, appVersion, defaultFoodImage, defaultShopImage, defaultUserAvatar, developerEmail (+8 more)

### Community 40 - "Community 40"
Cohesion: 0.11
Nodes (17): _buildTrendingItemsSection, _addressLabel, _customGreetingName, _deliveryInstructions, _dietaryFilter, _keyAddressLabel, _keyCustomGreetingName, _keyDeliveryInstructions (+9 more)

### Community 41 - "Community 41"
Cohesion: 0.11
Nodes (17): IconData, build, currentStatus, _getColor, _getIcon, icon, isCompleted, isCurrent (+9 more)

### Community 43 - "Community 43"
Cohesion: 0.11
Nodes (17): TextEditingController, TextInputType?, Widget, AppDropdown, AppInputField, build, controller, enabled (+9 more)

### Community 44 - "Community 44"
Cohesion: 0.12
Nodes (16): AnimationController, package:flutter/services.dart, _animation, build, child, _controller, createState, dispose (+8 more)

### Community 45 - "Community 45"
Cohesion: 0.12
Nodes (16): _showLoginRequiredDialog, child, _openOrdersOnMap, _buildCustomerHomeTab, _buildHeader, _buildOfferCard, _buildProfileTab, _buildTrendingItemCard (+8 more)

### Community 46 - "Community 46"
Cohesion: 0.12
Nodes (16): Color, AppButton, backgroundColor, build, DangerButton, _getButtonColor, height, icon (+8 more)

### Community 47 - "Community 47"
Cohesion: 0.12
Nodes (16): kitchen_alarm_service.dart, acknowledgeAll, acknowledgeOrder, _alarmSoundFile, _audioPlayer, dispose, initialize, _instance (+8 more)

### Community 48 - "Community 48"
Cohesion: 0.13
Nodes (15): copyWith, createdAt, fromFirestore, fromString, id, isRead, message, NotificationType (+7 more)

### Community 49 - "Community 49"
Cohesion: 0.13
Nodes (14): config/theme.dart, package:lottie/lottie.dart, ValueChanged, VoidCallback?, build, isSelected, onChanged, onTap (+6 more)

### Community 50 - "Community 50"
Cohesion: 0.13
Nodes (14): DateTime, amount, CashTransactionType, formattedAmount, fromFirestore, id, notes, orderId (+6 more)

### Community 51 - "Community 51"
Cohesion: 0.15
Nodes (12): registerPlugins, registrar, package:audioplayers_web/audioplayers_web.dart, package:firebase_auth_web/firebase_auth_web.dart, package:firebase_core_web/firebase_core_web.dart, package:flutter_web_plugins/flutter_web_plugins.dart, package:fluttertoast/fluttertoast_web.dart, package:geolocator/geolocator.dart (+4 more)

### Community 52 - "Community 52"
Cohesion: 0.15
Nodes (12): comment, createdAt, fromFirestore, id, rating, ReviewModel, shopId, toFirestore (+4 more)

### Community 53 - "Community 53"
Cohesion: 0.17
Nodes (11): config/lottie_assets.dart, dart:developer, DefaultCacheManager, ../models/user_model.dart, package:flutter_cache_manager/flutter_cache_manager.dart, _cacheAsset, cacheImages, _cacheManager (+3 more)

### Community 54 - "Community 54"
Cohesion: 0.18
Nodes (10): bool get, dispose, initialize, _initialized, _instance, isSupported, isWeb, openCheckout (+2 more)

### Community 55 - "Community 55"
Cohesion: 0.18
Nodes (11): FirebaseFirestore, ../../models/review_model.dart, package:cloud_firestore/cloud_firestore.dart, ReviewService, addReview, _firestore, getPendingOrderCount, getReviews (+3 more)

### Community 57 - "Community 57"
Cohesion: 0.20
Nodes (8): EmojiToIcon, getIcon, getIconWidget, package:flutter/material.dart, package:flutter_test/flutter_test.dart, package:foody_vrinda/main.dart, package:iconsax/iconsax.dart, main

### Community 58 - "Community 58"
Cohesion: 0.20
Nodes (9): double get, menu_item_model.dart, copyWith, formattedTotal, menuItem, quantity, total, MenuItemModel (+1 more)

### Community 59 - "Community 59"
Cohesion: 0.20
Nodes (10): pressable_scale.dart, PulseAnimation, SingleTickerProviderStateMixin, AnimatedIconButton, _AnimatedIconButtonState, BouncyAddButton, _BouncyAddButtonState, _PulseAnimationState (+2 more)

### Community 60 - "Community 60"
Cohesion: 0.22
Nodes (8): apiKey, appId, authDomain, FirebaseConfig, messagingSenderId, projectId, storageBucket, static const String

### Community 61 - "Community 61"
Cohesion: 0.25
Nodes (7): android, DefaultFirebaseOptions, ios, web, package:firebase_core/firebase_core.dart, package:flutter/foundation.dart, static const FirebaseOptions

### Community 62 - "Community 62"
Cohesion: 0.40
Nodes (5): Firebase BaaS, Flutter Pubspec Configuration, Foody Vrinda Mobile App, Kitchen Entry Point, Razorpay SDK

## Knowledge Gaps
- **1219 isolated node(s):** `registrar`, `registerPlugins`, `AppConfig`, `developerEmail`, `developerPassword` (+1214 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AuthProvider` connect `Community 37` to `Community 0`, `Community 34`, `Community 35`, `Community 5`, `Community 38`, `Community 9`, `Community 11`, `Community 13`, `Community 45`, `Community 15`, `Community 16`, `Community 18`, `Community 27`, `Community 30`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `ShopModel` connect `Community 23` to `Community 0`, `Community 9`, `Community 36`, `Community 8`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `UserRole` connect `Community 21` to `Community 0`, `Community 33`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `registrar`, `registerPlugins`, `AppConfig` to the rest of the system?**
  _1220 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.012578616352201259 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0392156862745098 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.04251700680272109 - nodes in this community are weakly interconnected._