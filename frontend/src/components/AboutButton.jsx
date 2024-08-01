import React from 'react';

const AboutButton = () => {
    return (
        <button className="bg-black w-[60px] sm:w-[80px] md:w-[100px] text-white border border-white rounded-md px-2 sm:px-4 py-1 sm:py-2 transition-transform duration-200 shadow-white shadow-[0.1rem_0.1rem_0] hover:bg-white hover:text-black hover:shadow-black hover:shadow-[0.25rem_0.25rem_0] active:translate-x-0 active:translate-y-0 active:shadow-none mt-6">
            MORE
        </button>
    );
}

export default AboutButton;
