// Foody Vrinda Seed & Offline Data

export const SEED_SHOPS = [
  {
    id: 'shop-vrinda-main',
    name: 'Vrinda Cloud Kitchen (Main)',
    address: 'Near ISKCON Temple, Raman Reti, Vrindavan',
    phone: '+91 9876543210',
    coordinates: { lat: 27.5706, lng: 77.6593 },
    isOpen: true,
    minimumOrderAmount: 0,
    deliveryCharge: 0,
    gstPercentage: 5,
    onlinePaymentsEnabled: true,
    codEnabled: true
  },
  {
    id: 'shop-prem-mandir',
    name: 'Prem Mandir Prasad Kitchen',
    address: 'Chatikara Road, Raman Reti, Vrindavan',
    phone: '+91 9876543211',
    coordinates: { lat: 27.5715, lng: 77.6740 },
    isOpen: true,
    minimumOrderAmount: 50,
    deliveryCharge: 20,
    gstPercentage: 5,
    onlinePaymentsEnabled: true,
    codEnabled: true
  },
  {
    id: 'shop-banke-bihari',
    name: 'Shri Banke Bihari Dham Kitchen',
    address: 'Godowlia Marg, Vrindavan',
    phone: '+91 9876543212',
    coordinates: { lat: 27.5815, lng: 77.6990 },
    isOpen: true,
    minimumOrderAmount: 100,
    deliveryCharge: 0,
    gstPercentage: 5,
    onlinePaymentsEnabled: true,
    codEnabled: true
  }
];

export const DEFAULT_PRASAD_ITEMS = [
  {
    id: 'prasad-1',
    name: 'Cheese With Satvik Burger',
    subtitle: 'Cheesy satvik, special price',
    category: 'Snacks',
    price: 140,
    kcal: '260 kcal',
    tag: 'Popular Choice',
    spicyLevel: 'Mild',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
    description: 'Fresh baked artisanal whole wheat bun filled with pure paneer patty, garden crisp lettuce, heirloom tomatoes, and creamy satvik herbal cheese.',
    nutrition: '260 kcal, 14g Protein, 100% Satvik',
    isAvailable: true,
    shopId: 'shop-vrinda-main'
  },
  {
    id: 'prasad-2',
    name: 'Royal Vedic Thali',
    subtitle: 'Pure Desi Ghee preparation',
    category: 'Meals',
    price: 220,
    kcal: '540 kcal',
    tag: 'Bestseller',
    spicyLevel: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=80',
    description: 'Complete sacred feast: Paneer Butter Masala, Dal Makhani, 4 Butter Tawa Rotis, Jeera Rice, Gulab Jamun, and Fresh Mint Raita.',
    nutrition: '540 kcal, 22g Protein, Pure Ghee',
    isAvailable: true,
    shopId: 'shop-vrinda-main'
  },
  {
    id: 'prasad-3',
    name: 'Kesariya Rabdi Kheer',
    subtitle: 'Slow simmered thickened milk dessert',
    category: 'Sweets',
    price: 120,
    kcal: '210 kcal',
    tag: 'Holy Prasad',
    spicyLevel: 'Mild',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80',
    description: 'Traditional slow-cooked milk kheer enriched with Kashmiri saffron, crushed green cardamom, pistachios, and slivered almonds.',
    nutrition: '210 kcal, 6g Protein, Saffron Infused',
    isAvailable: true,
    shopId: 'shop-vrinda-main'
  },
  {
    id: 'prasad-4',
    name: 'Paneer Satvik Pizza (10")',
    subtitle: 'Crispy thin crust with desi herbs',
    category: 'Snacks',
    price: 240,
    kcal: '380 kcal',
    tag: 'Chef Special',
    spicyLevel: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=80',
    description: 'Hand-stretched dough baked in stone oven topped with fresh diced cottage cheese, bell peppers, sweet corn, and mozzarella.',
    nutrition: '380 kcal, 18g Protein, Handcrafted',
    isAvailable: true,
    shopId: 'shop-vrinda-main'
  },
  {
    id: 'prasad-5',
    name: 'Govind Bhog Basmati Rice',
    subtitle: 'Steamed aromatic long grain rice',
    category: 'Meals',
    price: 90,
    kcal: '180 kcal',
    tag: 'Sacred Offering',
    spicyLevel: 'Mild',
    imageUrl: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=500&auto=format&fit=crop&q=80',
    description: 'Aromatic Govind Bhog variety rice cooked with cloves, bay leaves, and pure Gir cow A2 desi ghee.',
    nutrition: '180 kcal, 4g Protein, Fragrant Rice',
    isAvailable: true,
    shopId: 'shop-vrinda-main'
  },
  {
    id: 'prasad-6',
    name: 'Fresh Vrinda Lassi (Kulhad)',
    subtitle: 'Sweet churned curd with malai & pistachios',
    category: 'Drinks',
    price: 60,
    kcal: '150 kcal',
    tag: 'Chilled Delight',
    spicyLevel: 'Mild',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80',
    description: 'Hand-churned creamy fresh curd blended with rose water and topped with thick malai rabdi in an earthen kulhad.',
    nutrition: '150 kcal, 5g Protein, Earthen Aroma',
    isAvailable: true,
    is_available: true,
    shopId: 'shop-vrinda-main'
  }
];

export const SEED_MENU_ITEMS = DEFAULT_PRASAD_ITEMS;

export const SEED_ORDERS = [
  {
    id: 'ord-1081',
    customer_name: 'Radhe Shyam Devotee',
    customer_phone: '+91 98765 43210',
    delivery_address: 'Near ISKCON Temple, Raman Reti, Vrindavan',
    items: [
      { id: 'prasad-1', name: 'Cheese With Satvik Burger', price: 140, quantity: 2 },
      { id: 'prasad-6', name: 'Fresh Vrinda Lassi (Kulhad)', price: 60, quantity: 1 }
    ],
    total_amount: 340,
    status: 'cooking',
    payment_method: 'UPI',
    created_at: new Date(Date.now() - 10 * 60000).toISOString(),
    shop_id: 'shop-vrinda-main',
    estimated_time: '15-20 mins'
  },
  {
    id: 'ord-1082',
    customer_name: 'Gauranga Das',
    customer_phone: '+91 98765 43211',
    delivery_address: 'Prem Mandir Gate 2, Chatikara Road, Vrindavan',
    items: [
      { id: 'prasad-2', name: 'Royal Vedic Thali', price: 220, quantity: 1 },
      { id: 'prasad-3', name: 'Kesariya Rabdi Kheer', price: 120, quantity: 2 }
    ],
    total_amount: 460,
    status: 'ready',
    payment_method: 'Cash on Delivery',
    created_at: new Date(Date.now() - 25 * 60000).toISOString(),
    shop_id: 'shop-vrinda-main',
    estimated_time: 'Ready for Sarathi'
  }
];
