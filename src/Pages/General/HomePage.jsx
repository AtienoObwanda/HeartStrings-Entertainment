import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "UI_Components";
import ColumnPrice from "UI_Components/ColumnPrice/ColumnPrice";
import Footer from "Layout/Footer/Footer";
import StreamCards from "UI_Components/StreamCards";
import Navbar from "Layout/Navbar/Navbar";
import HeroSection from "Components/General/Home/HeroSection";
import TheatrePlays from "Components/General/Home/TheatrePlays";
import StreamPlays from "Components/General/Home/StreamPlays";

const HomePage = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state is unauthenticated


  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full overflow-hidden">
        {/* Navbar Section */}
        <Navbar isAuthenticated={isAuthenticated}
          className="flex flex-row items-center justify-center md:px-5 w-full md:top-0  z-10"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        <HeroSection  isAuthenticated={isAuthenticated}
        className='relative z-0'/>
        <TheatrePlays/>
        <StreamPlays/>
        


        {/* Footer Section*/}
        <Footer 
          // copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default HomePage