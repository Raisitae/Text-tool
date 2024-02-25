import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ProviderTextarea } from "./context/TextareaContext";
import { ProviderFontStyle } from "./context/FontContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick HTML formatting",
  description: "Quick HTML formatting tool for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderTextarea>
      <ProviderFontStyle>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ProviderFontStyle>
    </ProviderTextarea>
  );
}
