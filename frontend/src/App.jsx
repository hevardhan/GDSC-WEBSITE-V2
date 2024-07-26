import axios from 'axios'
import React from 'react';
import Navbar from './components/Navbar'
import Mesh from './components/mesh'
import Home from './components/home'
import Grobj from './components/grobj'
import Grobj2 from './components/grobj2'
import Search from './components/Search'
import AboutBody from './components/AboutBody'
import Contact from "./components/ContactUsSection";
import Members from "./components/Members";
import EventsTitle from "./components/EventsTitle";
import EventsCard from "./components/EventsCard";
import JoinUs from "./components/join";
import JoinContainer from "./components/JoinContainer";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ModeSwitch from "./components/ModeSwitch";
function App() {
  return (
    <>
      <section id='home'>
        <Navbar />
        <div className="h-full flex flex-col">
          <div className="flex-1 animation_layer">
            <Home />
            <div className="bottom-0 left-0 right-0 flex justify-between w-full">
              <Grobj />
              <Grobj2 />
            </div>
          </div>
          <div className="flex-1 bg-black animation_layer">
            <Mesh />
          </div>
        </div>
        <div className="flex-1">
          <Mesh />
        </div>
      </section>
      <section className='sizeUp'>
        <Search/>
        <AboutBody/>
        <button className='btn font-michrome ml'style={{ marginLeft: '36px' }}>MORE</button>
      </section>
      <section className="relative flex items-center justify-center" id='team'>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-michrome text-white text-9xl">MEET THE TEAM</h1>
        </div>
        <div className="relative h-full w-full  card-members">
          <div className="flex items-center w-full justify-end gap-60 h-full">
            <Members />
            <Members />
            <Members />
            <Members />
          </div>
        </div>
      </section>
      <section id='events'>
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
      </section>
      <section id='join' className="justify-center items-center flex bg-red-500">
        <JoinContainer />
      </section>
      <Contact/>
    </>
  )
}

export default App