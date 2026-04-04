/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RateOrderRequest, RateOrderResponse, GetOrderRatingsResponse } from "../types";

// Order API request types
export interface BillingDetails {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;
}
export interface OrderItem {
  productId: string;
  vendor: string;
  quantity: number;
  price: number;
}
export interface CheckoutRequest {
  billing: BillingDetails;
  orderItems: OrderItem[];
  paymentMethod: string;
  couponCode?: string;
}

// Order API response types
export interface OrderData {
  orderId: string;
  orderNumber: string;
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount?: number;
  status: string;
  paymentMethod: string;
  estimatedDelivery?: string;
  createdAt: string;
}
export interface paymentData {
  authorizationUrl: string;
}
export interface CheckoutResponse {
  orderNo: string;
  paymentData: paymentData;
  redirectUrl: string;
  status: number;
  error: boolean;
  message: string;
  data?: OrderData;
}

// Order Detail API response types
export interface OrderDetailItem {
  id?: string;
  productId: string;
  productName: string;
  productImage?: string;
  quantity: number;
  price: number;
  subtotal: number;
  vendor?: string;
}
export interface OrderDetailResponse {
  orderId?: string;
  orderNumber?: string;
  orderNo?: string;
  status: string;
  total: number;
  subtotal?: number;
  tax?: number;
  shipping?: number;
  discount?: number;
  paymentMethod?: string;
  paymentStatus?: string;
  createdAt: string;
  estimatedDelivery?: string;
  items: OrderDetailItem[];
  shippingAddress?: {
    firstName?: string;
    lastName?: string;
    street?: string;
    streetAddress?: string;
    city: string;
    state?: string;
    zipCode?: string;
    country?: string;
    phoneNumber?: string;
    emailAddress?: string;
  };
  billingAddress?: {
    firstName?: string;
    lastName?: string;
    street?: string;
    streetAddress?: string;
    city: string;
    state?: string;
    zipCode?: string;
    country?: string;
    phoneNumber?: string;
    emailAddress?: string;
  };
}
export interface OrderDetailApiResponse {
  status?: number;
  error?: boolean;
  message?: string;
  data?: OrderDetailResponse;
  orderId?: string;
  orderNumber?: string;
  orderNo?: string;
  total?: number;
  items?: OrderDetailItem[];
  [key: string]: any;
}

// Actual API Orders List response types
export interface ApiOrderItem {
  id?: string;
  orderNo?: string;
  productId: string;
  productName?: string;
  productImage?: string;
  productImages?: string[];
  quantity: number | string;
  price?: number | string;
  subtotal?: number | string;
  vendor?: string;
  [key: string]: any;
}
export interface ApiOrder {
  orderNo: string;
  totalAmount: string | number;
  subtotalAmount: string | number;
  discountAmount?: string | number;
  discountPercentage?: number;
  status: string;
  paymentMethod?: string;
  paymentStatus?: string;
  paymentDate?: string;
  createdAt: string;
  updatedAt?: string;
  orderItems: ApiOrderItem[];
  billingName?: string;
  billingEmail?: string;
  billingPhone?: string;
  billingStreetAddress?: string;
  billingApartment?: string;
  billingCity?: string;
  billingCompanyName?: string;
  couponCode?: string | null;
  [key: string]: any;
}
export interface OrdersListApiResponse {
  status: number;
  error: boolean;
  message: string;
  data: ApiOrder[];
  [key: string]: any;
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock orders data
const MOCK_ORDERS: ApiOrder[] = [
  {
    orderNo: "ORD-2024-001",
    totalAmount: 329.97,
    subtotalAmount: 329.97,
    discountAmount: 0,
    status: "delivered",
    paymentMethod: "card",
    paymentStatus: "paid",
    paymentDate: "2024-01-15T12:00:00Z",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-18T14:00:00Z",
    orderItems: [
      {
        id: "item-001-1",
        orderNo: "ORD-2024-001",
        productId: "prod-001",
        productName: "Wireless Bluetooth Headphones Pro",
        productImages: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 149.99,
        subtotal: 149.99,
        vendor: "vendor-001"
      },
      {
        id: "item-001-2",
        orderNo: "ORD-2024-001",
        productId: "prod-006",
        productName: "Running Shoes Air Max Pro",
        productImages: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 129.99,
        subtotal: 129.99,
        vendor: "vendor-005"
      },
      {
        id: "item-001-3",
        orderNo: "ORD-2024-001",
        productId: "prod-005",
        productName: "Organic Green Tea Collection",
        productImages: ["https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 34.99,
        subtotal: 34.99,
        vendor: "vendor-004"
      }
    ],
    billingName: "John Doe",
    billingEmail: "john.doe@example.com",
    billingPhone: "+1234567890",
    billingStreetAddress: "123 Main Street",
    billingApartment: "Apt 4B",
    billingCity: "New York",
    couponCode: null
  },
  {
    orderNo: "ORD-2024-002",
    totalAmount: 199.98,
    subtotalAmount: 249.98,
    discountAmount: 50,
    status: "shipped",
    paymentMethod: "card",
    paymentStatus: "paid",
    paymentDate: "2024-01-20T15:30:00Z",
    createdAt: "2024-01-20T14:15:00Z",
    updatedAt: "2024-01-21T09:00:00Z",
    orderItems: [
      {
        id: "item-002-1",
        orderNo: "ORD-2024-002",
        productId: "prod-004",
        productName: "Mechanical Gaming Keyboard RGB",
        productImages: ["https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 159.99,
        subtotal: 159.99,
        vendor: "vendor-001"
      },
      {
        id: "item-002-2",
        orderNo: "ORD-2024-002",
        productId: "prod-023",
        productName: "Gaming Mouse Pro Wireless",
        productImages: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 129.99,
        subtotal: 129.99,
        vendor: "vendor-001"
      }
    ],
    billingName: "John Doe",
    billingEmail: "john.doe@example.com",
    billingPhone: "+1234567890",
    billingStreetAddress: "123 Main Street",
    billingApartment: "Apt 4B",
    billingCity: "New York",
    couponCode: "GAMING20"
  },
  {
    orderNo: "ORD-2024-003",
    totalAmount: 79.99,
    subtotalAmount: 79.99,
    discountAmount: 0,
    status: "processing",
    paymentMethod: "cod",
    paymentStatus: "pending",
    createdAt: "2024-01-22T16:00:00Z",
    updatedAt: "2024-01-22T16:00:00Z",
    orderItems: [
      {
        id: "item-003-1",
        orderNo: "ORD-2024-003",
        productId: "prod-014",
        productName: "Portable Bluetooth Speaker",
        productImages: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 89.99,
        subtotal: 89.99,
        vendor: "vendor-011"
      }
    ],
    billingName: "John Doe",
    billingEmail: "john.doe@example.com",
    billingPhone: "+1234567890",
    billingStreetAddress: "456 Oak Avenue",
    billingApartment: "",
    billingCity: "Los Angeles",
    couponCode: null
  },
  {
    orderNo: "ORD-2024-004",
    totalAmount: 449.98,
    subtotalAmount: 449.98,
    discountAmount: 0,
    status: "pending",
    paymentMethod: "bnpl",
    paymentStatus: "pending",
    createdAt: "2024-01-23T11:00:00Z",
    orderItems: [
      {
        id: "item-004-1",
        orderNo: "ORD-2024-004",
        productId: "prod-018",
        productName: "Ergonomic Office Chair Pro",
        productImages: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 349.99,
        subtotal: 349.99,
        vendor: "vendor-013"
      },
      {
        id: "item-004-2",
        orderNo: "ORD-2024-004",
        productId: "prod-017",
        productName: "Smart LED Light Bulb Kit",
        productImages: ["https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=200&fit=crop"],
        quantity: 1,
        price: 49.99,
        subtotal: 49.99,
        vendor: "vendor-009"
      }
    ],
    billingName: "John Doe",
    billingEmail: "john.doe@example.com",
    billingPhone: "+1234567890",
    billingStreetAddress: "123 Main Street",
    billingApartment: "Apt 4B",
    billingCity: "New York",
    couponCode: null
  }
];

// Order API endpoints - MOCK VERSION
export const orderApi = {
  // Place order (mock)
  checkout: async (orderData: CheckoutRequest): Promise<CheckoutResponse> => {
    await simulateDelay(500);
    
    const orderNo = "ORD-" + Date.now();
    const total = orderData.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
      orderNo,
      paymentData: {
        authorizationUrl: "/checkout/success?order=" + orderNo
      },
      redirectUrl: "/checkout/success?order=" + orderNo,
      status: 200,
      error: false,
      message: "Order placed successfully",
      data: {
        orderId: orderNo,
        orderNumber: orderNo,
        total,
        subtotal: total,
        tax: total * 0.08,
        shipping: total > 50000 ? 0 : 2500,
        status: "pending",
        paymentMethod: orderData.paymentMethod,
        estimatedDelivery: "3-5 business days",
        createdAt: new Date().toISOString()
      }
    };
  },
  
  // Get order details (mock)
  getOrderDetail: async (orderId: string): Promise<OrderDetailResponse> => {
    await simulateDelay(300);
    
    const order = MOCK_ORDERS.find(o => o.orderNo === orderId);
    
    if (!order) {
      return {
        orderNo: orderId,
        status: "not_found",
        total: 0,
        createdAt: new Date().toISOString(),
        items: []
      };
    }
    
    return transformApiOrderToOrderDetailResponse(order);
  },
  
  // Get user orders list (mock)
  getOrders: async (): Promise<ApiOrder[]> => {
    await simulateDelay(400);
    return MOCK_ORDERS;
  },
  
  // Rate order (mock)
  rateOrder: async (ratingData: RateOrderRequest): Promise<RateOrderResponse> => {
    await simulateDelay(300);
    
    return {
      status: 200,
      error: false,
      message: "Rating submitted successfully"
    };
  },
  
  // Rate order items (mock)
  rateOrderItems: async (orderNo: string, ratings: Array<{
    productId: string;
    vendorId: string;
    rating: number;
    comment?: string;
  }>): Promise<RateOrderResponse> => {
    await simulateDelay(300);
    
    return {
      status: 200,
      error: false,
      message: "Ratings submitted successfully"
    };
  },
  
  // Get order ratings (mock)
  getOrderRatings: async (orderId: string): Promise<GetOrderRatingsResponse> => {
    await simulateDelay(200);
    
    return {
      status: 200,
      error: false,
      message: "Ratings retrieved successfully",
      data: []
    };
  },
  
  // Get order items (mock)
  getOrderItems: async (orderId: string): Promise<ApiOrderItem[]> => {
    await simulateDelay(300);
    
    const order = MOCK_ORDERS.find(o => o.orderNo === orderId);
    return order?.orderItems || [];
  },
};

// Helper functions for data transformation
export const transformBillingDetails = (billingForm: any): BillingDetails => ({
  firstName: billingForm.lastName
    ? `${billingForm.firstName} ${billingForm.lastName}`.trim()
    : billingForm.firstName,
  companyName: billingForm.companyName || "",
  streetAddress: billingForm.streetAddress,
  apartment: billingForm.apartment || "",
  city: billingForm.townCity,
  phoneNumber: billingForm.phoneNumber,
  emailAddress: billingForm.emailAddress,
});

export const transformCartItemsToOrderItems = (
  cartItems: any[]
): OrderItem[] => {
  return cartItems.map((item) => ({
    productId: item.product.id,
    vendor: item.vendor || "",
    quantity: item.quantity,
    price:
      item.price ||
      (typeof item.product.price === "number"
        ? item.product.price
        : item.product.price.current),
  }));
};

export const mapPaymentMethodToApi = (uiPaymentMethod: string): string => {
  const paymentMethodMap: Record<string, string> = {
    "bank-card": "card",
    "cash-on-delivery": "cod",
    "buy-now-pay-later": "bnpl",
    "emergency-credit": "credit",
  };
  return paymentMethodMap[uiPaymentMethod] || uiPaymentMethod;
};

// Transform ApiOrder to OrderDetailResponse format
export const transformApiOrderToOrderDetailResponse = (apiOrder: ApiOrder): OrderDetailResponse => {
  const items: OrderDetailItem[] = (apiOrder.orderItems || []).map((item) => {
    const quantity = typeof item.quantity === 'string'
      ? parseInt(item.quantity, 10)
      : item.quantity || 1;
    const price = typeof item.price === 'string'
      ? parseFloat(item.price)
      : (item.price || 0);
    const subtotal = typeof item.subtotal === 'string'
      ? parseFloat(item.subtotal)
      : (item.subtotal || price * quantity);
    const productName = (item as any).product?.name ||
      (item as any).productName ||
      (item as any).name ||
      'Product';
    const productImagesArray = (item as any).productImages;
    const productImage = productImagesArray && Array.isArray(productImagesArray) && productImagesArray.length > 0
      ? productImagesArray[0]
      : (item as any).product?.image ||
        (item as any).product?.images?.main ||
        (item as any).productImage ||
        (item as any).image ||
        '';
    return {
      id: item.id,
      productId: item.productId,
      productName: productName,
      productImage: productImage,
      quantity: quantity,
      price: price,
      subtotal: subtotal,
      vendor: item.vendor,
    };
  });
  
  const total = typeof apiOrder.totalAmount === 'string'
    ? parseFloat(apiOrder.totalAmount)
    : apiOrder.totalAmount || 0;
  const subtotal = typeof apiOrder.subtotalAmount === 'string'
    ? parseFloat(apiOrder.subtotalAmount)
    : apiOrder.subtotalAmount || total;
  const discount = typeof apiOrder.discountAmount === 'string'
    ? parseFloat(apiOrder.discountAmount)
    : apiOrder.discountAmount || 0;
  
  const billingName = apiOrder.billingName || '';
  const nameParts = billingName.split(' ');
  
  return {
    orderNo: apiOrder.orderNo,
    status: apiOrder.status,
    total: total,
    subtotal: subtotal,
    discount: discount,
    paymentMethod: apiOrder.paymentMethod,
    paymentStatus: apiOrder.paymentStatus,
    createdAt: apiOrder.createdAt,
    items: items,
    billingAddress: {
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      streetAddress: apiOrder.billingStreetAddress || '',
      city: apiOrder.billingCity || '',
      phoneNumber: apiOrder.billingPhone || '',
      emailAddress: apiOrder.billingEmail || '',
    },
    shippingAddress: {
      streetAddress: apiOrder.billingStreetAddress || '',
      city: apiOrder.billingCity || '',
      phoneNumber: apiOrder.billingPhone || '',
      emailAddress: apiOrder.billingEmail || '',
    },
  };
};

// Transform ApiOrder to Order type for frontend use
export const transformApiOrderToOrder = (apiOrder: ApiOrder): any => {
  const orderId = apiOrder.orderNo || '';
  const total = typeof apiOrder.totalAmount === 'string'
    ? parseFloat(apiOrder.totalAmount)
    : apiOrder.totalAmount || 0;
  
  const items = (apiOrder.orderItems || []).map((item) => {
    const quantity = typeof item.quantity === 'string'
      ? parseInt(item.quantity, 10)
      : item.quantity || 1;
    const price = typeof item.price === 'string'
      ? parseFloat(item.price)
      : (item.price || 0);
    const productName = (item as any).product?.name ||
      (item as any).productName ||
      (item as any).name ||
      'Product';
    const productImagesArray = (item as any).productImages;
    const productImage = productImagesArray && Array.isArray(productImagesArray) && productImagesArray.length > 0
      ? productImagesArray[0]
      : (item as any).product?.image ||
        (item as any).product?.images?.main ||
        (item as any).productImage ||
        (item as any).image ||
        '';
    return {
      id: item.id || item.productId,
      product: {
        id: item.productId,
        name: productName,
        images: {
          main: productImage,
          alt: productName,
        },
        price: price,
      },
      quantity: quantity,
      price: price,
      subtotal: typeof item.subtotal === 'string'
        ? parseFloat(item.subtotal)
        : (item.subtotal || price * quantity),
      vendor: item.vendor,
    };
  });
  
  const billingName = apiOrder.billingName || '';
  const nameParts = billingName.split(' ');
  
  return {
    id: orderId,
    items,
    total: total,
    status: (apiOrder.status || 'pending').toLowerCase(),
    createdAt: apiOrder.createdAt,
    shippingAddress: {
      id: orderId,
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      street: apiOrder.billingStreetAddress || '',
      city: apiOrder.billingCity || '',
      state: '',
      zipCode: '',
      country: 'Country',
      isDefault: false,
    },
  };
};

// Transform OrderDetailResponse to Order type for frontend use (legacy support)
export const transformOrderDetailToOrder = (
  orderDetail: OrderDetailResponse
): any => {
  const orderId = orderDetail.orderId || orderDetail.orderNumber || orderDetail.orderNo || '';
  
  const items = orderDetail.items.map((item) => ({
    id: item.id || item.productId,
    product: {
      id: item.productId,
      name: item.productName,
      images: {
        main: item.productImage || '',
        alt: item.productName,
      },
      price: item.price,
    },
    quantity: item.quantity,
    price: item.price,
    subtotal: item.subtotal,
    vendor: item.vendor,
  }));
  
  const shippingAddress = orderDetail.shippingAddress || orderDetail.billingAddress || ({} as OrderDetailResponse['shippingAddress']);
  const firstName = shippingAddress?.firstName || '';
  const nameParts = firstName.split(' ');
  
  return {
    id: orderId,
    items,
    total: orderDetail.total,
    status: orderDetail.status?.toLowerCase() || 'pending',
    createdAt: orderDetail.createdAt,
    shippingAddress: {
      id: orderId,
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      street: shippingAddress?.streetAddress || shippingAddress?.street || '',
      city: shippingAddress?.city || '',
      state: shippingAddress?.state || '',
      zipCode: shippingAddress?.zipCode || '',
      country: shippingAddress?.country || 'Country',
      isDefault: false,
    },
  };
};
