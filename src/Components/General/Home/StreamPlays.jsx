import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import StreamCards from "UI_Components/StreamCards";
import { Button, Img, List, Text } from "UI_Components";
import ReactPlayer from 'react-player';
import axios from 'axios';

import { apiUrl } from '../../../../env';
import {Streams} from '../../../Data/Streams'


const StreamPlays = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  
  async function fetchMovies() {
    try {
      const response = await axios.get(`${apiUrl}/api/videos/`);
      const data = response.data;
      if (data.error === false) {
        // Sort the movies array by the 'added_on' property in descending order
        const sortedMovies = data.data.sort((a, b) => {
          return new Date(b.added_on) - new Date(a.added_on);
        });
        setMovies(sortedMovies); // Update state with sorted array
        console.log(data);
      } else {
        console.error('Error fetching movies:', data.message);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }


  return (
    <>
     {/* Streaming Plays */}
     <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-[89px] mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
                className="text-left text-white_A700 w-auto font-bold	font-roboto text-7xl sm:text-3xl mb-6"
            >
              Stream plays
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto text-3xl  sm:text-base"

            >
              The world of theatre from the comfort of your home.
            </Text>
          </div>
          <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
             
              {movies.slice(0,3).map((movie, index) => (
              <Link to={`/stream/${movie.id}`} >  

                   <div
                     className="bg-black_900_01 flex flex-col gap-4 h-[448px] items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                     key={index} >
                       <div className="flex flex-col items-center justify-start w-full">
                     <div className="h-[230px] relative w-full">
                     <ReactPlayer 
                      light={
                      <img 
                      src={movie.video_poster}
                      alt='Poster' 
                      // className="h-[249px] md:h-auto object-cover rounded-lg w-full"
                      className="h-[249px] md:h-full sm:h-full object-cover rounded-lg w-full pt-2"


                      />}
                      url={movie.trailer} 
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
                         <div className="flex flex-col gap-8 items-start justify-start w-auto">
                         <div className="flex flex-col gap-4 items-start justify-start w-auto">
                           <Text
                             className="text-2xl md:text-[22px] text-white sm:text-xl w-auto"
                             size="txtRobotoRomanBold24"
                           >
                             {movie.title}
                           </Text>
                           <Text
                             className="leading-[175.00%] max-w-[332px] md:max-w-full text-gray-300 text-xl"
                             size="txtRobotoRomanRegular20Gray300"
                           >
                             {movie.synopsis.substring(0, 70) + '...'}
                           </Text>
                         </div>
                         <div className="flex flex-row gap-[103px] items-center justify-between w-auto pb-6">
                           <Button 
                            // className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-xl w-auto"
                            className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-base w-auto md:text-sm"

                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillGray900"
                            
                           >
                             Rent Play(s)
                           </Button>
                           <div className="flex flex-row gap-2 items-center justify-center w-auto">
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
                                {/* {Stream.duration} */}
                                {/* {Stream.added_on.substring(0, 10)} */}
                                1hr 20 mins
                               </Text>
                             </div>
                           </div>
                         </div>
                       </div>

                   </div>   
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