import { Inter } from "next/font/google";
import "./globals.css";
// import type { Metadata } from "next/";
import footer from './';
import navbar from './../app/(pages)/ui/navbar';
// import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "NAS Infotech Pvt. Ltd.",
  description: "Welcome to the NAS Infotech Pvt. Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <navbar />
        {children}
        <footer />
        </body>
    </html>
  );
}
