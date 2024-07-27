import React from 'react';

const SocialLinks = () => {
  return (
    <div className="parent">
      <div className="child child-1">
        <button className="SocialButton btn-1">
          <img src="/facebook.png" alt="Facebook" height="32" className='facebookSmall'/>
        </button>
      </div>
      <div className="child child-2">
        <button className="SocialButton btn-2">
          <img src="/instagram.png" alt="Instagram" height="32" />
        </button>
      </div>
      <div className="child child-3">
        <button className="SocialButton btn-3">
          <img src="/twitter.png" alt="Twitter" height="32" />
        </button>
      </div>
      <div className="child child-4">
        <button className="SocialButton btn-4">
          <img src="/linkedin.png" alt="LinkedIn" height="32" />
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;