import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'https://swavik-perfumes.vercel.app'
  ),
  title: 'Swavik Fabric Perfumes | Luxury Fragrance from Kannauj',
  description:
    'Premium fabric perfumes and luxury fragrances from the heart of Kannauj, India. Explore our collection of artisanal, heritage-crafted scents.',
  keywords:
    'Kannauj perfumes, luxury fragrance, fabric perfume, premium attar, natural perfumes, Indian heritage fragrances',
  openGraph: {
    title: 'Swavik Fabric Perfumes | Luxury Fragrance from Kannauj',
    description:
      'Premium fabric perfumes and luxury fragrances from the heart of Kannauj, India.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swavik Fabric Perfumes',
    description: 'Luxury fragrance from Kannauj',
  },
  alternates: {
    canonical: 'https://svawikperfumes.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8B5E3C" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Swavik Fabric Perfumes',
            url: 'https://svawikperfumes.com',
            logo: 'https://svawikperfumes.com/logo.png',
            description:
              'Premium fabric perfumes and luxury fragrances from Kannauj, India',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              email: 'support@svawikperfumes.com',
            },
          })}
        </script>
      </head>
      <body className="bg-brand-background text-brand-text">
        {children}
      </body>
    </html>
  );
}
