import axios from 'axios'
import React from 'react';
import Navbar from './components/Navbar'
import Mesh from './components/mesh'
import Home from './components/home'
import Grobj from './components/grobj'
import Grobj2 from './components/grobj2'

function App() {
  return (
    <>
      <section>
        <Navbar />
        <div className="h-full flex flex-col ">
          <div className="flex-1 z-10">
            <Home />
            <div className="bottom-0 left-0 right-0 flex justify-between w-full">
              <Grobj />
              <Grobj2 />
            </div>
          </div>
          <div className="flex-1">
            <Mesh />
          </div>
        </div>
      </section>
      <section>
        <h2 class="text-white text-6xl text-center pt-14">About Us</h2>
        <p class="text-white text-2xl text-center pt-2" >Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies.</p>
      </section>
      <section>
        <h1>THIS IS A FUCKING TEST</h1>
      </section>
      <section>
        Hey bro
      </section>
    </>
  )
}

export default App
