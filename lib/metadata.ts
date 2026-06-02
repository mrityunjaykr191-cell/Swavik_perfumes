import { Metadata } from 'next';

export function generateProductMetadata(
  productName: string,
  description: string,
  image: string
): Metadata {
  return {
    title: `${productName} | Swavik Fabric Perfumes`,
    description: description,
    openGraph: {
      title: productName,
      description: description,
      type: 'website',
      images: [
        {
          url: image,
          width: 1000,
          height: 1000,
        },
      ],
    },
    alternates: {
      canonical: `https://svawikperfumes.com/product/${productName.toLowerCase().replace(/\s+/g, '-')}`,
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: `${title} | Swavik Fabric Perfumes`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    },
  };
}
