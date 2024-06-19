"use client";
import Image from "next/image";
import React from "react";

export default function FeaturePage() {
  return (
    <section className="relative w-full md:h-[calc(100dvh-96px)]">
      <div className="bg-[var(--blue-500)] -z-10 absolute top-0 left-0 right-0 bottom-0" />
      <div className="text-center font-medium tracking-[-3%] max-w-lg mx-auto space-y-2 pt-12 relative">
        <h5 className=" text-xl">Features</h5>
        <h1 className=" text-5xl md:text-7xl pb-2">All in one card.</h1>
        <p className="text-xl ">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div className=" inline-flex gap-3 md:pt-4">
          <button className="bg-[var(--blue-600)] text-white rounded-md px-5 py-3">
            Open Account
          </button>
          <button
            onClick={() => alert("wewew")}
            className=" group text-[var(--blue-600)] inline-flex gap-2 px-5 py-3 font-medium text-lg tracking-tight"
          >
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
      <div className="absolute -z-10 -bottom-20">
        <Image
          src={"/borderCards.svg"}
          alt="cbpay-card"
          width={1920}
          height={1080}
          layout="responsive"
        />
      </div>
    </section>
  );
}
