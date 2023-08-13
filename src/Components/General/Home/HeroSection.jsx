import React from 'react'
import { Button, Img, List, Text } from "UI_Components";



const HeroSection= ({ isAuthenticated }) => {
  return (
    <>
  <div className="h-[720px] md:px-5 relative w-full">
  <div style={{ maxHeight: '760px', height: '100%', overflow: 'hidden' }}>
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689932071/HeartStrings/SVG/HeartStringHeroPoster.webp"
      className="h-full m-auto object-cover w-full"
      alt="c2p60a0oOne"
    />
  </div>
  <Text
    className="absolute inset-x-0 bottom-[26%] mx-auto text-center
     text-white_A700 w-max font-roboto "
    as="h3"
    variant="h3"
    style={{ fontSize: '32px', marginBottom: '-57px' }}
  >
    The Powerhouse of Quality Entertainment
  </Text>
  {/* overlay */}
   {/* Render overlay only if user is not authenticated */}
   {!isAuthenticated && (
  <div className="h-[728px] absolute inset-x-0 bottom-[-1%] w-full flex items-center justify-center backdrop-brightness-50 bg-black/35">
    {/* Sign In BTN goes Here */}
    <div className="flex flex-col md:gap-10 gap-[241px] justify-center mb-[265px] w-[65%] md:w-full">
      <div className="flex flex-col gap-8 h-[253px] md:h-auto items-center justify-center w-auto md:w-full">
        {/* <Img
          className="h-18 w-[10%] mb-10 md:h-18 w-[5%] sm:h-26 w-[25%] mb-0"
          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
          alt="Heart Strings Entertainment Logo"
        /> */}
        <div className="h-[150em]">
          <img  
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
            className="h-[90%] w-[14em] w-auto md:sm:h-26 w-[12%] sm:h-20 sm:w-[20%]"
            alt="Heart Strings Entertainment logo"
            onClick={() => navigate("/")} 
            />
          </div>
        <Text className="font-bold text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto mt-5 mb-8 md:pl-8 md:pr-8">
          Join the thousands of viewers already enjoying our plays.
        </Text>
        <Button 
        className="bg-white_A700 border border-solid border-white_A700 cursor-pointer font-bold py-[15px] rounded-lg text-black_900 text-center text-xl w-[594px] mt-6 md:w-3/4"
        >
          Sign up to buy tickets and start streaming
        </Button>
      </div>
    </div>
  </div>
    )}
  
</div>

    {/* <div className="h-[720px] md:px-5 relative w-full">
      
  <div style={{ maxHeight: '760px', height: '100%', overflow: 'hidden' }}>
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689932071/HeartStrings/SVG/HeartStringHeroPoster.webp"
      className="h-full m-auto object-cover w-full"
      alt="c2p60a0oOne"
    />
  </div>
  <Text
    className="absolute inset-x-0 bottom-[26%] mx-auto text-center
     text-white_A700 w-max font-roboto "
    as="h3"
    variant="h3"
    style={{ fontSize: '32px', marginBottom: '-57px' }}
  >
    The Powerhouse of Quality Entertainment
  </Text>
</div> */}

<div className="bg-gray_900 h-[13px] w-full mt-[3px]"></div>



            {/* <div className="flex flex-col md:gap-10 gap-[241px] justify-start mb-[265px] mr-[108px] w-[65%] md:w-full">
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[102px] md:ml-[0] ml-[766px] py-1"
                rightIcon={
                  <Img
                    className="h-6 mb-px ml-4"
                    src="images/img_materialsymbolsarrowoutward.svg"
                    alt="material-symbols:arrow-outward"
                  />
                }
              >
                <div className="font-bold text-left text-white-A700 text-xl">Sign in</div>
              </Button>
              <div className="flex flex-col gap-8 h-[253px] md:h-auto items-center justify-center mr-[262px] w-auto md:w-full">
                <Img className="h-18 w-[20%]" 
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                alt="Heart Strings Entertainment Logo" />
                <Text className="font-bold text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto">
                  Join the thousand of viewers already enjoying our plays.
                </Text>
                <Button className="bg-white_A700 border border-solid border-white_A700 cursor-pointer font-bold py-[15px] rounded-lg text-black_900 text-center text-xl w-[594px]">
                  Sign up to buy tickets and start streaming
                </Button>
              </div>
            </div> */}
          
    </>
  )
}

export default HeroSection