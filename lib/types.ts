export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: 'signature' | 'midnight' | 'desert' | 'juicy' | 'shower';
  price: number;
  volume: number;
  description: string;
  story: string;
  image: string;
  images: string[];
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  benefits: string[];
  usageGuide: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedProducts: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'upi' | 'card' | 'cod';
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerEmail: string;
  customerName: string;
  shippingAddress: CheckoutFormData;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}
