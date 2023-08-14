import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Text } from "UI_Components";
import Footer from "Layout/Footer/Footer";
import StreamCards from "UI_Components/StreamCards/index";
import {Streams} from '../../Data/Streams';
import Navbar from "Layout/Navbar/Navbar";
import { connect } from 'react-redux';
import axios from 'axios';
import { apiUrl } from '../../../env.js';

const AllStreams = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);
  
  async function fetchVideos() {
    try {
      const response = await axios.get(`${apiUrl}/api/videos/`); // Changed post to get
      const data = response.data; // No need for data.json() with axios
      if (data.error === false) {
        // if (response.status >= 200 && response.status < 300) {
          setVideos(data.data);
          console.log(data)
      } else {
        console.error('Error fetching videos:', data.message);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  

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
      {videos.length === 0 ? (
            <Text
            className="text-center justify-center items center text-black w-auto"
            as="h2"
            variant="h2"
          >
            No Online Plays Available
          </Text>
          ):(
            <Text
            className="text-left text-white_A700 w-auto"
            as="h2"
            variant="h2"
          >
            Online Plays
          </Text>
          )} 
        <div className="flex flex-col items-center justify-center self-stretch w-auto md:w-full">
        {videos.length === 0 ? (
                  <div className="bg-black_900_01 h-80 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-1/2 md:w-90% md:mt-[130px] sm:w-full  mx-auto">

                  <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto sm:w-full">
                      <Text
                        className="text-gray_300 text-center w-auto"
                        as="h3"
                        variant="h3"
                      >
                        No Online plays available!
                      </Text>
                      <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
                          as="h6"
                          variant="h6"
                        >
                          <>
                          Please check in soon for new updates.
                          </>
                        </Text>
                      </div>
                      
                    </div>

                </div>
            ) : (
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              
          {videos.map((video, index) => (
            <Link to={`/streams/${video.title}`}> {/* Fixed variable name */}
            <StreamCards
              key={index}
              className="bg-black_900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
              playPoster={video.video_poster} alt={`${video.title} Poster`}
              playTitle={video.title}
              playDescription={video.synopsis.substring(0, 110) + '...'}
              userbuttonlabel="Rent play" // You can customize this if needed
              usertime={video.duration}
              />
            </Link>
            
          ))}
           
            </div> 
            )}
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