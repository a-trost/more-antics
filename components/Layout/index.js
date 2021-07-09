import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import LinkButton from "../LinkButton";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { isPreview } = useRouter();

  return (
    <div>
      <Navigation />
      {children}
      <Footer />
      {isPreview ? (
        <div className="fixed right-4 bottom-4">
          <LinkButton href="/api/exit-preview">Exit Preview</LinkButton>
        </div>
      ) : null}
    </div>
  );
}
