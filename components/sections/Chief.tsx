import { img10, img11, img9 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Chief = () => {
  return (
    <section id="Chief" className="container mx-auto px-4">
      <div className="flex justify-between">
        <h1 className="font-titleFont font-bold text-4xl">
          Meet with our Chief
        </h1>
        <button className="bg-standardGreen text-white rounded-xl px-6 py-2">
          View all chief
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="space-y-2">
          <Image src={img9} alt="Chief" className="rounded-full" />
          <h2 className="font-semibold font-titleFont">lorem</h2>
          <h3 className="text-standardGreen font-semibold font-titleFont">
            lorem
          </h3>
        </div>
        <div className="space-y-2">
          <Image src={img10} alt="Chief" className="rounded-full" />
          <h2 className="font-semibold font-titleFont">lorem</h2>
          <h3 className="text-standardGreen font-semibold font-titleFont">
            lorem
          </h3>
        </div>
        <div className="space-y-2">
          <Image src={img11} alt="Chief" className="rounded-full" />
          <h2 className="font-semibold font-titleFont">lorem</h2>
          <h3 className="text-standardGreen font-semibold font-titleFont">
            lorem
          </h3>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Chief;
