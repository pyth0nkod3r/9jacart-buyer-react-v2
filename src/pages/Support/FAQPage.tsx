import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Breadcrumb } from '@/components/UI/Breadcrumb';
import Container from '@/components/Layout/Container';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: 'How do I create an account?',
    answer:
      "Click on the 'Sign In' button at the top right of the page, then select 'Create account'. Fill in your details and verify your email to get started.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank card payments (Visa, MasterCard) via Paystack. Cash on Delivery, Buy Now Pay Later, and Emergency Credit are coming soon.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Standard delivery takes 2–5 business days depending on your location. Express delivery options are available at checkout.',
  },
  {
    question: 'Can I return a product?',
    answer:
      'Yes, most products can be returned within 30 days of delivery. Check our Refund Policy for specific conditions.',
  },
  {
    question: 'How do I track my order?',
    answer:
      "Go to 'My Orders' in your account, find the order you want to track, and click 'Track Order' to see real-time updates.",
  },
  {
    question: 'Is my payment information secure?',
    answer:
      'Yes, all payments are processed through Paystack with bank-level encryption and security measures.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      "You can reach us through the 'Contact Support' page, email us at contact@buyerhub.com, or call us at +1 (234) 567-8900.",
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'Yes! We offer free shipping on orders above ₦50,000. Standard shipping fee is ₦2,500 for orders below this threshold.',
  },
];

const FAQItem: React.FC<{ faq: (typeof FAQS)[0]; index: number }> = ({
  faq,
  index,
}) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const FAQPage: React.FC = () => {
  return (
    <Container className="min-h-screen bg-background">
      <div className="py-6 lg:py-8">
        <Breadcrumb
          items={[{ label: 'FAQ', isCurrentPage: true }]}
          className="mb-4"
        />

        <h1 className="text-2xl font-bold text-foreground mb-1">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          Find answers to commonly asked questions about BuyerHub.
        </p>

        <div className="max-w-3xl bg-card border border-border rounded-xl p-6 shadow-sm">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQPage;
