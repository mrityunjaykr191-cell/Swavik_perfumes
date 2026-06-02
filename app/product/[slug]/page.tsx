'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { CartDrawer } from '@/components/cart-drawer';
import { products } from '@/lib/product-data';
import { addToCart, getCartFromStorage, saveCartToStorage } from '@/lib/cart';
import { ShoppingCart, Heart, Share2, ChevronDown } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-background flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = getCartFromStorage();
    const updatedCart = addToCart(cart, product.id, product.price, quantity);
    saveCartToStorage(updatedCart);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    window.dispatchEvent(new Event('storage'));
  };

  const relatedProducts = products.filter((p) =>
    product.relatedProducts.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Breadcrumb */}
      <div className="container-luxury py-4 text-sm text-brand-text/60">
        <Link href="/shop" className="hover:text-brand-primary">
          Shop
        </Link>
        {' > '}
        <span>{product.name}</span>
      </div>

      {/* Product Detail */}
      <div className="container-luxury py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="aspect-square relative mb-4 rounded-sm overflow-hidden bg-brand-background/50">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square relative rounded-sm overflow-hidden cursor-pointer transition-all ${
                      selectedImage === i
                        ? 'ring-2 ring-brand-primary'
                        : 'ring-1 ring-brand-text/20 hover:ring-brand-primary'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Collection Badge */}
            <p className="text-xs font-medium uppercase tracking-widest text-brand-primary mb-2">
              {product.collection}
            </p>

            {/* Title & Price */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-serif font-bold text-brand-primary">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-lg text-brand-text/60">
                {product.volume}ml
              </span>
            </div>

            {/* Short Description */}
            <p className="text-lg text-brand-text/80 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-brand-text/20 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-brand-text/5 transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x border-brand-text/20">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-brand-text/5 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                {isAdded ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8 border-b border-brand-text/10 pb-8">
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex-1 btn-outline"
              >
                View Cart
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-brand-text/20 rounded-sm hover:bg-brand-text/5 transition-colors">
                <Heart className="w-5 h-5" />
                Save
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-brand-text/20 rounded-sm hover:bg-brand-text/5 transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Product Features */}
            <div className="space-y-3">
              {[
                '✓ Long-lasting fragrance',
                '✓ Fabric-safe formula',
                '✓ Handcrafted in Kannauj',
                '✓ Natural ingredients',
              ].map((feature, i) => (
                <p key={i} className="text-brand-text/80">
                  {feature}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fragrance Notes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-t border-brand-text/10"
        >
          <h2 className="text-3xl font-serif font-bold mb-8">Fragrance Profile</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Top Notes', notes: product.topNotes },
              { title: 'Middle Notes', notes: product.middleNotes },
              { title: 'Base Notes', notes: product.baseNotes },
            ].map((noteGroup, i) => (
              <div key={i} className="bg-brand-background/50 p-8 rounded-sm">
                <h3 className="text-lg font-serif font-bold mb-4 text-brand-primary">
                  {noteGroup.title}
                </h3>
                <ul className="space-y-2">
                  {noteGroup.notes.map((note, j) => (
                    <li key={j} className="text-brand-text/80">
                      • {note}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-t border-brand-text/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">The Story</h2>
              <p className="text-lg text-brand-text/80 leading-relaxed">
                {product.story}
              </p>
            </div>
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <Image
                src={product.image}
                alt={`${product.name} story`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-t border-brand-text/10"
        >
          <h2 className="text-3xl font-serif font-bold mb-8">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-2xl flex-shrink-0">✦</span>
                <div>
                  <p className="text-lg text-brand-text/80">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Usage Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-t border-brand-text/10"
        >
          <h2 className="text-3xl font-serif font-bold mb-8">How To Use</h2>
          <div className="bg-brand-background/50 p-8 rounded-sm">
            <p className="text-lg text-brand-text/80 leading-relaxed">
              {product.usageGuide}
            </p>
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-t border-brand-text/10"
        >
          <h2 className="text-3xl font-serif font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {product.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-brand-text/10 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-brand-text/5 transition-colors text-left"
                >
                  <span className="font-serif font-bold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-brand-text/80 border-t border-brand-text/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-16 border-t border-brand-text/10"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </motion.section>
        )}
      </div>

      <Footer />
    </div>
  );
}
