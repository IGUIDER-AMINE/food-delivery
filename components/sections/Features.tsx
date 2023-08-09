import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const Features = () => {
  return (
    <section id="Features" className="container mx-auto px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <h1 className="font-titleFont font-semibold text-standardBlack">
            Key features of Vietnam food include
          </h1>
          <p className="text-standarGray">
            Vietnamese food to the diverse and flavourful cuisine originating
            from Vietnam, a Southeast Asian country with a rich culinary
            heritage.
          </p>
          <div>
            <AiFillCheckCircle />
            <div>Fresh Ingredients</div>
          </div>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
      </div>
    </section>
  );
};

export default Features;
