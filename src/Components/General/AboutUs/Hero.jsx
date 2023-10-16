import React from 'react'
import { Img, Text } from "UI_Components";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  return (
    <>
    

    <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto md:w-full">
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              About us
            </Text>
            <Text
              className="leading-[175.00%] max-w-[1159px] md:max-w-full text-center text-white_A700 sm:text-[32px]"
              as="h1"
              variant="h1"
            >
              We are a vibrant collective of talented Kenyan artists who have made their mark on the entertainment scene since 2013.{" "}
            </Text>
          </div>

          <Text
            className="font-normal leading-[175.00%] not-italic text-center text-gray_300"
            as="h6"
            variant="h6"
          >
            <>
            We're not your average theatre group – we're a powerhouse of creativity and effective communication.
            With numerous awards and accolades to our name, we strive to use the power of theater to provide 
            top-notch entertainment that serves as a catalyst for societal change and impact. We achieve this 
            through innovative theatre productions that not only entertain but also educate and engage our audience. 
            <br />
            We also support the growth and professional development of theatre artists, empowering them to use their craft to promote social development.
            At Heartstrings Entertainment, we live by our slogan: "The Powerhouse of Quality Entertainment."
            Join us in our live, immersive and digital experiences as we continue to push the boundaries of theatre and 
            create impactful experiences that inspire and entertain.
            </>
          </Text>
    </>
  )
}

export default Hero