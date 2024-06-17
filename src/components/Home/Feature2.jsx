"use client";
import React from "react";

export default function Feature2() {
  const payment = [
    { name: "Apple", brand: "Macbook", price: "₦900" },
    { name: "Xender", brand: "Sharing", price: "₦340" },
    { name: "Dropbox", brand: "Cloud", price: "₦799" },
    { name: "Paypal", brand: "Shopping", price: "₦1200" },
  ];
  return (
    <div className="bg-[var(--blue-500)] flex justify-center z-[-4]">
      <div className="sm:max-md:px-8 pt-28 mb-16 md:mb-24 md:flex md:justify-between md:max-w-screen-lg">
        <div className="md:w-[54%] w-full space-y-10 mx-6 md:mx-0 ">
          <h2 className="font-md text-5xl md:text-6xl">
            Send & receive money{" "}
            <span className="bg-gradient-to-r blur-xs from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
              instantly
            </span>
          </h2>
          <p className="font-md text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <ul className="flex flex-col gap-3">
            <li
              data-aos="fade-right"
              className="flex gap-4 text-base items-center"
            >
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.723633"
                  width="26"
                  height="26"
                  rx="13"
                  fill="#0054B2"
                />
                <path
                  d="M11.4996 16.1025L18.3936 9.20776L19.4548 10.2683L11.4996 18.2235L6.72656 13.4505L7.78706 12.39L11.4996 16.1025Z"
                  fill="white"
                />
              </svg>
              Malesuada Ipsum
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="50"
              className="flex gap-4 text-base items-center"
            >
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.723633"
                  width="26"
                  height="26"
                  rx="13"
                  fill="#0054B2"
                />
                <path
                  d="M11.4996 16.1025L18.3936 9.20776L19.4548 10.2683L11.4996 18.2235L6.72656 13.4505L7.78706 12.39L11.4996 16.1025Z"
                  fill="white"
                />
              </svg>
              Vestibulum
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="100"
              className="flex gap-4 text-base items-center"
            >
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.723633"
                  width="26"
                  height="26"
                  rx="13"
                  fill="#0054B2"
                />
                <path
                  d="M11.4996 16.1025L18.3936 9.20776L19.4548 10.2683L11.4996 18.2235L6.72656 13.4505L7.78706 12.39L11.4996 16.1025Z"
                  fill="white"
                />
              </svg>
              Parturient Lorem
            </li>
          </ul>
        </div>
        <div className="mt-16 md:mt-0 md:w-[30%] relative">
          <div className=" w-full">
            <div className="flex flex-col gap-3 w-11/12 md:w-full mx-auto md:mx-o">
              {payment?.map((item) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={item?.brand}
                  className="bg-white rounded-[10px] flex justify-between p-4 items-center"
                >
                  <div className="inline-flex gap-3">
                    <span>
                      <img src="/logo.png" className="size-12 rounded-lg" />
                    </span>
                    <span>
                      <p className="font-semibold text-md">{item?.name}</p>
                      <p className="font-medium text-md text-[rgba(26,25,30,50%)]">
                        {item?.brand}
                      </p>
                    </span>
                  </div>
                  <div>{item?.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
