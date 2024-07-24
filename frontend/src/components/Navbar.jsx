import React from 'react'

import LOGO from "../assets/photos/gdsc.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 pt-10">
        <img className="w-[100px] flex-shrink-0" src={LOGO} alt="" />
        <button className="flex-shrink-0">
            <span className="button_top font-michrome">Menu</span>
        </button>
    </div>

  )
}

export default Navbar