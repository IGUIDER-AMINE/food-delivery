import React from "react";

const Reserve = () => {
  return (
    <section id="Reserve" className="container mx-auto px-4 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <h1 className="font-titleFont font-bold text-4xl">
          Meet with our Chief
        </h1>
        <div>
          <button className="bg-standardGreen text-white rounded-xl px-6 py-2">
            Book a Table
          </button>
        </div>
      </div>
      <hr className="h-[1.5px] bg-standardBlack" />
      <p className="text-standarGray">
        Remember that reservation plicies can vary from one restaurant to
        another,
        <br className="hidden md:block" /> so it&apos;s important to read and
        understand our terms before making a reservation...
      </p>
    </section>
  );
};

export default Reserve;
