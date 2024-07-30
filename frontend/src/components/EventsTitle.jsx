import React, { useEffect, useRef } from 'react';
import '../index.css'

const EventsTitle = () => {
  const glitchElementRef = useRef(null);
  const isGlitchingRef = useRef(false);
  const glitchTimeoutRef = useRef(null);
  const lastScrollTopRef = useRef(0);

  const startGlitch = () => {
    if (isGlitchingRef.current) return;
    isGlitchingRef.current = true;
    glitchElementRef.current?.classList.remove('no-glitch');
    glitchElementRef.current?.classList.add('glitch');

    glitchTimeoutRef.current = setTimeout(() => {
      stopGlitch();
    }, 1000);
  };

  const stopGlitch = () => {
    isGlitchingRef.current = false;
    glitchElementRef.current?.classList.remove('glitch');
    glitchElementRef.current?.classList.add('no-glitch');
    if (glitchTimeoutRef.current) {
      clearTimeout(glitchTimeoutRef.current);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTopRef.current || st < lastScrollTopRef.current) {
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
    <div className='flex justify-center items-center'>
      <h1 ref={glitchElementRef} className="glitch text-white text-9xl">
        Events
        <span>Events</span>
        <span>Events</span>
      </h1>
    </div>
    
  );
}

export default EventsTitle;