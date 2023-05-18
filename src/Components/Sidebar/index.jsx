import React, { useState } from "react";
import { Button, Img, Input, Line, List, Text } from "Components";
import { useNavigate } from "react-router-dom";
import close from "../../assets/close.svg";
import  menu from "../../assets/menu.svg";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <>

      <aside className={props.className}>

        <Img
          src="images/img_dummylogo02.svg"
          className="h-14 ml-6 md:ml-[0] mr-[87px] mt-12 w-auto"
          alt="dummylogoTwo"
        />
        <div className="flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-[9px] mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto">
          <Img
            src="images/img_iconsaxbolduser_gray_300.svg"
            className="h-6 w-6"
            alt="iconsaxbolduser"
          />
          <Text
            className="font-normal font-roboto not-italic text-gray_300 text-left w-auto"
            variant="body4"
          >
            My Account
          </Text>
        </div>
        <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg w-[199px]">
          <Img
            src="images/img_iconsaxboldelement2_white_a700.svg"
            className="h-6 w-6"
            alt="iconsaxboldelem"
          />
          <Text
            className="font-normal font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body4"
          >
            My streams
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[29px] mt-8 self-stretch w-auto">
          <Img
            src="images/img_iconsaxboldreceipt1_gray_300.svg"
            className="h-6 w-6"
            alt="iconsaxboldrece"
          />
          <Text
            className="font-normal font-roboto not-italic text-gray_300 text-left w-auto"
            variant="body4"
          >
            My Tickets
          </Text>
        </div>
        <Line className="bg-gray_800 h-px md:ml-[0] mt-[60px] mx-6 w-[81%]" />
        <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[132px] mt-[63px] self-stretch w-auto">
          <Img
            src="images/img_iconsaxboldmessagequestion_gray_300.svg"
            className="h-6 w-6"
            alt="iconsaxboldmess"
          />
          <Text
            className="font-normal font-roboto not-italic text-gray_300 text-left w-auto"
            variant="body4"
          >
            Help
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center mb-[476px] md:ml-[0] ml-[50px] mr-[115px] mt-8 self-stretch w-auto">
          <Img
            src="images/img_iconsaxboldlogout.svg"
            className="h-6 w-6"
            alt="iconsaxboldlogo"
          />
          <Text
            className="font-normal font-roboto not-italic text-gray_300 text-left w-auto"
            variant="body4"
          >
            Logout
          </Text>
        </div>
      </aside>
    
    

            {/* End Of Sidebar */}
    
    
    
    
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
