"use client";
import FreeCard from "@/components/ibank/card/FreeCard";
import Nav from "@/components/ibank/Nav";
import React, { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <div className="relative w-full h-full ">
      <div className="mr-[315px] pt-8 px-6">
        <Nav
          title="Welcome Back John"
          subtitle="Manage Your Money The Right Way"
        />
        <section className="bg-white rounded-2xl w-full p-7">
          <header className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-[var(--blue-600)]">
              My Card
            </h2>
            <p className="text-sm inline-flex gap-1 font-semibold text-[var(--yellow)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.53033 3.96967C8.38968 3.82902 8.19891 3.75 8 3.75C7.80109 3.75 7.61032 3.82902 7.46967 3.96967C7.32902 4.11032 7.25 4.30109 7.25 4.5V7.25H4.5C4.30109 7.25 4.11032 7.32902 3.96967 7.46967C3.82902 7.61032 3.75 7.80109 3.75 8C3.75 8.19891 3.82902 8.38968 3.96967 8.53033C4.11032 8.67098 4.30109 8.75 4.5 8.75H7.25V11.5C7.25 11.6989 7.32902 11.8897 7.46967 12.0303C7.61032 12.171 7.80109 12.25 8 12.25C8.19891 12.25 8.38968 12.171 8.53033 12.0303C8.67098 11.8897 8.75 11.6989 8.75 11.5V8.75H11.5C11.6989 8.75 11.8897 8.67098 12.0303 8.53033C12.171 8.38968 12.25 8.19891 12.25 8C12.25 7.80109 12.171 7.61032 12.0303 7.46967C11.8897 7.32902 11.6989 7.25 11.5 7.25H8.75V4.5C8.75 4.30109 8.67098 4.11032 8.53033 3.96967Z"
                  fill="#FCBA2D"
                  stroke="#FCBA2D"
                  stroke-width="0.5"
                />
              </svg>
              Add new
            </p>
          </header>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <FreeCard balance="31,000" type={"free"} />
            <FreeCard balance="4,000" type={"gold"} />
          </div>
        </section>
      </div>
      <div className="w-[315px] h-full bg-white absolute right-0 top-0 bottom-0">
        <div className="mt-8 px-6">
          <h2 className="text-[var(--blue-600)] text-lg font-semibold">
            Account Information
          </h2>
          <div className="mt-3 mb-8 inline-flex space-x-4">
            <p
              onClick={() => setActiveTab(false)}
              className={`text-xs cursor-pointer relative text-[var(--input-text)] ${
                !activeTab && styles.activeTab
              }`}
            >
              Transaction
            </p>
            <p
              onClick={() => setActiveTab(true)}
              className={`text-xs cursor-pointer relative text-[var(--input-text)] ${
                activeTab && styles.activeTab
              }`}
            >
              Details
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-5">
            <li className="space-y-1.5">
              <h4 className="text-xs text-[#c4c4c4]">Account Number</h4>
              <p className="text-sm font-medium text-[#474747]">0270771302</p>
            </li>
            <li className="space-y-1.5">
              <h4 className="text-xs text-[#c4c4c4]">Account Name</h4>
              <p className="text-sm font-medium text-[#474747]">John Dominic</p>
            </li>
            <li className="space-y-1.5">
              <h4 className="text-xs text-[#c4c4c4]">Phone Number</h4>
              <p className="text-sm font-medium text-[#474747]">
                +234 815 836 4325
              </p>
            </li>
            <li className="space-y-1.5">
              <h4 className="text-xs text-[#c4c4c4]">Account Type</h4>
              <p className="text-sm font-medium text-[#474747]">Tier 3 🥉</p>
            </li>
            <li className="space-y-1.5">
              <h4 className="text-xs text-[#c4c4c4]">Card Type</h4>
              <p className="text-sm font-medium text-[#474747]">
                Naira Mastercard
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  activeTab:
    "text-[var(--yellow)] after:size-1 after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[var(--yellow)] after:rounded-full",
};
