"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const faqData = [
  {
    id: 1,
    title: "How do I open a Cbpay account?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 2,
    title: "How do I order a new card?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 3,
    title: "How to change my account limits?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 4,
    title: "How does Banko premium works?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 5,
    title: "Can I have two Cbpay account?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

export default function Faq() {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [active, setActive] = React.useState(null);
  return (
    <div className="mt-24 text-[var(--black)] ">
      <div className="mx-auto md:max-w-screen-lg font-medium tracking-[-3%]">
        <div className="relative bg-[var(--blue-600)] md:rounded-[20px] pt-16 px-6 md:px-16 md:flex justify-between">
          <div className="w-full md:w-[58%] mb-16 text-white space-y-4">
            <div className="space-y-4">
              <h2 className="font-medium text-4xl md:text-6xl leading-[110%]">
                One app.
              </h2>
              <h2 className="font-medium text-4xl md:text-6xl tracking-wid leading-[110%]">
                One banking.
              </h2>
            </div>
            <p className="font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <ul className="grid grid-cols-2 gap-5 text-base pt-4 font-medium">
              <li className="inline-flex gap-4">
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.563965"
                    width="26"
                    height="26"
                    rx="13"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M11.4996 15.9431L18.3936 9.04834L19.4548 10.1088L11.4996 18.0641L6.72656 13.2911L7.78706 12.2306L11.4996 15.9431Z"
                    fill="white"
                  />
                </svg>
                Instant Transfer
              </li>
              <li className="inline-flex gap-4">
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.563965"
                    width="26"
                    height="26"
                    rx="13"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M11.4996 15.9431L18.3936 9.04834L19.4548 10.1088L11.4996 18.0641L6.72656 13.2911L7.78706 12.2306L11.4996 15.9431Z"
                    fill="white"
                  />
                </svg>
                Payment worldwide
              </li>
              <li className="inline-flex gap-4">
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.563965"
                    width="26"
                    height="26"
                    rx="13"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M11.4996 15.9431L18.3936 9.04834L19.4548 10.1088L11.4996 18.0641L6.72656 13.2911L7.78706 12.2306L11.4996 15.9431Z"
                    fill="white"
                  />
                </svg>
                Saving accounts
              </li>
              <li className="inline-flex gap-4">
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.563965"
                    width="26"
                    height="26"
                    rx="13"
                    fill="white"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M11.4996 15.9431L18.3936 9.04834L19.4548 10.1088L11.4996 18.0641L6.72656 13.2911L7.78706 12.2306L11.4996 15.9431Z"
                    fill="white"
                  />
                </svg>
                100% mobile banking
              </li>
            </ul>

            <div className="inline-flex gap-4 pt-6">
              <img src="/applestore.svg" alt="" className="h-[45px] w-auto" />
              <img src="/googlestore.svg" alt="" className="h-[45px] w-auto" />
            </div>
          </div>
          <div
            data-aos="fade-top"
            className="flex-1 flex justify-center items-end "
          >
            <Image src="/app2.svg" alt="cbpay icon" width={290} height={400} />
          </div>
        </div>

        {/* Need help */}
        <div className="grid grid-col-1 md:grid-cols-2 my-40 mx-6 md:mx-0">
          <div className="space-y-12">
            <h2 className="font-medium text-4xl md:text-6xl leading-[110%]">
              Need help?
            </h2>
            <div className="grid space-y-8">
              <div className="inline-flex gap-6 font-medium items-center">
                <svg
                  className="md:size-12 size-10"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.0644531"
                    width="50"
                    height="50"
                    rx="25"
                    fill="#E6EEF7"
                  />
                  <path
                    d="M35.5 30.2211V34.3465C35.5001 34.6418 35.3882 34.9263 35.1869 35.1423C34.9855 35.3584 34.7096 35.4901 34.415 35.5108C33.9052 35.5458 33.4887 35.5645 33.1667 35.5645C22.8568 35.5645 14.5 27.2076 14.5 16.8978C14.5 16.5758 14.5175 16.1593 14.5537 15.6495C14.5743 15.3548 14.706 15.079 14.9221 14.8776C15.1382 14.6762 15.4226 14.5643 15.718 14.5645H19.8433C19.988 14.5643 20.1276 14.618 20.235 14.715C20.3424 14.812 20.4099 14.9455 20.4243 15.0895C20.4512 15.3578 20.4757 15.5713 20.499 15.7335C20.7309 17.3515 21.206 18.9253 21.9083 20.4013C22.0192 20.6346 21.9468 20.9135 21.7368 21.0628L19.2192 22.8618C20.7585 26.4486 23.617 29.3071 27.2038 30.8465L29.0005 28.3335C29.0739 28.2308 29.1811 28.1571 29.3032 28.1254C29.4254 28.0936 29.5549 28.1057 29.669 28.1596C31.1449 28.8606 32.7182 29.3346 34.3357 29.5655C34.4978 29.5888 34.7113 29.6145 34.9773 29.6401C35.1211 29.6549 35.2543 29.7225 35.3511 29.8298C35.4479 29.9371 35.5013 30.0766 35.5012 30.2211H35.5Z"
                    fill="#0054B2"
                  />
                </svg>

                <span className="inline-flex flex-col">
                  <p className=" text-lg ">+234 815 836 4325</p>
                  <p className=" text-sm text-[var(--black)] opacity-50">
                    Support Hotline
                  </p>
                </span>
              </div>
              <div className="inline-flex gap-6 items-center">
                <svg
                  className="size-10 md:size-12"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.0644531"
                    width="50"
                    height="50"
                    rx="25"
                    fill="#E6EEF7"
                  />
                  <path
                    d="M29.784 14.5648C29.6276 15.3347 29.6276 16.1282 29.784 16.8981H16.2635L25.0718 24.6704L30.9623 19.3971C31.4593 20.0119 32.08 20.5241 32.7858 20.8963L25.0847 27.7924L15.6673 19.4834V33.2314H34.334V21.4481C35.1039 21.6045 35.8974 21.6045 36.6673 21.4481V34.3981C36.6673 34.7075 36.5444 35.0043 36.3256 35.2231C36.1068 35.4419 35.8101 35.5648 35.5007 35.5648H14.5007C14.1912 35.5648 13.8945 35.4419 13.6757 35.2231C13.4569 35.0043 13.334 34.7075 13.334 34.3981V15.7314C13.334 15.422 13.4569 15.1253 13.6757 14.9065C13.8945 14.6877 14.1912 14.5648 14.5007 14.5648H29.784ZM35.5007 19.2314C35.041 19.2314 34.5859 19.1409 34.1613 18.965C33.7366 18.7891 33.3508 18.5313 33.0258 18.2063C32.7008 17.8813 32.443 17.4955 32.2671 17.0708C32.0912 16.6462 32.0007 16.1911 32.0007 15.7314C32.0007 15.2718 32.0912 14.8167 32.2671 14.3921C32.443 13.9674 32.7008 13.5816 33.0258 13.2566C33.3508 12.9316 33.7366 12.6738 34.1613 12.4979C34.5859 12.322 35.041 12.2314 35.5007 12.2314C36.4289 12.2314 37.3191 12.6002 37.9755 13.2566C38.6319 13.9129 39.0007 14.8032 39.0007 15.7314C39.0007 16.6597 38.6319 17.5499 37.9755 18.2063C37.3191 18.8627 36.4289 19.2314 35.5007 19.2314Z"
                    fill="#0054B2"
                  />
                </svg>

                <span className="inline-flex flex-col">
                  <p className=" text-lg ">alphaoseghe@gmail.com</p>
                  <p className=" text-sm text-[var(--black)] opacity-50">
                    Support Email
                  </p>
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex gap-2 text-[var(--blue-600)] text-lg font-medium"
            >
              Support
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2291 11.5724L10.7926 6.25185L12.2257 4.84931L20.1088 12.5643L12.2257 20.2793L10.7926 18.8768L16.2291 13.5562H3.89258V11.5724H16.2291Z"
                  fill="#0054B2"
                />
              </svg>
            </Link>
          </div>
          <div className="space-y-8 font-medium mt-12">
            {faqData.map((item, index) => (
              <div
                key={index}
                className=" border-b border-[var(--gray-100)] pb-8"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h3
                  onClick={() => {
                    if (item.id === active) {
                      setActive(null);
                    } else {
                      setActive(item.id);
                    }
                  }}
                  className="flex justify-between items-center"
                >
                  {item.title}
                  <svg
                    className={`size-6 cursor-pointer transition-all ease-in-out ${
                      item.id === active && "rotate-45"
                    }`}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11.5645V5.56445H13V11.5645H19V13.5645H13V19.5645H11V13.5645H5V11.5645H11Z"
                      fill="#0054B2"
                    />
                  </svg>
                </h3>
                <p
                  className={`mt-4 text-[var(--black)] opacity-50 transition-all ease-in-out ${
                    item.id !== active && " hidden opacity-0"
                  }`}
                >
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
