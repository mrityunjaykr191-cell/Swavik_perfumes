'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { addToCart, getCartFromStorage, saveCartToStorage } from '@/lib/cart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);

    const cart = getCartFromStorage();
    const updatedCart = addToCart(cart, product.id, product.price, 1);
    saveCartToStorage(updatedCart);

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setIsAdding(false);
    }, 2000);

    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-sm mb-4 aspect-[3/4] bg-brand-background/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />

          {/* Overlay with Add to Cart */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center p-4">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 btn-secondary flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              {isAdded ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-sm text-brand-text/60 uppercase tracking-wider">
            {product.collection.replace(/([A-Z])/g, ' $1').trim()}
          </p>
          <h3 className="text-lg font-serif font-bold text-brand-text group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-brand-text/70 line-clamp-2">
            {product.description}
          </p>

          {/* Price and Volume */}
          <div className="flex items-baseline justify-between pt-2">
            <span className="text-xl font-serif font-bold text-brand-primary">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-brand-text/50">{product.volume}ml</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
