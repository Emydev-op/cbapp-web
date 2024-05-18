import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dM_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "CBPay",
  description: "Manage your finances securely with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={dM_Sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
