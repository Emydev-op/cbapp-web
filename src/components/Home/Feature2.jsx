import React from "react";

export default function Feature2() {
  const payment = [
    { name: "Apple", brand: "Macbook", price: "$99" },
    { name: "Xender", brand: "Sharing", price: "$34" },
    { name: "Dropbox", brand: "Cloud", price: "$76" },
    { name: "Paypal", brand: "Shopping", price: "$11" },
    { name: "Amazon", brand: "Electronics", price: "$566" },
    { name: "Twitter", brand: "Ads", price: "$66" },
    { name: "Microsoft", brand: "Office Suite", price: "$80" },
    { name: "Dropbox", brand: "Cloud", price: "$10" },
  ];
  return (
    <div className="bg-[var(--blue-500)] flex justify-center z-[-2]">
      <div className="pt-28 md:flex md:justify-between md:max-w-screen-lg mb-24">
        <div className="md:w-[54%] w-full space-y-10">
          <h2 className="font-md text-6xl">Send & receive money instantly</h2>
          <p className="font-md text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-4 text-base items-center">
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
            <li className="flex gap-4 text-base items-center">
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
            <li className="flex gap-4 text-base items-center">
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
        <div className="md:mt-0 md:block md:w-[30%] relative">
          <div className="absolute w-full z-[-1]">
            <div className="flex flex-col gap-3">
              {payment?.map((item) => (
                <div
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