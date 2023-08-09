import React from "react";

const AboutUs = () => {
  return (
    <section id="Banner" className="container mx-auto px-4">
      <div className="container mx-auto flex flex-col lg:flex-row p-3 lg:space-x-4 xl:px-12 gap-4 rounded-3xl bg-standardGreen text-white">
        <h1 className="font-titleFont py-4 text-2xl self-center">
          What is the speciality of Vietnam food
        </h1>
        <div className="w-full h-[0.2px] lg:h-auto lg:w-[0.2px] bg-standarGray"></div>
        <p className="font-normal py-4 self-center text-standarGray">
          The specialty of Vietnamese food lies in its unique blend of flavors,
          textures, and cultural influences that create a truly captivating
          culinary experience. Several key elements contribute to the
          distinvtiveness of Vietnamese cuisine:
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
