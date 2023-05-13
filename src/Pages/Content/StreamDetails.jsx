import React from "react";

import { Button, Img, PagerIndicator, Slider, Text } from "Components";
import DetailsPagePlayColumn from "Components/DetailsPagePlayColumn";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

const StreamDetails = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (

    <>
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
        <div className="h-[600px] md:px-5 relative w-full">
          <Img
            src="images/img_rectangle2_760x1440.png"
            className="h-[600px] m-auto object-cover w-full"
            alt="rectangleTwo"
          />
          <div className="absolute bottom-[6%] flex flex-col gap-2 items-start justify-center left-[10%] self-stretch w-auto">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              Bridegroom for sale.
            </Text>
            <Text
              className="font-bold leading-[175.00%] text-gray_300 text-left"
              as="h6"
              variant="h6"
            ></Text>
          </div>
        </div>



        {/* Play Trailer CTA */}
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-24 mx-auto md:px-5 w-full">
          <div className="h-[570px] relative w-full">
            <div className="h-[570px] m-auto w-full">
              <Img
                src="images/img_rectangle8_570x1140.png"
                className="h-[570px] m-auto object-cover rounded-lg w-full"
                alt="rectangleEight"
              />
              <Img
                src="images/img_materialsymbolsplaycircle_black_900.svg"
                className="absolute h-[164px] inset-[0] justify-center m-auto w-[164px]"
                alt="materialsymbols"
              />
            </div>
            <div className="absolute bottom-[35%] flex flex-row sm:gap-10 items-start justify-between right-[3%] w-[56%]">
              <div className="flex flex-col gap-[35px] items-center justify-start self-stretch w-auto">
                <Button
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
                >
                  Watch trailer
                </Button>
              </div>
              <Img
                src="images/img_settings.svg"
                className="h-6 mt-6 w-6"
                alt="settings"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Play details: Title and duration */}
      <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[150px] md:px-5 self-stretch w-auto md:w-full">
        <Text
          className="text-left text-white_A700 w-auto"
          as="h2"
          variant="h2"
        >
          Bridegroom for sale.
        </Text>
        <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
          <Img
            src="images/img_mdiclocktimenine.svg"
            className="h-6 w-6"
            alt="mdiclocktimenin"
          />
          <div className="flex flex-col items-start justify-start self-stretch w-auto">
            <Text
              className="font-normal not-italic text-left text-white_A700 w-auto"
              variant="body4"
            >
              1hr 20mins
            </Text>
          </div>
        </div>
        <Text
          className="font-normal leading-[175.00%] max-w-[631px] md:max-w-full not-italic text-gray_300 text-left"
          as="h6"
          variant="h6"
        ></Text>
      </div>



      <div className="flex flex-col md:gap-10 gap-24 items-center w-full">
      
      
      
      
        {/* Cast Details */}
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
            <div className="flex flex-col gap-[34px] items-start justify-start w-full">
              <Text
                className="text-left text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
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
                items={[...Array(16)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <DetailsPagePlayColumn
                      className="flex flex-col gap-2 items-start justify-center mx-2.5 self-stretch"
                      rectanglefour="images/img_rectangle4_267x267.png"
                      realname="Real name "
                      ascastname="as cast name "
                    />
                  </React.Fragment>
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
            className="flex gap-4 h-2.5 items-center justify-center self-stretch w-[102px]"
            count={4}
            activeCss="inline-block cursor-pointer h-2.5 bg-red_900_01 w-6 rounded-[5px]"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white_A700 w-2.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>



        {/* Footer */}
        <Footer
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </div>
  </>

  );
};

export default StreamDetails