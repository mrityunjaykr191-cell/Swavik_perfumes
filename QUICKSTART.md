# Quick Start Guide - Swavik Fabric Perfumes

Get your luxury e-commerce store up and running in minutes.

## 🚀 First Time Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
- SMTP credentials (for email notifications)
- Razorpay API keys (for payments)

### 3. Start Development Server
```bash
npm run dev
```

Visit **http://localhost:3000** in your browser.

## 📁 Important Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page - edit hero section here |
| `lib/product-data.ts` | Product catalog - update products here |
| `tailwind.config.ts` | Brand colors and fonts |
| `.env.local` | Your secret keys (email, payments) |

## 🎨 Customization (Common Tasks)

### Change Brand Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  brand: {
    primary: '#8B5E3C',      // Change this color
    secondary: '#D4AF37',    // And this
    background: '#FDFBF7',
    text: '#2D2D2D',
  },
}
```

### Update Products
Edit `lib/product-data.ts` and replace the `products` array with your own product data.

### Replace Product Images
Update image URLs in product data or change the `image` field to point to your image URLs.

### Edit Company Information
- **Email**: Edit `lib/constants.ts` and footer component
- **Phone**: Edit `lib/constants.ts` and footer
- **Address**: Edit `lib/constants.ts` and footer

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Option 1: Direct Deploy (Fastest)
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy

## ✅ Pre-Launch Checklist

- [ ] Update all product information
- [ ] Replace product images
- [ ] Set correct company information
- [ ] Configure email (SMTP)
- [ ] Configure payment (Razorpay)
- [ ] Update brand colors (optional)
- [ ] Test checkout flow
- [ ] Test on mobile
- [ ] Deploy to Vercel
- [ ] Set up custom domain

## 🔑 Required Environment Variables

```env
# Email (Choose one: Gmail, SendGrid, AWS SES, etc.)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=orders@your-domain.com

# Payment (Get from Razorpay dashboard)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# Optional
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📧 Email Setup Guide

### Using Gmail
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Create an app password
3. Use this password in `.env.local`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
SMTP_FROM=your-email@gmail.com
```

### Using SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Use credentials:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
SMTP_FROM=noreply@your-domain.com
```

## 💳 Payment Setup (Razorpay)

1. Sign up at [razorpay.com](https://razorpay.com)
2. Get API keys from dashboard
3. Add to `.env.local`:

```env
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
```

## 🧪 Testing Locally

```bash
# Start dev server
npm run dev

# Open in browser
# http://localhost:3000

# Test features:
# - Add product to cart
# - Open cart drawer
# - Go through checkout
# - View order confirmation
```

## 📱 Mobile Testing

```bash
# Restart dev server to see any CSS changes
# Visit http://localhost:3000 on your phone
# Or use Chrome DevTools (F12) and toggle device view
```

## 🛠 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Images not loading
- Make sure you have internet connection
- Check image URLs in `lib/product-data.ts`
- Images are currently from Unsplash (placeholder)

### Build fails
```bash
npm run lint      # Check for errors
npx tsc --noEmit # Check TypeScript
```

## 📚 Full Documentation

See **README.md** for complete documentation.
See **DEPLOYMENT.md** for detailed deployment guide.

## 🆘 Getting Help

- Check the README.md file
- Review comments in component files
- Look at similar patterns in existing code
- Run `npm run lint` to catch errors

## 🚀 Next: Deploy to Vercel

Once you're happy with local changes:

```bash
git add .
git commit -m "Swavik Fabric Perfumes setup"
git push origin main
```

Then connect to Vercel for automatic deployments.

---

**Happy selling! 🎉**

Built with Next.js 15, TypeScript, Tailwind CSS, and ❤️
