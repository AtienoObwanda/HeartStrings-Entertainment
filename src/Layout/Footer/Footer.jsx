import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Img, Text } from "UI_Components";

const Footer = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center p-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[269px] items-end justify-between self-stretch w-auto md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
            
              <div className="flex md:flex-row flex-row gap-2 items-start justify-start self-stretch w-auto md:w-full">
              
              
               

                <div className="flex flex-col items-center justify-center w-auto md:w-full"
                    onClick={() => navigate("/about-us")}
                    >
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.about}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:w-full"
                onClick={() => navigate("/contact-us")}>
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.contact}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:w-full"
                onClick={() => navigate("/all-plays")}>
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.ticket}

                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto md:w-full"
                onClick={() => navigate("/all-streams")}>
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.stream}
                  </Text>
                </div>
                




              </div>

              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="justify-center h-18 w-[8%] md:sm:h-20  w-[20%] mb-[-6em]"
                alt="Heartstring Entertainment Footer logo"
              />
            
              
            </div>


            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-center ml-auto w-40">
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927754/HeartStrings/SVG/img_youtube1_ronpc3.png"
                  className="h-8 md:h-auto object-cover w-8"
                  alt="Heartstrings Entertainment Youtube"
                  onClick={() => navigate("/#")}
                />
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_instagram2_esci9n.png"
                  className="h-8 md:h-auto object-cover w-8"
                  alt="Heartstrings Entertainment Instagram"
                  onClick={() => navigate("/#")}
                />
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927751/HeartStrings/SVG/img_twitter1_x6jimf.png"
                  className="h-8 md:h-auto object-cover w-8"
                  alt="Heartstrings Entertainment Twitter"
                  onClick={() => navigate("/#")}
                />
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_facebook1_tazrho.png"
                  className="h-8 md:h-auto object-cover w-8"
                  alt="Heartstrings Entertainment facebook"
                  onClick={() => navigate("/#")}
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
