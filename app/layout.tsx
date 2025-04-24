import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berlinwork - Tu identidad, tu trabajo",
  description: "Indumentaria empresarial personalizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${raleway.className} antialiased`} lang="es-ar">
      <body>{children}</body>
    </html>
  );
}
