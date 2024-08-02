import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Navbar from "./components/Navbar";
import Mesh from "./components/mesh";
import Home from "./components/home";
import Search from "./components/Search";
import AboutBody from "./components/AboutBody";
import Contact from "./components/ContactUsSection";
import Members from "./components/Members";
import EventsTitle from "./components/EventsTitle";
import EventsCard from "./components/EventsCard";
import View from "./components/view";
import JoinContainer from "./components/JoinContainer";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import axios from 'axios'
import MeetTeam from "./components/MeetTeam";
import GamePopup from "./components/GamePopup";
import BackToTop from "./components/BackToTop";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const races = document.querySelector(".races");
    const team = document.querySelector("#team");

    function getScrollAmount() {
      return -(races.scrollWidth);
    }
    function getScrollAmount2() {
      return -(races.scrollWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        onEnter: () => {
          gsap.set("#team", {
            height: () => `+=${getScrollAmount() * -1}`,
          });
        },
        onLeave: () => {
          gsap.set("#team", {
            height: 'auto',
          });
        },
        onLeaveBack: () => {
          gsap.set("#team", {
            height: `-=${getScrollAmount() * -1}`,
          });
        },
      },
      duration: 1,
    });

    console.log(getScrollAmount);
    console.log(window.innerWidth);
    console.log(window.outerWidth);
    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      markers: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onEnter: () => {
        gsap.set(".racesWrapper", {
          x: 0,
          y: 0,
        });
      },
      onLeave: () => {
        gsap.set(".racesWrapper", {
          x: 0,
          y: 0,
        });
      },
      onLeaveBack: () => {
        gsap.set(".racesWrapper", {
          x: 0,
          y: 0,
        });
      },
    });

  }, []);

  useEffect(() => {
    gsap.to(".animation_layer", {
      scale: 0.3,
      scrollTrigger: {
        trigger: ".animation_layer",
        scrub: true,
        start: "bottom 60%",
      },
      duration: 1,
    });

    gsap.to(".mesh-div", {
      y: -400,
      z: 20,
      scrollTrigger: {
        trigger: ".mesh-div",
        scrub: true,
        start: "top 65%",
      },
      duration: 1,
    });

  }, []);

  const [hideApp, setHideApp] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHideApp(true), 6000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  // POPUP STATES:

  const [showPopup, setShowPopup] = useState(false);

  const toggleGamePopup = () => {
    if (window.innerWidth > 768) {
      setShowPopup(!showPopup);
    }
  };

  return (
    <>
      {/* <SplashScreen/> */}
      {/* <div className={`hide ${hideApp ? 'unhide' : ''}`}> */}
      <section id="home">
        {showPopup && <GamePopup closePopup={toggleGamePopup} />}
        <Navbar onHomeClick={toggleGamePopup} />
        <div className="h-full">
          <div className="animation_layer h-2/3">
            <Home />
          </div>
          <div className="mesh-div bg-black h-1/3 relative">
            <Mesh />
            {/* <div className="relative">
              <Grobj />
              <Grobj2 />
            </div> */}
          </div>
        </div>
      </section>
      <section className="sizeUp" id="about">
        <Search />
        <AboutBody />
      </section>
      <section
        className="relative flex items-center justify-center overflow-x-auto" // Use overflow-x-auto for debugging
        id="team"
      >
        <div className="h-full w-full racesWrapper">
          <MeetTeam />
          <div className="flex items-center gap-60 h-full races w-full">
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
          </div>
        </div>
      </section>
      <section id="events">
        <div>
          <EventsTitle />
        </div>
        <div className="h-3/4 items-center flex justify-center">
          <div className="events-top h-72 sm:h-96">
            <a href="youtube.com">
              <EventsCard />
            </a>
          </div>
        </div>
        <div className="justify-center items-center flex transform -translate-y-4">
          <View />
        </div>
      </section>
      <section id="join" className="justify-center items-center flex hidden sm:flex">
        <JoinContainer />
      </section>
      <Contact />
      <BackToTop />
      {/* </div> */}
    </>
  );
}

export default App;
