"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/ibank");
  };

  return (
    <div className="w-full h-full flex overflow-y-auto">
      <div className="bg-white w-[55%]">
        <div className="mt-10 w-3/4 mx-auto">
          <h2 className="font-bold text-3xl text-[var(--blue-600)]">
            Hi, Welcome Back Fellas!
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6 font-medium text-[var(--input-text)]">
            <div className="">
              <label className="text-sm">Email or username</label>
              <input
                type="text"
                placeholder="Email or username"
                className="outline-none mt-4 border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
              />
            </div>
            <div className="">
              <label className="text-sm">Password</label>
              <p className="text-sm text-[var(--blue-600)] cursor-pointer float-right">
                Forgot Password?
              </p>
              <div className="relative  mt-4">
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute h-full grid place-content-center px-5 z-[1] cursor-pointer right-0"
                >
                  <img src="/eye.svg" alt="see password" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="outline-none border-2 text-gray-800 rounded-[14px] w-full px-6 py-3"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[var(--blue-600)] text-white hover:opacity-95 w-full rounded-[14px] py-3 mt-4"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="">
            <div className="flex items-center text-[var(--input-text)] justify-between my-7">
              <span class="border-b-[1.3px] flex-1" />
              <p className="mx-auto px-10 text-center w-fit text-sm">
                Or sign in with
              </p>
              <span class="border-b-[1.3px] flex-1" />
            </div>
            <button className="border-[#c4c4c4] text-opacity-50 hover:text-opacity-100 border-[1.5px] text-[#787878] font-semibold w-full rounded-[14px] py-3 mb-5">
              Another Method
            </button>
            <p className="text-sm font-medium text-center text-[#c4c4c4] mb-6">
              You don’t Have an Account?{" "}
              <Link href="#" className="text-[var(--blue-600)]">
                Sign Up
              </Link>
            </p>
          </div>
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
