import Feature1 from "@/components/Home/Feature1";
import Feature2 from "@/components/Home/Feature2";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature1 />
      <Feature2/>
    </>
  );
}
