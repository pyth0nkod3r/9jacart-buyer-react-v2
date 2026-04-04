import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, Loader2 } from 'lucide-react';
import { Button, Card, CardContent, Image } from '../../components/UI';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../lib/productUtils';
import Container from '@/components/Layout/Container';

const WishlistPage: React.FC = () => {
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const { addToCart } = useCart();
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [movingToCart, setMovingToCart] = useState<string | null>(null);

  const handleMoveToCart = async (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      setMovingToCart(productId);
      try {
        await addToCart(item.product, 1);
        removeItem(productId);
      } catch (error) {
        console.error('Failed to move to cart:', error);
      } finally {
        setMovingToCart(null);
      }
    }
  };

  const handleClearWishlist = () => {
    clearWishlist();
    setShowClearConfirm(false);
  };

  if (items.length === 0) {
    return (
      <Container>
        <div className="py-12 text-center">
          <Heart className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground mb-6">
            Start adding products you love to your wishlist
          </p>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Wishlist</h1>
            <p className="text-muted-foreground mt-1">
              {items.length} item{items.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowClearConfirm(true)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <Link to={`/products/${item.product.id}`}>
                <div className="aspect-square bg-muted">
                  <Image
                    src={item.product.images.main}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <Link to={`/products/${item.product.id}`}>
                  <h3 className="font-medium text-foreground hover:text-primary line-clamp-2 mb-2">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="text-lg font-bold text-foreground mb-4">
                  {formatPrice(
                    typeof item.product.price === 'number'
                      ? item.product.price
                      : item.product.price.current
                  )}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleMoveToCart(item.product.id)}
                    disabled={movingToCart === item.product.id}
                    className="flex-1"
                  >
                    {movingToCart === item.product.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showClearConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="max-w-md mx-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Clear Wishlist?</h3>
                <p className="text-muted-foreground mb-4">
                  Are you sure you want to remove all items from your wishlist? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="destructive"
                    onClick={handleClearWishlist}
                    className="flex-1"
                  >
                    Yes, Clear All
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
};

export default WishlistPage;
