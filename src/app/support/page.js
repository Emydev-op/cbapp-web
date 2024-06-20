"use client";
import AOS from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Support() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--blue-500)] w-full h-[50dvh] md:h-[calc(80dvh-96px)]">
        <div className="relative max-w-screen-lg  mx-auto h-full flex items-center">
          <div className="font-medium tracking-[-3%] max-w-md space-y-2">
            <h5 className=" text-xl">Support</h5>
            <h1 className=" text-5xl md:text-7xl pb-2">How can we help you?</h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            className=" w-1/3 absolute bottom-0 right-0"
          >
            <img src={"/support.svg"} alt="cbpay-card" className="" />
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="mx-auto md:max-w-screen-lg bg-[var(--blue-600)] md:rounded-[20px] p-8 font-medium tracking-[-3%]">
          <div className="text-[#ffffff] flex justify-between items-center">
            <div>
              <p className="text-2xl">Still have questions?</p>
              <p className="text-lg opacity-90">We are here to help.</p>
            </div>
            <div className="inline-flex gap-5">
              <div className="inline-flex gap-4 items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M28.25 24.0517V27.293C28.2501 27.5251 28.1622 27.7486 28.004 27.9183C27.8457 28.0881 27.629 28.1916 27.3975 28.2078C26.9969 28.2353 26.6697 28.25 26.4167 28.25C18.3161 28.25 11.75 21.6839 11.75 13.5833C11.75 13.3303 11.7638 13.0031 11.7922 12.6025C11.8084 12.371 11.9119 12.1543 12.0817 11.996C12.2514 11.8378 12.4749 11.7499 12.707 11.75H15.9483C16.062 11.7499 16.1717 11.792 16.2561 11.8683C16.3404 11.9445 16.3935 12.0494 16.4048 12.1625C16.4259 12.3733 16.4452 12.5411 16.4635 12.6685C16.6457 13.9398 17.019 15.1763 17.5708 16.3361C17.6579 16.5194 17.6011 16.7385 17.4361 16.8558L15.4579 18.2693C16.6674 21.0876 18.9133 23.3335 21.7316 24.543L23.1432 22.5685C23.201 22.4878 23.2851 22.43 23.3811 22.405C23.4771 22.3801 23.5788 22.3896 23.6685 22.4319C24.8281 22.9827 26.0643 23.3551 27.3352 23.5365C27.4626 23.5548 27.6303 23.575 27.8393 23.5952C27.9523 23.6067 28.0569 23.6599 28.133 23.7442C28.209 23.8285 28.2511 23.9381 28.2509 24.0517H28.25Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <p className="text-lg">+234 815 836 4325</p>
                  <p className="text-sm opacity-90">Supprt Hotline</p>
                </div>
              </div>
              <div className="inline-flex gap-4 items-center">
                <svg
                  className="size-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M23.757 11.75C23.6341 12.3549 23.6341 12.9784 23.757 13.5833H13.1338L20.0546 19.6902L24.6829 15.5468C25.0734 16.0299 25.561 16.4323 26.1156 16.7247L20.0647 22.1432L12.6654 15.6147V26.4167H27.332V17.1583C27.937 17.2812 28.5604 17.2812 29.1654 17.1583V27.3333C29.1654 27.5764 29.0688 27.8096 28.8969 27.9815C28.725 28.1534 28.4918 28.25 28.2487 28.25H11.7487C11.5056 28.25 11.2724 28.1534 11.1005 27.9815C10.9286 27.8096 10.832 27.5764 10.832 27.3333V12.6667C10.832 12.4235 10.9286 12.1904 11.1005 12.0185C11.2724 11.8466 11.5056 11.75 11.7487 11.75H23.757ZM28.2487 15.4167C27.8876 15.4167 27.53 15.3455 27.1963 15.2073C26.8627 15.0691 26.5595 14.8666 26.3042 14.6112C26.0488 14.3558 25.8462 14.0527 25.708 13.719C25.5698 13.3854 25.4987 13.0278 25.4987 12.6667C25.4987 12.3055 25.5698 11.9479 25.708 11.6143C25.8462 11.2806 26.0488 10.9775 26.3042 10.7221C26.5595 10.4668 26.8627 10.2642 27.1963 10.126C27.53 9.98779 27.8876 9.91666 28.2487 9.91666C28.978 9.91666 29.6775 10.2064 30.1932 10.7221C30.709 11.2378 30.9987 11.9373 30.9987 12.6667C30.9987 13.396 30.709 14.0955 30.1932 14.6112C29.6775 15.1269 28.978 15.4167 28.2487 15.4167Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <p className="text-lg">help@cbpay.com</p>
                  <p className="text-sm opacity-90">Supprt Email</p>
                </div>
              </div>
            </div>
            <button className="text-lg text-white bg-[var(--black)] rounded-2xl px-6 py-4">
              Chat with us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
