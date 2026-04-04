// Cart API request types
export interface AddToCartRequest {
  productId: string;
  quantity: number;
}
export interface UpdateCartRequest {
  cartItemId: string;
  quantity: number;
}
export interface RemoveFromCartRequest {
  cartItemId: string;
}

// Cart API response types (matching backend structure)
export interface ApiCartItem {
  cartItemId: string;
  productId: string;
  productName: string;
  vendor: string | { vendorId: string; storeName: string };
  quantity: string;
  price: number;
  subtotal: number;
  addedAt: string;
  productImages: string[];
}

export interface ApiCartSummary {
  totalItems: number;
  totalQuantity: number;
  subtotal: number;
  tax: number;
  shipping: number;
  platformCommissionPercentage?: number;
  total: number;
}

export interface CartViewResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    items: ApiCartItem[];
    summary: ApiCartSummary;
  };
}

export interface CartActionResponse {
  status: number;
  error: boolean;
  message: string;
  data?: any;
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 200): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock cart storage (in-memory for authenticated users)
let mockCartItems: ApiCartItem[] = [];

// Cart API endpoints - MOCK VERSION
// Note: The cart store handles guest cart locally. This mock API is for "authenticated" users.
export const cartApi = {
  // Add item to cart (mock)
  addItem: async (data: AddToCartRequest): Promise<CartActionResponse> => {
    await simulateDelay(300);
    
    // Check if item already exists
    const existingIndex = mockCartItems.findIndex(item => item.productId === data.productId);
    
    if (existingIndex >= 0) {
      // Update quantity
      const existing = mockCartItems[existingIndex];
      const newQuantity = parseInt(existing.quantity) + data.quantity;
      mockCartItems[existingIndex] = {
        ...existing,
        quantity: newQuantity.toString(),
        subtotal: existing.price * newQuantity
      };
    } else {
      // Add new item
      const newItem: ApiCartItem = {
        cartItemId: 'cart_' + Math.random().toString(36).substring(2),
        productId: data.productId,
        productName: 'Product ' + data.productId,
        vendor: { vendorId: 'vendor_001', storeName: 'Demo Store' },
        quantity: data.quantity.toString(),
        price: 99.99, // Default price
        subtotal: 99.99 * data.quantity,
        addedAt: new Date().toISOString(),
        productImages: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop']
      };
      mockCartItems.push(newItem);
    }
    
    return {
      status: 200,
      error: false,
      message: "Item added to cart"
    };
  },
  
  // Get cart contents (mock)
  getCart: async (): Promise<CartViewResponse> => {
    await simulateDelay(200);
    
    const subtotal = mockCartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 50000 ? 0 : 2500;
    const totalItems = mockCartItems.length;
    const totalQuantity = mockCartItems.reduce((sum, item) => sum + parseInt(item.quantity), 0);
    
    return {
      status: 200,
      error: false,
      message: "Cart retrieved successfully",
      data: {
        items: mockCartItems,
        summary: {
          totalItems,
          totalQuantity,
          subtotal,
          tax,
          shipping,
          platformCommissionPercentage: 2.5,
          total: subtotal + tax + shipping
        }
      }
    };
  },
  
  // Update cart item quantity (mock)
  updateItem: async (data: UpdateCartRequest): Promise<CartActionResponse> => {
    await simulateDelay(200);
    
    const index = mockCartItems.findIndex(item => item.cartItemId === data.cartItemId);
    
    if (index >= 0) {
      mockCartItems[index] = {
        ...mockCartItems[index],
        quantity: data.quantity.toString(),
        subtotal: mockCartItems[index].price * data.quantity
      };
    }
    
    return {
      status: 200,
      error: false,
      message: "Cart updated successfully"
    };
  },
  
  // Remove item from cart (mock)
  removeItem: async (data: RemoveFromCartRequest): Promise<CartActionResponse> => {
    await simulateDelay(200);
    
    mockCartItems = mockCartItems.filter(item => item.cartItemId !== data.cartItemId);
    
    return {
      status: 200,
      error: false,
      message: "Item removed from cart"
    };
  },
  
  // Clear entire cart (mock)
  clearCart: async (): Promise<CartActionResponse> => {
    await simulateDelay(200);
    
    mockCartItems = [];
    
    return {
      status: 200,
      error: false,
      message: "Cart cleared successfully"
    };
  },
};
