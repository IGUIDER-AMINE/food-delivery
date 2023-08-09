import Image from "next/image";
import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { img3 } from "@/public/assets";

interface Props {
  title: string;
  des: string;
  image: string;
  price: number;
}
const CardPlate = ({ title, des, image, price }: Props) => {
  return (
    <div className="shadow">
      <Image
        src={image}
        alt="Food"
        className="rounded-t-xl w-full object-cover h-[226px]"
        width={400}
        height={300}
      />
      <div className="p-4 space-y-2">
        <h2 className="font-titleFont truncate font-bold text-lg">{title}</h2>
        <h3 className="font-titleFont truncate text-[14px] text-standarGray">
          Ingredients: {des}
        </h3>
        <div className="flex items-center justify-between">
          <div className="font-semibold truncate">
            PRICE - <span className="text-standarPink">${price}</span>/$348
          </div>
          <button>
            <GoPlusCircle className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlate;
