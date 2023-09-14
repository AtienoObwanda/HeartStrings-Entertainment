import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

import { apiUrl } from '../../../env';



const StreamDetails = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const {id} = useParams()
  const [videoData, setvideoData] = useState(null);
  const [playDates, setPlayDates] = useState([]);
  
// console.log(videoData.video_casts)

  useEffect(() => {
    fetchPlay();
  }, []);

  async function fetchPlay() {
    try {
      const response = await axios.get(`${apiUrl}/api/videos/${id}`);
      const data = response.data;
      if (!data.error) {
        setvideoData(data.data); 

      } else {
        console.error('Error fetching play:', data.message);
      }
    } catch (error) {
      console.error('Error fetching play:', error);
    }
  }



  return (
    

    <>
      {videoData === null ? (
      <p>Loading...</p>
    ) : (
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
        <Hero stream={videoData}/>
      </div>

      {/* Play details: Title and duration */}
      <Details stream={videoData}/>
 
      <div className="flex flex-col md:gap-10 gap-24 items-center w-full">
      
           
        {/* Cast Details */}
        {/* <Cast  stream={videoData}/> */}
           {/* Cast Details */}
           {/* <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
            <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
            <div className="flex flex-col gap-[34px] items-start justify-start w-full">
                <Text className="text-left text-white_A700 w-auto" as="h2" variant="h2">
                  Cast
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 4 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="gap-6 self-stretch w-auto"
                  items={videoData.video_casts.map((castGroup, index) => (
                    <div key={index} className="flex gap-2">
                      {castGroup.map(cast => (
                        <DetailsPagePlayColumn
                          key={cast.id}
                          className="flex flex-col gap-2 items-start justify-center self-stretch pr-4"                          
                          rectanglefour={`${apiUrl}${cast.image}`}
                          realname={cast.real_name}
                          ascastname={cast.cast_name}
                        />
                      ))}
                    </div>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer h-2.5 bg-red_900 w-6 rounded-[5px]" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white_A700 w-2.5"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
              </div>

            </div>
            <PagerIndicator
              className="flex gap-4 h-2.5 items-center justify-center self-stretch w-[102px]"
              count={4}
              activeCss="inline-block cursor-pointer h-2.5 bg-red_900 w-6 rounded-[5px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white_A700 w-2.5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div> */}


        {/* Related Plays */}
        <RelatedPlays />
 


        {/* Footer */}
        <Footer
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </div>
  
  )}
  </>

  );
};

export default StreamDetails