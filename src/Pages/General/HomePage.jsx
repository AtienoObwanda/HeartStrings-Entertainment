import React from "react";

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

  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        {/* Navbar Section */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        <HeroSection/>
        <TheatrePlays/>
        <StreamPlays/>
        


        {/* Footer Section*/}
        <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default HomePage