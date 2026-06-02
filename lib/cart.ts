import { CartItem, CartState } from './types';

const CART_STORAGE_KEY = 'swavik_cart';

export function getCartFromStorage(): CartState {
  if (typeof window === 'undefined') {
    return { items: [], total: 0 };
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { items: [], total: 0 };
  } catch {
    return { items: [], total: 0 };
  }
}

export function saveCartToStorage(cart: CartState): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    console.error('Failed to save cart to localStorage');
  }
}

export function addToCart(
  cart: CartState,
  productId: string,
  price: number,
  quantity: number = 1
): CartState {
  const existingItem = cart.items.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity, price });
  }

  cart.total = calculateTotal(cart.items);
  return cart;
}

export function removeFromCart(
  cart: CartState,
  productId: string
): CartState {
  cart.items = cart.items.filter((item) => item.productId !== productId);
  cart.total = calculateTotal(cart.items);
  return cart;
}

export function updateQuantity(
  cart: CartState,
  productId: string,
  quantity: number
): CartState {
  const item = cart.items.find((item) => item.productId === productId);

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(cart, productId);
    }
    item.quantity = quantity;
  }

  cart.total = calculateTotal(cart.items);
  return cart;
}

export function clearCart(): CartState {
  return { items: [], total: 0 };
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
