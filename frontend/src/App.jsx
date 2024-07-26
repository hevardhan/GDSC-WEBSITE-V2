import axios from 'axios'
import React from 'react'
import Navbar from './components/Navbar'
import Mesh from './components/mesh'
import Home from './components/home'
import Grobj from './components/grobj'
import Grobj2 from './components/grobj2'

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
      <section>
        <h2 class="text-white text-6xl text-center pt-14">About Us</h2>
        <p class="text-white text-2xl text-center pt-2" >Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies.</p>
      </section>
      <section id='join'>

      </section>
      <Contact/>
    </>
  );
}

export default App;
