// Categories API request types
export interface CategoriesListParams {
  page?: number;
  perPage?: number;
}

// Categories API response types (matching the actual API structure)
export interface ApiCategoryData {
  categoryId: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesListResponse {
  status: number;
  error: boolean;
  message: string;
  data: ApiCategoryData[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
  };
}

// Mock categories data
const MOCK_CATEGORIES: ApiCategoryData[] = [
  {
    categoryId: "electronics",
    categoryName: "Electronics",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "fashion",
    categoryName: "Fashion",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "appliances",
    categoryName: "Appliances",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "groceries",
    categoryName: "Groceries",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "health",
    categoryName: "Health",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "baby-products",
    categoryName: "Baby Products",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "devices-accessories",
    categoryName: "Devices & Accessories",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    categoryId: "laundry",
    categoryName: "Laundry",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Categories API endpoints - MOCK VERSION
export const categoriesApi = {
  // Get categories list (mock)
  getCategories: async (params: CategoriesListParams = {}): Promise<CategoriesListResponse> => {
    await simulateDelay(300);
    
    const page = params.page ?? 1;
    const perPage = params.perPage ?? 10;
    
    // Calculate pagination
    const totalItems = MOCK_CATEGORIES.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedCategories = MOCK_CATEGORIES.slice(startIndex, endIndex);
    
    return {
      status: 200,
      error: false,
      message: "Categories retrieved successfully",
      data: paginatedCategories,
      pagination: {
        currentPage: page,
        perPage,
        totalPages,
        totalItems
      }
    };
  },
};
