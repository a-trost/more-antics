import React from "react";
import Image from "next/image";

import LinkButton from "../../components/LinkButton";

const HeroSection = ({ slice }) => {
  const variation = slice.variation;
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-4 max-w-screen-2xl mx-auto">
      <div
        className={`flex flex-col justify-center items-start p-4 ${
          variation === "imageLeft" ? "order-2" : ""
        }`}
      >
        <h1 className="md:text-4xl lg:text-5xl text-xl sm:text-2xl text-primary font-black mb-4 max-w-xl ">
          {slice.primary.heading}
        </h1>
        <p className="mb-4 max-w-lg">{slice.primary.body}</p>
        <LinkButton href="" className="">
          {slice.primary.buttonText}
        </LinkButton>
      </div>

      <Image
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        layout="responsive"
        width="100%"
        height="100%"
        objectfit="contain"
        className="object-contain "
      />
    </section>
  );
};

export default HeroSection;
