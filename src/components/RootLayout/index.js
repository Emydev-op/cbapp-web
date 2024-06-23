"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function RootLayout({ children }) {
  const pathName = usePathname();

  if (pathName === "/ibank") {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
