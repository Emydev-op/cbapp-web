"use client";
import Hero from "@/components/Feature/Hero";
import AOS from "aos";
import React, { useEffect } from "react";

export default function FeaturePage() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <main className="z-[5]">
      {/* Hero */}
      <Hero />
      <div className="pt-32 bg-white">
        <div className="md:flex md:justify-between max-w-screen-lg  mx-auto">
          <div className="md:w-[52%] w-full px-6 md:px-0 grid place-content-center">
            <h5 className="text-xl leading-[120%] mb-2">Transactions</h5>
            <h2 className="text-5xl md:text-6xl mb-4">
              Send & receive money{" "}
              <span className="bg-gradient-to-r blur-xs from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
                instantly
              </span>
            </h2>
            <p className="text-lg leading-[180%] mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ul className="grid text-base gap-3">
              <li
                data-aos="fade-right"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Malesuada Ipsum
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="50"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Vestibulum
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="100"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Parturient Lorem
              </li>
            </ul>
          </div>
          <div className="md:mt-0 md:w-[25%]">
            <img src={"/phone/phone1.svg"} alt="cbpay-card" className="" />
          </div>
        </div>
      </div>
      <div className="pt-32 bg-white">
        <div className="md:flex md:justify-between max-w-screen-lg  mx-auto">
          <div className="md:w-[52%] w-full px-6 md:px-0 grid place-content-center">
            <h5 className="text-xl leading-[120%] mb-2">Cards</h5>
            <h2 className="text-5xl md:text-6xl mb-4">
              Manage your{" "}
              <span className="bg-gradient-to-r blur-xs from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
                cards
              </span>
            </h2>
            <p className="text-lg leading-[180%] mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ul className="grid text-base gap-3">
              <li
                data-aos="fade-right"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Malesuada Ipsum
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="50"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Vestibulum
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="100"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Parturient Lorem
              </li>
            </ul>
          </div>
          <div className="md:mt-0 md:w-[25%]">
            <img src={"/phone/phone2.svg"} alt="cbpay-card" className="" />
          </div>
        </div>
      </div>
      <div className="pt-32 bg-white">
        <div className="md:flex md:justify-between max-w-screen-lg  mx-auto">
          <div className="md:w-[52%] w-full px-6 md:px-0 grid place-content-center">
            <h5 className="text-xl leading-[120%] mb-2">Advanced Statistics</h5>
            <h2 className="text-5xl md:text-6xl mb-4">
              Keep control over your{" "}
              <span className="bg-gradient-to-r blur-xs from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
                money
              </span>
            </h2>
            <p className="text-lg leading-[180%] mb-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ul className="grid text-base gap-3">
              <li
                data-aos="fade-right"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Malesuada Ipsum
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="50"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Vestibulum
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="100"
                className="inline-flex items-center gap-4"
              >
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.643799"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.0227L18.3936 9.12793L19.4548 10.1884L11.4996 18.1437L6.72656 13.3707L7.78706 12.3102L11.4996 16.0227Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Parturient Lorem
              </li>
            </ul>
          </div>
          <div className="md:mt-0 md:w-[25%]">
            <img src={"/phone/phone4.svg"} alt="cbpay-card" className="" />
          </div>
        </div>
      </div>
    </main>
  );
}
