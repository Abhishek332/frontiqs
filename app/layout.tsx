import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FrontIQs - Next-Generation Frontend Assistant for React Projects',
  description:
    'A next-generation frontend assistant for React projects that enhances code quality, offers real-time suggestions, and provides valuable insights to help you build better, more efficient applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
