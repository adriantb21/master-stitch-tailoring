import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master Stitch Tailoring & Alterations | Cubao, Quezon City',
  description: 'Expert tailoring, alterations, and clothing repairs in Cubao, Quezon City. Quality craftsmanship with 20+ years experience. Custom suits, dress alterations, zipper repairs, and more.',
  keywords: 'tailoring Quezon City, alterations Cubao, clothing repairs, suit tailoring, dress alterations, zipper replacement, master tailor, Quezon City tailoring',
  openGraph: {
    title: 'Master Stitch Tailoring & Alterations',
    description: 'Expert tailoring and clothing repairs in Cubao, Quezon City',
    url: 'https://masterstitch.com',
    siteName: 'Master Stitch Tailoring',
    images: [
      {
        url: 'https://masterstitch.com/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Stitch Tailoring & Alterations',
    description: 'Expert tailoring and clothing repairs in Cubao, Quezon City',
    images: ['https://masterstitch.com/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://masterstitch.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};