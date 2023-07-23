import React from "react";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="inline-block px-4">
              <Image
                src="/images/demo/demo2.png"
                alt="about image 1"
                className="w-auto h-auto rounded-lg mx-auto mb-8"
              />
          </div>
          <div className="px-4">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Bug free code
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At Campus Careline, we prioritize quality and reliability. We
                make sure that you get the top quality service from us.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Personal Dashboard
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our Solution provides custom dashboard for students, staff and admins from 
                where they can manage different and appropriate things.
              </p>
            </div>
            <div className="mb-1">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Clean UI
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                The Education software should have a very clean and sleak UI 
                and at Campus Careline we focus on making it the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
