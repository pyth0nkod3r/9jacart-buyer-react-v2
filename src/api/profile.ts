// Profile API request types
export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}
// Profile API response types
export interface ProfileData {
  buyerId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string | null;
  isActive: string;
  isEmailVerified: string;
  verifiedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface AddressData {
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
export interface ProfileResponse {
  status: number;
  error: boolean;
  data: {
    profile: ProfileData;
    addresses: AddressData[];
  };
}
export interface UpdateProfileResponse {
  status: number;
  error: boolean;
  message: string;
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock profile storage
let mockProfile: ProfileData = {
  buyerId: 'user_mock_001',
  firstName: 'John',
  lastName: 'Doe',
  emailAddress: 'john.doe@example.com',
  phoneNumber: '+1234567890',
  isActive: '1',
  isEmailVerified: '1',
  verifiedAt: new Date().toISOString(),
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: new Date().toISOString(),
};

// Mock addresses storage
let mockAddresses: AddressData[] = [
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

// Profile API endpoints - MOCK VERSION
export const profileApi = {
  // Get user profile (mock)
  getProfile: async (): Promise<ProfileResponse> => {
    await simulateDelay(400);
    return {
      status: 200,
      error: false,
      data: {
        profile: { ...mockProfile },
        addresses: [...mockAddresses],
      },
    };
  },
  // Update user profile (mock)
  updateProfile: async (data: UpdateProfileRequest): Promise<UpdateProfileResponse> => {
    await simulateDelay(400);

    if (data.firstName) mockProfile.firstName = data.firstName;
    if (data.lastName) mockProfile.lastName = data.lastName;
    mockProfile.updatedAt = new Date().toISOString();

    return {
      status: 200,
      error: false,
      message: 'Profile updated successfully',
    };
  },
};
