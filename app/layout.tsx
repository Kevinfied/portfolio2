// @ts-nocheck
import { Fraunces, Space_Grotesk } from "next/font/google";
import ClickSound from "../components/ClickSound";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Kevin Xu",
  description: "Minimal developer portfolio template.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable}`}
      data-theme="dark"
    >
      <body>
        <ClickSound />
        {children}
      </body>
    </html>
  );
}
