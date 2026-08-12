import Navbar from "@/components/Navbar";
import "./globals.css";
import MotionProvider from "@/providers/MotionProvider";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MotionProvider>{children}</MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
