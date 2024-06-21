"use client";
import AOS from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Compare() {
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
            <h5 className=" text-xl">Compare Cards</h5>
            <h1 className=" text-5xl md:text-7xl pb-2">
              The ideal card for you
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="w-2/5 absolute bottom-0 right-0"
          >
            <img src={"/cards/general.svg"} alt="cbpay-card" className="" />
          </div>
        </div>
      </section>
      <section className="mt-20 max-w-screen-lg mx-auto">
        <div className="w-[70%] ml-auto gap-8 grid grid-cols-3 mb-16">
          <div className="grid grid-cols-1 gap-5 text-center">
            <h3 className=" text-xl font-medium flex gap-x-2 justify-center items-center">
              Basic
              <span className="text-[var(--blue-600)] bg-[var(--blue-500)] rounded text-xs px-1.5">
                Popular
              </span>
            </h3>
            <div className="space-y-2">
              <h4 className=" text-3xl font-bold">Free</h4>
              <p className="font-medium text-sm text-[var(--black)] opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Image
              src="/cards/free.svg"
              alt="free card"
              width={1920}
              height={1080}
              layout="responsive"
            />
            <button className="rounded-md text-sm font-medium py-2 bg-[var(--blue-600)] text-white hover:opacity-90">
              Get Started
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 text-center">
            <h3 className=" text-xl font-medium flex gap-x-2 justify-center items-center">
              Premium
            </h3>
            <div className="space-y-2">
              <h4 className=" text-3xl font-bold">
                ₦5,000{" "}
                <span className="text-base font-medium opacity-50">
                  per month
                </span>
              </h4>
              <p className="font-medium  text-sm text-[var(--black)] opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Image
              src="/cards/premium.svg"
              alt="premium card"
              width={1920}
              height={1080}
              layout="responsive"
            />
            <button className="rounded-md text-sm font-medium py-2 bg-[var(--blue-600)] text-white hover:opacity-90">
              Get Started
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 text-center">
            <h3 className=" text-xl font-medium flex gap-x-2 justify-center items-center">
              Gold
            </h3>
            <div className="space-y-1">
              <h4 className=" text-3xl font-bold">
                ₦10,000{" "}
                <span className="text-base font-medium opacity-50">
                  per month
                </span>
              </h4>
              <p className="font-medium text-sm text-[var(--black)] opacity-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Image
              src="/cards/gold.svg"
              alt="statistics"
              width={1920}
              height={1080}
              layout="responsive"
            />
            <button className="rounded-md text-sm font-medium py-2 bg-[var(--blue-600)] text-white hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
