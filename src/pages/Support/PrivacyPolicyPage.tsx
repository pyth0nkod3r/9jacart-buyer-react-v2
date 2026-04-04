import Container from "@/components/Layout/Container";
import React from "react";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect personal information you provide when registering, making purchases, or contacting us, including your name, email, phone number, and shipping address.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to process orders, personalize your experience, communicate with you, and improve our platform.",
  },
  {
    title: "3. Data Protection",
    body: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure.",
  },
  {
    title: "4. Cookies",
    body: "We use cookies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie settings in your browser.",
  },
  {
    title: "5. Third-Party Services",
    body: "We may share data with trusted third-party services for payment processing and analytics, in accordance with our Privacy Policy.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to access, correct, or delete your personal data. Contact us at contact@buyerhub.com to exercise these rights.",
  },
];

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Container className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-[hsl(var(--header-bg))]">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 2024</p>

            {SECTIONS.map(({ title, body }) => (
              <div key={title} className="mb-6 last:mb-0">
                <h2 className="text-base font-semibold text-foreground mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PrivacyPolicyPage;
