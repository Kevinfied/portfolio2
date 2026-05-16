// @ts-nocheck
import localFont from "next/font/local";
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

const cause = localFont({
  src: "../public/fonts/Cause/Cause-VariableFont_wght.ttf",
  variable: "--font-hero",
  display: "swap",
  weight: "100 900",
});

export const metadata = {
  title: "Kevin Xu",
  description: "Minimal developer portfolio template.",
  icons: {
    icon: "/mudkipTBG.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} ${cause.variable}`}
      data-theme="dark"
    >
      <body>
        <ClickSound />
        {children}
      </body>
    </html>
  );
}
