"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function NewAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/login")
  };
  return (
    <div className="w-full h-full flex overflow-y-auto">
      <div className="bg-white w-[55%]">
        <div className="mt-10 w-3/4 mx-auto">
          <h2 className="font-bold text-3xl text-[var(--blue-600)]">
            Get started
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-8 pb-12 gap-y-6 gap-x-6 grid grid-cols-2 font-medium text-[var(--input-text)]"
          >
            <div className=" col-span-2">
              <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className=" col-span-2">
              <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Email Address
              </label>
              <input
                type="text"
                required
                placeholder="Email Address"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className="">
              <label className="text-sm">Birth Date</label>
              <input
                type="date"
                placeholder="Birth Date"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className="">
              <label className="text-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className="">
              <label className="text-sm">Province</label>
              <input
                type="text"
                placeholder="Province"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className="">
              <label className="text-sm">City</label>
              <input
                type="text"
                placeholder="City"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className=" col-span-2">
              <label className="text-sm">Full Address</label>
              <textarea
                type="text"
                placeholder="Full Address"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className="">
              <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Password
              </label>
              <div className="relative  mt-4">
                {/* <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute h-full grid place-content-center px-5 z-[1] cursor-pointer right-0"
                >
                  <img src="/eye.svg" alt="see password" />
                </span> */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="outline-none border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
                />
              </div>
            </div>
            <div className="">
              <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Confirm Password
              </label>
              <div className="relative  mt-4">
                {/* <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute h-full grid place-content-center px-5 z-[1] cursor-pointer right-0"
                >
                  <img src="/eye.svg" alt="see password" />
                </span> */}
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Confirm Password"
                  className="outline-none border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
                />
              </div>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-[var(--blue-600)] text-white hover:opacity-95 w-full rounded-[14px] py-3 mt-4"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[45%] overflow-y-hidden h-full text-white bg-gradient-to-r sticky top-0 right-0 from-[#0042A3] to-[#0055B2]">
        <div className="ml-12 mt-10">
          <div className=" max-w-sm space-y-2">
            <h2 className="font-semibold text-4xl">
              Getting Easier <br /> Pay for Any Transfer{" "}
              <span className="bg-gradient-to-r blur-xs from-orange-500 via-teal-500 to-orange-500 bg-clip-text text-transparent text-center select-none">
                with CBPay
              </span>
            </h2>
            <p className="font-medium text-md">
              Install CBPay application right now!
            </p>
            <div className="inline-flex gap-4 pt-4">
              <img src="/applestore.svg" alt="" className="h-[40px] w-auto" />
              <img src="/googlestore.svg" alt="" className="h-[40px] w-auto" />
            </div>
          </div>
        </div>
        <img src="/map.svg" className="w-[80%] mt-4 mx-auto" />

        <div className="absolute bottom-3 right-3 bg-white rounded-full inline-flex gap-1 p-4">
          <img src="/logo2.png" className="size-6" />
          {/* <h2 className="text-lg font-bold text-[var(--blue-600)]">
            CBPay.
          </h2> */}
        </div>
      </div>
    </div>
  );
}
