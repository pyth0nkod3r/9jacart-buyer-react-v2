/**
 * Feature Configuration
 * Toggle features on/off globally
 */

import type { FeatureConfig } from '../themes/types';

export const defaultFeatures: FeatureConfig = {
  // Core e-commerce features
  wishlist: true,
  flashSales: true,
  ratings: true,
  recentlyViewed: true,
  
  // Homepage sections
  heroCarousel: true,
  categorySidebar: true,
  liveProducts: true,
  fastSelling: true,
  categoryShowcase: true,
  
  // Additional features
  newsletter: true,
  services: true,
  
  // Auth features
  googleSignIn: true,
  
  // Payment features
  payments: false,
  
  // Social features
  reviews: true,
  notifications: false,
};

// Feature flag checker utility
export function isFeatureEnabled(
  features: FeatureConfig,
  feature: keyof FeatureConfig
): boolean {
  return features[feature] === true;
}

// Get enabled features as array
export function getEnabledFeatures(features: FeatureConfig): (keyof FeatureConfig)[] {
  return Object.entries(features)
    .filter(([, enabled]) => enabled)
    .map(([key]) => key as keyof FeatureConfig);
}
