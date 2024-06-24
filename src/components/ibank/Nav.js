import Image from "next/image";
import React from "react";

export default function Nav({ title, subtitle }) {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[var(--blue-600)]">
          {title}
        </h2>
        <p className="text-sm text-[var(--input-text)]">{subtitle}</p>
      </div>
      <div className="inline-flex items-center space-x-4">
        <div className="relative w-[177px] h-[40px] shadow-lg rounded-[10px] ease-out transition-all focus-within:w-[210px]">
          <span className="absolute left-[13px] top-1/2 transform -translate-y-1/2">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6252 16.6247L13.0737 13.0669L16.6252 16.6247ZM15.0418 8.31217C15.0418 10.0969 14.3329 11.8085 13.0709 13.0704C11.8089 14.3324 10.0973 15.0413 8.31266 15.0413C6.52798 15.0413 4.81639 14.3324 3.55442 13.0704C2.29246 11.8085 1.5835 10.0969 1.5835 8.31217C1.5835 6.52749 2.29246 4.8159 3.55442 3.55394C4.81639 2.29197 6.52798 1.58301 8.31266 1.58301C10.0973 1.58301 11.8089 2.29197 13.0709 3.55394C14.3329 4.8159 15.0418 6.52749 15.0418 8.31217V8.31217Z"
                stroke="#011258"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="rounded-[10px] outline-none pl-10 pr-3 bg-white placeholder-[var(--input-text)] size-full"
          />
        </div>
        <span className="shadow-lg bg-white size-10 rounded-full grid place-content-center">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.74317 14.2419C8.13167 14.6506 8.63042 14.8752 9.14792 14.8752H9.14867C9.66842 14.8752 10.1694 14.6506 10.5587 14.2412C10.7672 14.0237 11.1227 14.006 11.3529 14.2022C11.5839 14.3985 11.6027 14.7349 11.3949 14.9524C10.7889 15.5877 9.99167 15.9377 9.14867 15.9377H9.14717C8.30642 15.937 7.51067 15.587 6.90692 14.9517C6.69917 14.7342 6.71792 14.3977 6.94892 14.2022C7.17992 14.0053 7.53542 14.023 7.74317 14.2419ZM9.18527 0.708496C12.519 0.708496 14.7585 3.16075 14.7585 5.45079C14.7585 6.62875 15.0758 7.12812 15.4125 7.65795C15.7455 8.1807 16.1228 8.77429 16.1228 9.89629C15.861 12.7629 12.6923 12.9967 9.18527 12.9967C5.67827 12.9967 2.50877 12.7629 2.25001 9.94162C2.24777 8.77429 2.62502 8.1807 2.95802 7.65795L3.07558 7.47107C3.36503 7.00123 3.61202 6.49016 3.61202 5.45079C3.61202 3.16075 5.85152 0.708496 9.18527 0.708496ZM9.18527 1.771C6.56402 1.771 4.73702 3.71041 4.73702 5.45079C4.73702 6.92341 4.30427 7.60412 3.92177 8.20479C3.61502 8.68716 3.37277 9.06825 3.37277 9.89629C3.49802 11.2322 4.43177 11.9342 9.18527 11.9342C13.9125 11.9342 14.8755 11.201 15 9.85025C14.9978 9.06825 14.7555 8.68716 14.4488 8.20479C14.0663 7.60412 13.6335 6.92341 13.6335 5.45079C13.6335 3.71041 11.8065 1.771 9.18527 1.771Z"
              fill="black"
            />
            <circle cx="15" cy="11" r="3" fill="#D70067" />
          </svg>
        </span>
        <div className="size-10 rounded-full shadow-lg">
          <Image
            src="/avatar.png"
            width={40}
            height={40}
            alt="use"
            className="size-10 rounded-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
