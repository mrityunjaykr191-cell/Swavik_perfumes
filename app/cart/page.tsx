'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartState } from '@/lib/types';
import {
  getCartFromStorage,
  removeFromCart,
  updateQuantity,
  saveCartToStorage,
  clearCart,
} from '@/lib/cart';
import { products } from '@/lib/product-data';

export default function CartPage() {
  const [cart, setCart] = useState<CartState>({ items: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCart(getCartFromStorage());
    setIsLoading(false);
  }, []);

  const handleRemove = (productId: string) => {
    const updatedCart = removeFromCart(cart, productId);
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
    window.dispatchEvent(new Event('storage'));
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedCart = updateQuantity(cart, productId, newQuantity);
    setCart(updatedCart);
    saveCartToStorage(updatedCart);
    window.dispatchEvent(new Event('storage'));
  };

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      setCart(clearCart());
      saveCartToStorage({ items: [], total: 0 });
      window.dispatchEvent(new Event('storage'));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-background flex items-center justify-center">
        <Header />
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-brand-primary text-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Shopping Cart
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="container-luxury py-12">
        {cart.items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Your cart is empty
            </h2>
            <p className="text-lg text-brand-text/70 mb-8">
              Start shopping to add items to your cart.
            </p>
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold">
                    Items ({cart.items.length})
                  </h2>
                  <button
                    onClick={handleClearCart}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {cart.items.map((item, i) => {
                    const product = products.find((p) => p.id === item.productId);
                    if (!product) return null;

                    return (
                      <motion.div
                        key={item.productId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-6 rounded-sm border border-brand-text/10 flex gap-6"
                      >
                        {/* Product Image */}
                        <Link href={`/product/${product.slug}`}>
                          <div className="w-24 h-32 relative flex-shrink-0 rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1">
                          <Link href={`/product/${product.slug}`}>
                            <h3 className="text-lg font-serif font-bold hover:text-brand-primary transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-brand-text/60 mb-4">
                            {product.volume}ml • {product.collection}
                          </p>

                          <div className="flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-brand-text/20 rounded-sm">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productId,
                                    item.quantity - 1
                                  )
                                }
                                className="p-2 hover:bg-brand-text/5 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 border-x border-brand-text/20">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productId,
                                    item.quantity + 1
                                  )
                                }
                                className="p-2 hover:bg-brand-text/5 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Price & Remove */}
                            <div className="text-right">
                              <p className="text-brand-primary font-bold text-lg">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                              <button
                                onClick={() => handleRemove(item.productId)}
                                className="text-xs text-red-600 hover:text-red-700 mt-2 flex items-center gap-1 ml-auto"
                              >
                                <Trash2 className="w-3 h-3" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Continue Shopping */}
              <Link href="/shop" className="inline-flex items-center gap-2 mt-8 text-brand-primary hover:gap-3 transition-all">
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="sticky top-24 bg-white p-8 rounded-sm border border-brand-text/10">
                <h3 className="text-xl font-serif font-bold mb-6">Order Summary</h3>

                {/* Line Items */}
                <div className="space-y-3 mb-6 pb-6 border-b border-brand-text/10">
                  {cart.items.map((item) => {
                    const product = products.find((p) => p.id === item.productId);
                    return (
                      <div key={item.productId} className="flex justify-between text-sm">
                        <span className="text-brand-text/70">
                          {product?.name} x {item.quantity}
                        </span>
                        <span className="font-medium">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Calculations */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-text/70">Subtotal</span>
                    <span>₹{cart.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-text/70">Shipping</span>
                    <span className="text-brand-primary font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-text/70">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-6 pb-6 border-t border-b border-brand-text/10 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-serif font-bold">Total</span>
                    <span className="text-2xl font-serif font-bold text-brand-primary">
                      ₹{cart.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" className="block">
                  <button className="w-full btn-primary mb-3 flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>

                {/* Continue Shopping */}
                <Link href="/shop" className="block">
                  <button className="w-full btn-outline">Continue Shopping</button>
                </Link>

                {/* Info */}
                <p className="text-xs text-brand-text/50 text-center mt-4">
                  Free shipping on orders over ₹999
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
