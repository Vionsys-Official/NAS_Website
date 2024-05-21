
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import { GeistSans } from "geist/font/sans";
export const metadata = {
  title: "NAS Infotech Pvt. Ltd.",
  description: "Welcome to the NAS Infotech Pvt. Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
