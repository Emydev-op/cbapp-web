import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import RootLayout from "@/components/RootLayout";
const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });

export const metadata = {
  title: "CBPay",
  description: "Manage your finances securely with ease.",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.png" sizes="any" />
      <body className={dM_Sans.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
