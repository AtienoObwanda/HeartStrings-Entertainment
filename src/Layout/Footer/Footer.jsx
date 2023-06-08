import React from "react";

import { Img, Text } from "UI_Components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center p-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[269px] items-end justify-between self-stretch w-auto md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
            
              <div className="flex md:flex-col flex-row gap-2 items-start justify-start self-stretch w-auto md:w-full">
              
              
               

                <div className="flex flex-col items-center justify-center w-auto md:w-full">
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.about}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:w-full">
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.contact}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:w-full">
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.ticket}

                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:w-full">
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.stream}
                  </Text>
                </div>
                




              </div>

              <Img
                src="images/img_dummylogo02.svg"
                className="justify-center h-14 w-[135px]"
                alt="Heartstring Entertainment Footer logo"
              />
            
              
            </div>


            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-center ml-auto w-40">
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
              
              <Text
                className="font-normal font-roboto not-italic text-center text-white_A700 w-auto"
                variant="body4"
              >
                {props?.copyrightheartsOne}
              </Text>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  ticket: "Buy Tickets",
  stream: "Stream Plays",
  about: "About Us",
  contact: "Contact Us",
  termandcondition: "Terms & Conditions",
  copyrightheartsOne: "Copyright Heartstrings Entertainment",
};

export default Footer;
