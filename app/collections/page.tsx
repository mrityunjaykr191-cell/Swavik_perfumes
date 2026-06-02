'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/product-data';
import { COLLECTION_MENU_GROUPS } from '@/lib/constants';

export default function CollectionsPage() {
  const collectionDetails = [
    {
      id: 'signature',
      name: 'Signature XI',
      description:
        'Our flagship collection representing timeless luxury and sophistication. These are our most iconic fragrances, crafted for those who appreciate the finer things in life.',
      image:
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=600&fit=crop',
      products: products.filter((p) => p.collection === 'signature'),
    },
    {
      id: 'midnight',
      name: 'Midnight Kiss',
      description:
        'Enchanting nocturnal fragrances designed for evening wear and special occasions. Deep, mysterious, and absolutely captivating.',
      image:
        'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=600&fit=crop',
      products: products.filter((p) => p.collection === 'midnight'),
    },
    {
      id: 'desert',
      name: 'Born In Desert',
      description:
        'Bold, sun-drenched fragrances inspired by the vast deserts of the Middle East. Featuring luxurious oud and warming spices.',
      image:
        'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=600&fit=crop',
      products: products.filter((p) => p.collection === 'desert'),
    },
    {
      id: 'juicy',
      name: 'Juicy Secret',
      description:
        'Fresh, fruity fragrances celebrating the sweetness of life. Perfect for daytime wear with a playful yet sophisticated character.',
      image:
        'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&h=600&fit=crop',
      products: products.filter((p) => p.collection === 'juicy'),
    },
  ];

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Collections
            </h1>
            <p className="text-xl text-brand-text/70 max-w-3xl mx-auto">
              Each collection represents a unique story, a distinct mood, and a
              commitment to extraordinary fragrance experiences. Explore our curated
              selections designed for the modern luxury enthusiast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection Families */}
      <section className="py-16 border-y border-brand-text/10 bg-white/50">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-3">
              Browse by mood and story
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Fragrance Families
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {COLLECTION_MENU_GROUPS.flatMap((group) => group.items).map(
              (item, index) => (
                <motion.div
                  key={item.href}
                  id={item.href.split('#')[1]}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32 border border-brand-text/10 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-serif font-bold mb-2 text-brand-primary">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-text/65">
                    {item.description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Collections */}
      {collectionDetails.map((collection, i) => (
        <section
          key={collection.id}
          id={collection.id}
          className="py-20 border-b border-brand-text/10"
        >
          <div className="container-luxury">
            <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${i % 2 === 1 ? 'md:grid-cols-2 md:[direction:rtl]' : ''}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="aspect-video relative rounded-sm overflow-hidden"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ direction: 'ltr' }}
              >
                <p className="text-brand-secondary text-sm font-medium uppercase tracking-widest mb-2">
                  Collection
                </p>
                <h2 className="text-4xl font-serif font-bold mb-6">
                  {collection.name}
                </h2>
                <p className="text-lg text-brand-text/80 mb-8 leading-relaxed">
                  {collection.description}
                </p>
                <Link
                  href={`/shop?collection=${collection.id}`}
                  className="btn-primary inline-block"
                >
                  Explore Collection
                </Link>
              </motion.div>
            </div>

            {/* Products in Collection */}
            {collection.products.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-bold mb-8">
                  Products in {collection.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collection.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-brand-primary text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container-luxury text-center"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Find Your Signature Scent?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our complete range and discover the fragrance that speaks to
            your unique personality.
          </p>
          <Link href="/shop" className="btn-secondary">
            Shop All Products
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
