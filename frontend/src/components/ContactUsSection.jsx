import React, {useState, useEffect} from 'react';
import Header from './Header';
import '../ContactUsSection.css'; // Continue to use for specific styles not covered by Tailwind
import LogoContactInfo from './LogoContactInfo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const ContactUsSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleContactArrowClick = () => {
    setFormVisible(!isFormVisible);
  };

  useEffect(() => {
    let timer;
    if (isFormVisible) {
      const script = document.createElement('script');
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      document.body.appendChild(script);

      timer = setTimeout(() => {
        setFormVisible(false);
      }, 100000); // Adjust the time (in milliseconds) as needed

      return () => {
        document.body.removeChild(script);
        clearTimeout(timer);
      };
    }
  }, [isFormVisible]);

  return (
    <div className="contact-section" id='contact'>
      <div className="contact-header">
        <Header />
        <div className="contact-arrow-container" onClick={handleContactArrowClick}>
          <div className="contact-arrow">
            <button className="button">
              <div className="button-box">
                <span className="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                    ></path>
                  </svg>
                </span>
                <span className="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path
                      d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-8">
        <LogoContactInfo />
        <Navigation />
      </div>
      <div className="text-center mt-8">
        <SocialLinks />
        <p className="mt-4">Developed with <span className="text-pink-500">💖</span></p>
        <p className='copyright'>Copyright &copy;2024, All rights reserved.</p>
      </div>
      {isFormVisible && (
        <div className="visme_d" data-title="Email Contact Form" data-url="n0ed46zn-email-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="85732"></div>
      )}
    </div>
  );
};

export default ContactUsSection;
