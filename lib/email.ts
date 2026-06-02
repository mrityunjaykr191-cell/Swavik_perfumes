import nodemailer from 'nodemailer';
import { Order } from './types';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendOrderConfirmation(order: Order): Promise<void> {
  const itemsHtml = order.items
    .map(
      (item) =>
        `<tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">Product ID: ${item.productId}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">x${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price.toLocaleString()}</td>
        </tr>`
    )
    .join('');

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Montserrat, sans-serif; color: #2D2D2D; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8B5E3C; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px 0; }
          .order-info { background-color: #FDFBF7; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0; }
          .total { font-size: 18px; font-weight: bold; color: #8B5E3C; margin-top: 20px; }
          table { width: 100%; }
          .btn { display: inline-block; padding: 10px 20px; background-color: #8B5E3C; color: white; text-decoration: none; border-radius: 3px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✦ Swavik Fabric Perfumes ✦</h1>
            <p>Thank You For Your Order</p>
          </div>
          
          <div class="content">
            <p>Dear ${order.customerName},</p>
            <p>We are delighted to confirm your order. Thank you for choosing Swavik Fabric Perfumes!</p>
            
            <div class="order-info">
              <h3 style="margin: 0 0 10px 0;">Order Details</h3>
              <p><strong>Order ID:</strong> ${order.id}</p>
              <p><strong>Order Date:</strong> ${new Date(order.createdAt).toLocaleDateString('en-IN')}</p>
              <p><strong>Status:</strong> ${order.status}</p>
            </div>
            
            <h3>Order Summary</h3>
            <table>
              <thead>
                <tr style="background-color: #FDFBF7;">
                  <th style="text-align: left; padding: 10px;">Product</th>
                  <th style="text-align: right; padding: 10px;">Qty</th>
                  <th style="text-align: right; padding: 10px;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            
            <div class="total">
              Total Amount: ₹${order.total.toLocaleString()}
            </div>
            
            <div class="order-info">
              <h3 style="margin: 0 0 10px 0;">Shipping Address</h3>
              <p>
                ${order.shippingAddress.address}<br>
                ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.pincode}
              </p>
            </div>
            
            <p>We will update you as soon as your order is dispatched. You can track your order using your Order ID.</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>Swavik Fabric Perfumes Team</strong></p>
          </div>
        </div>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'orders@svawikperfumes.com',
    to: order.customerEmail,
    subject: `Order Confirmation - ${order.id} | Swavik Fabric Perfumes`,
    html: htmlContent,
  });
}

export async function sendOrderStatusUpdate(
  order: Order,
  message: string
): Promise<void> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Montserrat, sans-serif; color: #2D2D2D; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8B5E3C; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px 0; }
          .status-box { background-color: #FDFBF7; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0; }
          .status-badge { display: inline-block; padding: 8px 12px; background-color: #8B5E3C; color: white; border-radius: 3px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✦ Swavik Fabric Perfumes ✦</h1>
            <p>Order Status Update</p>
          </div>
          
          <div class="content">
            <p>Dear ${order.customerName},</p>
            
            <div class="status-box">
              <h3 style="margin: 0 0 10px 0;">Order ID: ${order.id}</h3>
              <p><strong>Current Status:</strong> <span class="status-badge">${order.status.toUpperCase()}</span></p>
              <p>${message}</p>
            </div>
            
            <p>Thank you for your patience. We appreciate your business!</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>Swavik Fabric Perfumes Team</strong></p>
          </div>
        </div>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'orders@svawikperfumes.com',
    to: order.customerEmail,
    subject: `Order Update - ${order.id} | Swavik Fabric Perfumes`,
    html: htmlContent,
  });
}
