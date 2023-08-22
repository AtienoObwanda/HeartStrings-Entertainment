
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";
import {RelatedSlider} from 'UI_Components/RelatedSlider'
import StreamCards from 'UI_Components/StreamCards/index';
import { apiUrl } from '../../../env';

import {Streams} from '../../Data/Streams'

const RelatedPlays = () => {
      const [sliderState, setSliderState] = React.useState(0);
      const sliderRef = React.useRef(null);
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
          <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[150px] md:px-5 self-stretch w-auto md:w-full">
            <Text className="text-left text-white_A700 w-auto" as="h2" variant="h2">
              Related Streams
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mx-auto md:px-5 self-stretch w-full">
            <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-[34px] items-start justify-start w-full">
              <RelatedSlider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  568: { items: 2 },
                  1024: { items: 4 },
                }}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                className="gap-6 self-stretch w-auto"
                items={movies.map((movie, index) => (
                  <Link to={`/stream/${movie.id}`} target="_self" key={index}>
                    <div className="bg-black_900_01 flex flex-col gap-4 h-[440px] w-[400px] items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[230px] relative w-full">
                          <ReactPlayer
                            light={
                              <img
                                src={movie.video_poster}
                                alt='Poster'
                                className="h-[249px] md:h-auto object-cover rounded-lg w-full"
                              />
                            }
                            url={movie.trailer}
                            playing
                            controls
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
                            className="text-2xl md:text-[22px] text-white sm:text-xl w-auto mt-6"
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
                            className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-xl w-auto"
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillGray900">
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
                                {/* {movie.duration} */}
                                {movie.added_on.substring(0, 10)}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                
  renderDotsItem={({ isActive }) => {
    if (isActive) {
      return (
        <div className="inline-block cursor-pointer h-2.5 bg-red_900_01 w-6 rounded-[5px]" />
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
              className="flex gap-4 h-2.5 items-center justify-center self-stretch w-full"
              //   className="flex gap-4 h-2.5 items-center justify-center self-stretch w-full" // Adjust the class name as needed
              count={4}
              activeCss="inline-block cursor-pointer h-2.5 bg-red_900_01 w-6 rounded-[5px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white_A700 w-2.5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </>
      );
    };
    
    export default RelatedPlays;
    