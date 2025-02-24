import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",    //This is the website name
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}  //this is used for to use FONTS in website AND the text :HI THERE Will show at all the routes
      >
        <div className="p-4 border-b">
          Medium Website

        </div>
        {children} 
      </body>
      
    </html>
  );
}
//IT IS THE LAYOUT PAGE MEANS JO BHI CODE HOGA SAB ME SHOW HOGA