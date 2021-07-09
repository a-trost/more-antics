import React from "react";

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={`relative inline-flex bg-ternary-glare justify-center px-4 py-2 text-base font-bold leading-normal text-center cursor-pointer font-display hover:bg-transparent border-8 border-ternary-glare ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
