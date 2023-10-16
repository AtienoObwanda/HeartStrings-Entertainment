import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Img, Text } from "UI_Components";

const Footer = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full">
        <div className="flex w-full p-8 h-65">
{/* Left wing */}
          <div className="md:hidden flex-1 pl-[10em] w-3/4">
            <div className="items-start justify-start self-stretch w-auto">
            <ul className="flex list-disc space-x-6 mb-4">
            <li className="font-normal font-roboto  not-italic text-left text-white_A700 w-auto pr-[2em]">
              <a href="/">
              Home
              </a>
            </li>

            <li className="font-normal font-roboto not-italic text-left text-white_A700 w-auto pr-[2em]">
                <a href="/about-us">About Us</a>
              </li>
              <li className="font-normal font-roboto not-italic text-left text-white_A700 w-auto pr-[2em]">
                <a href="/contact-us">Contact Us </a>
              </li>
              <li className="font-normal font-roboto not-italic text-left text-white_A700 w-auto pr-[2em]">
                <a href="/terms-and-conditions">Terms of Use</a>
              </li>
              <li className="font-normal font-roboto not-italic text-left text-white_A700 w-auto pr-[2em]">
                <a href="/privacy-policy">Privacy Policy </a>
              </li>
              </ul>
            </div>
            <div className="logo">
            <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="justify-center mt-[2em] mb-[1em] h-[90px] w-[90px] md:sm:h-20  w-[20%] mb-[-6em]"
                alt="Heartstring Entertainment Footer logo"
              />

            </div>
          </div>
{/*right wing  */}
          <div className="md:hidden flex-1 pr-[10em]  w-1/4">
            <div className="flex flex-row gap-2 items-end justify-end self-stretch w-auto">
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
            <div className="flex items-end justify-end mt-6">
            <Text className="font-normal font-roboto text-white_A700">
              Call Us: 0700000898
            </Text>
            </div>
            <div className="flex items-end justify-end self-stretch w-auto mt-6"> 
            <Text className="font-normal font-roboto text-right text-white_A700">
            &copy; 2023 Copyright Heartstrings Entertainment
            </Text>
            </div>
          </div>

{/* Display Medium Screens  */}
<div className="sm:hidden flex-1 pl-[2px] w-auto">
            <div className="items-start justify-start self-stretch w-auto">
            <ul className="flex list-disc space-x-4 mb-4">
            <li className="text-sm font-normal font-roboto  not-italic text-left text-white_A700 w-[45px]">
              <a href="/">
              Home
              </a>
            </li>

            <li className="text-sm font-normal font-roboto not-italic text-left text-white_A700 w-[60px]">
                <a href="/about-us">About Us</a>
              </li>
              <li className="text-sm font-normal font-roboto not-italic text-left text-white_A700 w-[70px]">
                <a href="/contact-us">Contact Us </a>
              </li>
              <li className="text-sm font-normal font-roboto not-italic text-left text-white_A700 w-[90px]">
                <a href="/terms-and-conditions">Terms of Use</a>
              </li>
              <li className="text-sm font-normal font-roboto not-italic text-left text-white_A700 w-[140px]">
                <a href="/privacy-policy">Privacy Policy </a>
              </li>
              </ul>
            </div>
            <div className="logo">
            <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="justify-center mt-[2em] mb-[1em] h-[80px] w-[80px]"
                alt="Heartstring Entertainment Footer logo"
              />

            </div>
          </div>
{/*right wing  */}
          <div className="sm:hidden flex-1 pr-[2px]  w-auto">
            <div className="flex flex-row gap-2 items-end justify-end self-stretch w-auto">
            <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927754/HeartStrings/SVG/img_youtube1_ronpc3.png"
                  className="md:h-auto object-cover w-6"
                  alt="Heartstrings Entertainment Youtube"
                  onClick={() => navigate("/#")}
                />
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_instagram2_esci9n.png"
                  className="md:h-auto object-cover w-6"
                  alt="Heartstrings Entertainment Instagram"
                  onClick={() => navigate("/#")}
                />
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927751/HeartStrings/SVG/img_twitter1_x6jimf.png"
                  className="md:h-auto object-cover w-6"
                  alt="Heartstrings Entertainment Twitter"
                  onClick={() => navigate("/#")}
                />
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_facebook1_tazrho.png"
                  className="md:h-auto object-cover w-6"
                  alt="Heartstrings Entertainment facebook"
                  onClick={() => navigate("/#")}
                />
            </div>
            <div className="flex items-end justify-end mt-6">
            <Text className="font-normal font-roboto text-white_A700">
              Call Us: 0700000898
            </Text>
            </div>
            <div className="flex items-end justify-end self-stretch w-auto mt-6"> 
            <Text className="text-sm font-normal font-roboto text-right text-white_A700">
            &copy; 2023 Copyright Heartstrings Entertainment
            </Text>
            </div>
          </div>
{/* Display small Screens  */}


        </div>
      </div>
    </>
  );
};



export default Footer;
