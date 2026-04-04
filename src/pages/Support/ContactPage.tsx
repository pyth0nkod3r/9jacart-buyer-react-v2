import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Breadcrumb } from '@/components/UI/Breadcrumb';
import Container from '@/components/Layout/Container';
import { useNotificationContext } from '@/providers/NotificationProvider';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address', value: '123 Main Street, City, Country' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-8900' },
  { icon: Mail, label: 'Email', value: 'contact@buyerhub.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 9AM - 6PM' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', short: 'f', href: '#' },
  { label: 'X (Twitter)', short: 'X', href: '#' },
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'LinkedIn', short: 'in', href: '#' },
];

const inputClass =
  'w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors';

const ContactPage: React.FC = () => {
  const { showNotification } = useNotificationContext();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    showNotification('Message sent successfully!', 'success');
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  return (
    <Container className="min-h-screen bg-background">
      <div className="py-6 lg:py-8">
        <Breadcrumb
          items={[{ label: 'Contact Us', isCurrentPage: true }]}
          className="mb-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-card border border-border rounded-xl p-6 lg:p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-foreground mb-1">Get in Touch</h1>
            <p className="text-muted-foreground text-sm mb-6">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            {/* Contact Info */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h5 className="font-bold text-foreground mb-4">Contact Information</h5>
              <div className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h5 className="font-bold text-foreground mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, short, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {short}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
