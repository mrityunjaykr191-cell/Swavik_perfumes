'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, ShoppingBag } from 'lucide-react';
import { getCartItemCount, getCartFromStorage } from '@/lib/cart';
import { COLLECTION_MENU_GROUPS, NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = getCartFromStorage();
    setCartCount(getCartItemCount(cart.items));

    const handleStorageChange = () => {
      const updatedCart = getCartFromStorage();
      setCartCount(getCartItemCount(updatedCart.items));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-background/95 backdrop-blur-sm border-b border-brand-text/10">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold text-brand-primary">
              ✦ Swavik
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {NAV_ITEMS.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div
              className="h-full flex items-center"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isCollectionsOpen}
                aria-controls="desktop-collections-menu"
                onFocus={() => setIsCollectionsOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
              >
                Fragrance Collections
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isCollectionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isCollectionsOpen && (
                  <motion.div
                    id="desktop-collections-menu"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 top-full w-full bg-white border-t border-brand-text/10 shadow-xl"
                  >
                    <div className="container-luxury grid grid-cols-3 gap-12 py-10">
                      {COLLECTION_MENU_GROUPS.map((group) => (
                        <div key={group.title}>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-5">
                            {group.title}
                          </p>
                          <div className="space-y-4">
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsCollectionsOpen(false)}
                                className="group block"
                              >
                                <span className="block text-sm font-medium text-brand-text group-hover:text-brand-primary transition-colors">
                                  {item.label}
                                </span>
                                <span className="block mt-1 text-xs leading-relaxed text-brand-text/55">
                                  {item.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="border-l border-brand-text/10 pl-8 flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-4">
                            Discover Swavik
                          </p>
                          <p className="text-sm leading-relaxed text-brand-text/65">
                            Explore fragrance families shaped by Kannauj heritage
                            and a contemporary point of view.
                          </p>
                        </div>
                        <Link
                          href="/collections"
                          onClick={() => setIsCollectionsOpen(false)}
                          className="text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                        >
                          View all collections
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_ITEMS.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative p-2 hover:bg-brand-text/5 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-6 h-6 text-brand-primary" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-brand-primary text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-brand-text/5 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-brand-text/10">
            {NAV_ITEMS.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              aria-expanded={isMobileCollectionsOpen}
              onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
            >
              Fragrance Collections
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMobileCollectionsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isMobileCollectionsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-l border-brand-secondary/50 ml-2 pl-4"
                >
                  {COLLECTION_MENU_GROUPS.map((group) => (
                    <div key={group.title} className="py-3">
                      <p className="text-xs uppercase tracking-widest text-brand-primary mb-2">
                        {group.title}
                      </p>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1.5 text-sm text-brand-text/70 hover:text-brand-primary transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileCollectionsOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {NAV_ITEMS.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-brand-text/80 hover:text-brand-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
