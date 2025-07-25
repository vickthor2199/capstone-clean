

import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from "../components/Footer";
import "./globals.css";
import Providers from "./providers"; // ✅ NO curly braces

export const metadata = {
  title: "CNG Store",
  description: "Modern gadgets & streetwear store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <ToastContainer position="top-right" autoClose={2000} />
      </body>
    </html>
  );
}
