'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckCircle, Mail, Download } from 'lucide-react';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'N/A';
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />

      <section className="py-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </motion.div>
              </div>
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-primary"
            >
              Order Confirmed!
            </motion.h1>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-brand-text/70 mb-8"
            >
              Thank you for your purchase. We&apos;re thrilled to have you as a valued
              customer!
            </motion.p>

            {/* Order ID */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white border border-brand-text/10 p-8 rounded-sm mb-8"
            >
              <p className="text-brand-text/60 text-sm mb-2">Order Number</p>
              <p className="text-3xl font-serif font-bold text-brand-primary">
                {orderId}
              </p>
              <p className="text-xs text-brand-text/50 mt-2">
                Keep this for your records
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {[
                {
                  icon: <Mail className="w-8 h-8 text-brand-primary" />,
                  title: 'Confirmation Email',
                  description: "We've sent a detailed confirmation to your email.",
                },
                {
                  icon: <Download className="w-8 h-8 text-brand-primary" />,
                  title: 'Track Your Order',
                  description: 'Monitor your shipment status in real time.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-brand-text/10 p-6 rounded-sm">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-serif font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-text/70">{item.description}</p>
                </div>
              ))}
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-brand-background/50 border border-brand-text/10 p-8 rounded-sm mb-8 text-left"
            >
              <h3 className="text-lg font-serif font-bold mb-4">What Happens Next?</h3>
              <ol className="space-y-3 text-sm text-brand-text/80">
                {[
                  '1. We verify and prepare your order for shipment',
                  '2. Your order is packed with care and attention to detail',
                  '3. We send you a shipping notification with tracking details',
                  '4. Your package arrives safely at your doorstep',
                  '5. Enjoy your luxury fragrances!',
                ].map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/shop" className="btn-primary">
                Continue Shopping
              </Link>
              <a href={`mailto:hello@svawikperfumes.com?subject=Order ${orderId}`} className="btn-outline">
                Contact Support
              </a>
            </motion.div>

            {/* Footer Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-sm text-brand-text/50 mt-12"
            >
              Need help? Contact us at hello@svawikperfumes.com or call +91 98765 43210
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
