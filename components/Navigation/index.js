import Image from "next/image";
import NextLink from "next/link";

export default function Navigation() {
  const links = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
  ];
  return (
    <header className="text-gray-600 w-full mb-4 md:mb-6">
      <div className="flex flex-col flex-wrap items-center max-w-screen-2xl p-5 mx-auto md:flex-row justify-between">
        <NextLink
          href="/"
          className="flex items-center mb-4 font-medium md:mb-0"
        >
          <a>
            <Image
              src="/images/MoreAntics.png"
              alt="More Antics Logo"
              width={48}
              height={42}
              className=""
            />
            <span className="ml-3 text-3xl text-primary font-extrabold">
              More Antics!
            </span>
          </a>
        </NextLink>
        <nav className="flex flex-wrap items-center gap-8 text-lg md:ml-auto">
          {links.map((link, i) => (
            <NextLink
              key={i}
              className="text-primary hover:text-primary-harsh cursor-pointer"
              href={link.url}
            >
              <a>{link.label}</a>
            </NextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
