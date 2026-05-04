
// Products API request types
export interface ProductsListParams {
  page?: number;
  perPage?: number;
  category?: string;
  search?: string;
  isActive?: string; // "1" to fetch active products only (buyer side)
}

// Products API response types (matching the actual API structure)
export interface ApiProductData {
  productId: string;
  productName: string;
  categoryId: string;
  categoryName: string;
  productDescription: string;
  productTags: string[];
  unitPrice: string;
  /** Previous/original price before any discount (used for strikethrough display) */
  oldPrice?: string;
  totalPrice?: number;
  discountType: string;
  discountValue: string;
  discountPrice: string;
  stock: string;
  minStock: string;
  images: string[];
  isActive: string;
  storeName: string;
  vendorLogo?: string;
  vendorId?: string;
  isSubaccountSet?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsListResponse {
  status: number;
  error: boolean;
  message: string;
  data: ApiProductData[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
}

export interface SingleProductResponse {
  status: number;
  error: boolean;
  message: string;
  data: ApiProductData;
}

export interface ProductRatingsResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    totalRating: string;
    ratingCount: string;
  };
}

// Mock data for products - using internet images
const MOCK_PRODUCTS: ApiProductData[] = [
  {
    productId: "prod-001",
    productName: "Wireless Bluetooth Headphones Pro",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio. Perfect for music lovers and professionals alike.",
    productTags: ["headphones", "wireless", "bluetooth", "audio"],
    unitPrice: "149.99",
    oldPrice: "199.99",
    totalPrice: 149.99,
    discountType: "percentage",
    discountValue: "25",
    discountPrice: "149.99",
    stock: "45",
    minStock: "10",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "TechHub Store",
    vendorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vendorId: "vendor-001",
    isSubaccountSet: false,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z"
  },
  {
    productId: "prod-002",
    productName: "Smart Watch Series X",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration. Water-resistant design for active lifestyles.",
    productTags: ["smartwatch", "fitness", "health", "tech"],
    unitPrice: "299.99",
    oldPrice: "399.99",
    totalPrice: 299.99,
    discountType: "percentage",
    discountValue: "25",
    discountPrice: "299.99",
    stock: "28",
    minStock: "5",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "GadgetWorld",
    vendorLogo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    vendorId: "vendor-002",
    isSubaccountSet: false,
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-18T11:20:00Z"
  },
  {
    productId: "prod-003",
    productName: "Premium Leather Laptop Bag",
    categoryId: "fashion",
    categoryName: "Fashion",
    productDescription: "Handcrafted genuine leather laptop bag with multiple compartments. Fits laptops up to 15.6 inches. Elegant design for professionals.",
    productTags: ["bag", "leather", "laptop", "professional"],
    unitPrice: "89.99",
    oldPrice: "129.99",
    totalPrice: 89.99,
    discountType: "percentage",
    discountValue: "31",
    discountPrice: "89.99",
    stock: "15",
    minStock: "3",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "StyleHouse",
    vendorLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    vendorId: "vendor-003",
    isSubaccountSet: false,
    createdAt: "2024-01-12T09:00:00Z",
    updatedAt: "2024-01-19T16:45:00Z"
  },
  {
    productId: "prod-004",
    productName: "Mechanical Gaming Keyboard RGB",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Professional mechanical keyboard with RGB backlighting, Cherry MX switches, and programmable macros. Built for gamers and developers.",
    productTags: ["keyboard", "gaming", "mechanical", "rgb"],
    unitPrice: "159.99",
    oldPrice: "199.99",
    totalPrice: 159.99,
    discountType: "percentage",
    discountValue: "20",
    discountPrice: "159.99",
    stock: "32",
    minStock: "8",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "TechHub Store",
    vendorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vendorId: "vendor-001",
    isSubaccountSet: false,
    createdAt: "2024-01-08T07:00:00Z",
    updatedAt: "2024-01-17T13:15:00Z"
  },
  {
    productId: "prod-005",
    productName: "Organic Green Tea Collection",
    categoryId: "groceries",
    categoryName: "Groceries",
    productDescription: "Premium organic green tea sourced from sustainable farms. Includes 6 varieties: Sencha, Matcha, Dragonwell, Gyokuro, Genmaicha, and Hojicha.",
    productTags: ["tea", "organic", "green", "healthy"],
    unitPrice: "34.99",
    totalPrice: 34.99,
    discountType: "",
    discountValue: "0",
    discountPrice: "34.99",
    stock: "100",
    minStock: "20",
    images: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Nature Foods",
    vendorLogo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    vendorId: "vendor-004",
    isSubaccountSet: false,
    createdAt: "2024-01-14T11:00:00Z",
    updatedAt: "2024-01-21T09:30:00Z"
  },
  {
    productId: "prod-006",
    productName: "Running Shoes Air Max Pro",
    categoryId: "fashion",
    categoryName: "Fashion",
    productDescription: "Lightweight running shoes with advanced cushioning technology. Breathable mesh upper and durable rubber outsole. Perfect for marathons.",
    productTags: ["shoes", "running", "sports", "fitness"],
    unitPrice: "129.99",
    oldPrice: "169.99",
    totalPrice: 129.99,
    discountType: "percentage",
    discountValue: "24",
    discountPrice: "129.99",
    stock: "50",
    minStock: "10",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "SportStyle",
    vendorLogo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    vendorId: "vendor-005",
    isSubaccountSet: false,
    createdAt: "2024-01-11T06:00:00Z",
    updatedAt: "2024-01-20T10:00:00Z"
  },
  {
    productId: "prod-007",
    productName: "4K Ultra HD Webcam Pro",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Professional 4K webcam with auto-focus, built-in microphone, and low-light correction. Ideal for streaming, video calls, and content creation.",
    productTags: ["webcam", "4k", "streaming", "video"],
    unitPrice: "79.99",
    oldPrice: "99.99",
    totalPrice: 79.99,
    discountType: "percentage",
    discountValue: "20",
    discountPrice: "79.99",
    stock: "42",
    minStock: "10",
    images: [
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "TechHub Store",
    vendorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vendorId: "vendor-001",
    isSubaccountSet: false,
    createdAt: "2024-01-09T12:00:00Z",
    updatedAt: "2024-01-18T15:45:00Z"
  },
  {
    productId: "prod-008",
    productName: "Stainless Steel Cookware Set",
    categoryId: "appliances",
    categoryName: "Appliances",
    productDescription: "10-piece professional stainless steel cookware set with copper core. Dishwasher safe and oven safe up to 500F. Includes lids.",
    productTags: ["cookware", "kitchen", "stainless", "cooking"],
    unitPrice: "249.99",
    oldPrice: "349.99",
    totalPrice: 249.99,
    discountType: "percentage",
    discountValue: "29",
    discountPrice: "249.99",
    stock: "18",
    minStock: "5",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Home Essentials",
    vendorLogo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    vendorId: "vendor-006",
    isSubaccountSet: false,
    createdAt: "2024-01-13T14:00:00Z",
    updatedAt: "2024-01-19T11:30:00Z"
  },
  {
    productId: "prod-009",
    productName: "Baby Safety Monitor Pro",
    categoryId: "baby-products",
    categoryName: "Baby Products",
    productDescription: "Smart baby monitor with HD video, two-way audio, temperature sensor, and night vision. Connect to your smartphone for remote monitoring.",
    productTags: ["baby", "monitor", "safety", "smart"],
    unitPrice: "149.99",
    totalPrice: 149.99,
    discountType: "",
    discountValue: "0",
    discountPrice: "149.99",
    stock: "25",
    minStock: "5",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Baby World",
    vendorLogo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    vendorId: "vendor-007",
    isSubaccountSet: false,
    createdAt: "2024-01-16T08:00:00Z",
    updatedAt: "2024-01-21T14:20:00Z"
  },
  {
    productId: "prod-010",
    productName: "Wireless Noise Cancelling Earbuds",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "True wireless earbuds with active noise cancellation, 24-hour battery life with case, and premium sound quality. IPX5 water resistant.",
    productTags: ["earbuds", "wireless", "noise-cancelling", "audio"],
    unitPrice: "179.99",
    oldPrice: "229.99",
    totalPrice: 179.99,
    discountType: "percentage",
    discountValue: "22",
    discountPrice: "179.99",
    stock: "60",
    minStock: "15",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "GadgetWorld",
    vendorLogo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    vendorId: "vendor-002",
    isSubaccountSet: false,
    createdAt: "2024-01-07T10:00:00Z",
    updatedAt: "2024-01-16T17:00:00Z"
  },
  {
    productId: "prod-011",
    productName: "Professional Yoga Mat Premium",
    categoryId: "health",
    categoryName: "Health",
    productDescription: "Extra thick eco-friendly yoga mat with alignment lines. Non-slip surface, 6mm thickness for joint protection. Includes carrying strap.",
    productTags: ["yoga", "fitness", "exercise", "health"],
    unitPrice: "49.99",
    oldPrice: "69.99",
    totalPrice: 49.99,
    discountType: "percentage",
    discountValue: "29",
    discountPrice: "49.99",
    stock: "75",
    minStock: "15",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Wellness Plus",
    vendorLogo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    vendorId: "vendor-008",
    isSubaccountSet: false,
    createdAt: "2024-01-15T07:00:00Z",
    updatedAt: "2024-01-22T09:00:00Z"
  },
  {
    productId: "prod-012",
    productName: "Smart Home Security Camera",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "1080p HD security camera with night vision, motion detection, and two-way audio. Works with Alexa and Google Assistant. Cloud storage included.",
    productTags: ["camera", "security", "smart home", "wifi"],
    unitPrice: "59.99",
    oldPrice: "79.99",
    totalPrice: 59.99,
    discountType: "percentage",
    discountValue: "25",
    discountPrice: "59.99",
    stock: "90",
    minStock: "20",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Smart Home Co",
    vendorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vendorId: "vendor-009",
    isSubaccountSet: false,
    createdAt: "2024-01-10T15:00:00Z",
    updatedAt: "2024-01-19T12:00:00Z"
  },
  {
    productId: "prod-013",
    productName: "Luxury Skincare Gift Set",
    categoryId: "health",
    categoryName: "Health",
    productDescription: "Premium skincare collection including cleanser, toner, serum, moisturizer, and eye cream. Suitable for all skin types. Cruelty-free.",
    productTags: ["skincare", "beauty", "gift", "luxury"],
    unitPrice: "129.99",
    oldPrice: "179.99",
    totalPrice: 129.99,
    discountType: "percentage",
    discountValue: "28",
    discountPrice: "129.99",
    stock: "35",
    minStock: "8",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Beauty Haven",
    vendorLogo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    vendorId: "vendor-010",
    isSubaccountSet: false,
    createdAt: "2024-01-12T13:00:00Z",
    updatedAt: "2024-01-20T16:30:00Z"
  },
  {
    productId: "prod-014",
    productName: "Portable Bluetooth Speaker",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Waterproof portable speaker with 360-degree sound, 20-hour battery life, and built-in microphone. Perfect for outdoor adventures.",
    productTags: ["speaker", "bluetooth", "portable", "waterproof"],
    unitPrice: "89.99",
    oldPrice: "119.99",
    totalPrice: 89.99,
    discountType: "percentage",
    discountValue: "25",
    discountPrice: "89.99",
    stock: "55",
    minStock: "10",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "AudioMax",
    vendorLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    vendorId: "vendor-011",
    isSubaccountSet: false,
    createdAt: "2024-01-08T09:00:00Z",
    updatedAt: "2024-01-17T14:00:00Z"
  },
  {
    productId: "prod-015",
    productName: "Organic Protein Powder Bundle",
    categoryId: "health",
    categoryName: "Health",
    productDescription: "Plant-based organic protein powder with 24g protein per serving. Includes chocolate, vanilla, and strawberry flavors. No artificial sweeteners.",
    productTags: ["protein", "organic", "fitness", "nutrition"],
    unitPrice: "69.99",
    totalPrice: 69.99,
    discountType: "",
    discountValue: "0",
    discountPrice: "69.99",
    stock: "80",
    minStock: "20",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "NutriFit",
    vendorLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    vendorId: "vendor-012",
    isSubaccountSet: false,
    createdAt: "2024-01-14T10:00:00Z",
    updatedAt: "2024-01-21T11:00:00Z"
  },
  {
    productId: "prod-016",
    productName: "Designer Sunglasses Classic",
    categoryId: "fashion",
    categoryName: "Fashion",
    productDescription: "Premium polarized sunglasses with UV400 protection. Lightweight titanium frame with scratch-resistant lenses. Includes luxury case.",
    productTags: ["sunglasses", "fashion", "designer", "accessories"],
    unitPrice: "199.99",
    oldPrice: "279.99",
    totalPrice: 199.99,
    discountType: "percentage",
    discountValue: "29",
    discountPrice: "199.99",
    stock: "22",
    minStock: "5",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "StyleHouse",
    vendorLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    vendorId: "vendor-003",
    isSubaccountSet: false,
    createdAt: "2024-01-11T11:00:00Z",
    updatedAt: "2024-01-18T10:30:00Z"
  },
  {
    productId: "prod-017",
    productName: "Smart LED Light Bulb Kit",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Set of 4 smart LED bulbs with 16 million colors. Voice control compatible with Alexa, Google Home, and Siri. Energy efficient.",
    productTags: ["smart home", "led", "lights", "automation"],
    unitPrice: "49.99",
    oldPrice: "69.99",
    totalPrice: 49.99,
    discountType: "percentage",
    discountValue: "29",
    discountPrice: "49.99",
    stock: "120",
    minStock: "25",
    images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Smart Home Co",
    vendorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vendorId: "vendor-009",
    isSubaccountSet: false,
    createdAt: "2024-01-09T14:00:00Z",
    updatedAt: "2024-01-19T09:45:00Z"
  },
  {
    productId: "prod-018",
    productName: "Ergonomic Office Chair Pro",
    categoryId: "appliances",
    categoryName: "Appliances",
    productDescription: "Premium ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back. Supports up to 300 lbs.",
    productTags: ["chair", "office", "ergonomic", "furniture"],
    unitPrice: "349.99",
    oldPrice: "449.99",
    totalPrice: 349.99,
    discountType: "percentage",
    discountValue: "22",
    discountPrice: "349.99",
    stock: "14",
    minStock: "3",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Office Pro",
    vendorLogo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    vendorId: "vendor-013",
    isSubaccountSet: false,
    createdAt: "2024-01-13T12:00:00Z",
    updatedAt: "2024-01-20T15:00:00Z"
  },
  {
    productId: "prod-019",
    productName: "Gourmet Coffee Beans Collection",
    categoryId: "groceries",
    categoryName: "Groceries",
    productDescription: "Artisan roasted coffee beans from 5 regions: Ethiopia, Colombia, Brazil, Kenya, and Guatemala. Whole bean, 2lb bags each.",
    productTags: ["coffee", "gourmet", "organic", "beverages"],
    unitPrice: "79.99",
    oldPrice: "99.99",
    totalPrice: 79.99,
    discountType: "percentage",
    discountValue: "20",
    discountPrice: "79.99",
    stock: "40",
    minStock: "10",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Coffee Lovers",
    vendorLogo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    vendorId: "vendor-014",
    isSubaccountSet: false,
    createdAt: "2024-01-16T06:00:00Z",
    updatedAt: "2024-01-22T10:00:00Z"
  },
  {
    productId: "prod-020",
    productName: "Kids Educational Tablet",
    categoryId: "baby-products",
    categoryName: "Baby Products",
    productDescription: "Child-friendly tablet with educational apps, parental controls, and durable case. 7-inch HD screen with blue light filter.",
    productTags: ["tablet", "kids", "educational", "learning"],
    unitPrice: "129.99",
    oldPrice: "169.99",
    totalPrice: 129.99,
    discountType: "percentage",
    discountValue: "24",
    discountPrice: "129.99",
    stock: "30",
    minStock: "8",
    images: [
      "https://images.unsplash.com/photo-1581899571526-8b7c1d5c6bde?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Baby World",
    vendorLogo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    vendorId: "vendor-007",
    isSubaccountSet: false,
    createdAt: "2024-01-17T09:00:00Z",
    updatedAt: "2024-01-22T13:30:00Z"
  },
  {
    productId: "prod-021",
    productName: "Luxury Duvet Cover Set",
    categoryId: "appliances",
    categoryName: "Appliances",
    productDescription: "Egyptian cotton duvet cover set with matching pillow shams. 1000 thread count, hypoallergenic. Available in king and queen sizes.",
    productTags: ["bedding", "luxury", "cotton", "home"],
    unitPrice: "189.99",
    oldPrice: "259.99",
    totalPrice: 189.99,
    discountType: "percentage",
    discountValue: "27",
    discountPrice: "189.99",
    stock: "20",
    minStock: "5",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Home Essentials",
    vendorLogo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    vendorId: "vendor-006",
    isSubaccountSet: false,
    createdAt: "2024-01-10T13:00:00Z",
    updatedAt: "2024-01-19T17:00:00Z"
  },
  {
    productId: "prod-022",
    productName: "Professional Hair Dryer",
    categoryId: "health",
    categoryName: "Health",
    productDescription: "Ionic hair dryer with multiple heat and speed settings. Includes concentrator and diffuser attachments. Fast drying with less damage.",
    productTags: ["hair", "beauty", "styling", "professional"],
    unitPrice: "89.99",
    totalPrice: 89.99,
    discountType: "",
    discountValue: "0",
    discountPrice: "89.99",
    stock: "45",
    minStock: "10",
    images: [
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Beauty Haven",
    vendorLogo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    vendorId: "vendor-010",
    isSubaccountSet: false,
    createdAt: "2024-01-14T15:00:00Z",
    updatedAt: "2024-01-21T08:30:00Z"
  },
  {
    productId: "prod-023",
    productName: "Gaming Mouse Pro Wireless",
    categoryId: "electronics",
    categoryName: "Electronics",
    productDescription: "Professional gaming mouse with 25,600 DPI sensor, customizable RGB lighting, and 70-hour battery life. Ultra-lightweight at 63g.",
    productTags: ["mouse", "gaming", "wireless", "rgb"],
    unitPrice: "129.99",
    oldPrice: "159.99",
    totalPrice: 129.99,
    discountType: "percentage",
    discountValue: "19",
    discountPrice: "129.99",
    stock: "65",
    minStock: "15",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "TechHub Store",
    vendorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    vendorId: "vendor-001",
    isSubaccountSet: false,
    createdAt: "2024-01-08T11:00:00Z",
    updatedAt: "2024-01-17T16:00:00Z"
  },
  {
    productId: "prod-024",
    productName: "Organic Snack Box Monthly",
    categoryId: "groceries",
    categoryName: "Groceries",
    productDescription: "Curated box of 20 organic snacks including nuts, dried fruits, granola bars, and healthy chips. New selection each month.",
    productTags: ["snacks", "organic", "healthy", "subscription"],
    unitPrice: "44.99",
    totalPrice: 44.99,
    discountType: "",
    discountValue: "0",
    discountPrice: "44.99",
    stock: "200",
    minStock: "50",
    images: [
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1604374811469-ef4bee7e3254?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Nature Foods",
    vendorLogo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    vendorId: "vendor-004",
    isSubaccountSet: false,
    createdAt: "2024-01-15T12:00:00Z",
    updatedAt: "2024-01-22T11:00:00Z"
  },
  {
    productId: "prod-025",
    productName: "Premium Fitness Tracker",
    categoryId: "health",
    categoryName: "Health",
    productDescription: "Advanced fitness tracker with heart rate monitoring, sleep tracking, GPS, and 14-day battery life. Water resistant to 50m.",
    productTags: ["fitness", "tracker", "health", "wearable"],
    unitPrice: "99.99",
    oldPrice: "149.99",
    totalPrice: 99.99,
    discountType: "percentage",
    discountValue: "33",
    discountPrice: "99.99",
    stock: "70",
    minStock: "15",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&h=500&fit=crop"
    ],
    isActive: "1",
    storeName: "Wellness Plus",
    vendorLogo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    vendorId: "vendor-008",
    isSubaccountSet: false,
    createdAt: "2024-01-12T14:00:00Z",
    updatedAt: "2024-01-20T13:00:00Z"
  }
];

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Products API endpoints - MOCK VERSION
export const productsApi = {
  // Get products list (mock)
  getProducts: async (
    params: ProductsListParams = {}
  ): Promise<ProductsListResponse> => {
    await simulateDelay(400);

    const page = params.page ?? 1;
    const perPage = params.perPage ?? 10;
    const search = params.search?.toLowerCase() || '';
    const category = params.category?.toLowerCase() || '';

    // Filter products
    let filteredProducts = [...MOCK_PRODUCTS];

    // Filter by active status
    if (params.isActive === "1") {
      filteredProducts = filteredProducts.filter(p => p.isActive === "1");
    }

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(p =>
        p.categoryId.toLowerCase() === category ||
        p.categoryName.toLowerCase() === category
      );
    }

    // Filter by search
    if (search) {
      filteredProducts = filteredProducts.filter(p =>
        p.productName.toLowerCase().includes(search) ||
        p.productDescription.toLowerCase().includes(search) ||
        p.productTags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    // Calculate pagination
    const totalItems = filteredProducts.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      status: 200,
      error: false,
      message: "Products retrieved successfully",
      data: paginatedProducts,
      pagination: {
        currentPage: page,
        perPage,
        totalPages,
        totalItems
      }
    };
  },

  // Get single product (mock)
  getProduct: async (productId: string): Promise<SingleProductResponse> => {
    await simulateDelay(300);

    const product = MOCK_PRODUCTS.find(p => p.productId === productId);

    if (!product) {
      return {
        status: 404,
        error: true,
        message: "Product not found",
        data: null as any
      };
    }

    return {
      status: 200,
      error: false,
      message: "Product retrieved successfully",
      data: product
    };
  },

  // Get products by category (mock)
  getProductsByCategory: async (
    categoryId: string,
    params: Omit<ProductsListParams, "category"> = {}
  ): Promise<ProductsListResponse> => {
    await simulateDelay(400);

    const page = params.page ?? 1;
    const perPage = params.perPage ?? 10;
    const search = params.search?.toLowerCase() || '';

    // Filter by category
    let filteredProducts = MOCK_PRODUCTS.filter(p =>
      p.categoryId.toLowerCase() === categoryId.toLowerCase() ||
      p.categoryName.toLowerCase() === categoryId.toLowerCase()
    );

    // Filter by active status
    if (params.isActive === "1") {
      filteredProducts = filteredProducts.filter(p => p.isActive === "1");
    }

    // Filter by search
    if (search) {
      filteredProducts = filteredProducts.filter(p =>
        p.productName.toLowerCase().includes(search) ||
        p.productDescription.toLowerCase().includes(search)
      );
    }

    // Calculate pagination
    const totalItems = filteredProducts.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      status: 200,
      error: false,
      message: "Products retrieved successfully",
      data: paginatedProducts,
      pagination: {
        currentPage: page,
        perPage,
        totalPages,
        totalItems
      }
    };
  },

  /**
   * Track product view for recently-viewed recommendations.
   * Mock version - does nothing
   */
  trackProductView: async (_productId: string): Promise<void> => {
    // Mock - no operation
    await simulateDelay(100);
  },

  /**
   * Get product ratings (mock)
   */
  getProductRatings: async (_productId: string): Promise<ProductRatingsResponse> => {
    await simulateDelay(200);

    // Generate random rating for mock
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    const count = Math.floor(Math.random() * 200) + 10;

    return {
      status: 200,
      error: false,
      message: "Ratings retrieved successfully",
      data: {
        totalRating: rating,
        ratingCount: count.toString()
      }
    };
  },
};
