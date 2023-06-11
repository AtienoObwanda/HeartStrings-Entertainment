import React from 'react'
import { useNavigate } from "react-router-dom";

import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";

import { Img, Text } from "UI_Components";
import Stats from 'Components/General/AboutUs/Stats';
import Hero from 'Components/General/AboutUs/Hero';






const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full"> */}
    <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto pb-24 w-full">
      {/* Navbar Section */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />

          
          
          {/* Hero Section */}
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1159px] mx-auto md:px-5 self-stretch w-full">
          <Hero/>
          <Stats/>


          {/* <div className="flex sm:flex-col flex-row sm:gap-10 gap-[79px] items-center justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto">
              <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Actors
                </Text>
                <Text
                  className="text-center text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  50+
                </Text>
              </div>
              <Text
                className="font-normal not-italic text-gray_300 text-left w-auto"
                variant="body4"
              >
                Join our team
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto">
              <Text
                className="font-normal not-italic text-gray_300 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Locations
              </Text>
              <Text
                className="text-center text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                3
              </Text>
              <Text
                className="font-normal not-italic text-gray_300 text-left w-auto"
                variant="body4"
              >
                Find near you
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto">
              <Text
                className="font-normal not-italic text-gray_300 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Plays
              </Text>
              <Text
                className="text-center text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                100+
              </Text>
              <Text
                className="font-normal not-italic text-gray_300 text-left w-auto"
                variant="body4"
              >
                Stream our plays
              </Text>
            </div>
          </div> */}

          {/* Social Media Content repetative as it already exists on the footer */}
          {/* <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
            <Img
              src="images/img_youtube1.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="youtubeOne"
            />
            <Img
              src="images/img_instagram2.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="instagramTwo"
            />
            <Img
              src="images/img_twitter1.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="twitterOne"
            />
            <Img
              src="images/img_facebook1.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="facebookOne"
            />
          </div> */}

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