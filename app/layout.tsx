import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ROUTE_LIST } from "@/public/util/constant";
import Link from "next/link";
import "./globals.css";

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
          {ROUTE_LIST.map(({ title, path }, i) => (
            <Link className="mr-10 text-black" href={path} key={i}>
              {title}
            </Link>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
