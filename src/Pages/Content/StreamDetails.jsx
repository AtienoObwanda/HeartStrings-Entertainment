import React from "react";
import { useParams } from 'react-router-dom'


import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";
import DetailsPagePlayColumn from "UI_Components/DetailsPagePlayColumn";
import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";

import {Streams} from "Data/Streams";
import Hero from "Components/SingleStream/Hero";
import CTA from "Components/SingleStream/CTA";
import Details from "Components/SingleStream/Details";
import Cast from "Components/SingleStream/Cast";
import RelatedPlays from "Components/SingleStream/RelatedPlays";

const StreamDetails = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const {id} = useParams()
  const stream = Streams.find((stream) => stream.title === id)

  return (
    

    <>
    <div className="bg-black_900 flex flex-col font-roboto gap-12 items-start justify-start mx-auto w-full">
      <div className="flex flex-col items-center w-full">
        {/* Navbar */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        {/* Hero Section */}
        <Hero stream={stream}/>
      </div>

      {/* Play details: Title and duration */}
      <Details stream={stream}/>
 
      <div className="flex flex-col md:gap-10 gap-24 items-center w-full">
      
           
        {/* Cast Details */}
        <Cast  stream={stream}/>

        {/* Related Plays */}
        <RelatedPlays />
 
       



        {/* Footer */}
        <Footer
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </div>
  </>

  );
};

export default StreamDetails