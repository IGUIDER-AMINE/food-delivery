import { img1, img2, img3, img4, img5, img6 } from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <section id="Home" className="container mx-auto px-4 space-y-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-titleFont font-semibold text-2xl md:text-5xl"
      >
        &quot;Exploring the Delights of <br className="hidden md:block" />
        Vietnamese Cuisine&quot;
      </motion.h1>
      <div className="grid grid-cols-1 xl:grid-cols-5 space-y-4 xl:space-x-12 items-center">
        <motion.div
          className="xl:col-span-3"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src={img1}
            alt="Home"
            priority
            className="rounded-3xl bg-cover max-h-[430px]"
          />
        </motion.div>
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-y-2">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex space-x-2 items-center"
          >
            <Image src={img2} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Pho :</h2>
              <p className="text-standarGray text-[14px]">
                pho is a fragrant and comforting noodle soup typically made with
                beef or chicken
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-2 items-center"
          >
            <Image src={img3} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Mi Quang :</h2>
              <p className="text-standarGray text-[14px]">
                A vibrant dish from Central Vietnam, mi quang is made with
                tumeric etc...
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex space-x-2 items-center"
          >
            <Image src={img4} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Nem Ran :</h2>
              <p className="text-standarGray text-[14px]">
                Vietnamese sping rolls, often referred to as egg rolls, are
                crispy rolls filled with ground...
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-2 items-center"
          >
            <Image src={img5} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Banh Mi :</h2>
              <p className="text-standarGray text-[14px]">
                This Vietnamese sandwich is a fusion of French and Vietnamese
                culinary inffuences.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex space-x-2 items-center"
          >
            <Image src={img6} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Goi cuon :</h2>
              <p className="text-standarGray text-[14px]">
                Unveiling the Fresh Delight of Vietnamese Spring Rolls
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
