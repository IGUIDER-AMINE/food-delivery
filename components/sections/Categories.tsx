import React from "react";
import CardPlate from "../elements/CardPlate";
import { PlateData } from "@/util/data";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <section id="Categories" className="container mx-auto px-4 space-y-16">
      <div className="space-y-8">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-titleFont font-bold text-4xl"
        >
          Top Categories
        </motion.h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-center ">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-standardGreen text-white rounded-xl px-2 py-4"
          >
            All
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-standarSlate bg-white shadow rounded-xl px-2 py-4"
          >
            Noodle Dishes
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-standarSlate bg-white shadow rounded-xl px-2 py-4"
          >
            Rice Dishes
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-standarSlate bg-white shadow rounded-xl px-2 py-4"
          >
            Rolls and Warps
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-standarSlate bg-white shadow rounded-xl px-2 py-4"
          >
            Seafood Dishes
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-standarSlate bg-white shadow rounded-xl px-2 py-4"
          >
            Beverages
          </motion.button>
        </div>
      </div>
      <h1 className="font-titleFont font-bold text-4xl md:text-center">
        Today&apos;s Menu
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PlateData?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <CardPlate
                title={item?.title}
                des={item?.des}
                image={item?.image}
                price={item?.price}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
