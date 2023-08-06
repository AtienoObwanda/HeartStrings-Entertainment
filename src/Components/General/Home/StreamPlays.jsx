import React from 'react'
import { Link } from 'react-router-dom'
import StreamCards from "UI_Components/StreamCards";
import { Button, Img, List, Text } from "UI_Components";
import {Streams} from '../../../Data/Streams'




const StreamPlays = () => {
  return (
    <>
     {/* Streaming Plays */}
     <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-[89px] mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
              className="text-center text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              Stream plays
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              The world of theatre from the comfort of your home.
            </Text>
          </div>
          <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
             
              {Streams.slice(0,3).map((Stream, index) => (
                <Link to={`/streams/${Stream.title}`}
                onClick={() => window.location.reload()}>
                  <StreamCards
                    key={index}
                    className="bg-black_900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                    playPoster={Stream.titleImage}
                    playTitle={Stream.title}
                    playDescription={Stream.synopsis}
                    userbuttonlabel="Rent play" // You can customize this if needed
                    usertime={Stream.duration}
                  />
                </Link>
            
          ))}
              
            </List>
        </div>

        {/* Pre-footer CTA Button */}
        <a href="/all-streams"> <Button
          className="common-pointer cursor-pointer font-bold mt-24 text-center text-white_A700 text-xl w-[200px]"
          shape="RoundedBorder8"
          size="lg"
          variant="OutlineWhiteA700_1"
  
        >
          View all
        </Button></a>



    </>
  )
}

export default StreamPlays