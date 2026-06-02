# Deployment Checklist for Swavik Fabric Perfumes

## Pre-Deployment Setup


### Local Testing

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and verify all pages load
- [ ] Test on desktop (1440px) and mobile (375px) viewports
- [ ] Test all interactive features:
  - [ ] Add to cart functionality
  - [ ] Cart drawer opening/closing
  - [ ] Product filtering
  - [ ] Form submission
  - [ ] Navigation between pages

### Code Quality

- [ ] Run `npm run lint` with no errors
- [ ] Run `npm run build` successfully
- [ ] Check for console errors/warnings
- [ ] Verify all TypeScript types are correct

### Environment Configuration- [ ] Create `.env.local` file
- [ ] Set all environment variables:
  - [ ] `SMTP_HOST`
  - [ ] `SMTP_PORT`
  - [ ] `SMTP_USER`
  - [ ] `SMTP_PASSWORD`
  - [ ] `SMTP_FROM`
  - [ ] `RAZORPAY_KEY_ID`
  - [ ] `RAZORPAY_KEY_SECRET`
  - [ ] `NEXT_PUBLIC_APP_URL`

## Vercel Deployment


### Project Setup

- [ ] Create GitHub repository
- [ ] Push all code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Create new Vercel project

### Environment Variables

- [ ] Add all environment variables to Vercel project settings
- [ ] Verify variables are set for production environment

### Domain Configuration

- [ ] Purchase custom domain (e.g., svawikperfumes.com)
- [ ] Add domain to Vercel project
- [ ] Update DNS records (if needed)
- [ ] Verify domain is working

### Deployment

- [ ] Trigger production deployment
- [ ] Verify site loads on custom domain
- [ ] Check all pages are accessible
- [ ] Verify SSL certificate is installed

## Post-Deployment Testing


### Functionality

- [ ] Test all pages on production URL
- [ ] Test add to cart on production
- [ ] Test checkout form on production
- [ ] Test contact form on production
- [ ] Test mobile experience on production

### Performance

- [ ] Check Lighthouse scores (target: 90+)
- [ ] Verify images load quickly
- [ ] Check Core Web Vitals
- [ ] Test on slow 4G network

### SEO

- [ ] Verify meta tags in page source
- [ ] Check Open Graph tags
- [ ] Verify robots.txt exists
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools

### Security

- [ ] Verify SSL certificate is valid
- [ ] Check for security headers
- [ ] Verify no sensitive data in frontend
- [ ] Check .env file is not exposed

## Future Tasks (Not Required for Initial Launch)


- [ ] Set up database (MongoDB/PostgreSQL)
- [ ] Implement real Razorpay integration
- [ ] Create admin dashboard
- [ ] Set up order tracking
- [ ] Implement customer accounts
- [ ] Add review system
- [ ] Set up analytics (GA4)
- [ ] Create blog/content section
- [ ] Set up automated backups
- [ ] Create monitoring/alerting

## Useful Commands


```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Check TypeScript
npx tsc --noEmit
```


## Contact & Support


- Email: hello@svawikperfumes.com
- Phone: +91 98765 43210
- Support Hours: Mon-Fri 9AM-6PM IST, Sat 10AM-4PM IST
