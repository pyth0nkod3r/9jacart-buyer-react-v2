import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Loader2 } from 'lucide-react';
import { Button, Card, CardContent, Input } from '../../components/UI';
import { useCart } from '../../hooks/useCart';
import { useAuthStore } from '../../store/useAuthStore';
import { formatPrice } from '../../lib/productUtils';
import { orderApi } from '../../api/order';
import Container from '@/components/Layout/Container';

interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  townCity: string;
  phoneNumber: string;
  emailAddress: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, finalTotal, subtotal, clearAllItems } = useCart();
  const { user } = useAuthStore();

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('bank-card');
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: user?.phone || '',
    emailAddress: user?.email || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user) {
      setBillingDetails((prev) => ({
        ...prev,
        firstName: user.firstName || prev.firstName,
        lastName: user.lastName || prev.lastName,
        phoneNumber: user.phone || prev.phoneNumber,
        emailAddress: user.email || prev.emailAddress,
      }));
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!billingDetails.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!billingDetails.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!billingDetails.streetAddress.trim()) newErrors.streetAddress = 'Address is required';
    if (!billingDetails.townCity.trim()) newErrors.townCity = 'City is required';
    if (!billingDetails.phoneNumber.trim()) newErrors.phoneNumber = 'Phone is required';
    if (!billingDetails.emailAddress.trim()) {
      newErrors.emailAddress = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(billingDetails.emailAddress)) {
      newErrors.emailAddress = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    try {
      const orderData = {
        billing: {
          firstName: billingDetails.firstName + ' ' + billingDetails.lastName,
          companyName: billingDetails.companyName || '',
          streetAddress: billingDetails.streetAddress,
          apartment: billingDetails.apartment || '',
          city: billingDetails.townCity,
          phoneNumber: billingDetails.phoneNumber,
          emailAddress: billingDetails.emailAddress,
        },
        orderItems: items.map((item) => ({
          productId: item.product.id,
          vendor: item.product.vendorId || 'default',
          quantity: item.quantity,
          price: typeof item.product.price === 'number' ? item.product.price : item.product.price.current,
        })),
        paymentMethod: selectedPayment,
      };

      const response = await orderApi.checkout(orderData);
      await clearAllItems();
      navigate(`/orders/${response.orderNo || ''}`);
    } catch (error) {
      console.error('Order failed:', error);
      setErrors({ submit: 'Failed to place order. Please try again.' });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Add some products to checkout</p>
          <Button onClick={() => navigate('/products')}>Browse Products</Button>
        </div>
      </Container>
    );
  }

  const shipping = finalTotal > 50000 ? 0 : 2000;
  const total = finalTotal + shipping;

  return (
    <Container>
      <div className="py-8">
        <h1 className="text-2xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Billing Details
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name *</label>
                    <Input
                      name="firstName"
                      value={billingDetails.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? 'border-red-500' : ''}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name *</label>
                    <Input
                      name="lastName"
                      value={billingDetails.lastName}
                      onChange={handleInputChange}
                      className={errors.lastName ? 'border-red-500' : ''}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Company Name (Optional)</label>
                  <Input name="companyName" value={billingDetails.companyName} onChange={handleInputChange} />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Street Address *</label>
                  <Input
                    name="streetAddress"
                    value={billingDetails.streetAddress}
                    onChange={handleInputChange}
                    placeholder="House number and street name"
                    className={errors.streetAddress ? 'border-red-500' : ''}
                  />
                  {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Apartment (Optional)</label>
                  <Input
                    name="apartment"
                    value={billingDetails.apartment}
                    onChange={handleInputChange}
                    placeholder="Apartment, suite, unit, etc."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Town/City *</label>
                    <Input
                      name="townCity"
                      value={billingDetails.townCity}
                      onChange={handleInputChange}
                      className={errors.townCity ? 'border-red-500' : ''}
                    />
                    {errors.townCity && <p className="text-red-500 text-xs mt-1">{errors.townCity}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <Input
                      name="phoneNumber"
                      value={billingDetails.phoneNumber}
                      onChange={handleInputChange}
                      className={errors.phoneNumber ? 'border-red-500' : ''}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <Input
                    name="emailAddress"
                    type="email"
                    value={billingDetails.emailAddress}
                    onChange={handleInputChange}
                    className={errors.emailAddress ? 'border-red-500' : ''}
                  />
                  {errors.emailAddress && <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </h2>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted">
                    <input
                      type="radio"
                      name="payment"
                      value="bank-card"
                      checked={selectedPayment === 'bank-card'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <span>Bank Card (Paystack)</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted opacity-50">
                    <input type="radio" name="payment" value="cod" disabled />
                    <span>Cash on Delivery (Coming Soon)</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.product.name} x {item.quantity}
                      </span>
                      <span>
                        {formatPrice(
                          (typeof item.product.price === 'number' ? item.product.price : item.product.price.current) *
                            item.quantity
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      Shipping
                    </span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  {shipping > 0 && <p className="text-xs text-muted-foreground">Free shipping on orders over ₦50,000</p>}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {errors.submit && <p className="text-red-500 text-sm mt-4">{errors.submit}</p>}

                <Button onClick={handlePlaceOrder} disabled={isProcessing} className="w-full mt-6">
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
