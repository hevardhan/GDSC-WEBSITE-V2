import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Members';
import image1 from '../assets/4.png';
import image2 from '../assets/5.png';
import image3 from '../assets/6.png';
import image4 from '../assets/7.png';
import image5 from '../assets/8.png';
import image6 from '../assets/9.png';
import image7 from '../assets/10.png';
import image8 from '../assets/11.png';

gsap.registerPlugin(ScrollTrigger);

const MeetTeam = () => {
  const targetRef = useRef(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const teamMembers = [
    { name: 'Yajushrestra Shukla', designation: 'CP Head', image: image1 },
    { name: 'Hevardhan.S', designation: 'Web Dev', image: image2 },
    { name: 'Megha Beria', designation: 'CP', image: image3 },
    { name: 'Sumedh Dongre', designation: 'Flutter', image: image4 },
    { name: 'Yash Parkhi', designation: 'Game Dev', image: image5 },
    { name: 'Dhairya Mehera', designation: 'Cloud', image: image6 },
    { name: 'Siddharth Prabhakar', designation: 'Android', image: image7 },
    { name: 'Smriti Sinha', designation: 'AI', image: image8 },
  ];

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { scale: 1.5, yPercent: 50 },
        {
          scale: 1,
          yPercent: 0,
          scrollTrigger: {
            trigger: targetRef.current,
            start: 'top center',
            end: 'top top',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black max-h-screen w-full text-white">
      <div ref={titleRef} className="sticky top-0 bg-black z-10">
        <div className="flex h-12 md:h-16 items-center justify-center mb-1"> {/* Adjusted the margin-bottom here */}
          <h2 ref={glitchElementRef} className="glitch text-4xl md:text-6xl">
            <span aria-hidden="true">Meet the Team</span>
            Meet the Team
            <span aria-hidden="true">Meet the Team</span>
          </h2>
        </div>
      </div>
      <section ref={targetRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-10 md:top-14 flex h-[calc(100vh-2.5rem)] md:h-[calc(100vh-3.5rem)] items-center overflow-hidden"> {/* Adjusted the top positioning here */}
          <motion.div style={{ x }} className="flex gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} {...member} />
            ))}
            <div className="flex items-center justify-center">
              <a href="#more-content" className="bg-blue-500 text-white py-2 px-3 md:py-2 md:px-4 rounded-lg text-lg md:text-xl font-bold">
                See More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MeetTeam;
