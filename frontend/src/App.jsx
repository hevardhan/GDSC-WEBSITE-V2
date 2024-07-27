import React, { useEffect } from "react";
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

    const container = document.querySelector(".card-members");
    gsap.to(".mmm", {
      scrollTrigger: {
        trigger: ".mmm",
        start: "top center", // Adjust based on when you want the animation to start
        end: () => `+=${container.scrollWidth - window.innerWidth}`, // Adjust based on when you want the animation to end
        scrub: true, // This makes the animation smooth as you scroll
        // pin: true, // Pin the element during the scroll
        
      },
      x: -container.scrollWidth + window.innerWidth,
      duration: 1, // Duration of the animation
    });
  
  }, []);

  return (
    <>
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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-michrome text-white text-9xl">MEET THE TEAM</h1>
        </div>
        <div className="relative h-full w-full flex card-members" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="flex items-center justify-end gap-60 h-full mmm">
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
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
          <div className="events-top">
            <a href="youtube.com">
              <EventsCard />
            </a>
          </div>
        </div>
        <div className="justify-center items-center flex">
          <View />
        </div>
      </section>
      <section id="join" className="justify-center items-center flex">
        <JoinContainer />
      </section>
      <Contact />
    </>
  );
}

export default App;
