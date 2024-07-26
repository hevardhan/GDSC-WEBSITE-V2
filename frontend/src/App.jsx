import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Grobj from './components/grobj';
import Grobj2 from './components/grobj2';
import Mesh from './components/mesh';
import ContactUsSection from './components/ContactUsSection';

function App() {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Home />
          <div className="flex justify-between">
            <Grobj />
            <Grobj2 />
          </div>
        </div>
        <div className="flex-1">
          <Mesh />
        </div>
      </section>
      <section className="min-h-screen">
        <ContactUsSection />
      </section>
    </>
  );
}

export default App;