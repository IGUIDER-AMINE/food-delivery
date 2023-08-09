import { AiFillCheckCircle } from "react-icons/ai";
import { img7, img8 } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  return (
    <section id="Features" className="container text-standarGray mx-auto px-4">
      <div className="grid xl:grid-cols-12 gap-4">
        <div className="col-span-6 space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-titleFont text-4xl font-bold text-standardBlack"
          >
            Key features of Vietnam food include
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Vietnamese food to the diverse and flavourful cuisine originating
            from Vietnam, a Southeast Asian country with a rich culinary
            heritage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex items-center gap-x-2"
          >
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Fresh Ingredients</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-x-2"
          >
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Light and Healthy</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex items-center gap-x-2"
          >
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Rice and Noodles</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-x-2"
          >
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Aromatic Herbs and Spices</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex items-center gap-x-2"
          >
            <AiFillCheckCircle className="h-6 w-6 text-standardGreen" />
            <span>Street Fooed Culture</span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-standardGreen text-white rounded-xl px-6 py-2"
          >
            Read more
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="col-span-3"
        >
          <Image src={img7} alt="Food" className="rounded-3xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="col-span-3"
        >
          <Image src={img8} alt="Food" className="rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
