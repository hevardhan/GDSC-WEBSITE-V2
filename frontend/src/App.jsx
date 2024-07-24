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

      </section>
    </>
  )
}

export default App
