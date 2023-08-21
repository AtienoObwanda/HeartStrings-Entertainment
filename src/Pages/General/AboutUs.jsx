import React from 'react'
import { useNavigate } from "react-router-dom";

import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";

import { Img, Text } from "UI_Components";
import Stats from 'Components/General/AboutUs/Stats';
import Hero from 'Components/General/AboutUs/Hero';
import AboutFooter from 'Components/General/AboutUs/AboutFooter';



const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full"> */}
    <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto w-full">
      {/* Navbar Section */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
       
          {/* Hero Section */}
          <div className="max-w-full mx-auto md:px-5 self-stretch w-full mt-[-4em]">
          <Img
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927777/HeartStrings/SVG/img_rectangle2_760x1440_llofwi.png"
            className="w-full m-auto object-cover"
            alt="rectangleTwo"
          />
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1159px] mx-auto md:px-5 self-stretch w-full">
     
            
          <Hero/>


          </div>        
        {/* Footer Section*/}
        <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default AboutUs