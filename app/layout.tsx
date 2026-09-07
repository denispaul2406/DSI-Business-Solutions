import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'DSI Business Solutions | Ansari & Co. (Auditors & Tax Consultants) & DSI Estates (Builders & Developers)',
  description:
    'Ansari & Co. and DSI Estates led by Amjad Ansari in Bangalore. Income Tax, GST, ROC statutory compliance, investments planning, and residential & commercial building development.',
  openGraph: {
    title: 'DSI Business Solutions | Ansari & Co. & DSI Estates (Amjad Ansari, Bangalore)',
    description:
      'Professional taxation, audit compliance, investments planning, and building development services in Bangalore, India.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSI Business Solutions | Ansari & Co. & DSI Estates',
    description:
      'Professional taxation, audit compliance, investments planning, and building development services in Bangalore, India.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
