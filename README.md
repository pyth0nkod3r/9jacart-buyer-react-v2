# BuyerHub - Modern E-Commerce Template (React Version)

A comprehensive, production-ready e-commerce template built with React 18, TypeScript, Tailwind CSS, and modern best practices. BuyerHub provides everything you need to launch a beautiful, responsive online store with powerful features and seamless user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Theme System](#theme-system)
- [Components](#components)
- [Pages](#pages)
- [API & Mock Data](#api--mock-data)
- [State Management](#state-management)
- [Configuration](#configuration)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## Overview

BuyerHub is designed to be a complete e-commerce solution that can be easily customized and deployed. It features a modern UI with multiple theme options, comprehensive product management, shopping cart functionality, user authentication, and more. The template uses mock data by default but is structured to easily integrate with any backend API.

### Why BuyerHub?

- **Production-Ready**: Built with industry-standard tools and best practices
- **Highly Customizable**: Multiple themes and extensive configuration options
- **Developer-Friendly**: Clean code structure, TypeScript support, and comprehensive documentation
- **Performance-Optimized**: Lazy loading, code splitting, and optimized assets
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **No External Dependencies**: Works with mock data out of the box

---

## Features

### Core E-Commerce Features

| Feature | Description |
|---------|-------------|
| **Product Catalog** | Browse products with categories, filters, sorting, and pagination |
| **Product Search** | Full-text search across products with instant results |
| **Product Detail** | Rich product pages with image gallery, reviews, and related products |
| **Shopping Cart** | Add/remove items, quantity adjustment, cart persistence |
| **Wishlist** | Save products for later with localStorage persistence |
| **Checkout** | Multi-step checkout with address selection and order summary |
| **Order Management** | View order history, track orders, and rate purchases |
| **User Authentication** | Login, register, password reset with mock auth system |

### UI/UX Features

| Feature | Description |
|---------|-------------|
| **5 Predefined Themes** | Default (Green), Dark, Luxury, Minimal, and Vibrant |
| **Theme Switching** | Instant theme switching with localStorage persistence |
| **Responsive Design** | Mobile-first design with breakpoints for all devices |
| **Loading States** | Skeleton loaders and spinners for better UX |
| **Toast Notifications** | Beautiful notifications for user feedback |
| **Form Validation** | Real-time validation with error messages |
| **Image Optimization** | Lazy loading and optimized image display |

### Advanced Features

| Feature | Description |
|---------|-------------|
| **Flash Sales** | Countdown timers for time-limited deals |
| **Recently Viewed** | Track and display recently viewed products |
| **Product Ratings** | Star ratings with review system |
| **Category Showcase** | Featured categories with product counts |
| **Best Sellers** | Highlight popular products |
| **New Arrivals** | Showcase latest products |

---

## Tech Stack

### Core Technologies

- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI Libraries

- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Beautiful open-source icons
- **Framer Motion** - Production-ready animations

### State Management

- **Zustand** - Lightweight state management
- **TanStack Query** - Powerful data synchronization
- **React Router** - Client-side routing

### Form & Validation

- **Zod** - TypeScript-first schema validation
- **React Hook Form** - Performant form handling

---

## Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm 9+ or yarn 1.22+

### Installation

1. **Clone or extract the project**
   ```bash
   cd buyerhub-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
buyerhub-react/
├── public/                    # Static assets
│   └── buyerhub-icon.svg      # App icon
├── src/
│   ├── api/                   # API modules and mock data
│   │   ├── products.ts        # Products API with mock data
│   │   ├── categories.ts      # Categories API
│   │   ├── auth.ts            # Authentication API
│   │   ├── cart.ts            # Cart API
│   │   ├── order.ts           # Orders API
│   │   └── index.ts           # API exports
│   ├── assets/                # Images, fonts, etc.
│   │   └── logo.svg
│   ├── components/            # React components
│   │   ├── Auth/              # Authentication components
│   │   ├── Account/           # Account page components
│   │   ├── Cart/              # Cart components
│   │   ├── Checkout/          # Checkout components
│   │   ├── HomePage/          # Home page sections
│   │   ├── Layout/            # Layout components
│   │   ├── Order/             # Order components
│   │   ├── Product/           # Product components
│   │   ├── Rating/            # Rating components
│   │   ├── UI/                # Reusable UI components
│   │   ├── Wishlist/          # Wishlist components
│   │   └── Demo/              # Demo components
│   ├── config/                # Configuration files
│   │   ├── theme.config.ts    # Theme configuration
│   │   └── features.config.ts # Feature flags
│   ├── contexts/              # React contexts
│   ├── data/                  # Static data
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── pages/                 # Page components
│   │   ├── About/             # About page
│   │   ├── Account/           # Account pages
│   │   ├── Auth/              # Auth pages
│   │   ├── Cart/              # Cart page
│   │   ├── Categories/        # Category pages
│   │   ├── Checkout/          # Checkout page
│   │   ├── Error/             # Error pages
│   │   ├── Home/              # Home page
│   │   ├── Orders/            # Order pages
│   │   ├── Products/          # Product pages
│   │   ├── Search/            # Search page
│   │   ├── Services/          # Services pages
│   │   ├── Support/           # Support pages
│   │   └── Vendor/            # Vendor pages
│   ├── providers/             # Context providers
│   ├── router/                # Routing configuration
│   ├── store/                 # Zustand stores
│   ├── styles/                # Global styles
│   ├── themes/                # Theme definitions
│   ├── types/                 # TypeScript types
│   ├── utils/                 # Utility functions
│   ├── App.tsx                # Main App component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Theme System

BuyerHub comes with 5 beautifully designed themes that can be switched instantly.

### Available Themes

#### 1. Default (BuyerHub Green)
Clean and professional with a vibrant green accent.
- Primary: `#8DEB6E` (Vibrant Green)
- Secondary: `#182F38` (Dark Teal)
- Best for: General e-commerce, tech stores

#### 2. Dark
Neon accents on a dark background for late-night browsing.
- Primary: `#4ADE80` (Neon Green)
- Background: `#0F172A` (Deep Blue-Black)
- Best for: Gaming, tech, entertainment

#### 3. Luxury
Premium aesthetic with gold accents and elegant typography.
- Primary: `#FACC15` (Rich Gold)
- Background: `#0C0A09` (Deep Black)
- Best for: Jewelry, fashion, premium brands

#### 4. Minimal
Clean, distraction-free design with subtle gray tones.
- Primary: `#374151` (Gray)
- Background: `#FFFFFF` (White)
- Best for: Art, design, minimalist brands

#### 5. Vibrant
Colorful and playful with purple and cyan accents.
- Primary: `#C026D3` (Purple/Magenta)
- Secondary: `#06B6D4` (Cyan)
- Best for: Kids, fashion, creative stores

### Theme Usage

```typescript
// Using the theme hook
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, themes } = useTheme();
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {themes.map(t => (
        <option key={t.name} value={t.name}>{t.label}</option>
      ))}
    </select>
  );
}
```

### Theme Configuration

Themes are defined in `src/themes/`:

```typescript
// src/themes/default.ts
export const defaultTheme: Theme = {
  name: 'default',
  label: 'BuyerHub Green',
  colors: {
    primary: '#8DEB6E',
    primaryHover: '#6BD94A',
    primaryForeground: '#ffffff',
    secondary: '#182F38',
    background: '#ffffff',
    foreground: '#0f172a',
    // ... more colors
  }
};
```

### Creating Custom Themes

1. Create a new theme file in `src/themes/`:

```typescript
// src/themes/custom.ts
import type { Theme } from './types';

export const customTheme: Theme = {
  name: 'custom',
  label: 'My Custom Theme',
  colors: {
    primary: '#FF6B6B',
    primaryHover: '#EE5A5A',
    primaryForeground: '#ffffff',
    secondary: '#4ECDC4',
    background: '#F7FFF7',
    foreground: '#1A1A2E',
    muted: '#E8E8E8',
    mutedForeground: '#6B7280',
    accent: '#FFE66D',
    border: '#D1D5DB',
    card: '#FFFFFF',
    cardForeground: '#1F2937',
  }
};
```

2. Register the theme in `src/themes/index.ts`:

```typescript
import { customTheme } from './custom';

export const themes: Record<ThemeName, Theme> = {
  default: defaultTheme,
  dark: darkTheme,
  luxury: luxuryTheme,
  minimal: minimalTheme,
  vibrant: vibrantTheme,
  custom: customTheme,  // Add your theme
};
```

---

## Components

### UI Components

Located in `src/components/UI/`, these are the building blocks of the application.

| Component | Description | Usage |
|-----------|-------------|-------|
| `Button` | Customizable button with variants | `<Button variant="primary">Click me</Button>` |
| `Input` | Form input with validation | `<Input label="Email" type="email" />` |
| `Card` | Container card with header and footer | `<Card>Content</Card>` |
| `Badge` | Status badges and labels | `<Badge variant="success">New</Badge>` |
| `Modal` | Dialog overlay | `<Modal open={isOpen} onClose={handleClose}>...</Modal>` |
| `Toast` | Notification system | `toast({ title: "Success!", variant: "success" })` |
| `Loading` | Loading spinner | `<Loading size="lg" />` |
| `Breadcrumb` | Navigation breadcrumb | `<Breadcrumb items={[...]} />` |
| `ThemeSwitcher` | Theme selector dropdown | `<ThemeSwitcher />` |
| `Image` | Optimized image component | `<Image src="..." alt="..." />` |
| `Alert` | Alert messages | `<Alert variant="warning">Warning!</Alert>` |

### Product Components

Located in `src/components/Product/`:

| Component | Description |
|-----------|-------------|
| `ProductCard` | Product display card with image, price, rating, add to cart |
| `ProductGrid` | Responsive grid layout for products |
| `ProductFilters` | Category, price, and rating filters |

### Cart Components

Located in `src/components/Cart/`:

| Component | Description |
|-----------|-------------|
| `CartItem` | Individual cart item with quantity controls |
| `CartSummary` | Order summary with subtotal, tax, total |
| `MiniCart` | Dropdown cart preview in header |

### Layout Components

Located in `src/components/Layout/`:

| Component | Description |
|-----------|-------------|
| `Layout` | Main layout wrapper with header and footer |
| `Header` | Navigation header with search, cart, user menu |
| `Footer` | Site footer with links and newsletter |
| `Container` | Max-width container wrapper |

---

## Pages

### Public Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Landing page with featured products, categories, deals |
| `/products` | ProductsPage | Product listing with filters and pagination |
| `/products/:id` | ProductDetailPage | Single product view with gallery and reviews |
| `/categories/:slug` | CategoryPage | Products filtered by category |
| `/search` | SearchResultsPage | Search results page |
| `/about` | AboutPage | About the company |
| `/contact` | ContactPage | Contact form and information |
| `/cart` | CartPage | Shopping cart |
| `/checkout` | CheckoutPage | Multi-step checkout |

### Auth Pages

| Route | Page | Description |
|-------|------|-------------|
| `/login` | LoginPage | User login |
| `/register` | RegisterPage | New user registration |
| `/verify-email` | VerifyEmailPage | Email verification |
| `/reset-password` | ResetPasswordPage | Password reset |

### Account Pages (Protected)

| Route | Page | Description |
|-------|------|-------------|
| `/account` | AccountPage | Account dashboard |
| `/account/orders` | OrdersPage | Order history |
| `/account/orders/:id` | OrderDetailPage | Order details |
| `/account/wishlist` | WishlistPage | Saved products |
| `/account/addresses` | AddressesPage | Manage addresses |

### Support Pages

| Route | Page | Description |
|-------|------|-------------|
| `/faq` | FAQPage | Frequently asked questions |
| `/privacy` | PrivacyPolicyPage | Privacy policy |
| `/terms` | TermsPage | Terms of service |
| `/refund-policy` | RefundPolicyPage | Refund policy |
| `/shipping-policy` | ShippingReturnPolicyPage | Shipping info |

---

## API & Mock Data

BuyerHub uses mock data by default, making it fully functional without a backend. The mock data system simulates API responses with realistic delays.

### Products API

Located in `src/api/products.ts`:

```typescript
import { productsApi } from '@/api/products';

// Get all products with pagination
const response = await productsApi.getProducts({
  page: 1,
  perPage: 10,
  category: 'electronics',
  search: 'headphones'
});

// Get single product
const product = await productsApi.getProduct('prod-001');

// Get products by category
const products = await productsApi.getProductsByCategory('electronics');

// Get product ratings
const ratings = await productsApi.getProductRatings('prod-001');
```

### Mock Data Structure

Each product has the following structure:

```typescript
interface ApiProductData {
  productId: string;
  productName: string;
  categoryId: string;
  categoryName: string;
  productDescription: string;
  productTags: string[];
  unitPrice: string;
  oldPrice?: string;         // Original price for discounts
  discountType: string;
  discountValue: string;
  discountPrice: string;
  stock: string;
  images: string[];
  isActive: string;
  storeName: string;
  vendorLogo?: string;
  vendorId?: string;
}
```

### Categories API

Located in `src/api/categories.ts`:

```typescript
import { categoriesApi } from '@/api/categories';

// Get all categories
const categories = await categoriesApi.getCategories();
```

### Cart API

Located in `src/api/cart.ts`:

```typescript
import { cartApi } from '@/api/cart';

// Get cart items
const cart = await cartApi.getCart();

// Add to cart
await cartApi.addToCart(productId, quantity);

// Update quantity
await cartApi.updateCartItem(itemId, quantity);

// Remove from cart
await cartApi.removeFromCart(itemId);

// Clear cart
await cartApi.clearCart();
```

### Orders API

Located in `src/api/order.ts`:

```typescript
import { ordersApi } from '@/api/order';

// Get all orders
const orders = await ordersApi.getOrders();

// Get single order
const order = await ordersApi.getOrder(orderId);

// Create order
const newOrder = await ordersApi.createOrder(orderData);

// Track order
const tracking = await ordersApi.trackOrder(orderId);
```

### Integrating Real APIs

To connect to a real backend:

1. Update `src/lib/config.ts` with your API base URL:

```typescript
export const config = {
  apiBaseUrl: 'https://your-api.com/v1',
  // ...
};
```

2. Modify the API files to make actual HTTP requests:

```typescript
// src/api/products.ts
export const productsApi = {
  getProducts: async (params: ProductsListParams) => {
    const response = await fetch(`${config.apiBaseUrl}/products?${new URLSearchParams(params)}`);
    return response.json();
  },
  // ...
};
```

---

## State Management

### Zustand Stores

BuyerHub uses Zustand for global state management.

#### Cart Store

```typescript
// src/store/useCartStore.ts
import { useCartStore } from '@/store/useCartStore';

function CartComponent() {
  const { items, addItem, removeItem, updateQuantity, total } = useCartStore();
  
  // Use the store...
}
```

#### Auth Store

```typescript
// src/store/useAuthStore.ts
import { useAuthStore } from '@/store/useAuthStore';

function AuthComponent() {
  const { user, isAuthenticated, login, logout } = useAuthStore();
  
  // Use the store...
}
```

#### Wishlist Store

```typescript
// src/store/useWishlistStore.ts
import { useWishlistStore } from '@/store/useWishlistStore';

function WishlistComponent() {
  const { items, addItem, removeItem, isInWishlist } = useWishlistStore();
  
  // Use the store...
}
```

### React Query

TanStack Query is used for server state management:

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

function ProductsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => productsApi.getProducts()
  });
  
  // Render products...
}
```

---

## Configuration

### App Configuration

Located in `src/config/theme.config.ts`:

```typescript
export const defaultBranding: BrandingConfig = {
  appName: 'BuyerHub',
  tagline: 'Your One-Stop Online Marketplace',
  logo: '/buyerhub-icon.svg',
  favicon: '/buyerhub-icon.svg',
  socialLinks: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  contactInfo: {
    address: '123 Main Street, City, Country',
    phone: ['+1234567890'],
    email: 'contact@buyerhub.com',
  },
};
```

### Feature Flags

Located in `src/config/features.config.ts`:

```typescript
export const defaultFeatures: FeatureConfig = {
  wishlist: true,
  flashSales: true,
  ratings: true,
  recentlyViewed: true,
  heroCarousel: true,
  categorySidebar: true,
  liveProducts: true,
  fastSelling: true,
  categoryShowcase: true,
  newsletter: true,
  services: true,
  googleSignIn: true,
  payments: false,
  reviews: true,
  notifications: false,
};
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_APP_NAME=BuyerHub
```

---

## Customization Guide

### Changing Colors

1. Edit theme files in `src/themes/`:

```typescript
// src/themes/default.ts
export const defaultTheme: Theme = {
  name: 'default',
  label: 'BuyerHub Green',
  colors: {
    primary: '#YOUR_COLOR',
    // ...
  }
};
```

2. Or update CSS variables in `src/styles/themes.css`:

```css
[data-theme="default"] {
  --primary: #YOUR_COLOR;
  --primary-hover: #YOUR_HOVER_COLOR;
  /* ... */
}
```

### Adding New Pages

1. Create the page component:

```typescript
// src/pages/Custom/CustomPage.tsx
export default function CustomPage() {
  return (
    <div>
      <h1>Custom Page</h1>
    </div>
  );
}
```

2. Add the route in `src/router/index.tsx`:

```typescript
import CustomPage from '@/pages/Custom/CustomPage';

const routes = [
  // ... existing routes
  { path: '/custom', element: <CustomPage /> },
];
```

### Adding New Components

1. Create the component:

```typescript
// src/components/Custom/CustomComponent.tsx
interface CustomComponentProps {
  title: string;
}

export function CustomComponent({ title }: CustomComponentProps) {
  return <div>{title}</div>;
}
```

2. Export from index:

```typescript
// src/components/Custom/index.ts
export { CustomComponent } from './CustomComponent';
```

### Modifying Mock Data

Edit the mock data arrays in `src/api/`:

```typescript
// src/api/products.ts
const MOCK_PRODUCTS: ApiProductData[] = [
  {
    productId: "prod-custom",
    productName: "My Custom Product",
    // ... add your product data
  },
  // ... more products
];
```

---

## Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploying to Vercel

1. Push your code to a Git repository
2. Connect the repository to Vercel
3. Vercel will auto-detect Vite and configure the build

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploying to Netlify

1. Push your code to a Git repository
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

Or use the Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Deploying to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/buyerhub",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

### Static File Server

Deploy to any static file server (Nginx, Apache, etc.):

1. Build the project
2. Upload the `dist/` folder contents
3. Configure server for SPA routing (redirect all routes to index.html)

**Nginx configuration:**

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /var/www/buyerhub;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## Troubleshooting

### Common Issues

#### "Cannot read properties of undefined (reading 'filter')"

This error occurs when a component tries to access data that hasn't loaded yet. Solutions:

1. Add null checks:
```typescript
{data?.filter(item => item.active).map(item => ...)}
```

2. Use optional chaining:
```typescript
{data && data.filter(item => item.active).map(item => ...)}
```

3. Add loading states:
```typescript
if (isLoading) return <Loading />;
if (!data) return null;
```

#### Theme not persisting

Check that localStorage is available and the theme key matches:

```typescript
localStorage.setItem('BuyerHub-theme', themeName);
```

#### Build fails with TypeScript errors

Run TypeScript check:
```bash
npm run lint
```

Fix any type errors or use `// @ts-ignore` for unavoidable issues.

#### Images not loading

Ensure image URLs are correct and accessible. The template uses Unsplash images which should always be available.

### Debug Mode

Enable debug logging:

```typescript
// In your component
useEffect(() => {
  console.log('Debug - Cart items:', useCartStore.getState().items);
}, []);
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure
- Write TypeScript with proper types
- Add comments for complex logic
- Test on multiple screen sizes
- Ensure accessibility compliance

---

## License

MIT License - Feel free to use for personal or commercial projects.

---

## Support

For questions or support:
- Email: contact@buyerhub.com
- GitHub Issues: [Project Repository]

---

**Made with care by the BuyerHub Team**
