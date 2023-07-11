import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
  
import { Button, Img, Line, List, Text } from "UI_Components";

import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
  
const AdminTicketManagement = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

    return (
      <>
        <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
             {/* Large screen */}
         <aside className="md:hidden flex justify-start md:px-5 w-[247px]">
          {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
            <div className="flex flex-col justify-start mb-[420px] mt-12 mx-auto w-[81%]">
              <Img
                src="images/img_dummylogo02.svg"
                className="common-pointer h-14 w-auto"
                alt="dummylogoTwo"
                onClick={() => navigate("/")}
              />
              <div
              className="common-pointer flex flex-row gap-2 items-center justify-center mt-16 self-stretch w-auto"
                  onClick={() => navigate("/admin-dashboard")}
                > 
              {/* <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"> */}
                <Img
                  src="images/img_iconsaxboldactivity.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldacti"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Dashboard
                </Text>
              </div>
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-9 self-stretch w-auto"
                onClick={() => navigate("/admin-allplays")}
              >
                <Img
                  src="images/img_iconsaxboldelement2.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Plays
                </Text>
              </div>
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-9 self-stretch w-auto"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="images/img_iconsaxboldvideoplay.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldvide"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Streams
                </Text>
              </div>
              <div className="flex flex-col gap-9 items-start justify-start md:ml-[0] ml-[26px] mt-9 self-stretch w-auto">
              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-2 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                  onClick={() => navigate("/ticket-management")}
                >
                  <Img
                    src="images/img_iconsaxboldreceipt1_gray_300.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldrece"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    Tickets
                  </Text>
                </div>

                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/user-management")}
                >
                  <Img
                    src="images/img_iconsaxboldprofile2user.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldprof"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    User management
                  </Text>
                </div>
              </div>
              <Line className="bg-gray_800 h-px mt-16 w-full" />
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto">
                <Img
                  src="images/img_iconsaxboldlogout.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldlogo"
                />
                <a
                  href="javascript:"
                  className="font-normal not-italic text-base text-gray_300 text-left w-auto"
                >
                  <Text className="">Logout</Text>
                </a>
              </div>
            </div>
          </aside>


            {/* Display Medium Screens  */}
            <aside className="hidden md:flex justify-start md:px-5 w-[247px]">

<div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%]">

    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain pt-3"
        onClick={() => setToggle((prev) => !prev)}
      />
      <Img
        src="images/img_dummylogo02.svg"
        className="md:ml-[580px] sm:ml-[200px] common-pointer h-14 w-auto"
        alt="dummylogoTwo"
        onClick={() => navigate("/")}
      />
    </div>
    <div className={`${toggle ? 'flex' : 'hidden'}
      p-6 bg-black_900_01 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
      <ul className="list-none justify-start items-center flex-1">

        
          <li className="py-3 cursor-pointer text-16">
            
          <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"              onClick={() => navigate("/admin-dashboard")}
              >
                <Img
                  src="images/img_iconsaxboldactivity.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldacti"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Dashboard
                </Text>
              </div>
          </li>

          <li className="py-3 cursor-pointer text-16"> 
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-6 self-stretch w-auto"
                onClick={() => navigate("/admin-allplays")}
              >
                <Img
                  src="images/img_iconsaxboldelement2.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Plays
                </Text>
              </div>
          </li>

          <li className="py-3 cursor-pointer text-16">
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-0 self-stretch w-auto"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="images/img_iconsaxboldvideoplay.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldvide"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Streams
                </Text>
              </div>
          </li>

        

          <li className="py-3 cursor-pointer text-16">
              
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-4 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                  onClick={() => navigate("/ticket-management")}
                >
                  <Img
                    src="images/img_iconsaxboldreceipt1_gray_300.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldrece"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    Tickets
                  </Text>
                </div>
            </li>
            <li className="py-3 cursor-pointer text-16">
            <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/user-management")}
                >
                  <Img
                    src="images/img_iconsaxboldprofile2user.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldprof"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    User management
                  </Text>
                </div>
            </li>

          <Line className="bg-gray_800 h-px mt-[60px] w-full" />

          <li className="py-3 cursor-pointer text-16">                     
            <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto">
              <Img
                src="images/img_iconsaxboldlogout.svg"
                className="h-6 w-6"
                alt="iconsaxboldlogo"
              />
              <a
                href="javascript:"
                className="font-normal not-italic text-base text-gray_300 text-left w-auto"
              >
                <Text className="">Logout</Text>
              </a>
            </div>
          </li>
        </ul>
</div>
</div>

</aside>

            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-center ml-5 sm:ml-[0] self-stretch w-auto">
                  <Text
                    className="text-left text-white_A700 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Ticket management
                  </Text>
                </div>
                <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                  <Img
                    src="images/img_ellipse1.png"
                    className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Cameron Williamson
                    </Text>
                    <Text
                      className="not-italic text-gray_300 text-left w-auto"
                      variant="body5"
                    >
                      System administrator
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[1305px] sm:h-[3324px] h-[850px] relative w-[92%] md:w-full">
                <div className="sm:h-[1313px] md:h-[804px] h-[850px] m-auto w-full">
                  <div className="absolute bg-black_900 flex flex-col h-full inset-[0] items-start justify-center m-auto py-[22px] rounded w-full">
                    <Text
                      className="font-bold ml-6 md:ml-[0] text-left text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Tickets
                    </Text>
                    <div className="md:h-[628px] h-[648px] mt-6 relative w-full">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[2%] w-[7%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 w-[72px]"
                            alt="camera"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[31px] w-[72px]"
                            alt="camera_One"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Two"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Three"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Four"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[25px] w-[72px]"
                            alt="camera_Five"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[29px] w-[72px]"
                            alt="camera_Six"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Seven"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Eight"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Nine"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[26px] w-[72px]"
                            alt="camera_Ten"
                          />
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-6 mt-[27px] w-[72px]"
                            alt="camera_Eleven"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                        <div className="bg-gray_900 h-[42px] mx-auto w-full"></div>
                        <div className="flex flex-col items-start justify-start mb-auto ml-auto mr-[334px] mt-[-29.49px] w-auto z-[1]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Payment{" "}
                          </Text>
                          <Text
                            className="font-normal mt-[34px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                          <Text
                            className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                          <Text
                            className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                          <Text
                            className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                          <Text
                            className="font-normal ml-0.5 md:ml-[0] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            CARD
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[3px] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            CARD
                          </Text>
                          <Text
                            className="font-normal ml-1 md:ml-[0] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            CARD
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[5px] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                          <Text
                            className="font-normal ml-1.5 md:ml-[0] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            CARD
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[7px] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                          <Text
                            className="font-normal ml-2 md:ml-[0] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            CARD
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[9px] mt-8 not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            M-PESA
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 gap-[471px] items-center justify-between mb-6 ml-6 md:ml-[0] mt-[46px] self-stretch w-auto md:w-full">
                      <div className="flex flex-row gap-6 items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Results per page
                        </Text>
                        <div className="bg-red_900 flex flex-row gap-6 items-center justify-center px-2.5 py-[5px] rounded self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            12
                          </Text>
                          <Img
                            src="images/img_iconsax_bold_arrowdown2.svg"
                            className="h-6 w-6"
                            alt="iconsaxboldarro"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldarrowleft2.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldarro_One"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Previous
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-auto"
                          variant="body4"
                        >
                          |
                        </Text>
                        <Button
                          className="cursor-pointer font-normal min-w-[29px] not-italic text-base text-center text-white_A700 w-auto"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed900"
                        >
                          3
                        </Button>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          out of 3
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-auto"
                          variant="body4"
                        >
                          |
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Next
                        </Text>
                        <Img
                          src="images/img_iconsaxboldarrowright2.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldarro_Two"
                        />
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[20%] w-full" />
                  <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[26%] w-full" />
                  <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[32%] w-full" />
                  <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[38%] w-full" />
                  <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[44%] w-full" />
                  <Line className="absolute bg-gray_800 h-px inset-[0] justify-center m-auto w-full" />
                  <Line className="absolute bg-gray_800 bottom-[44%] h-px inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-gray_800 bottom-[38%] h-px inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-gray_800 bottom-[32%] h-px inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-gray_800 bottom-[26%] h-px inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-gray_800 bottom-[20%] h-px inset-x-[0] mx-auto w-full" />
                </div>
                <List
                  className="absolute sm:flex-col flex-row gap-[41px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 left-[2%] top-[10%] w-[86%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Name
                    </Text>
                    <Text
                      className="font-normal mt-[37px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Jane Cooper
                    </Text>
                    <Text
                      className="font-normal mt-[30px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Esther Howard
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Cameron Williamson
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="font-normal mt-[30px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Leslie Alexander
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="font-normal mt-[30px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Robert Fox
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Jacob Jones
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Albert Flores
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Email
                    </Text>
                    <Text
                      className="font-normal mt-[37px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      jessica.hanson@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      alma.lawson@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      tim.jennings@example.com
                    </Text>
                    <Text
                      className="font-normal mt-[31px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      debra.holt@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      kenzi.lawson@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      georgia.young@example.com
                    </Text>
                    <Text
                      className="font-normal mt-[31px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      michelle.rivera@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      bill.sanders@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      deanna.curtis@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      jackson.graham@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      nevaeh.simmons@example.com
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      sara.cruz@example.com
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Phone number
                    </Text>
                    <Text
                      className="font-normal ml-0.5 md:ml-[0] mt-[37px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal ml-0.5 md:ml-[0] mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      (406) 555-0120
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Status
                    </Text>
                    <Text
                      className="font-normal ml-0.5 md:ml-[0] mt-[37px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Bought
                    </Text>
                    <Text
                      className="font-normal ml-0.5 md:ml-[0] mt-[30px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Edited
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Reserved
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Cancelled
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Reserved
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Edited
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Edited
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Reserved
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Bought
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Bought
                    </Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Bought
                    </Text>
                    <Text
                      className="font-normal mt-[30px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Reserved
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Date and time
                    </Text>
                    <Text
                      className="font-normal mt-[37px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                    <Text
                      className="font-normal mt-8 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    ></Text>
                  </div>
                </List>
                <Line className="absolute bg-gray_800 bottom-[14%] h-px inset-x-[0] mx-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default AdminTicketManagement