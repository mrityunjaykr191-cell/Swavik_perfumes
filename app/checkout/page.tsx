'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartState, CheckoutFormData } from '@/lib/types';
import { getCartFromStorage, clearCart, saveCartToStorage } from '@/lib/cart';
import { products } from '@/lib/product-data';
import { ChevronRight, AlertCircle } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartState>({ items: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
  });

  useEffect(() => {
    setCart(getCartFromStorage());
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-background">
        <Header />
        <div className="container-luxury py-20 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Checkout</h1>
          <p className="text-lg text-brand-text/70 mb-8">
            Your cart is empty. Add items to proceed.
          </p>
          <Link href="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate order creation
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.items,
          total: cart.total,
          customerName: formData.fullName,
          customerEmail: formData.email,
          shippingAddress: formData,
          paymentMethod: formData.paymentMethod,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();

      // Clear cart
      saveCartToStorage(clearCart());
      window.dispatchEvent(new Event('storage'));

      // Redirect to success page
      router.push(`/order-confirmation?orderId=${data.orderId}`);
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to process order. Please try again.');
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.address &&
    formData.city &&
    formData.state &&
    formData.pincode;

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />

      {/* Hero */}
      <section className="py-12 bg-brand-primary text-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Complete Your Order
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="container-luxury py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street address"
                      className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-brand-text/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Payment Method
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      value: 'cod',
                      label: 'Cash on Delivery',
                      description: 'Pay when you receive your order',
                    },
                    {
                      value: 'upi',
                      label: 'UPI Payment',
                      description: 'Google Pay, PhonePe, Paytm',
                    },
                    {
                      value: 'card',
                      label: 'Credit/Debit Card',
                      description: 'Visa, Mastercard, American Express',
                    },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className="flex items-center p-4 border border-brand-text/20 rounded-sm cursor-pointer hover:bg-brand-text/5 transition-colors"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleChange}
                        className="w-4 h-4 mr-4 accent-brand-primary"
                      />
                      <div>
                        <p className="font-medium">{method.label}</p>
                        <p className="text-sm text-brand-text/60">
                          {method.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Link href="/cart" className="btn-outline flex-1">
                  Back to Cart
                </Link>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 bg-white p-8 rounded-sm border border-brand-text/10">
              <h3 className="text-xl font-serif font-bold mb-6">Order Summary</h3>

              {/* Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-brand-text/10 max-h-80 overflow-y-auto">
                {cart.items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  if (!product) return null;

                  return (
                    <div key={item.productId} className="flex gap-3">
                      <div className="w-16 h-20 relative flex-shrink-0 rounded-sm overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-serif font-bold">
                          {product.name}
                        </p>
                        <p className="text-xs text-brand-text/60 mb-1">
                          x {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-brand-primary">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b border-brand-text/10">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/70">Subtotal</span>
                  <span>₹{cart.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/70">Shipping</span>
                  <span className="text-brand-primary font-medium">FREE</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6 pb-6 border-b border-brand-text/10">
                <div className="flex justify-between">
                  <span className="text-lg font-serif font-bold">Total</span>
                  <span className="text-2xl font-serif font-bold text-brand-primary">
                    ₹{cart.total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-sm">
                <div className="flex gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-800">
                    You will receive an order confirmation email with tracking
                    details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
