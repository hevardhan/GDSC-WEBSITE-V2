import React from 'react';

const SocialLinks = () => {
  return (
    <div className="parent">
      <div className="child child-1">
        <button className="SocialButton btn-1">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" height="32" className='facebookSmall'/>
          </a>
        </button>
      </div>
      <div className="child child-2">
        <button className="SocialButton btn-2">
          <a href="https://www.instagram.com/gdsc_sit/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" height="32" />
          </a>
        </button>
      </div>
      <div className="child child-3">
        <button className="SocialButton btn-3">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" height="32" />
          </a>
        </button>
      </div>
      <div className="child child-4">
        <button className="SocialButton btn-4">
          <a href="https://www.linkedin.com/company/gdsc-sit-pune/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" height="32" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;