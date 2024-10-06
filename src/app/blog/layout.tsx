
import type { Metadata } from "next";
import "../globals.css";

import Navigation from "@/app/components/navigationBlog";
import Footer from "@/app/components/footer";


export const metadata: Metadata = {
  title: "FH Design - Blog",
  description: "A blog about web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body className={` antialiased`}>
        <Navigation />
        <div className="bg-backgroundColour">
        {children}
        </div>
        <Footer />
      </body>
    </html>
    
    </>
  );
}