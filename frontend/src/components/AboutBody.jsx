import React from 'react';
import dinoImage from '/dino.jpg';
import AboutHead from './AboutHead';
import AboutButton from "./AboutButton";

const AboutBody = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-12 p-4 font-michrome bg-black">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-xl h-auto">
        <div className="w-full md:max-w-xl mx-8 mb-8 md:mb-0">
          <div className="relative">
            <p className="text-white text-xs left-0">&lt;h2&gt;</p>
            <AboutHead />
            <p className="text-white text-xs absolute right-0 bottom--10 mr-10">&lt;/h2&gt;</p>
          </div>

          <div className="mt-10 mr-10 md:mt-20 relative">
            <p className="text-white text-xs">&lt;p&gt;</p>
            <p className="text-white my-2 text-base md:text-lg leading-relaxed p-4">
              At <span className='text-green-500'>GDSC SIT</span>,we innovate by using our resources to foster learning, skill enhancement, and industry connections through hands-on projects and workshops.
            </p>
            <p className="text-white text-xs absolute right-0 bottom-0">&lt;/p&gt;</p>
          </div>
          {/* <AboutButton /> */}
        </div>
        <div className="hidden md:block w-full md:max-w-sm mx-8">
          <img src={dinoImage} alt="dino" className="h-32 sm:h-40 md:h-64" />
        </div>
      </div>
    </div>
  );
};

export default AboutBody;