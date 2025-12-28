import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUHAMMED SAHAL TK | Photographer - Videographer - Editor",
  description: "Portfolio of Muhammed Sahal TK, a professional photographer, videographer, and editor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
