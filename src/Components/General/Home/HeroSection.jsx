import React, { useEffect, useState } from 'react';
import { Button, Img, List, Text } from "UI_Components";

// import { useAuth } from 'context/AuthContext';

const HeroSection= () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {

    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])

  console.log('isAuthenticated:', isAuthenticated);
  // console.log('Token:', accessToken);



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
     text-white_A700 w-max font-roboto sm:bottom-[30%]"
    as="h3"
    variant="h3"
    // style={{ fontSize: '32px', marginBottom: '-57px' }}
  >
    The Powerhouse of Quality Entertainment
  </Text>
  {/* overlay */}
   {/* Render overlay only if user is not authenticated */}
   {!isAuthenticated && (
  <div className="h-[728px] absolute inset-x-0 bottom-[-1%]  w-full flex items-center justify-center backdrop-brightness-50 bg-black/40">
    {/* Sign In BTN goes Here */}
    <div className="flex flex-col md:gap-10 gap-[241px] justify-center mb-[255px] w-[65%] md:mb-[45em] md:w-full">
      <div className="flex flex-col gap-8 h-[250px] md:h-auto items-center justify-center w-auto md:w-full">
      <div className="md:h-[200px] mb-[20em]"></div>

        <div className="h-50 mt-[5em] mb-[-2em] md:pb-[4em] ">
          <img  
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
            // className="h-[50%] w-[12.5em] md:h-[10%] sm:h-[8%]"
            className="h-[100%] w-[8em] w-auto md:h-20 md:w-full"
            alt="Heart Strings Entertainment logo"
            onClick={() => navigate("/")} 
            />
          </div>
        <Text className="font-bold text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto mt-5 mb-8 md:mt-0 md:mb-0 md:pl-8 md:pr-8 ">
          Join the thousands of viewers already enjoying our plays.
        </Text>
        <Button 
          // className="bg-white_A700 border border-solid border-white_A700 cursor-pointer font-bold py-[15px] rounded-lg text-black_900 text-center text-xl w-full md:w-[75%] sm:w-full mt-6"
        className="bg-white_A700 border border-solid border-white_A700 cursor-pointer font-bold py-[15px] rounded-lg text-black_900 text-center text-xl w-[594px] mt-6 md:w-3/4 sm:w-1.4"
        >
          Sign up to buy tickets and start streaming
        </Button>
      </div>
      <div className="md:h-[200px]"></div>

    </div>
  </div>
    )}
  
</div>



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
            
            </div> */}
          
    </>
  )
}

export default HeroSection