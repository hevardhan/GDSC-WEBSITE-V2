import React, { useEffect, useRef } from 'react';

const Home = () => {
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
    <div className='text-center h-full flex items-end justify-center homepage'>
      <h1 ref={glitchElementRef} className="font-poppins text-white text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[8vw] break-words leading-tight no-glitch">
        <span aria-hidden="true">Google Developer Student Club</span>
        Google Developer Student Club
        <span aria-hidden="true">Google Developer Student Club</span>
      </h1>
    </div>
  );
}

export default Home;
