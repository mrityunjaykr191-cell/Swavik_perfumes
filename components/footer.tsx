'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-brand-text text-brand-background mt-20">
      <div className="container-luxury py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-brand-background/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay Updated With Our Latest Collections
            </h3>
            <p className="text-brand-background/80 mb-6">
              Subscribe to our newsletter for exclusive offers and fragrance tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-brand-background text-brand-text rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-secondary text-brand-text font-medium rounded-sm hover:bg-opacity-90 transition-all"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif font-bold mb-4 text-brand-secondary">
              ✦ Swavik
            </div>
            <p className="text-brand-background/80 text-sm mb-4">
              Premium fabric perfumes from the heart of Kannauj, India. Luxury, Heritage, Craftsmanship.
            </p>
            <div className="flex gap-4 text-brand-secondary">
              <a href="#" className="hover:text-brand-background transition-colors">
                F
              </a>
              <a href="#" className="hover:text-brand-background transition-colors">
                I
              </a>
              <a href="#" className="hover:text-brand-background transition-colors">
                T
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-brand-background/80">
              <li>
                <Link href="/" className="hover:text-brand-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-brand-secondary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-brand-secondary transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-secondary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-brand-background/80">
              <li>
                <a href="#" className="hover:text-brand-secondary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-secondary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-secondary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-secondary transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-brand-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-secondary" />
                <span>Kannauj, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-secondary" />
                <a href="mailto:hello@svawikperfumes.com" className="hover:text-brand-secondary transition-colors">
                  hello@svawikperfumes.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-secondary" />
                <a href="tel:+919876543210" className="hover:text-brand-secondary transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-brand-background/20 text-center text-sm text-brand-background/60">
          <p>
            © {new Date().getFullYear()} Swavik Fabric Perfumes. All rights reserved. Rooted in heritage, inspired by the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
