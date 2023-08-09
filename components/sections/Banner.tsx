import { img1, img2, img3, img4, img5, img6 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section id="Home" className="container mx-auto px-4 space-y-4">
      <h1 className="font-titleFont font-semibold text-2xl md:text-5xl">
        &quot;Exploring the Delights of <br className="hidden md:block" />
        Vietnamese Cuisine&quot;
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-5 space-y-4 xl:space-x-12 items-center">
        <div className="xl:col-span-3">
          <Image
            src={img1}
            alt="Home"
            priority
            className="rounded-3xl bg-cover max-h-[430px]"
          />
        </div>
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-y-2">
          <div className="flex space-x-2 items-center">
            <Image src={img2} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Pho :</h2>
              <p className="text-standarGray text-[14px]">
                pho is a fragrant and comforting noodle soup typically made with
                beef or chicken
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Image src={img3} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Mi Quang :</h2>
              <p className="text-standarGray text-[14px]">
                A vibrant dish from Central Vietnam, mi quang is made with
                tumeric etc...
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Image src={img4} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Nem Ran :</h2>
              <p className="text-standarGray text-[14px]">
                Vietnamese sping rolls, often referred to as egg rolls, are
                crispy rolls filled with ground...
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Image src={img5} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Banh Mi :</h2>
              <p className="text-standarGray text-[14px]">
                This Vietnamese sandwich is a fusion of French and Vietnamese
                culinary inffuences.
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Image src={img6} alt="Pho" className="rounded-xl h-20 w-24" />
            <div className="flex-1">
              <h2 className="font-titleFont font-semibold">Goi cuon :</h2>
              <p className="text-standarGray text-[14px]">
                Unveiling the Fresh Delight of Vietnamese Spring Rolls
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
