import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export interface PaymentOrder {
  amount: number;
  currency: string;
  receipt: string;
  customer_notify: number;
  notes?: Record<string, string>;
}

export async function createPaymentOrder(
  amount: number,
  orderId: string
): Promise<any> {
  const options: PaymentOrder = {
    amount: Math.round(amount * 100),
    currency: 'INR',
    receipt: orderId,
    customer_notify: 1,
    notes: {
      order_id: orderId,
    },
  };

  const order = await razorpay.orders.create(options);
  return order;
}

export async function verifyPayment(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string,
  secretKey: string
): Promise<boolean> {
  const crypto = require('crypto');
  const shasum = crypto.createHmac('sha256', secretKey);
  shasum.update(`${razorpayOrderId}|${razorpayPaymentId}`);
  const digest = shasum.digest('hex');

  return digest === razorpaySignature;
}

export function generateOrderId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `ORD-${timestamp}-${random}`;
}
