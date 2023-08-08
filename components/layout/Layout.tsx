import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      <main className="h-[100vh] space-y-24 text-standardBlack font-bodyFont bg-gradient-to-r bg-[#FEFDF9] font-medium text-standardcolor justify-between overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-standarOrange/20 scrollbar-thumb-standarOrange/60 flex flex-col">
        <Header />
        {children}
        <Footer />
      </main>
    </section>
  );
};

export default Layout;
