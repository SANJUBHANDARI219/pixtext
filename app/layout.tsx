import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PixText',
  description: 'Convert text to compact PNG images for AI models',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
