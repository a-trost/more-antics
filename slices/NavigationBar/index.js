import React from "react";
import Image from "next/image";
import { Link } from "prismic-reactjs";
import NextLink from "next/link";

const NavigationBar = ({ slice }) => (
  <header className="text-gray-600 w-full">
    <div className="flex flex-col flex-wrap items-center max-w-screen-2xl p-5 mx-auto md:flex-row justify-between">
      <NextLink href="/" className="flex items-center mb-4 font-medium md:mb-0">
        <a>
          <Image
            src={slice.primary.logo.url}
            alt={slice.primary.logo.alt}
            width={48}
            height={42}
            className=""
          />
          <span className="ml-3 text-3xl text-primary font-extrabold">
            {slice.primary.title}
          </span>
        </a>
      </NextLink>
      <nav className="flex flex-wrap items-center gap-8 text-lg md:ml-auto">
        {slice?.items?.map((item, i) => (
          <NextLink
            key={i}
            className="text-primary hover:text-primary-harsh cursor-pointer"
            href={Link.url(item.link)}
          >
            <a>{item.label}</a>
          </NextLink>
        ))}
      </nav>
    </div>
  </header>
);

export default NavigationBar;
