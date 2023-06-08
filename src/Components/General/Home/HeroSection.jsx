import React from 'react'
import { Button, Img, List, Text } from "UI_Components";



const HeroSection = () => {
  return (
    <>
    <div className="h-[630px] md:px-5 relative w-full">
  <div style={{ maxHeight: '760px', height: '100%', overflow: 'hidden' }}>
    <Img
      src="images/img_c2p60a0o1.png"
      className="h-full m-auto object-cover w-full"
      alt="c2p60a0oOne"
    />
  </div>
  <Text
    className="absolute inset-x-0 bottom-[13%] mx-auto text-center
     text-white_A700 w-max font-roboto "
    as="h3"
    variant="h3"
    style={{ fontSize: '32px', marginBottom: '-57px' }}
  >
    Add tagline here
  </Text>
</div>

        {/* Hero Section */}
        {/* <div className="h-[760px] md:px-5 relative w-full">
          <Img
            src="images/img_c2p60a0o1.png"
            className="h-[760px] m-auto object-cover w-full"
            alt="c2p60a0oOne"
          />
          <Text
            className="absolute inset-x-0 bottom-[13%] mx-auto text-center text-white_A700 w-max font-roboto"
            as="h3"
            variant="h3"
            style={{ fontSize: '32px', lineHeight: '56px', marginBottom: '1.5px', paddingBottom:'12px' }}
          >
            Add tagline here
          </Text>
        </div> */}



<div className="bg-gray_900 h-[13px] w-full mt-[3px]"></div>
    </>
  )
}

export default HeroSection