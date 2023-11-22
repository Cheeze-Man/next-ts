import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheeze Store",
  description: "Store by CheezeMan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white p-5">
          <Link className="mr-10 text-black" href="/">
            Home
          </Link>
          <Link className="mr-10 text-black" href="/list">
            List
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
