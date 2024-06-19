"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const [top, setTop] = React.useState(true);
  const pathName = usePathname();

  React.useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 80 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]); 

  return (
    <nav
      className={`py-6 z-10 transition-all bg-white top-0 sticky ${
        !top && `shadow`
      }`}
    >
      <div className="flex justify-between max-w-[90%] mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold md:text-3xl md:font-semibold text-[var(--blue-600)]"
        >
          CBPay.
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-lg font-medium">
            <li
              className={`${
                pathName === "/features"
                  ? " bg-[var(--gray-200)]"
                  : "hover:bg-[var(--gray-200)]"
              } px-3 py-2 rounded-md`}
            >
              <Link href="features" className="text-[#1A191E]">
                Featues
              </Link>
            </li>
            <li
              className={`${
                pathName === "/compare"
                  ? " bg-[var(--gray-200)]"
                  : "hover:bg-[var(--gray-200)]"
              } px-3 py-2 rounded-md`}
            >
              <Link
                href="compare"
                className="text-[#1A191E] flex gap-1 items-center"
              >
                <div>Compare</div>
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3334 15L8.09036 10.757L9.50536 9.34302L12.3334 12.172L15.1614 9.34302L16.5764 10.757L12.3334 15Z"
                      fill="#1A191E"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li
              className={`${
                pathName === "/support"
                  ? "bg-[var(--gray-200)] "
                  : "hover:bg-[var(--gray-200)]"
              } px-3 py-2 rounded-md`}
            >
              <Link href="support" className="text-[#1A191E]">
                Support
              </Link>
            </li>
            <li
              className={`${
                pathName === "/blog"
                  ? " bg-[var(--gray-200)]"
                  : "hover:bg-[var(--gray-200)]"
              } px-3 py-2 rounded-md`}
            >
              <Link
                href="blog"
                className="text-[#1A191E] flex gap-1 items-center"
              >
                <div>Blog</div>
                <span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3334 15L8.09036 10.757L9.50536 9.34302L12.3334 12.172L15.1614 9.34302L16.5764 10.757L12.3334 15Z"
                      fill="#1A191E"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-x-8 place-content-center hidden md:block">
          <button className="font-bold text-[var(--blue-600)] text-xl p-2">
            Login
          </button>
          <button className="bg-[var(--blue-600)] text-white text-base font-normal px-4 py-3 rounded-md">
            Open Account
          </button>
        </div>
        {/* Mobile level */}
        <div className=" md:hidden">
          <HiOutlineMenuAlt3 className="size-6 text-gray-700" />
        </div>
      </div>
    </nav>
  );
}
