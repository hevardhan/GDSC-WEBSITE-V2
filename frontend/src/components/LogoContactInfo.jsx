import React from 'react';

const LogoContactInfo = () => {
  return (
    <div className="logo-contact-info flex items-center justify-center">
      <img
        src="/1668434641684.jpg"
        alt="GDSC Logo"
        className="logo-img w-28 sm:w-40"
      />
      <p className="contact-text ml-4 info-text text-sm sm:text-lg">
        Google Developer Student Club<br />
        Symbiosis Institute of Technology, Pune<br />
        Maharashtra
      </p>
    </div>
  );
};

export default LogoContactInfo;