import React from 'react'
import { Img, Text } from "UI_Components";


const AboutFooter = () => {
  return (
    <>
     {/* <div className="flex sm:flex-col flex-row sm:gap-10 gap-[79px] items-center justify-start self-stretch w-auto sm:w-full">

        </div>  */}

          {/* Social Media Content repetative as it already exists on the footer */}
          <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
            <Img
              src="images/img_youtube1.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="youtubeOne"
            />
            <Img
              src="images/img_instagram2.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="instagramTwo"
            />
            <Img
              src="images/img_twitter1.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="twitterOne"
            />
            <Img
              src="images/img_facebook1.png"
              className="h-8 md:h-auto object-cover w-8"
              alt="facebookOne"
            />
          </div>
    </>
  )
}

export default AboutFooter