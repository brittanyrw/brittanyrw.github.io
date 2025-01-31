import type { Metadata } from "next";
import "./globals.css";
import './lib/fontawesome';
import Footer from './components/Footer';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: "Musical Web Dev",
  description: "Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} ${inconsolata.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}