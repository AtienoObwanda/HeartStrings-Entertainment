import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate,useParams, Link } from "react-router-dom";

import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";

import DetailsPagePlayColumn from "UI_Components/DetailsPagePlayColumn/index";
import DetailsPagePlayRow from "UI_Components/DetailsPagePlayRow/index";
import Columnprice from "UI_Components/ColumnPrice/ColumnPrice";
import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";
import ReactPlayer from 'react-player';


import { apiUrl } from '../../../env';



const PlayDetails = () => {
  const [playData, setPlayData] = useState(null);
  const [playDates, setPlayDates] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);




  useEffect(() => {
    fetchPlay();
  }, []);

  async function fetchPlay() {
    try {
      const response = await axios.get(`${apiUrl}/api/plays/${id}`);
      const data = response.data;
      if (!data.error) {
        setPlayData(data.data); 
        setPlayDates(data.data.play_dates);

      } else {
        console.error('Error fetching play:', data.message);
      }
    } catch (error) {
      console.error('Error fetching play:', error);
    }
  }

  return (
    <>
      {playData === null ? (
      <p>Loading...</p>
    ) : (
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Navbar
            className="flex flex-row items-center justify-center md:px-5 w-full"
            buyTicketS="Buy ticket (s)"
            streamPlays="Stream plays"
            account="Account"
          />




          {/* Hero Section */}
          <div className="h-[600px] md:px-5 relative w-full">
            <Img
              src={playData.poster}
              className="h-[600px] m-auto object-cover w-full"
              alt="Heartstrings Entertainment PLay Poster"
            />
            <div className="absolute bottom-[6%] flex flex-col gap-2 items-start justify-center left-[10%] self-stretch w-auto">
              <Text
                className="text-left text-white_A700 w-auto"
                as="h1"
                variant="h1"
              >
                {playData.title}
              </Text>
              <Text
                className="font-bold leading-[175.00%] text-gray_300 text-left"
                as="h6"
                variant="h6"
              ></Text>
            </div>
          </div>



          {/* Synopsis and Details Page */}
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1139px] mt-24 mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <Text
                  className="font-normal leading-[175.00%] max-w-[532px] md:max-w-full not-italic text-gray_300 text-left"
                  as="h6"
                  variant="h6"
                >
                  {playData.synopsis}
                </Text>
                <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                  <Img
                    src={playData.poster}
                    className="h-[269px] md:h-auto object-cover rounded-lg w-full"
                    alt="rectangleFour"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbol_rcrxkq.svg"
                      className="h-6 w-6"
                      alt="materialsymbol_One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
  {playDates.map((playDate) => (
    
    <Text
      key={playDate.id}
      className="font-normal not-italic text-left text-white_A700 w-auto"
      variant="body4"
    >
      {playDate.play_date} @ {playDate.time1}, {playDate.time2}, {playDate.time3}
    </Text>
  ))}
</div>

                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolslocationon_vleymq.svg"
                      className="h-6 w-6"
                      alt="materialsymbols"
                    />
                    <div className="flex flex-col items-start justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        {playData.theatre}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927741/HeartStrings/SVG/img_solarchatroundmoneybold_tj6jkg.svg"
                      className="h-6 w-6"
                      alt="solarchatroundm"
                    />
                    <div className="flex flex-col items-start justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        ksh 1,000
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Columnprice
                className="bg-black_900 border-2 border-red_900 border-solid flex flex-col gap-2.5 items-center justify-center px-5 py-2.5 rounded-lg self-stretch w-auto sm:w-full"
                price="We’ve got a special offer for you: BOGOF show @ 3pm on Sat 1st . KES 1,000"
              />
             

              <Link to={`/buying-ticket/${playData.id}`} >  
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[151px] text-center text-white_A700 text-xl w-auto"
                    onClick={() => navigate("/buying-ticket")}
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillRed900"
                  >
                    Buy ticket (s)
                  </Button>
          </Link>
            </div>
            <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start w-[49%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Watch infotrailer
                </Text>
                <div className="h-[300px] relative w-full">
                <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[230px] relative w-full">
                      <ReactPlayer 
                      light={
                      <img 
                      src={playData.poster}
                      // src='https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927767/HeartStrings/SVG/img_rectangle8_570x1140_ot5kmw.png' 
                      alt='Poster' 
                      // className="max-w-full h-full"
                      className="h-[250px] md:h-auto object-cover rounded-lg w-full"

                      />}
                      // url='https://res.cloudinary.com/dyiuol5sx/video/upload/v1692514513/OFFICIAL_MULLY_MOVIE_THEATRICAL_TRAILER_bnobmj.mp4'
                      url={playData.infotrailer} 
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
                
                </div>
              </div>
              <div className="flex flex-row gap-[9px] items-center justify-center self-stretch w-auto">
                <div className="flex flex-col items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Share on:{" "}
                  </Text>
                </div>
                <DetailsPagePlayRow className="flex flex-row gap-2 items-start justify-start w-40 sm:w-full" />
              </div>
            </div>
          </div>



          {/* Cast Details */}
          <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
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
                  items={playData.play_casts.map((castGroup, index) => (
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
          </div>




          {/* Footer */}
          <Footer
            className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
            copyrightheartsOne="Copyright Heartstrings Entertainment"
          />
        </div>
      </div>
   )}
   
   </>
  );
};

export default PlayDetails