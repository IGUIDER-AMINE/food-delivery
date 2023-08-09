import { img7, img8 } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const Features = () => {
  return (
    <section id="Features" className="container text-standarGray mx-auto px-4">
      <div className="grid xl:grid-cols-12 gap-4">
        <div className="col-span-6 space-y-6">
          <h1 className="font-titleFont text-5xl font-bold text-standardBlack">
            Key features of Vietnam food include
          </h1>
          <p>
            Vietnamese food to the diverse and flavourful cuisine originating
            from Vietnam, a Southeast Asian country with a rich culinary
            heritage.
          </p>
          <div className="flex items-center gap-x-2">
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Fresh Ingredients</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Light and Healthy</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Rice and Noodles</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Aromatic Herbs and Spices</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Street Fooed Culture</span>
          </div>
          <button className="bg-standardGreen text-white rounded-xl px-6 py-2">
            Read more
          </button>
        </div>
        <div className="col-span-3">
          <Image src={img7} alt="Food" className="rounded-3xl" />
        </div>
        <div className="col-span-3">
          <Image src={img8} alt="Food" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Features;
