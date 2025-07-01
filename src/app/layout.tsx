import "../styles/globals.css";
import "../styles/fonts.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#111827" />
      </head>

      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
