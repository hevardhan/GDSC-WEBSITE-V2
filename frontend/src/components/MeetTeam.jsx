import React, { useEffect, useRef } from 'react';
import '../index.css';

const MeetTeam = () => {
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
    <div className='absolute top-80 left-0 w-full flex items-center justify-center'>
      <h1 ref={glitchElementRef} className="font-michrome text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        MEET THE TEAM
        <span aria-hidden="true">MEET THE TEAM</span>
        <span aria-hidden="true">MEET THE TEAM</span>
      </h1>
    </div>
  );
}

export default MeetTeam;