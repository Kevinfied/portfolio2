// @ts-nocheck
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Xu",
  description: "Minimal developer portfolio template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
