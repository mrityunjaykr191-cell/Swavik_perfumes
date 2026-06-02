'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { CartDrawer } from '@/components/cart-drawer';
import { products, collections, whySwavik } from '@/lib/product-data';

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const bestSellers = products.slice(0, 4);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&h=1080&fit=crop"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-lg md:text-xl tracking-widest mb-4 opacity-90">
            The Essence of Kannauj
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Luxury Fabric Perfumes
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Rooted in Nature. Inspired by the World.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary">
              Shop Collection
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="btn-outline text-white border-white hover:bg-white hover:text-brand-primary"
            >
              View Cart
            </button>
          </div>
        </motion.div>

      </section>

      {/* Trust Strip */}
      <section className="bg-brand-primary text-white py-6">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-sm">
            {[
              { label: 'Natural', icon: '🌿' },
              { label: 'Heritage', icon: '✦' },
              { label: 'Long Lasting', icon: '⏱' },
              { label: 'Fabric Safe', icon: '🧵' },
              { label: 'Made in Kannauj', icon: '🏛' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="heritage" className="py-20">
        <div className="container-luxury">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">The Heritage Of Kannauj</h2>
            <p className="text-lg text-brand-text/70 leading-relaxed">
              For over 2000 years, Kannauj has been the perfume capital of India. Our
              brand is rooted in this legendary heritage, where generations of master
              perfumers have perfected the art of fragrance creation. Each bottle of
              Swavik Fabric Perfume carries the essence of this timeless tradition,
              blended with modern luxury and contemporary sensibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=600&fit=crop"
                alt="Heritage"
                fill
                className="object-cover rounded-sm"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <h3 className="text-3xl font-serif font-bold mb-4">Crafted With Passion</h3>
              <p className="text-brand-text/70 mb-4 leading-relaxed">
                Every fragrance in the Swavik collection is meticulously crafted by
                experienced perfumers using traditional methods combined with modern
                innovation. We source only the finest natural ingredients from around
                the world to ensure exceptional quality and longevity.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Authentic Kannauj heritage and tradition',
                  'Natural ingredients, no synthetic shortcuts',
                  'Careful attention to every detail',
                  'Sustainable and ethical sourcing',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-brand-secondary">✦</span>
                    <span className="text-brand-text/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-20 bg-brand-background/50">
        <div className="container-luxury">
          <motion.h2 {...fadeInUp} className="section-title">
            Our Collections
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/collections#${collection.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 mb-4 rounded-sm overflow-hidden">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-brand-primary transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-brand-text/70">
                      {collection.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="container-luxury">
          <motion.h2 {...fadeInUp} className="section-title">
            Best Sellers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, i) => (
              <motion.div
                key={product.id}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-primary">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Fabric Perfume Education */}
      <section className="py-20 bg-brand-background/50">
        <div className="container-luxury">
          <motion.h2 {...fadeInUp} className="section-title">
            Understanding Fabric Perfumes
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'What Are Fabric Perfumes?',
                content:
                  'Fabric perfumes are specially formulated fragrances designed to enhance and freshen your fabrics - from clothing and curtains to upholstery and bedding. They provide a luxurious fragrance experience without the commitment of traditional perfumes.',
              },
              {
                title: 'How To Use',
                content:
                  'Simply spray 2-3 times on fabric from 6 inches away. The fragrance will develop and linger for hours. Can be used on clothing, home furnishings, or as a personal fragrance. Safe for all fabric types.',
              },
              {
                title: 'Longevity & Performance',
                content:
                  'Our concentrated formulas ensure long-lasting fragrance that typically lasts 6-12 hours depending on the collection. The scent develops beautifully over time, creating a subtle and sophisticated aroma.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-serif font-bold mb-4 text-brand-primary">
                  {item.title}
                </h3>
                <p className="text-brand-text/70 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Swavik */}
      <section className="py-20">
        <div className="container-luxury">
          <motion.h2 {...fadeInUp} className="section-title">
            Why Choose Swavik
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySwavik.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-serif font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-text/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <motion.div {...fadeInUp} className="container-luxury text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Discover the perfect fragrance that matches your personality and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-secondary">
              Shop Now
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-brand-primary transition-all"
            >
              View Cart
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
