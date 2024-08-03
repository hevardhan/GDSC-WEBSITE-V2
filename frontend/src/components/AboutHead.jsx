
import React, { useEffect, useRef } from 'react';

const AboutHead = () => {
  const glitchElementRef = useRef(null);
  const isGlitchingRef = useRef(false);
  const glitchTimeoutRef = useRef(null);
  const lastScrollTopRef = useRef(0);

  const startGlitch = () => {
    if (isGlitchingRef.current) return;
    isGlitchingRef.current = true;
    glitchElementRef.current?.classList.remove('no-glitch');

    glitchTimeoutRef.current = setTimeout(() => {
      stopGlitch();
    }, 1000); // 1000ms = 2 iterations of 500ms
  };

  const stopGlitch = () => {
    isGlitchingRef.current = false;
    glitchElementRef.current?.classList.add('no-glitch');
    if (glitchTimeoutRef.current) {
      clearTimeout(glitchTimeoutRef.current);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTopRef.current) {
        // Scrolling down
        startGlitch();
      } else if (st < lastScrollTopRef.current) {
        // Scrolling up
        startGlitch();
      }
      lastScrollTopRef.current = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return (
    <h1 ref={glitchElementRef} className="glitch text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mx-15">
      <span aria-hidden="true">About Us</span>
      About Us
      <span aria-hidden="true">About Us</span>
    </h1>
  );
};

export default AboutHead;