'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartState } from '@/lib/types';
import {
  getCartFromStorage,
  removeFromCart,
  updateQuantity,
  saveCartToStorage,
} from '@/lib/cart';
import { products } from '@/lib/product-data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cart, setCart] = useState<CartState>({ items: [], total: 0 });

  useEffect(() => {
    const loadCart = () => {
      setCart(getCartFromStorage());
    };

    loadCart();
    window.addEventListener('storage', loadCart);
    return () => window.removeEventListener('storage', loadCart);
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

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-brand-background shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-text/10">
          <h2 className="text-2xl font-serif font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-text/5 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <p className="text-brand-text/60 text-center">
                Your cart is empty. Start shopping to add items!
              </p>
              <Link
                href="/shop"
                onClick={onClose}
                className="mt-4 btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cart.items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              if (!product) return null;

              return (
                <div
                  key={item.productId}
                  className="flex gap-4 pb-4 border-b border-brand-text/10"
                >
                  {/* Product Image */}
                  <div className="w-20 h-24 relative flex-shrink-0 rounded-sm overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-sm">
                      {product.name}
                    </h4>
                    <p className="text-xs text-brand-text/60 mb-2">
                      {product.volume}ml
                    </p>
                    <p className="text-brand-primary font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.productId, item.quantity - 1)
                        }
                        className="p-1 hover:bg-brand-text/10 rounded"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.productId, item.quantity + 1)
                        }
                        className="p-1 hover:bg-brand-text/10 rounded"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleRemove(item.productId)}
                        className="ml-auto p-1 hover:bg-red-50 rounded text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t border-brand-text/10 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-lg">
              <span className="font-serif font-bold">Subtotal</span>
              <span className="text-brand-primary font-bold">
                ₹{cart.total.toLocaleString()}
              </span>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout" onClick={onClose} className="block">
              <button className="w-full btn-primary">Proceed to Checkout</button>
            </Link>

            {/* Continue Shopping */}
            <button
              onClick={onClose}
              className="w-full btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
