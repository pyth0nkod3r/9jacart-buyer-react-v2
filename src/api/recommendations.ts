export interface RecentlyViewedParams {
  limit?: number;
  vendorId?: string;
  categoryId?: string;
}
/** API response for recently viewed products. */
export interface RecentlyViewedSummary {
  totalViewed?: number;
  uniqueProducts?: number;
  uniqueVendors?: number;
  uniqueCategories?: number;
}
/** Recently-viewed API returns a different product shape than main products API. */
export interface RecentlyViewedResponse {
  status?: number;
  error?: boolean;
  message?: string;
  data?: {
    products?: unknown[];
    summary?: RecentlyViewedSummary;
    filters?: unknown;
  };
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock recently viewed products
const MOCK_RECENTLY_VIEWED = [
  {
    productId: 'prod-001',
    productName: 'Wireless Bluetooth Headphones Pro',
    productDescription: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and Hi-Res audio support.',
    categoryId: 'electronics',
    categoryName: 'Electronics',
    unitPrice: '149.99',
    discountPrice: '119.99',
    totalPrice: 119.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'],
    storeName: 'TechHub Store',
    rating: '4.5',
  },
  {
    productId: 'prod-003',
    productName: 'Premium Running Shoes',
    productDescription: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    categoryId: 'fashion',
    categoryName: 'Fashion',
    unitPrice: '129.99',
    discountPrice: '99.99',
    totalPrice: 99.99,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'],
    storeName: 'SportStyle',
    rating: '4.7',
  },
  {
    productId: 'prod-016',
    productName: 'Designer Sunglasses Classic',
    productDescription: 'Premium polarized sunglasses with UV400 protection and lightweight titanium frame.',
    categoryId: 'fashion',
    categoryName: 'Fashion',
    unitPrice: '199.99',
    discountPrice: '159.99',
    totalPrice: 159.99,
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop'],
    storeName: 'StyleHouse',
    rating: '4.3',
  },
  {
    productId: 'prod-018',
    productName: 'Ergonomic Office Chair Pro',
    productDescription: 'Premium ergonomic office chair with lumbar support, adjustable armrests, and breathable mesh back.',
    categoryId: 'appliances',
    categoryName: 'Appliances',
    unitPrice: '349.99',
    discountPrice: '289.99',
    totalPrice: 289.99,
    images: ['https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop'],
    storeName: 'Office Pro',
    rating: '4.8',
  },
];

// Recommendations API - MOCK VERSION
export const recommendationsApi = {
  /**
   * GET Recently Viewed Products (mock)
   */
  getRecentlyViewedProducts: async (
    params: RecentlyViewedParams = {}
  ): Promise<RecentlyViewedResponse> => {
    await simulateDelay(400);

    const limit = params.limit ?? 4;
    const products = MOCK_RECENTLY_VIEWED.slice(0, limit);

    return {
      status: 200,
      error: false,
      message: 'Recently viewed products retrieved successfully',
      data: {
        products,
        summary: {
          totalViewed: products.length,
          uniqueProducts: products.length,
          uniqueVendors: 3,
          uniqueCategories: 3,
        },
      },
    };
  },
};
