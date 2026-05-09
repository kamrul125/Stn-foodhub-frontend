import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/shared/theme-toggle/theme-provider";// আপনার পাথ অনুযায়ী চেক করে নিন

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
        {/* ThemeProvider দিয়ে পুরো অ্যাপকে র‍্যাপ করা হয়েছে */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}