"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="bg-white w-fullmd:h-[90vh] mb-48 mt-6">
      <div className="flex h-full justify-center items-center">
        <div className="md:flex md:justify-between md:max-w-screen-lg">
          <div
            className="md:w-[55%] w-full space-y-10 px-8 md:px-0"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="space-y-4">
              <h2 className="font-medium text-5xl md:text-8xl tracking-wide leading-[110%]">
                Banking starts{" "}
                <span className="bg-gradient-to-r blur-xs from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
                  here.
                </span>
              </h2>
              <p className="font-medium text-xl leading-[170%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-5 text-lg font-medium">
              <li className="inline-flex gap-4">
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.861786"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.2408L18.3936 9.34604L19.4548 10.4065L11.4996 18.3618L6.72656 13.5888L7.78706 12.5283L11.4996 16.2408Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Instant Transfer
              </li>
              <li className="inline-flex gap-4">
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.861786"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.2408L18.3936 9.34604L19.4548 10.4065L11.4996 18.3618L6.72656 13.5888L7.78706 12.5283L11.4996 16.2408Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Payment worldwide
              </li>
              <li className="inline-flex gap-4">
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.861786"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.2408L18.3936 9.34604L19.4548 10.4065L11.4996 18.3618L6.72656 13.5888L7.78706 12.5283L11.4996 16.2408Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                Saving accounts
              </li>
              <li className="inline-flex gap-4">
                <span>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.861786"
                      width="26"
                      height="26"
                      rx="13"
                      fill="#E6EEF7"
                    />
                    <path
                      d="M11.4996 16.2408L18.3936 9.34604L19.4548 10.4065L11.4996 18.3618L6.72656 13.5888L7.78706 12.5283L11.4996 16.2408Z"
                      fill="#0054B2"
                    />
                  </svg>
                </span>
                100% mobile banking
              </li>
            </ul>

            <div className=" inline-flex gap-3 md:pt-4">
              <button className="bg-[var(--blue-600)] text-white rounded-md px-5 py-3">
                Open Account
              </button>
              <button className=" group text-[var(--blue-600)] inline-flex gap-2 px-5 py-3 font-medium text-lg tracking-tight">
                Compare Cards
                <svg
                  className=" group-hover:translate-x-2 ease-linear transition-all"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2291 11.8699L10.7926 6.54934L12.2257 5.1468L20.1088 12.8618L12.2257 20.5768L10.7926 19.1742L16.2291 13.8537H3.89258V11.8699H16.2291Z"
                    fill="#0054B2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-full grid place-content-center mt-10 md:mt-0 md:block md:w-[30%] "
          >
            <Image
              src={"/cards.png"}
              alt="cbpay-card"
              width={300}
              height={600}
              className="sm:max-md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
