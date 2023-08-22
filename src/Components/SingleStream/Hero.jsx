import React, { useState, useEffect } from 'react';
import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";
import DetailsPagePlayColumn from "UI_Components/DetailsPagePlayColumn";
import ReactPlayer from 'react-player';

const Hero  = ({ stream }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };
  
  return (
    <>
      <div className="h-[600px] md:px-5 relative w-full">
      <ReactPlayer 
                      light={
                      <img 
                      src={stream.video_poster}
                      alt='Poster' 
                      className="h-[640px] md:h-auto object-cover rounded-lg w-full"

                      />}
                      url={stream.trailer} 
                      playing  controls 
                      width='cover'
                      height='640px'
                      config={{
                        file: {
                          attributes: {
                            controlsList: 'nodownload' //
                          }
                        }
                      }}
                      />
          {/* <Img
            src={stream.video_poster}
            className="h-[600px] m-auto object-cover w-full"
            alt="rectangleTwo"
          /> */}
        {/* {isModalOpen && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className=' fixed top-50'
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className=" space-y-6">
              <ReactPlayer 
                      light={
                      <img 
                      src={stream.video_poster}
                      alt='Poster' 
                      className="h-[249px] md:h-auto object-cover rounded-lg w-full"

                      />}
                      url={stream.trailer} 
                      playing  controls 
                      width='cover%'
                      height='240px'
                      config={{
                        file: {
                          attributes: {
                            controlsList: 'nodownload' //
                          }
                        }
                      }}
                      />
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
          
          <div className="absolute bottom-[35%] flex flex-row sm:gap-10 items-start justify-between right-[3%] w-[56%]">
              <div className="flex flex-col gap-[35px] items-center justify-start self-stretch w-auto">
                {/* <Button
                  className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[195px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  Rent play
                </Button>
                <Button
                  className="cursor-pointer font-bold text-black_900 text-center text-xl w-[195px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="OutlineWhiteA700"
                  onClick={handlePlayClick} // Call the function when the button is clicked

                >
                  Watch trailer
                </Button> */}

     

              </div>
              
            </div>

          <div className="absolute bottom-[6%] flex flex-col gap-2 items-start justify-center left-[10%] self-stretch w-auto">
            {/* <Text
              className="text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {stream.title}
            </Text> */}
            <Text
              className="font-bold leading-[175.00%] text-gray_300 text-left"
              as="h6"
              variant="h6"
            >
              Directed by: <br></br>
              Peter Maina
            </Text>
          </div>
        </div>
    </>
  )
}

export default Hero


