"use client";
import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="max-w-[550px] mx-auto p-5 pt-10 text-gray-50 flex flex-col gap-6 justify-between items-center  md:p-20 md:max-w-[860px] lg:flex-row lg:gap-20 lg:max-w-[1024px]">
      <div className="flex flex-col gap-6 md:gap-10 items-center lg:w-2/3 ">
        <h1 className="text-gray-50 text-4xl font-semibold text-center md:text-6xl lg:text-left lg:text-7xl">
          Ignite Your Candle Business Success!
        </h1>
        <Image
          className="rounded-full h-52 w-52 md:hidden "
          src="/hero-image.png"
          width={700}
          height={700}
          alt="violet candle"
        />
        <h2 className="font-serif md:text-lg">
          Take control of your wax products with <b>Candle Companion</b> – the
          ultimate toolkit for managing products and tracking sales.
          <br />
          <br />
          Streamline your operations, save time, and focus on what matters most
          – <b>Creating amazing candles!</b>
        </h2>
        <p></p>
      </div>

      <div className="pt-6 flex flex-col items-center md:gap-10">
        <Image
          className="hidden rounded-full h-52 w-52 md:block md:w-80 md:h-80"
          src="/hero-image.png"
          width={700}
          height={700}
          alt="violet candle"
        />
        <div className="flex flex-col gap-2">
          <CTAButton />
          <p className="text-gray-300 font-serif underline text-sm">
            Start Today and Light Up Your Candle Buisness with us for free!
          </p>
        </div>
      </div>
    </section>
  );
}
