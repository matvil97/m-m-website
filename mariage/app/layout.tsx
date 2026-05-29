import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Italianno } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
});

const signature = Italianno({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Notre Mariage",
  description: "Invitation de mariage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${cormorant.variable} ${signature.variable}`}>
        {children}
      </body>
    </html>
  );
}