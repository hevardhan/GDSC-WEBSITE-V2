import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Navbar from "./components/Navbar";
import Mesh from "./components/mesh";
import Home from "./components/home";
import Grobj from "./components/grobj";
import Grobj2 from "./components/grobj2";
import Search from "./components/Search";
import AboutBody from "./components/AboutBody";
import Contact from "./components/ContactUsSection";
import Members from "./components/Members";
import EventsTitle from "./components/EventsTitle";
import EventsCard from "./components/EventsCard";
import JoinUs from "./components/join";
import View from "./components/view";
import JoinContainer from "./components/JoinContainer";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ModeSwitch from "./components/ModeSwitch";
import SplashScreen from "./components/SplashScreen";
import MeetTeam from "./components/MeetTeam";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to(".animation_layer",{
      scale:0.3,
      scrollTrigger : {
        trigger: ".animation_layer",
        scrub:true,
        start: "bottom 60%",
      },
      duration:1
    })
    gsap.to(".mesh-div",{
      y: -400,
      z: 20,
      scrollTrigger : {
        trigger: ".mesh-div",
        scrub:true,
        start: "top 65%",
      },
      duration:1
    });

  }, []);

  const [hideApp, setHideApp] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHideApp(true), 6000);

    return () => {
      clearTimeout(hideTimer);
    }
  }, []);

  return (
    <>
      <SplashScreen/>
      <div className={`hide ${hideApp ? 'unhide' : ''}`}>
      <section id="home">
        <Navbar />
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
      <section className="sizeUp">
        <Search />
        <AboutBody />
        <button className="btn font-michrome ml" style={{ marginLeft: "36px" }}>
          MORE
        </button>
      </section>
      <section
        className="relative flex items-center justify-center overflow-x-auto" // Use overflow-x-auto for debugging
        id="team"
      >
        <MeetTeam/>
        <div className="h-full w-full card-members">
          <div className="flex items-center justify-end gap-60 h-full mmm w-full">
            <Members />
          </div>
        </div>
      </section>

      <section id="events">
        <div>
          <EventsTitle />
        </div>
        <div className="h-3/4 items-center flex justify-center">
          <div className="events-top">
            <a href="youtube.com">
              <EventsCard />
            </a>
          </div>
        </div>
        <div className="justify-center items-center flex transform -translate-y-4">
          <View />
        </div>
      </section>
      <section id="join" className="justify-center items-center flex">
        <JoinContainer />
      </section>
      <Contact />
      </div>
    </>
  );
}

export default App;
