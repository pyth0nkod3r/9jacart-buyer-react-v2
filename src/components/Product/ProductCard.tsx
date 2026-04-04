import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Button, Badge, Card, CardContent, Image } from "../UI";
import { useCart } from "../../hooks/useCart";
import { useWishlistStore } from "../../store/useWishlistStore";
import type { Product, ProductSummary } from "../../types";
import { cn } from "../../lib/utils";
import { formatPrice, formatDiscountPercentage } from "../../lib/productUtils";
import { preloadProductDetailPage } from "../../lib/preloadProductDetail";

interface ProductCardProps {
  product: ProductSummary | Product;
  showQuickAdd?: boolean;
  eagerImages?: boolean;
  highlightAsFlashSale?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showQuickAdd = true,
  eagerImages = false,
  className,
}) => {
  const { addToCart } = useCart();
  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isItemInWishlist,
  } = useWishlistStore();
  const [imageLoading, setImageLoading] = useState(!eagerImages);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const isWishlisted = isItemInWishlist(product.id);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Convert ProductSummary to Product for cart
    const productForCart: Product = {
      ...product,
      description:
        "shortDescription" in product ? product.shortDescription || "" : "",
      shortDescription:
        "shortDescription" in product ? product.shortDescription : undefined,
      features: "features" in product ? product.features : [],
      specifications: "specifications" in product ? product.specifications : {},
      inventory: {
        ...product.inventory,
        quantity:
          "quantity" in product.inventory ? product.inventory.quantity : 100,
        lowStockThreshold:
          "lowStockThreshold" in product.inventory
            ? product.inventory.lowStockThreshold
            : 10,
        trackQuantity:
          "trackQuantity" in product.inventory
            ? product.inventory.trackQuantity
            : true,
      },
      images: {
        ...product.images,
        gallery:
          "gallery" in product.images
            ? product.images.gallery
            : [product.images.main],
        videos: "videos" in product.images ? product.images.videos : [],
      },
      sellerId: "sellerId" in product ? product.sellerId : "default-seller",
      shipping:
        "shipping" in product
          ? product.shipping
          : {
              freeShipping: true,
              estimatedDelivery: "2-3 business days",
            },
      returns:
        "returns" in product
          ? product.returns
          : {
              returnable: true,
              period: 30,
              unit: "days",
              free: true,
            },
      status: "status" in product ? product.status : "active",
      createdAt: "createdAt" in product ? product.createdAt : new Date(),
      updatedAt: "updatedAt" in product ? product.updatedAt : new Date(),
      tags: "tags" in product ? product.tags : [],
    } as Product;

    try {
      setIsAddingToCart(true);
      await addToCart(productForCart, 1);
      setAddedToCart(true); // Show feedback
      setTimeout(() => setAddedToCart(false), 1500); // Hide after 1.5s
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Convert ProductSummary to Product for wishlist
    const productForWishlist: Product = {
      ...product,
      description:
        "shortDescription" in product ? product.shortDescription || "" : "",
      shortDescription:
        "shortDescription" in product ? product.shortDescription : undefined,
      features: "features" in product ? product.features : [],
      specifications: "specifications" in product ? product.specifications : {},
      inventory: {
        ...product.inventory,
        quantity:
          "quantity" in product.inventory ? product.inventory.quantity : 100,
        lowStockThreshold:
          "lowStockThreshold" in product.inventory
            ? product.inventory.lowStockThreshold
            : 10,
        trackQuantity:
          "trackQuantity" in product.inventory
            ? product.inventory.trackQuantity
            : true,
      },
      images: {
        ...product.images,
        gallery:
          "gallery" in product.images
            ? product.images.gallery
            : [product.images.main],
        videos: "videos" in product.images ? product.images.videos : [],
      },
      sellerId: "sellerId" in product ? product.sellerId : "default-seller",
      shipping:
        "shipping" in product
          ? product.shipping
          : {
              freeShipping: true,
              estimatedDelivery: "2-3 business days",
            },
      returns:
        "returns" in product
          ? product.returns
          : {
              returnable: true,
              period: 30,
              unit: "days",
              free: true,
            },
      status: "status" in product ? product.status : "active",
      createdAt: "createdAt" in product ? product.createdAt : new Date(),
      updatedAt: "updatedAt" in product ? product.updatedAt : new Date(),
      tags: "tags" in product ? product.tags : [],
    } as Product;

    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(productForWishlist);
    }
  };

  // Helper function to truncate description to a certain word count
  const truncateDescription = (text: string, wordCount: number = 12): string => {
    if (!text) return "";
    const words = text.trim().split(/\s+/);
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  // Get description text (prefer shortDescription, fallback to description)
  const getDescriptionText = (): string => {
    if ("shortDescription" in product && product.shortDescription) {
      return product.shortDescription;
    }
    if ("description" in product && product.description) {
      return product.description;
    }
    return "";
  };

  const currentPrice =
    typeof product.price === "number" ? product.price : product.price.current;
  const originalPrice =
    typeof product.price === "object" ? product.price.original : undefined;
  const discount =
    typeof product.price === "object" ? product.price.discount : undefined;

  return (
    <Card
      className={cn(
        "group relative bg-card border-border rounded-md overflow-hidden cursor-pointer w-full h-full",
        className
      )}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <Link
          to={`/products/${product.id}`}
          className="block h-full flex flex-col"
          onMouseEnter={preloadProductDetailPage}
          onFocus={preloadProductDetailPage}
        >
          <div className="relative">
            {/* Discount Badge */}
            {discount && discount.percentage > 0 && (
              <Badge
                variant="destructive"
                className="absolute top-2 left-2 z-20 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-md hover:text-primary-foreground"
              >
                -{formatDiscountPercentage(discount.percentage)}%
              </Badge>
            )}
            {/* Action Buttons */}
            <div className="absolute top-2 right-2 z-20 flex flex-col gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200">
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 sm:w-8 sm:h-8 bg-card/90 backdrop-blur-sm border-border hover:bg-card shadow-sm touch-target-sm"
                onClick={handleWishlist}
              >
                <Heart
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isWishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"
                  )}
                />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 sm:w-8 sm:h-8 bg-card/90 backdrop-blur-sm border-border hover:bg-card shadow-sm touch-target-sm"
              >
                <Eye className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
            {/* Product Image */}
            <div className="relative aspect-square bg-muted overflow-hidden">
              {imageLoading && !eagerImages && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <Image
                src={
                  Array.isArray(product.images)
                    ? product.images[0]
                    : product.images.main
                }
                alt={product.name || "Product image"}
                lazy={!eagerImages}
                className={cn(
                  "w-full h-full object-cover transition-all duration-300",
                  "group-hover:scale-105",
                  !eagerImages && imageLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
              {/* Quick Add Button Overlay - always visible (fixed) */}
              {showQuickAdd && product.inventory.inStock && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent transform translate-y-0 transition-transform duration-300">
                  <Button
                    variant="ghost"
                    className="w-full text-card-foreground bg-header hover:bg-header/90 hover:text-card-foreground backdrop-blur-sm font-medium rounded-none"
                    onClick={handleAddToCart}
                    disabled={isAddingToCart || addedToCart}
                  >
                    {addedToCart ? (
                      <> Added to Cart</>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {isAddingToCart ? "Adding..." : "Add To Cart"}
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/* Product Info */}
          <div
            className="p-3 sm:p-4 space-y-1 sm:space-y-1.5 flex-1"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--card)) 0%, hsl(var(--card)) 40%, hsl(var(--primary) / 0.1) 100%)'
            }}
          >
            {/* Product Name */}
            <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2 text-sm sm:text-base leading-snug">
              {product.name}
            </h3>
            {/* Description Snippet - Fixed 2-line height for uniform card layout */}
            <div className="min-h-[2.5rem] sm:min-h-[2.75rem]">
              {getDescriptionText() && (
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {truncateDescription(getDescriptionText(), 12)}
                </p>
              )}
            </div>
            {/* Price */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-destructive text-md">
                {formatPrice(currentPrice)}
              </span>
              {originalPrice && originalPrice > currentPrice && (
                <span className="text-muted-foreground line-through text-xs">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
