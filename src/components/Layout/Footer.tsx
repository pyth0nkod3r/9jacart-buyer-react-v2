import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPinCheck, Phone, Mail } from 'lucide-react';
import logoImage from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-footer">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[960px] lg:max-w-7xl 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Know Us More */}
          <div className='lg:mx-auto'>
            <h3 className="text-lg font-semibold mb-6 text-footer">Know Us More</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-footer-text/80 hover:text-footer-text transition-colors">About Us</Link></li>
              <li><Link to="/terms" className="text-footer-text/80 hover:text-footer-text transition-colors">Terms & Conditions (T's & C's)</Link></li>
              <li><Link to="/contact-admin" className="text-footer-text/80 hover:text-footer-text transition-colors">Contact Admin</Link></li>
            </ul>
          </div>
          {/* Make Money With Us */}
          <div className='lg:mx-auto'>
            <h3 className="text-lg font-semibold mb-6 text-footer">Make Money With Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-footer-text/80 hover:text-footer-text transition-colors"
                >
                  Sell Products on Our Platform
                </a>
              </li>
            </ul>
            {/* Let Us Help You */}
            <h3 className="text-lg font-semibold mb-6 text-footer mt-8">Let Us Help You</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact-admin" className="text-footer-text/80 hover:text-footer-text transition-colors">Help (Contact Admin)</Link></li>
            </ul>
          </div>
          {/* Payment Options */}
          <div className='lg:mx-auto'>
            <h3 className="text-lg font-semibold mb-6 text-footer">Payment Options</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="text-footer-text/80">Bank Payments (Visa, MasterCard)</span></li>
              <li><span className="text-footer-text/80">Buy Now, Pay Later (Coming Soon)</span></li>
              <li><span className="text-footer-text/80">Pay on Delivery (Coming Soon)</span></li>
              <li><span className="text-footer-text/80">Emergency Credit (Coming Soon)</span></li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 border-t border-footer-border pt-6 lg:pt-8">
          {/* Logo, Contact Info & Social Media */}
          <div className="lg:col-span-1 lg:mx-auto">
            <div className="flex items-center mb-4">
              <img src={logoImage} alt="logo" className="h-8 w-auto" />
            </div>
            <div className="text-sm text-footer-text/80 space-y-2">
              <p className="flex items-start gap-2">
                <MapPinCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Main Street, City, Country</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (234) 567-8900</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@example.com</span>
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-footer-text/80 hover:text-footer-text transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-footer-text/80 hover:text-footer-text transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-footer-text/80 hover:text-footer-text transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-footer-text/80 hover:text-footer-text transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Account */}
          <div className='lg:mx-auto'>
            <h4 className="text-footer font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account" className="text-footer-text/80 hover:text-footer-text transition-colors">My Account</Link></li>
              <li><Link to="/auth/login" className="text-footer-text/80 hover:text-footer-text transition-colors">Login / Register</Link></li>
              <li><Link to="/cart" className="text-footer-text/80 hover:text-footer-text transition-colors">Cart</Link></li>
              <li><Link to="/wishlist" className="text-footer-text/80 hover:text-footer-text transition-colors">Wishlist</Link></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className='lg:mx-auto'>
            <h4 className="text-footer font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shipping-return-policy" className="text-footer-text/80 hover:text-footer-text transition-colors">Shipping and return policy</Link></li>
              <li><Link to="/refund-policy" className="text-footer-text/80 hover:text-footer-text transition-colors">Refund Policy</Link></li>
              <li><Link to="/dispute-policy" className="text-footer-text/80 hover:text-footer-text transition-colors">Dispute Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-footer-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-footer-text/60">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
