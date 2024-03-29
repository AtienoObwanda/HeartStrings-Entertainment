import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Text } from "UI_Components";
import Footer from "Layout/Footer/Footer";
import StreamCards from "UI_Components/StreamCards/index";
import Navbar from "Layout/Navbar/Navbar";
import { connect } from 'react-redux';
import { format } from "date-fns";
import { BiArrowBack } from 'react-icons/bi'
import { FaCloud, FaHeart, FaPlay } from 'react-icons/fa';
import axios from 'axios';
import ReactPlayer from 'react-player';

import { apiUrl } from '../../../env';

import { Button, Img } from "UI_Components";



const AllPlays = () => {
  const [plays, setPlays] = useState([]); 
  const [start, setStart] = useState(false)


  useEffect(() => {
    fetchPlays();
  }, []);
  
  async function fetchPlays() {
    try {
      const response = await axios.get(`${apiUrl}/api/plays/`);
      const data = response.data;
      if (data.error === false) {
        // Sort the plays array by the 'added_on' property in descending order
        const sortedPlays = data.data.sort((a, b) => {
          return new Date(b.added_on) - new Date(a.added_on);
        });
        setPlays(sortedPlays); // Update state with sorted array
      } else {
        console.error('Error fetching plays:', data.message);
      }
    } catch (error) {
      console.error('Error fetching plays:', error);
    }
  }

  


  // const formattedDate = format(new Date(plays.added_on), "MMMM dd, yyyy");


      return (
        <>
        <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full mb-[20em]">
          {/* Navbar */}
          <Navbar
            className="flex flex-row items-center justify-center md:px-5 w-full"
            buyTicketS="Buy ticket (s)"
            streamPlays="Stream plays"
            account="Account"
          />
    
          {/* Streams */}
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
          {plays.length === 0 ? (
            <Text
            className="text-center justify-center items center text-black w-auto"
            as="h2"
            variant="h2"
          >
            No Plays Available
          </Text>
          ):(
            <Text
            className="text-left text-white_A700 w-auto"
            as="h2"
            variant="h2"
          >
            Live Plays
          </Text>
          )} 
            <div className="flex flex-col items-center justify-center self-stretch w-auto md:w-full">
            {plays.length === 0 ? (
                  <div className="bg-black_900_01 h-80 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-1/2 md:w-90% md:mt-[130px] sm:w-full  mx-auto">

                  <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto sm:w-full">
                      <Text
                        className="text-gray_300 text-center w-auto"
                        as="h3"
                        variant="h3"
                      >
                        No live plays available!
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
                  
              {plays.map((play, index) => (
                
                
                    <div
                      className="bg-black_900_01 flex flex-col gap-4 h-[470px] items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                      key={index} >
                        <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[250px] relative w-full">
                      <ReactPlayer 
                      light={
                      <img 
                      src={play.poster}
                      // src='https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927767/HeartStrings/SVG/img_rectangle8_570x1140_ot5kmw.png' 
                      alt='Poster' 
                      className="h-[249px] md:h-auto object-cover rounded-lg w-full"

                      // className="max-w-full h-full"
                      />}
                      // url='https://res.cloudinary.com/dyiuol5sx/video/upload/v1692514513/OFFICIAL_MULLY_MOVIE_THEATRICAL_TRAILER_bnobmj.mp4'
                      url={play.infotrailer} 
                      playing  controls 
                      width='100%'
                      height='240px'
                      config={{
                        file: {
                          attributes: {
                            controlsList: 'nodownload' // Disable download
                          }
                        }
                      }}
                      />
                    
                      </div>
                          </div>

                          <Link to={`/play/${play.id}`} >  
                          <div className="flex flex-col gap-8 items-start justify-start w-auto">
                          <div className="flex flex-col gap-4 items-start justify-start w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-white sm:text-xl w-auto"
                              size="txtRobotoRomanBold24"
                            >
                              {play.title}
                            </Text>
                            <Text
                              className="leading-[175.00%] max-w-[332px] md:max-w-full text-gray-300 text-xl"
                              size="txtRobotoRomanRegular20Gray300"
                            >
                              {play.synopsis.substring(0, 70) + '...'}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                            <Link
                            >
                            <Button 
                            className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-xl w-auto"
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillGray900"
                            >
                              Buy Ticket(S)
                            </Button>
                            </Link>
                            <div className="flex flex-row gap-2 items-center justify-center w-auto pb-6">
                              <Img
                                className="h-6 w-6"
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                                alt="clock icon"
                              />
                              <div className="flex flex-col items-start justify-start w-auto text-white">
                                <Text
                                  className="text-base text-white-A700 w-auto"
                                  size="txtRobotoRomanRegular16"
                                >
                                 {/* {play.duration} */}
                                 {play.added_on.substring(0, 10)}
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        </Link>

                    </div>   
                
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
    
export default AllPlays