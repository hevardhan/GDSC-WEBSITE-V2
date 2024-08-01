import React from 'react';

const LogoContactInfo = () => {
  return (
    <div className="logo-contact-info flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
      <img
        src="/1668434641684.jpg"
        alt="GDSC Logo"
        className="logo-img w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto sm:mx-0"
      />
      <p className="contact-text ml-0 sm:ml-4 mt-4 sm:mt-0 info-text text-xs sm:text-sm md:text-base lg:text-lg">
        Google Developer Student Club<br />
        Symbiosis Institute of Technology, Pune<br />
        Maharashtra
      </p>
    </div>
  );
};

export default LogoContactInfo;

