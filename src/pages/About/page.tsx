import HeroSection from "./HeroSection";
import VisionMissionSection from "./VisionMissionSection";
import WhatWeDoSection from "./WhatWeDoSection";
import BNPLSection from "./BNPLSection";
import PlatformFeatures from "./FeaturesSection";
import WhyWeMatter from "./ImpactSection";
import DifferentiatorsSection from "./DifferentiatorsSection";
import FutureSection from "./FutureSection";
import CTASection from "./AudienceSection";
import Container from "@/components/Layout/Container";
import { Helmet } from "react-helmet-async";
const AboutPage = () => {
return (
<Container className="min-h-screen bg-background">
<Helmet>
<title>About Us | BuyerHub - Empowering Commerce in your region</title>
<meta name="description" content="Learn about BuyerHub's mission to revolutionize shopping with BNPL features, innovative platform tools, and our vision for the future of your regionn retail." />
<link rel="icon" type="image/svg+xml" href="/buyerhub-icon.svg" />
</Helmet>
{/* Hero Section */}
<HeroSection />
{/* Vision & Mission */}
<VisionMissionSection />
{/* What We Do */}
<WhatWeDoSection />
{/* BNPL Feature Highlight */}
<BNPLSection />
{/* Platform Features */}
<PlatformFeatures />
{/* Why We Matter */}
<WhyWeMatter />
{/* What Sets Us Apart */}
<DifferentiatorsSection />
{/* Looking Ahead */}
<FutureSection />
{/* CTA Section */}
<CTASection />
</Container>
);
};
export default AboutPage;
