// Address API request types
export interface AddAddressRequest {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: number; // 1 for true, 0 for false
}
export interface EditAddressRequest {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: number; // 1 for true, 0 for false
}
// Address API response types
export interface AddressApiResponse {
  id: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string | null;
}
export interface AddAddressResponse {
  status: number;
  error: boolean;
  message: string;
  data?: {
    address: AddressApiResponse;
  };
}
export interface EditAddressResponse {
  status: number;
  error: boolean;
  message: string;
  data?: {
    address: AddressApiResponse;
  };
}
export interface DeleteAddressResponse {
  status: number;
  error: boolean;
  message: string;
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock addresses storage (shared in-memory)
const mockAddressesDB: AddressApiResponse[] = [
  {
    id: 'addr_001',
    streetAddress: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    isDefault: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: null,
  },
  {
    id: 'addr_002',
    streetAddress: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    country: 'United States',
    isDefault: false,
    createdAt: '2024-02-20T14:30:00Z',
    updatedAt: null,
  },
];

// Address API endpoints - MOCK VERSION
export const addressApi = {
  // Add new address (mock)
  addAddress: async (data: AddAddressRequest): Promise<AddAddressResponse> => {
    await simulateDelay(300);

    // If this is set as default, unset others
    if (data.isDefault === 1) {
      mockAddressesDB.forEach(a => { a.isDefault = false; });
    }

    const newAddress: AddressApiResponse = {
      id: 'addr_' + Math.random().toString(36).substring(2, 10),
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      country: data.country,
      isDefault: data.isDefault === 1,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };

    mockAddressesDB.push(newAddress);

    return {
      status: 200,
      error: false,
      message: 'Address added successfully',
      data: { address: newAddress },
    };
  },

  // Edit existing address (mock)
  editAddress: async (id: string, data: EditAddressRequest): Promise<EditAddressResponse> => {
    await simulateDelay(300);

    // If this is set as default, unset others
    if (data.isDefault === 1) {
      mockAddressesDB.forEach(a => { a.isDefault = false; });
    }

    const index = mockAddressesDB.findIndex(a => a.id === id);
    if (index >= 0) {
      mockAddressesDB[index] = {
        ...mockAddressesDB[index],
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country,
        isDefault: data.isDefault === 1,
        updatedAt: new Date().toISOString(),
      };

      return {
        status: 200,
        error: false,
        message: 'Address updated successfully',
        data: { address: mockAddressesDB[index] },
      };
    }

    return {
      status: 404,
      error: true,
      message: 'Address not found',
    };
  },

  // Delete address (mock)
  deleteAddress: async (id: string): Promise<DeleteAddressResponse> => {
    await simulateDelay(300);

    const index = mockAddressesDB.findIndex(a => a.id === id);
    if (index >= 0) {
      mockAddressesDB.splice(index, 1);
      return {
        status: 200,
        error: false,
        message: 'Address deleted successfully',
      };
    }

    return {
      status: 404,
      error: true,
      message: 'Address not found',
    };
  },
};

// Helper functions for data transformation
export const transformAddressToApi = (
  streetAddress: string,
  city: string,
  state: string,
  zipCode: string,
  country: string,
  isDefault: boolean
): AddAddressRequest => ({
  streetAddress,
  city,
  state,
  zipCode,
  country,
  isDefault: isDefault ? 1 : 0,
});

export const parseAddressFromApi = (apiAddress: AddressApiResponse) => {
  return {
    id: apiAddress.id,
    streetAddress: apiAddress.streetAddress,
    city: apiAddress.city,
    state: apiAddress.state,
    zipCode: apiAddress.zipCode,
    country: apiAddress.country,
    isDefault: apiAddress.isDefault,
    createdAt: apiAddress.createdAt,
    updatedAt: apiAddress.updatedAt,
  };
};
