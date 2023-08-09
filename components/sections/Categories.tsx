import React from "react";
import CardPlate from "../elements/CardPlate";
import { PlateData } from "@/util/data";

const Categories = () => {
  return (
    <section id="Categories" className="container mx-auto px-4 space-y-16">
      <div className="space-y-8">
        <h1 className="font-titleFont font-bold text-4xl">Top Categories</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-center ">
          <button className="bg-standardGreen text-white rounded-xl px-2 py-4">
            All
          </button>
          <button className="text-standarSlate bg-white shadow rounded-xl px-2 py-4">
            Noodle Dishes
          </button>
          <button className="text-standarSlate bg-white shadow rounded-xl px-2 py-4">
            Rice Dishes
          </button>
          <button className="text-standarSlate bg-white shadow rounded-xl px-2 py-4">
            Rolls and Warps
          </button>
          <button className="text-standarSlate bg-white shadow rounded-xl px-2 py-4">
            Seafood Dishes
          </button>
          <button className="text-standarSlate bg-white shadow rounded-xl px-2 py-4">
            Beverages
          </button>
        </div>
      </div>
      <h1 className="font-titleFont font-bold text-4xl md:text-center">
        Today&apos;s Menu
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PlateData?.map((item, index) => {
          return (
            <CardPlate
              key={index}
              title={item?.title}
              des={item?.des}
              image={item?.image}
              price={item?.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
