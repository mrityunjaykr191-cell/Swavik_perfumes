# Swavik Fabric Perfumes – Luxury E-Commerce Platform

A production-ready luxury fragrance e-commerce website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

Swavik Fabric Perfumes is a premium luxury e-commerce store showcasing artisanal fabric fragrances from Kannauj, India. The platform emphasizes heritage, craftsmanship, and modern luxury with a beautiful, responsive design optimized for desktop and mobile experiences.

## Features

### Core Functionality

- **Luxury Showroom Experience** – Full-screen hero, parallax sections, premium typography
- **Product Catalog** – Advanced filtering, search, collection browsing
- **Detailed Product Pages** – Image galleries, scent notes, stories, FAQs, related products
- **Shopping Cart** – Client-side cart with localStorage persistence
- **Guest Checkout** – Simple, no-account-required purchasing flow
- **Email Notifications** – Order confirmations via Nodemailer
- **Payment Integration Ready** – Razorpay integration structure (COD, UPI, Card)
- **Fully Responsive** – Mobile-first design with graceful desktop optimizations
- **Accessible** – WCAG 2.1 compliant, keyboard navigation, proper ARIA labels
- **Smooth Animations** – Framer Motion for elegant, non-intrusive transitions
- **SEO Optimized** – Meta tags, Open Graph, product schema, canonical URLs

### Pages Included

- **Home** – Hero, trust strip, brand story, collections, best sellers, testimonials, newsletter
- **Shop** – Filterable product grid with search and price filtering
- **Product Detail** – Full product information with gallery, notes, story, benefits, FAQs
- **Cart** – Full-page cart view with quantity controls
- **Checkout** – Guest-only checkout form with shipping and payment options
- **Order Confirmation** – Success page with order details
- **Collections** – Curated fragrance collections with product showcases
- **About** – Brand story, values, and craftsmanship details
- **Contact** – Contact form and business information

## Tech Stack

### Frontend

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Image Optimization:** next/image with WebP support

### Backend & Services

- **Validation:** React Hook Form + Zod
- **Email:** Nodemailer with SMTP
- **Payments:** Razorpay (ready for integration)
- **Storage:** Client-side localStorage for cart
- **API:** Next.js API routes

### Deployment

- **Platform:** Vercel
- **Database Ready:** Structured for MongoDB, PostgreSQL, or Firebase
- **Environment:** .env.local for sensitive configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone or navigate to the project:**

   ```bash
   cd d:/perfoom/Swavik-perfumes_v2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
swavik-perfumes_v2/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   ├── shop/
│   │   └── page.tsx              # Shop/catalog page
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx          # Product detail page
│   ├── cart/
│   │   └── page.tsx              # Cart page
│   ├── checkout/
│   │   └── page.tsx              # Checkout page
│   ├── order-confirmation/
│   │   └── page.tsx              # Order success page
│   ├── collections/
│   │   └── page.tsx              # Collections showcase
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   └── api/
│       └── orders/
│           └── route.ts          # Order creation API
├── components/
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Footer with newsletter
│   ├── product-card.tsx          # Reusable product card
│   └── cart-drawer.tsx           # Side cart drawer
├── lib/
│   ├── types.ts                  # TypeScript interfaces
│   ├── product-data.ts           # Product catalog & sample data
│   ├── cart.ts                   # Cart utilities
│   ├── email.ts                  # Email templates & sending
│   ├── payment.ts                # Razorpay integration
│ ├── tailwind.config.ts          # Tailwind configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
├── vercel.json                   # Vercel deployment config
└── .env.example                  # Environment template
```

## Key Features Explained


### Client-Side Cart

- Uses localStorage to persist cart data
- Automatic sync across tabs/windows
- No backend dependency required
- Ready to integrate with backend when needed

### Email System

- Uses Nodemailer for transactional emails
- Order confirmation templates included
- Status update email capability
- Easy to configure with any SMTP service

### Payment Integration

- Razorpay payment gateway ready
- COD (Cash on Delivery) option
- UPI integration ready
- Card payment support built-in

### Product Management

- Sample product data included
- Easy to replace with CMS or database
- Rich product information structure
- SEO-optimized product pages

## Customization


### Colors

Edit `tailwind.config.ts` to change the brand colors:
```ts
colors: {
  brand: {
    primary: '#8B5E3C',      // Sandalwood Brown
    secondary: '#D4AF37',    // Metallic Gold
    background: '#FDFBF7',   // Cream Parchment
    text: '#2D2D2D',         // Charcoal
  },
}
```


### Fonts

Change fonts in `tailwind.config.ts` and `app/globals.css`:
- Headings: Playfair Display (serif)
- Body: Montserrat (sans-serif)

### Products

Update product data in `lib/product-data.ts` or connect to a database.

## Production Deployment


### Deploy to Vercel


1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```


2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel settings

3. **Environment Variables on Vercel:**

   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `SMTP_FROM`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`

## Performance Optimizations


- ✅ Next.js Image optimization with WebP
- ✅ Dynamic imports for code splitting
- ✅ Lazy loading for below-the-fold content
- ✅ Optimized font loading with system fonts
- ✅ Minimal JavaScript for faster page loads
- ✅ CSS minification and tree-shaking
- ✅ SEO meta tags and structured data

## SEO


The site includes:
- Meta tags for all pages
- Open Graph tags for social sharing
- Product schema markup
- Canonical URLs
- Mobile-first responsive design
- Fast Core Web Vitals

## Accessibility


- Semantic HTML structure
- Keyboard navigation support
- ARIA labels on interactive elements
- Color contrast compliance
- Form validation and error handling

## Future Enhancements


- [ ] Admin dashboard for inventory management
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real Razorpay integration
- [ ] Order tracking page
- [ ] Customer account system
- [ ] Review and rating system
- [ ] Wishlist functionality
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Blog/content management

## Support & Maintenance


For issues or questions:
- Email: hello@svawikperfumes.com
- Phone: +91 98765 43210

## License


This project is proprietary and confidential.

## Notes


- All images are placeholder URLs from Unsplash. Replace with your own product images in production.
- Email configuration requires SMTP credentials. Gmail, SendGrid, AWS SES recommended.
- Razorpay integration requires API keys from Razorpay dashboard.
- All component and utility code is clean, well-documented, and production-ready.

---

Built with ❤️ for luxury fragrance enthusiasts.
