import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmation } from '@/lib/email';
import { CartItem, CheckoutFormData, Order } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      items,
      total,
      customerName,
      customerEmail,
      shippingAddress,
    } = body;

    // Validate required fields
    if (
      !items ||
      !total ||
      !customerName ||
      !customerEmail ||
      !shippingAddress
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    // Create order object
    const order: Order = {
      id: orderId,
      items: items as CartItem[],
      total,
      customerEmail,
      customerName,
      shippingAddress: shippingAddress as CheckoutFormData,
      status: 'pending',
      createdAt: new Date(),
    };

    // Send confirmation email
    try {
      await sendOrderConfirmation(order);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails
    }

    // In production, you would:
    // 1. Save order to database
    // 2. Create payment intent with Razorpay if not COD
    // 3. Process payment
    // 4. Update inventory
    // 5. Send confirmation email

    return NextResponse.json(
      {
        success: true,
        orderId,
        message: 'Order created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
