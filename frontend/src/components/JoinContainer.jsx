import React from 'react'
import '../Join.css';
import Illus from "../assets/photos/join.gif";
const JoinContainer = () => {
  return (
    <div className='joinusContainer bg-white'>
        <h1 className='text-center text-5xl pt-10'>Become a part of <br></br> our Team</h1>
        <div className='w-full h-1/2'>
        <img src={Illus} alt="this" />
        </div>
    </div>
  )
}

export default JoinContainer