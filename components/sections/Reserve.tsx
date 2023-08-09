import { motion } from "framer-motion";

const Reserve = () => {
  return (
    <section id="Reserve" className="container mx-auto px-4 space-y-6">
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
            Book a Table
          </button>
        </div>
      </motion.div>
      <motion.hr
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="h-[1.5px] bg-standardBlack"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-standarGray"
      >
        Remember that reservation plicies can vary from one restaurant to
        another,
        <br className="hidden md:block" /> so it&apos;s important to read and
        understand our terms before making a reservation...
      </motion.p>
    </section>
  );
};

export default Reserve;
