import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Product, ProductSummary } from "../types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 * Normalizes product images to ensure consistent structure
 * Handles both ProductMedia objects and string arrays
 */
export function normalizeProductImages<T extends Product | ProductSummary>(
  product: T
): T {
  const images = product.images as any;
  // If images is already a proper ProductMedia object with main property
  if (images && typeof images === "object" && "main" in images) {
    return product;
  }
  // If images is an array of strings, convert to ProductMedia
  if (Array.isArray(images) && typeof images[0] === "string") {
    return {
      ...product,
      images: {
        main: images[0] || "/placeholder-product.png",
        gallery: images.slice(1),
        alt: product.name || "Product image",
      },
    };
  }
  // If images is undefined or malformed, provide defaults
  return {
    ...product,
    images: {
      main: "/placeholder-product.png",
      gallery: [],
      alt: product.name || "Product image",
    },
  };
}
/**
 * Format price to local currency currency
 */
export function formatPrice(price: number | undefined | null): string {
  if (price === undefined || price === null || isNaN(price)) {
    return "₦0.00";
  }
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}
/**
 * Format discount percentage
 */
export function formatDiscountPercentage(percentage: number | undefined): string {
  if (!percentage) return "0";
  return Math.round(percentage).toString();
}
/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
/**
 * Generate a unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
/**
 * Check if running on client side
 */
export const isClient = typeof window !== "undefined";
/**
 * Safe JSON parse
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}
/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}
