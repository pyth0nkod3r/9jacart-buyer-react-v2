import HeroSection from "@/components/HomePage/HeroSection";
import FlashSales from "@/components/HomePage/FlashSales";
import LiveProducts from "@/components/HomePage/LiveProducts";
import CategoryShowcase from "@/components/HomePage/CategoryShowcase";
import FastSelling from "@/components/HomePage/FastSelling";
import RecentlyViewedProductsSection from "@/components/HomePage/RecentlyViewedProductsSection";
import Newsletter from "@/components/HomePage/Newsletter";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import { Helmet } from "react-helmet-async";
// Archived: FeaturedProducts (replaced by FastSelling displayed as "Featured Picks")
const HomePage: React.FC = () => {
const { isAuthenticated } = useAuthStore();
return (
<div className="bg-background min-h-screen max-w-[960px] lg:max-w-7xl 2xl:max-w-[1550px] mx-auto">
<Helmet>
<title>BuyerHub - Your One-Stop Online Shopping Destination</title>
<meta name="description" content="Shop top deals on electronics, fashion, home appliances & more at BuyerHub. Fast delivery, secure checkout & great prices. Start shopping today!" />
<meta property="og:type" content="website" />
<meta property="og:title" content="BuyerHub - Your One-Stop Online Shopping Destination" />
<meta property="og:description" content="Shop top deals on electronics, fashion, home appliances & more at BuyerHub. Fast delivery, secure checkout & great prices." />
<meta property="og:url" content="https://www.buyerhub.com" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="BuyerHub - Your One-Stop Online Shopping Destination" />
<meta name="twitter:description" content="Shop top deals on electronics, fashion, home appliances & more at BuyerHub. Fast delivery, secure checkout & great prices." />
<link rel="icon" type="image/svg+xml" href="/buyerhub-icon.svg" />
</Helmet>
<HeroSection />
<FlashSales />
<CategoryShowcase />
<FastSelling />
{isAuthenticated && (
<RecentlyViewedProductsSection variant="section" />
)}
<LiveProducts />
<Newsletter />
</div>
);
};
export default HomePage;
