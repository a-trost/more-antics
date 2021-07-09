import React from "react";
import Image from "next/image";
import LinkButton from "../../components/LinkButton";

const ContentGrid = ({ slice }) => {
  const heading = slice.primary.heading;
  const cards = slice.items;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-primary font-bold">
          {heading}
        </h2>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {cards.length &&
            cards.map((card) => (
              <div key={card.heading} className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    alt={card.image.alt}
                    width={1200}
                    height={500}
                    className="object-center h-full w-full"
                    objectfit="cover"
                    src={card.image.url}
                  />
                </div>
                <h3 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  {card.heading}
                </h3>
                <p className="leading-relaxed text-base mb-6">
                  {card.description}
                </p>
                <LinkButton>{card.buttonText}</LinkButton>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
