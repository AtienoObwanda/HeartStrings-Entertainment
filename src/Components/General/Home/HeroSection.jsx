import React from 'react'
import { Button, Img, List, Text } from "UI_Components";



const HeroSection = () => {
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
</div>

<div className="bg-gray_900 h-[13px] w-full mt-[3px]"></div>
    </>
  )
}

export default HeroSection