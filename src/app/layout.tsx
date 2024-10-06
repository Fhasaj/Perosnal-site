import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "FH Design - Software, Web Design, and More",
  description: "Your friendly neighborhood design studio where we make your dreams come true. Specialising in web design, software, and more. Helping companies both large and small reach their full potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}