import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowProducts(false);
    const href = e.currentTarget.href;
    const taretId = href.replace(/.*\#/, "");
    const elem = document.getElementById(taretId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <section className="w-full sticky bg-[#FEFDF9] text-[#FFC62D] top-0 z-10">
      <div className="text-[15px] font-medium py-4 flex items-center justify-between container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl font-titleFont">Burrger</span>
        </motion.div>
        <div className="hidden xl:inline-flex">
          <ul className="flex gap-x-5 text-standardGreen">
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="#Home" onClick={handleScroll}>
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="#Products" onClick={handleScroll}>
                Products
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="#Store" onClick={handleScroll}>
                Store
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="#AboutUs" onClick={handleScroll}>
                About us
              </Link>
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden xl:block text-standardGreen"
        >
          <button className="flex items-end gap-2 text-[14px] rounded-full text-[#C6381F] bg-[#FFC62D] px-8 py-3">
            Sign in
          </button>
        </motion.div>
        <div
          onClick={() => setShowProducts(true)}
          className="w-6 h-5 flex flex-col justify-between items-center xl:hidden text-4xl cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-[#FFC62D] inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-[#FFC62D] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-[#FFC62D] inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {/* sideBar */}
        {showProducts ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex z-10 flex-col gap-y-4 p-4 bg-[#F0F0F0] top-0 left-0 w-full h-screen absolute"
          >
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl font-titleFont">Burrger</span>
              </motion.div>
              <MdOutlineClose
                onClick={() => setShowProducts(false)}
                className="text-3xl text-[#FFC62D] cursor-pointer absolute top-4 right-4"
              />
            </div>
            <ul className="space-y-4">
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="#Home" onClick={handleScroll}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="#Products" onClick={handleScroll}>
                  Products
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="#Store" onClick={handleScroll}>
                  Store
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link href="#AboutUs" onClick={handleScroll}>
                  About us
                </Link>
              </motion.li>
            </ul>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="flex items-end gap-2 text-[14px] rounded-full text-[#C6381F] bg-[#FFC62D] px-8 py-3">
                Sign in
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default Header;
