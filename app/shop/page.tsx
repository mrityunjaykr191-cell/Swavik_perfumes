'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { CartDrawer } from '@/components/cart-drawer';
import { products } from '@/lib/product-data';
import { ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(true);

  const collections = ['signature', 'midnight', 'desert', 'juicy', 'shower'];
  const prices = [
    { min: 0, max: 1500, label: 'Under ₹1,500' },
    { min: 1500, max: 2000, label: '₹1,500 - ₹2,000' },
    { min: 2000, max: 2500, label: '₹2,000 - ₹2,500' },
    { min: 2500, max: 5000, label: 'Above ₹2,500' },
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCollection =
      !selectedCollection || product.collection === selectedCollection;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCollection && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Hero Section */}
      <section className="py-12 bg-brand-primary text-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Explore Our Collection
            </h1>
            <p className="text-lg opacity-90">
              Discover luxury fabric perfumes curated for the discerning individual
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-luxury py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`${showFilters ? 'block' : 'hidden'} md:block`}
          >
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <h3 className="text-lg font-serif font-bold mb-4">Search</h3>
                <input
                  type="text"
                  placeholder="Search fragrances..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              {/* Collection Filter */}
              <div>
                <h3 className="text-lg font-serif font-bold mb-4">Collection</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCollection(null)}
                    className={`block text-left py-2 transition-colors ${
                      selectedCollection === null
                        ? 'text-brand-primary font-semibold'
                        : 'text-brand-text/70 hover:text-brand-primary'
                    }`}
                  >
                    All Collections
                  </button>
                  {collections.map((collection) => (
                    <button
                      key={collection}
                      onClick={() => setSelectedCollection(collection)}
                      className={`block text-left py-2 transition-colors capitalize ${
                        selectedCollection === collection
                          ? 'text-brand-primary font-semibold'
                          : 'text-brand-text/70 hover:text-brand-primary'
                      }`}
                    >
                      {collection.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-serif font-bold mb-4">Price Range</h3>
                <div className="space-y-2">
                  {prices.map((price) => (
                    <button
                      key={`${price.min}-${price.max}`}
                      onClick={() => setPriceRange([price.min, price.max])}
                      className={`block text-left py-2 transition-colors text-sm ${
                        priceRange[0] === price.min && priceRange[1] === price.max
                          ? 'text-brand-primary font-semibold'
                          : 'text-brand-text/70 hover:text-brand-primary'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCollection || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCollection(null);
                    setSearchQuery('');
                    setPriceRange([0, 5000]);
                  }}
                  className="w-full btn-outline text-brand-primary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {/* Filter Toggle for Mobile */}
            <div className="md:hidden mb-6 flex justify-between items-center">
              <p className="text-sm text-brand-text/70">
                {filteredProducts.length} products
              </p>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 btn-outline text-brand-primary"
              >
                Filters
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showFilters ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-brand-text/70 mb-4">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCollection(null);
                    setSearchQuery('');
                    setPriceRange([0, 5000]);
                  }}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
