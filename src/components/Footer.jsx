import Link from "next/link";
import React from "react";

export default function Footer() {
  const footerData = [
    ["About", ["Features", "Pricing", "Support"]],
    ["About", ["Products", "Technology", "Crypto"]],
    ["About", ["Styleguide", "Licensing", "Changelog"]],
    ["Social Media", ["Twitter", "Facebook", "Instagram"]],
  ];
  return (
    <>
      <footer className="p-4 bg-white sm:p-6 border-t-2">
        <div className="mx-auto pt-16 sm:max-w-[85%]">
          <div className="md:flex md:justify-between mb-4 md:mb-20">
            <div className="flex-1 mb-10 md:mb-6">
              <Link
                href="/"
                className="text-3xl font-semibold text-[var(--blue-600)]"
              >
                CBPay.
              </Link>
            </div>
            <div className="w-[70%]">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
                <div className="flex flex-col mb-6 md:mb-1 space-y-8">
                  <h2 className="text-lg font-medium text-[#1A191E]">About</h2>
                  <ul className="space-y-4 font-medium text-base text-gray-500">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Support</li>
                  </ul>
                </div>

                <div className="flex flex-col mb-6 md:mb-1 space-y-8">
                  <h2 className="text-lg font-medium text-[#1A191E]">Blog</h2>
                  <ul className="space-y-4 font-medium text-base text-gray-500">
                    <li>Products</li>
                    <li>Technlogy</li>
                    <li>Crypto</li>
                  </ul>
                </div>

                <div className="flex flex-col mb-6 md:mb-1 space-y-8">
                  <h2 className="text-lg font-medium text-[#1A191E]">
                    Webflow
                  </h2>
                  <ul className="space-y-4 font-medium text-base text-gray-500">
                    <li>Styleguide</li>
                    <li>Licensing</li>
                    <li>Changelog</li>
                  </ul>
                </div>

                <div className="flex flex-col mb-6 md:mb-1 space-y-8">
                  <h2 className="text-lg font-medium text-[#1A191E]">
                    Social Media
                  </h2>
                  <ul className="space-y-4 font-medium text-base text-gray-500">
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <hr className="bg-[var(--gray-100)] border mb-4" />
          <div className="md:flex md:justify-between  text-sm font-medium text-gray-500 mb-4 ">
            <p className="mb-4 md:mb-0">
              &copy; Made by{" "}
              <span className="font-bold text-[var(--blue-600)]">
                Osegbo Chukwuemeka
              </span>{" "}
              - Powered by{" "}
              <span className="font-bold text-[var(--blue-600)]">Webflow</span>
            </p>
            <p>All right reserved - 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
}
