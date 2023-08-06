import React from "react";
import { Link } from 'react-router-dom'

import { Text } from "UI_Components";
import Footer from "Layout/Footer/Footer";
import StreamCards from "UI_Components/StreamCards/index";
import {Streams} from '../../Data/Streams'

// import WhitenIcon from "Components/WhiteIcon";
import Navbar from "Layout/Navbar/Navbar";

const AllStreams = () => {
  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
      {/* Navbar */}
      <Navbar
        className="flex flex-row items-center justify-center md:px-5 w-full"
        buyTicketS="Buy ticket (s)"
        streamPlays="Stream plays"
        account="Account"
      />

      {/* Streams */}
      <div className="flex flex-col gap-6 items-start justify-start max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
        <Text
          className="text-left text-white_A700 w-auto"
          as="h2"
          variant="h2"
        >
          Online Plays
        </Text>
        <div className="flex flex-col items-center justify-center self-stretch w-auto md:w-full">
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              
            {Streams.map((Stream, index) => (
            <Link to={`/streams/${Stream.title}`}>
              <StreamCards
              key={index}
              className="bg-black_900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
              playPoster={Stream.titleImage}
              playTitle={Stream.title}
              playDescription={Stream.synopsis.substring(0, 110) + '...'} // Trim synopsis to 50 words
              userbuttonlabel="Rent play" // You can customize this if needed
              usertime={Stream.duration}
            />
            </Link>
            
          ))}
           
            </div>
        </div>
      </div>




      {/* Footer */}
      <Footer
        className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-[82px] md:px-5 w-full"
        copyrightheartsOne="Copyright Heartstrings Entertainment"
      />
    </div>
  </>

  );
};

export default AllStreams