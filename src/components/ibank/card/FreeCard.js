import Image from "next/image";
import React from "react";

export default function FreeCard({ balance, type }) {
  return (
    // <div className="relative z-[2] p-[18px] w-full h-[186px] text-white">
    //   {type !== "free" ? (
    //     <Image
    //       src="/cards/gold.png"
    //       alt="free card"
    //       width={323}
    //       height={186}
    //       className="h-[186px] absolute z-[-1] left-0 right-0 top-0 bottom-0"
    //     />
    //   ) : (
    //     <Image
    //       src="/cards/free.png"
    //       alt="free card"
    //       width={323}
    //       height={186}
    //       className="h-[186px]  absolute z-[-1] left-0 right-0 top-0 bottom-0"
    //     />
    //   )}

    //   <div className="flex justify-between mb-5">
    //     <svg
    //       className="size-6"
    //       viewBox="0 0 26 26"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M5.813 2C2.647 2 0 4.648 0 7.813V18.188C0 21.352 2.648 24 5.813 24H20.188C23.352 24 26 21.352 26 18.187V7.813C26 4.649 23.352 2 20.187 2H5.813ZM5.813 4H20.188C22.223 4 24 5.777 24 7.813V9H18C17.445 9 17 8.555 17 8C17 7.445 17.445 7 18 7C18.2652 7 18.5196 6.89464 18.7071 6.70711C18.8946 6.51957 19 6.26522 19 6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5C16.355 5 15 6.355 15 8C15 9.292 15.844 10.394 17 10.813V15.781C15.802 16.595 15 17.961 15 19.5C15 20.423 15.293 21.281 15.781 22H10.22C10.7255 21.2641 10.9973 20.3928 11 19.5C11 17.962 10.198 16.595 9 15.781V10.812C10.156 10.394 11 9.292 11 8C11 6.355 9.645 5 8 5H6C5.96868 4.99853 5.93732 4.99853 5.906 5C5.87502 4.99856 5.84398 4.99856 5.813 5C5.54778 5.0248 5.30328 5.15394 5.13328 5.35901C4.96328 5.56408 4.8817 5.82828 4.9065 6.0935C4.9313 6.35872 5.06044 6.60322 5.26551 6.77322C5.47058 6.94322 5.73478 7.0248 6 7H8C8.555 7 9 7.445 9 8C9 8.555 8.555 9 8 9H2V7.812C2 5.777 3.777 4 5.813 4ZM2 11H7V15H2V11ZM19 11H24V15H19V11ZM2 17H6.5C7.839 17 9 18.161 9 19.5C9 20.839 7.839 22 6.5 22H5.812C3.777 22 2 20.223 2 18.187V17ZM19.5 17H24V18.188C24 20.223 22.223 22 20.187 22H19.5C18.161 22 17 20.839 17 19.5C17 18.161 18.161 17 19.5 17Z"
    //         fill="white"
    //       />
    //     </svg>

    //     <svg
    //       className="w-[40px] h-[23px]"
    //       viewBox="0 0 44 27"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <circle
    //         cx="13.5"
    //         cy="13.5"
    //         r="13.5"
    //         fill="#E72625"
    //         fill-opacity="0.9"
    //       />
    //       <circle
    //         cx="29.7002"
    //         cy="13.5"
    //         r="13.5"
    //         fill="#FABD05"
    //         fill-opacity="0.8"
    //       />
    //     </svg>
    //   </div>
    //   <h4 className="text-sm">Total Balance</h4>
    //   <h4 className="text-lg mt-1">₦ {balance}</h4>
    //   <p className="text-sm mt-3">**** **** ** 3783</p>
    //   <p className=" text-[10px] mt-1">05/22</p>
    // </div>
    <div
      className={`relative z-[2] p-[18px] mx-auto max-w-[323px] w-full h-[186px] text-white rounded-[20px] ${
        type === "free" ? styles.free : styles.gold
      }`}
    >
      <Image
        src="/cards/cardbg.svg"
        alt="free card"
        width={323}
        height={186}
        className="min-h-[186px] size-full absolute z-[-1] left-0 right-0 top-0 bottom-0"
      />
      <div className="flex justify-between mb-5">
        <svg
          className="size-6"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.813 2C2.647 2 0 4.648 0 7.813V18.188C0 21.352 2.648 24 5.813 24H20.188C23.352 24 26 21.352 26 18.187V7.813C26 4.649 23.352 2 20.187 2H5.813ZM5.813 4H20.188C22.223 4 24 5.777 24 7.813V9H18C17.445 9 17 8.555 17 8C17 7.445 17.445 7 18 7C18.2652 7 18.5196 6.89464 18.7071 6.70711C18.8946 6.51957 19 6.26522 19 6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5C16.355 5 15 6.355 15 8C15 9.292 15.844 10.394 17 10.813V15.781C15.802 16.595 15 17.961 15 19.5C15 20.423 15.293 21.281 15.781 22H10.22C10.7255 21.2641 10.9973 20.3928 11 19.5C11 17.962 10.198 16.595 9 15.781V10.812C10.156 10.394 11 9.292 11 8C11 6.355 9.645 5 8 5H6C5.96868 4.99853 5.93732 4.99853 5.906 5C5.87502 4.99856 5.84398 4.99856 5.813 5C5.54778 5.0248 5.30328 5.15394 5.13328 5.35901C4.96328 5.56408 4.8817 5.82828 4.9065 6.0935C4.9313 6.35872 5.06044 6.60322 5.26551 6.77322C5.47058 6.94322 5.73478 7.0248 6 7H8C8.555 7 9 7.445 9 8C9 8.555 8.555 9 8 9H2V7.812C2 5.777 3.777 4 5.813 4ZM2 11H7V15H2V11ZM19 11H24V15H19V11ZM2 17H6.5C7.839 17 9 18.161 9 19.5C9 20.839 7.839 22 6.5 22H5.812C3.777 22 2 20.223 2 18.187V17ZM19.5 17H24V18.188C24 20.223 22.223 22 20.187 22H19.5C18.161 22 17 20.839 17 19.5C17 18.161 18.161 17 19.5 17Z"
            fill="white"
          />
        </svg>

        <svg
          className="w-[40px] h-[23px]"
          viewBox="0 0 44 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.5"
            cy="13.5"
            r="13.5"
            fill="#E72625"
            fill-opacity="0.9"
          />
          <circle
            cx="29.7002"
            cy="13.5"
            r="13.5"
            fill="#FABD05"
            fill-opacity="0.8"
          />
        </svg>
      </div>
      <h4 className="text-sm">Total Balance</h4>
      <h4 className="text-lg mt-1">₦ {balance}</h4>
      <p className="text-sm mt-3">**** **** ** 3783</p>
      <p className=" text-[10px] mt-1">05/22</p>
    </div>
  );
}

const styles = {
  free: "bg-gradient-to-r from-[#0042a3] to-[#0055b2]",
  gold: "bg-gradient-to-r from-[#fcba2d] to-[#fdd163]",
};
