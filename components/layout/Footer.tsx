import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="Footer" className="container mx-auto px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 xl:col-span-6">
          <h1 className="font-titleFont font-bold text-2xl text-[#363434]">
            Burrger.
          </h1>
          <div>2023 &copy; Jacks.</div>
        </div>
        <div className="md:col-span-3 xl:col-span-2 flex flex-col gap-y-4">
          <Link href="#">Greenlordran</Link>
          <Link href="#">9-21 Coconca Street</Link>
          <Link href="#">02145 California</Link>
        </div>
        <div className="md:col-span-3 xl:col-span-2 flex flex-col gap-y-4">
          <Link href="#">+65 2124 5521 5612</Link>
          <Link href="#" className="underline">
            Jackburger@email.io
          </Link>
        </div>
        <div className="md:col-span-3 xl:col-span-2 md:pl-8 flex flex-col gap-y-4 underline">
          <Link href="#Home">Home</Link>
          <Link href="#Products">Product</Link>
          <Link href="#Store">Store</Link>
          <Link href="#AboutUs">About Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
