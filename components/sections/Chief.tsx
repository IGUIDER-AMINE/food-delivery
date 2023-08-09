import { img10, img11, img9 } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Chief = () => {
  return (
    <section id="Chief" className="container mx-auto px-4 space-y-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 justify-between"
      >
        <h1 className="font-titleFont font-bold text-4xl">
          Meet with our Chief
        </h1>
        <div>
          <button className="bg-standardGreen text-white rounded-xl px-6 py-2">
            View all chief
          </button>
        </div>
      </motion.div>
      <div className="flex flex-col flex-wrap md:flex-row justify-evenly gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-2 flex flex-col items-center"
        >
          <Image src={img9} alt="Chief" className="rounded-full w-56 h-56" />
          <h2 className="font-semibold font-titleFont">
            RASALINA DE WILLAMSON
          </h2>
          <h3 className="text-standardGreen font-semibold font-titleFont">
            12 YEAR EXPERIENCE
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2 flex flex-col items-center"
        >
          <Image src={img10} alt="Chief" className="rounded-full w-56 h-56" />
          <h2 className="font-semibold font-titleFont">MARK HENRY TIX</h2>
          <h3 className="text-standardGreen font-semibold font-titleFont">
            09 YEAR EXPERIENCE
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-2 flex flex-col items-center"
        >
          <Image src={img11} alt="Chief" className="rounded-full w-56 h-56" />
          <h2 className="font-semibold font-titleFont">YLINA PITERSON KIM</h2>
          <h3 className="text-standardGreen font-semibold font-titleFont">
            06 YEAR EXPERIENCE
          </h3>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex gap-4"
      >
        <BsTwitter className="w-6 h-6" />
        <AiOutlineGoogle className="w-6 h-6" />
        <BsInstagram className="w-6 h-6" />
        <FaFacebookF className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Chief;
