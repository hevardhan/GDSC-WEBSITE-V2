import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import axios from "axios";
import MeetTeam from "./components/MeetTeam";
import GamePopup from "./components/GamePopup";
import BackToTop from "./components/BackToTop";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const membersComponents = [];

  // BACKEND DATA FETCH STUFF
  // const [memberData, setMemberData] = useState([]);
  //  const [eventsData, setEventsData] = useState([]);

  //  const membersAPI = 'http://localhost:8000/team/';
  //  const eventsAPI = 'http://localhost:8000/events/';

  //  const fetchMemberData = async () => {
  //    const response = await axios.get(membersAPI);
  //    setMemberData(response.data);
  //    return response.data;
  //  }

  //  const fetchEventsData = async () => {
  //    const response = await axios.get(eventsAPI);
  //    setEventsData(response.data);
  //    return response.data;
  //  }

  //  useEffect(() => {
  //    fetchMemberData();
  //    fetchEventsData();
  //  }, []);

  //  memberData.map((member, index) => {
  //    membersComponents.push(
  //      <Members key={index} 
  //      name={member.Name} 
  //      position={member.Position} 
  //      facebook={member.Facebook_Link}
  //      github={member.Github_Link} 
  //      linkedin={member.Linkedin_Link}
  //      />
  //    );
  //  })

  const memberDetails = [
    {
      Name: 'Yajushreshtha Shukla',
      Position: 'Core Lead',
      Facebook_Link: 'https://www.instagram.com/daym_yaju/',
      Linkedin_Link: 'https://www.linkedin.com/in/yajushreshtha-shukla/',
      Github_Link: 'https://github.com/Soyvor'
    },
    {
      Name: 'Divyansh Kumar',
      Position: 'CP Lead',
      Facebook_Link: 'https://www.instagram.com/divyanshkumarr_/#',
      Linkedin_Link: 'https://www.linkedin.com/in/divyanshhkr/',
      Github_Link: 'https://github.com'
    },
    {
      Name: 'Hevardhan',
      Position: 'WebDev Lead',
      Facebook_Link: 'https://www.instagram.com/its_hevardhan/',
      Linkedin_Link: 'https://www.linkedin.com/in/hevardhan-saravanan-33642024a/',
      Github_Link: 'https://github.com/hevardhan/'
    },
    {
      Name: 'Manan Bhimjiyani',
      Position: 'Flutter Lead',
      Facebook_Link: 'https://www.instagram.com/mananbhimjiyani/',
      Linkedin_Link: 'https://www.linkedin.com/in/mananbhimjiyani/',
      Github_Link: 'https://github.com/mananbhimjiyani'
    },
    {
      Name: 'Yash Parkhi',
      Position: 'GameDev Lead',
      Facebook_Link: 'https://www.instagram.com/_yiungyiung/',
      Linkedin_Link: 'https://www.linkedin.com/in/yash-parkhi-737773217/',
      Github_Link: 'https://github.com/yiungyiung'
    },
    {
      Name: 'Gautam Rajhans',
      Position: 'Cloud Lead',
      Facebook_Link: 'https://www.instagram.com/gprajhans/',
      Linkedin_Link: 'https://www.linkedin.com/in/gautam-rajhans-06b648198/',
      Github_Link: 'https://github.com/capricode-ui'
    },
    {
      Name: 'Dhairya Mehra',
      Position: 'DevOps Lead',
      Facebook_Link: 'https://www.instagram.com/dhairya_mehra_1611/',
      Linkedin_Link: 'https://www.linkedin.com/in/dhairya-mehra-705a36203/',
      Github_Link: 'https://github.com/Dhairya-A-Mehra'
    },
    {
      Name: 'Soham Phadke',
      Position: 'Android Lead',
      Facebook_Link: 'https://www.instagram.com/_sohhhhaamm_/',
      Linkedin_Link: 'https://www.linkedin.com/in/soham-phadke-b18673241/',
      Github_Link: 'https://github.com/cxder-soham'
    },
    {
      Name: 'Aaradhya Badal',
      Position: 'AI Lead',
      Facebook_Link: 'https://www.instagram.com/aaradhya_badal/',
      Linkedin_Link: 'https://www.linkedin.com/in/aaradhya-badal-502777249/',
      Github_Link: 'https://www.kaggle.com/aaradhyabadal'
    },
    {
      Name: 'Ria Vinod',
      Position: 'Socials Lead',
      Facebook_Link: 'https://www.instagram.com/riavinod_/',
      Linkedin_Link: 'https://www.linkedin.com/in/ria-vinod/',
      Github_Link: 'https://github.com/riavinod10'
    }
  ];

  for (let i = 0; i < memberDetails.length; i++) {
    membersComponents.push(
      <Members key={`${i}`} 
      name={memberDetails[i].Name} 
      position={memberDetails[i].Position}
      facebook={memberDetails[i].Facebook_Link} 
      linkedin={memberDetails[i].Linkedin_Link} 
      github={memberDetails[i].Github_Link} 
      />
    );
  }

  useEffect(() => {
    const races = document.querySelector(".races");
    const team = document.querySelector("#team");

    function getScrollAmount() {
      return -races.scrollWidth;
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
            height: () => `${getScrollAmount() * -1}`,
          });
        },
      },
      duration: 1,
    });

    console.log("SCROLL AMOUNT:", getScrollAmount());
    console.log("WINDOW INNER WIDTH:", window.innerWidth);
    console.log("WINDOW OUTER WIDTH:", window.outerWidth);

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top top",
      end: () => `+=${getScrollAmount2() * -1}`,
      pin: true,
      animation: tween,
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
          y: `${getScrollAmount2() * -1}`,
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
    const hideTimer = setTimeout(() => setHideApp(true), 5500);

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

  useEffect(() => {
    const alertShown = sessionStorage.getItem("alertShown");

    if (window.innerWidth < 640 && !alertShown) {
      alert("Please rotate your mobile for better experience");
      sessionStorage.setItem("alertShown", "true"); // Mark alert as shown
    }
  }, []);

  return (
    <>
      {!hideApp && (
        <div className="overlay">
          <SplashScreen />
        </div>
      )}
      <section id="home">
        {showPopup && <GamePopup closePopup={toggleGamePopup} />}
        <Navbar onHomeClick={toggleGamePopup} />
        <div className="h-full">
          <div className="animation_layer h-2/3">
            <Home />
          </div>
          <div className="mesh-div bg-black h-1/3 relative">
            <Mesh />
          </div>
        </div>
      </section>
      <section className="sizeUp" id="about">
        <Search />
        <AboutBody />
      </section>
      <section
        className="flex relative items-center justify-center overflow-x-auto" // Use overflow-x-auto for debugging
        id="team"
      >
        <div className="h-full w-full racesWrapper">
          <MeetTeam />
          <div className="flex items-center gap-60 h-full races w-full">
            {membersComponents}
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
      <section
        id="join"
        className="justify-center items-center flex hidden sm:flex"
      >
        <JoinContainer />
      </section>
      <Contact />
      <BackToTop />
    </>
  );
}

export default App;