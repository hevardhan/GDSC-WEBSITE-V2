import React from 'react';
import dinoImage from '/dino.jpg';
import AboutHead from './AboutHead';

const AboutBody = () => {
  return (
    <div className="flex justify-center items-center mt-12 p-4 font-michrome bg-black">
      <div className="flex justify-between w-full max-w-screen-xl h-auto">
        <div className="w-full max-w-xl mx-8">
          <div className="relative">
            <p className="text-white text-xs">&lt;h2&gt;</p>
            <AboutHead/>
            <p className="text-white text-xs absolute right-0 bottom-0">&lt;/h2&gt;</p>
          </div>
          
          <div className="mt-20 relative">
            <p className="text-white text-xs">&lt;p&gt;</p>
            <p className="text-white my-2 text-lg leading-relaxed p-4">
              <span className='text-green-500'>Lorem ipsum</span> dolor sit amet,
              consectetur adipiscing elit.
              Integer mollis felis ut
              vulputate fermentum.
              Praesent nec risus <span className='text-green-500'>purus</span>.
            </p>
            <p className="text-white text-xs absolute right-0 bottom-0">&lt;/p&gt;</p>
          </div>
        </div>
        <div className="w-full max-w-sm mx-8">
            <img src={dinoImage} alt="dino" className="h-64" />
        </div>
      </div>
    </div>
  );
};

export default AboutBody;

