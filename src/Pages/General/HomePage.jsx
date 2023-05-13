import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "Components";
import HowToEncouragePeopleToSignUpColumnprice from "Components/HowToEncouragePeopleToSignUpColumnprice";
import Footer from "Components/HowToEncouragePeopleToSignUpFooter/Footer";
import HowToEncouragePeopleToSignUpStreamcards from "Components/HowToEncouragePeopleToSignUpStreamcards";
import HowToEncouragePeopleToSignUpWhitenoicon from "Components/HowToEncouragePeopleToSignUpWhitenoicon";
import LandingPageNavbarhifi from "Components/LandingPageNavbarhifi";
import Navbar from "Components/LandingPageNavbarhifi/Navbar";

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
        {/* Hero Section */}

        {/* Footer Section*/}
        <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default HomePage