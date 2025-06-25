import { ReactNode } from "react";
import "./globals.css";
import { Layout } from "./components/Layout";

export const metadata = {
  title: "Coffee Store",
  description: "An e-commerce store for coffee and baked goods",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout activeTab="products">{children}</Layout>
      </body>
    </html>
  );
}
