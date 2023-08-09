import Image from "next/image";
import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { img3 } from "@/public/assets";

const CardPlate = () => {
  return (
    <div className="shadow">
      <Image src={img3} alt="Food" className="rounded-t-xl" />
      <div className="p-4 space-y-2">
        <h2 className="font-titleFont font-bold text-lg">
          VEGETABLE SPRING ROLLS
        </h2>
        <h3 className="font-titleFont text-[14px] text-standarGray">
          Ingredients, tomato, lutess, capsicum
        </h3>
        <div className="flex items-center justify-between">
          <div className="font-semibold">
            PRICE - <span className="text-standarPink">$325.00</span>/$348
          </div>
          <GoPlusCircle className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default CardPlate;
