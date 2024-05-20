import Feature1 from "@/components/Home/Feature1";
import Feature2 from "@/components/Home/Feature2";
import Feature3 from "@/components/Home/Feature3";
import Hero from "@/components/Home/Hero";
import Notifications from "@/components/Home/Notifications";
import Testimonial from "@/components/Home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Notifications />
      <Testimonial />
    </>
  );
}
