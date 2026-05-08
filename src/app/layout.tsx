import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodHub Pro - Best Food Delivery",
  description: "Order your favorite food online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* এখানে ট্যাগগুলো থাকা মাস্ট, নয়তো রানটাইম এরর দিবে */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}