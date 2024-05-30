
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";
import Footer from "./ui/footer/Footer";
import { GeistSans } from "geist/font/sans";
export const metadata = {
  title: "NAS Infotech Pvt. Ltd.",
  description: "NAS Infotech delivers innovative IT solutions including software development, IT consulting, cloud services and cybersecurity. Our expert team ensures seamless technology integration and enhances business productivity. Discover how NAS Infotech can support your growth.",
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
