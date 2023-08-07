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
        <div className="flex flex-col items-center justify-center p-8 sm:px-5 w-full h-65">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[29px] items-end justify-between self-stretch w-auto md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
            
              <div className="flex md:flex-row flex-row gap-2 items-start justify-start self-stretch w-auto md:w-full">
              
              
               

                <div className="flex flex-col items-center justify-center w-auto md:w-full cursor-pointer"
                    onClick={() => navigate("/")}
                    >
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.home}
                  </Text>
                </div>

                <div className="flex flex-col items-center justify-center w-auto md:w-full cursor-pointer"
                    onClick={() => navigate("/about-us")}
                    >
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.about}
                  </Text>
                </div>

                <div className="flex flex-col items-center justify-center w-auto md:w-full cursor-pointer"
                onClick={() => navigate("/contact-us")}>
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.contact}
                  </Text>
                </div>

                <div className="flex flex-col items-center justify-center w-auto md:w-full cursor-pointer"
                onClick={() => navigate("/terms-and-conditions")}>
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.termsOfUse}

                  </Text>
                </div>

                <div className="flex flex-col items-center justify-center w-auto md:w-full cursor-pointer"
                onClick={() => navigate("/privacy-policy")}>
                  <Text
                    className="font-normal font-roboto mt-0.5 not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {props?.privacyPolicy}
                  </Text>
                </div>
                




              </div>

              <div className="h-60 w-full">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="justify-center mt-4 h-[50%] w-[10em] md:sm:h-20  w-[20%] mb-[-6em]"
                alt="Heartstring Entertainment Footer logo"
              />
              </div>
            
              
            </div>


            <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-center ml-auto w-40 mr-[12em]">
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

              <div className="flex flex-col gap-2 items-left w-80">
              <Text
                className="font-normal font-roboto text-left text-white_A700 md:mt-[-4.5rem] md:mr-10 md:text-sm"
                variant="body4"
              >
                Call Us: 0700851861
              </Text>
              <Text
                className="font-normal font-roboto not-italic text-left text-white_A700 w-full"
                variant="body4"
              >
                {props?.copyrightheartsOne}
              </Text>
              </div>
              
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  termsOfUse: "Terms Of Use",
  privacyPolicy: "Privacy Policy",
  about: "About Us",
  contact: "Contact Us",
  home: "Home",
  copyrightheartsOne: "Copyright Heartstrings Entertainment",
};

export default Footer;
