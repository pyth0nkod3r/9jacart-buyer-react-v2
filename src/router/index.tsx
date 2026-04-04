import React, { Suspense, lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Loading } from "../components/UI";
// HomePage eager - critical for fast reload
import HomePage from "../pages/Home/HomePage";
// Route-level code splitting: lazy load non-home routes
const ProductsPage = lazy(() => import("../pages/Products/ProductsPage"));
const ProductDetailPage = lazy(() => import("../pages/Products/ProductDetailPage"));
const DealsPage = lazy(() => import("../pages/Products/DealsPage"));
const NewArrivalsPage = lazy(() => import("../pages/Products/NewArrivalsPage"));
const BestSellersPage = lazy(() => import("../pages/Products/BestSellersPage"));
const VendorStorefrontPage = lazy(() => import("../pages/Vendor/VendorStorefrontPage"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));
const CheckoutPage = lazy(() => import("../pages/Checkout/CheckoutPage"));
const OrdersPage = lazy(() => import("../pages/Orders/OrdersPage"));
const OrderDetailPage = lazy(() => import("../pages/Orders/OrderDetailPage"));
const TrackOrderPage = lazy(() => import("../pages/Orders/TrackOrderPage"));
const RateOrderPage = lazy(() => import("../pages/Orders/RateOrderPage"));
const AccountPage = lazy(() => import("../pages/Account/AccountPage"));
const WishlistPage = lazy(() => import("../pages/Account/WishlistPage"));
const ContactAdminPage = lazy(() => import("../pages/Account/ContactAdminPage"));
const ContactPage = lazy(() => import("../pages/Support/ContactPage"));
const FAQPage = lazy(() => import("../pages/Support/FAQPage"));
const TermsPage = lazy(() => import("../pages/Support/TermsPage"));
const PrivacyPolicyPage = lazy(() => import("../pages/Support/PrivacyPolicyPage"));
const TermsOfUsePage = lazy(() => import("../pages/Support/TermsOfUsePage"));
const ShippingReturnPolicyPage = lazy(() => import("../pages/Support/ShippingReturnPolicyPage"));
const RefundPolicyPage = lazy(() => import("../pages/Support/RefundPolicyPage"));
const DisputePolicyPage = lazy(() => import("../pages/Support/DisputePolicyPage"));
const CategoryPage = lazy(() => import("../pages/Categories/CategoryPage"));
const SearchResultsPage = lazy(() => import("../pages/Search/SearchResultsPage"));
const NotFoundPage = lazy(() => import("../pages/Error/NotFoundPage"));
const UIComponentsDemo = lazy(() => import("../pages/Demo/UIComponentsDemo"));
// Services pages
const ServicesLandingPage = lazy(() => import("../pages/Services").then((m) => ({ default: m.ServicesLandingPage })));
const ServicesPage = lazy(() => import("../pages/Services").then((m) => ({ default: m.ServicesPage })));
// Auth pages
const LoginPage = lazy(() => import("../pages/Auth").then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import("../pages/Auth").then((m) => ({ default: m.RegisterPage })));
const RegistrationSuccessPage = lazy(() => import("../pages/Auth").then((m) => ({ default: m.RegistrationSuccessPage })));
const ResetPasswordPage = lazy(() => import("../pages/Auth").then((m) => ({ default: m.ResetPasswordPage })));
const VerifyEmailPage = lazy(() => import("../pages/Auth").then((m) => ({ default: m.VerifyEmailPage })));
const AboutPage = lazy(() => import("@/pages/About/page"));
// Layout components
import AuthLayout from "../components/Layout/AuthLayout";
import { ProtectedRoute } from "../components/Auth";
const PageFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <Loading size="lg" />
  </div>
);
const ProductDetailFallback = () => (
  <div className="min-h-[100vh] w-full" aria-hidden />
);
const withSuspense = (Node: React.ReactNode) => (
  <Suspense fallback={<PageFallback />}>{Node}</Suspense>
);
// Scroll to Top Component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
// Layout Wrapper with ScrollToTop
const LayoutWithScrollToTop: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
};
// Auth Layout Wrapper with ScrollToTop
const AuthLayoutWithScrollToTop: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <AuthLayout />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithScrollToTop />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: withSuspense(<ProductsPage />) },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<ProductDetailFallback />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      { path: "deals", element: withSuspense(<DealsPage />) },
      { path: "new-arrivals", element: withSuspense(<NewArrivalsPage />) },
      { path: "bestsellers", element: withSuspense(<BestSellersPage />) },
      { path: "vendor/:vendorId", element: withSuspense(<VendorStorefrontPage />) },
      { path: "cart", element: withSuspense(<CartPage />) },
      { path: "checkout", element: withSuspense(<CheckoutPage />) },
      {
        path: "orders",
        element: withSuspense(<ProtectedRoute><OrdersPage /></ProtectedRoute>),
      },
      {
        path: "orders/:id",
        element: withSuspense(<ProtectedRoute><OrderDetailPage /></ProtectedRoute>),
      },
      {
        path: "track-order/:id",
        element: withSuspense(<ProtectedRoute><TrackOrderPage /></ProtectedRoute>),
      },
      {
        path: "rate-order/:orderId",
        element: withSuspense(<ProtectedRoute><RateOrderPage /></ProtectedRoute>),
      },
      {
        path: "account",
        element: withSuspense(<ProtectedRoute><AccountPage /></ProtectedRoute>),
      },
      {
        path: "wishlist",
        element: withSuspense(<ProtectedRoute><WishlistPage /></ProtectedRoute>),
      },
      {
        path: "contact-admin",
        element: withSuspense(<ProtectedRoute><ContactAdminPage /></ProtectedRoute>),
      },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "terms", element: withSuspense(<TermsPage />) },
      { path: "privacy", element: withSuspense(<PrivacyPolicyPage />) },
      { path: "terms-of-use", element: withSuspense(<TermsOfUsePage />) },
      { path: "shipping-return-policy", element: withSuspense(<ShippingReturnPolicyPage />) },
      { path: "refund-policy", element: withSuspense(<RefundPolicyPage />) },
      { path: "dispute-policy", element: withSuspense(<DisputePolicyPage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "faq", element: withSuspense(<FAQPage />) },
      { path: "services", element: withSuspense(<ServicesLandingPage />) },
      { path: "services/:subcategory", element: withSuspense(<ServicesPage />) },
      { path: "category/:categoryId", element: withSuspense(<CategoryPage />) },
      { path: "search", element: withSuspense(<SearchResultsPage />) },
      { path: "demo", element: withSuspense(<UIComponentsDemo />) },
      { path: "*", element: withSuspense(<NotFoundPage />) },
    ],
  },
  {
    path: "auth",
    element: <AuthLayoutWithScrollToTop />,
    children: [
      { path: "login", element: withSuspense(<LoginPage />) },
      { path: "register", element: withSuspense(<RegisterPage />) },
      { path: "registration-success", element: withSuspense(<RegistrationSuccessPage />) },
      { path: "reset-password", element: withSuspense(<ResetPasswordPage />) },
      { path: "verify-email", element: withSuspense(<VerifyEmailPage />) },
    ],
  },
]);
const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
