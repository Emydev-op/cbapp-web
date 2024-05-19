import React from "react";

export default function Feature3() {
  return (
    <div className="mt-24 text-[var(--black)] ">
      <div className="mx-auto md:max-w-screen-lg font-medium tracking-[-3%]">
        <div className="flex">
          <div className="w-[58%]">
            <h5 className="mb-2 text-xl">Saving Accounts</h5>
            <h2 className="mb-6 font-medium text-5xl md:text-6xl tracking-[-3%]">
              Organize your money the{" "}
              <span className="bg-gradient-to-r blur-xs from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
                right way
              </span>
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="inline-flex flex-1 justify-end items-end">
            <span className="inline-flex gap-2 font-medium text-lg text-[var(--blue-600)] place-content-start">
              All Features
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2291 11.7318L10.7926 6.41128L12.2257 5.00873L20.1088 12.7237L12.2257 20.4387L10.7926 19.0362L16.2291 13.7156H3.89258V11.7318H16.2291Z"
                  fill="#0054B2"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className=" "> </div>
      </div>
    </div>
  );
}
