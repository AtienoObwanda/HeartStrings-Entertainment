import React, { useState } from "react";

  import { useNavigate } from "react-router-dom";
  
  import { Button, Img, Input, Line, List, Switch, Text } from "UI_Components";
  import PlaysAddPlayAddshift from "UI_Components/PlaysAddPlay";
  import PlaysAddPlayColumniconparkoutli from "UI_Components/PlaysAddPlayColumnIcon";

  import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
  
const AdminAddPlay = () => {
  
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
    
    return (
      <>
        <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto pb-[109px] w-full">
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
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-9 self-stretch w-auto"
                onClick={() => navigate("/admin-dashboard")}
              >                <Img
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

              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-6 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
              onClick={() => navigate("/admin-allplays")}>
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
                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("ticket-management")}
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
            
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-2 self-stretch w-auto"
                onClick={() => navigate("/admin-dashboard")}
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
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-6 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
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
              <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
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

            <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[83%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between p-6 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-center ml-6 sm:ml-[0] sm:mt-0 mt-[9px] self-stretch w-auto">
                  <Text
                    className="text-left text-white_A700 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Add Play
                  </Text>
                </div>
                <div className="flex flex-row gap-[21px] items-center justify-start mr-6 self-stretch w-auto">
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
          
              <div className="flex flex-col items-center justify-end p-2.5 w-full">
                <div className="flex flex-col items-start justify-start mt-[38px] w-[94%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-4 items-left justify-left self-stretch w-auto"
                    onClick={() => navigate("/admin-allplays")}
                  >
                    <Img
                      src="images/img_ictwotonearrowrightalt.svg"
                      className="h-6 w-6"
                      alt="ictwotonearrowr"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Go back to all plays
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-between mt-6 w-full">
                    <div className="bg-black_900 flex sm:flex-1 flex-col gap-8 items-center justify-center sm:px-5 px-6 py-12 rounded-lg w-[536px] sm:w-full">
                      
                      {/* Content Form */}
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Play title
                        </Text>
                        <Input
                          className="bg-gray_800 border border-solid border-white_A700 font-normal h-12 not-italic pl-3 sm:pr-5 pr-[35px] py-3.5 rounded text-gray_300 text-left w-[443px]"
                          variant="body4"
                        >
                          |
                        </Input>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Synopsis
                          </Text>
                          <textarea className="bg-gray_800 h-[200px] rounded w-full"></textarea>
                        </div>
                        <Text
                          className="not-italic text-gray_300 text-left w-auto"
                          variant="body5"
                        >
                          Do not exceed 100 characters when entering the play’s
                          synopsis
                        </Text>
                      </div>
                       
                      <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Select show time
                            </Text>
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Select day(s)
                            </Text>
                          </div>
                          <div className="bg-red_900 flex flex-col font-inter gap-[15px] h-[348px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-lg w-[406px] sm:w-full">
                            <div className="flex flex-row gap-[187px] items-center justify-between self-stretch w-auto">
                              <Text
                                className="text-deep_purple_50 text-left w-auto"
                                variant="body1"
                              >
                                April 2023
                              </Text>
                              <div className="flex flex-row items-center justify-center self-stretch w-auto">
                                <Img
                                  src="images/img_arrowleft.svg"
                                  className="h-6 w-6"
                                  alt="arrowleft"
                                />
                                <Img
                                  src="images/img_arrowright.svg"
                                  className="h-6 w-6"
                                  alt="arrowright"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col font-mulish items-start justify-start w-[92%] md:w-full">
                              <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  Mo
                                </Text>
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  Tu
                                </Text>
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  We
                                </Text>
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  Th
                                </Text>
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  Fr
                                </Text>
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  Sa
                                </Text>
                                <Text
                                  className="font-semibold text-center text-deep_purple_50 w-auto"
                                  variant="body4"
                                >
                                  Su
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-end ml-auto mt-[25px] w-[47%] md:w-full">
                                <Text
                                  className="text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  1
                                </Text>
                                <Text
                                  className="ml-9 text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  2
                                </Text>
                                <Text
                                  className="ml-[33px] text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  3
                                </Text>
                                <Text
                                  className="ml-[35px] text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  4
                                </Text>
                              </div>
                              <div className="h-32 md:h-[131px] sm:h-[151px] mt-6 relative w-full">
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                                  <div className="flex flex-col md:gap-10 gap-[60px] justify-start w-full">
                                    <div className="flex flex-row items-center justify-between mr-[11px] w-[97%] md:w-full">
                                      <Text
                                        className="text-center text-deep_purple_50 w-auto"
                                        variant="body1"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="text-center text-deep_purple_50 w-auto"
                                        variant="body1"
                                      >
                                        6
                                      </Text>
                                      <Text
                                        className="text-center text-deep_purple_50 w-auto"
                                        variant="body1"
                                      >
                                        7
                                      </Text>
                                      <div className="flex flex-col font-inter items-center justify-start w-auto">
                                        <Text
                                          className="text-center text-deep_purple_50 w-auto"
                                          variant="body1"
                                        >
                                          8
                                        </Text>
                                      </div>
                                      <Text
                                        className="text-center text-deep_purple_50 w-auto"
                                        variant="body1"
                                      >
                                        9
                                      </Text>
                                      <Text
                                        className="text-center text-deep_purple_50 w-auto"
                                        variant="body1"
                                      >
                                        10
                                      </Text>
                                      <Text
                                        className="text-center text-deep_purple_50 w-auto"
                                        variant="body1"
                                      >
                                        11
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-end ml-auto w-[74%] md:w-full">
                                      <div className="bg-deep_purple_50 h-[43px] rounded-[21px] w-[43px]"></div>
                                      <div className="bg-deep_purple_50 h-[43px] ml-[55px] rounded-[21px] w-[43px]"></div>
                                      <div className="bg-deep_purple_50 h-[43px] ml-[50px] rounded-[21px] w-[43px]"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[37%] w-[97%]">
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    12
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    13
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    14
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    15
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    16
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    17
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    18
                                  </Text>
                                </div>
                                <div className="absolute bottom-[8%] flex flex-row inset-x-[0] items-center justify-between mx-auto w-[97%]">
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    19
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    20
                                  </Text>
                                  <Text
                                    className="text-black_900 text-center w-auto"
                                    variant="body1"
                                  >
                                    21
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    22
                                  </Text>
                                  <Text
                                    className="text-black_900 text-center w-auto"
                                    variant="body1"
                                  >
                                    23
                                  </Text>
                                  <Text
                                    className="text-center text-deep_purple_50 w-auto"
                                    variant="body1"
                                  >
                                    24
                                  </Text>
                                  <Text
                                    className="text-black_900 text-center w-auto"
                                    variant="body1"
                                  >
                                    25
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-start mt-3.5 w-[83%] md:w-full">
                                <Text
                                  className="h-[23px] text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  26
                                </Text>
                                <Text
                                  className="ml-7 text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  27
                                </Text>
                                <Text
                                  className="h-[23px] ml-7 text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  28
                                </Text>
                                <Text
                                  className="h-[23px] ml-7 text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  29
                                </Text>
                                <Text
                                  className="ml-[23px] text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  30
                                </Text>
                                <Text
                                  className="ml-[23px] text-center text-deep_purple_50 w-auto"
                                  variant="body1"
                                >
                                  31
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-8 items-start justify-center self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Set time for each day.
                          </Text>
                          <List
                            className="flex-col gap-8 grid items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                                <Img
                                  src="images/img_calendar.svg"
                                  className="h-6 w-6"
                                  alt="calendar"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  Wed, 21 April 2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3.5 items-center justify-center self-stretch w-auto">
                                <Button
                                  className="cursor-pointer flex h-[35px] items-center justify-center"
                                  rightIcon={
                                    <Img
                                      src="images/img_arrowdown.svg"
                                      className="ml-2 my-px"
                                      alt="arrow_down"
                                    />
                                  }
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlack90001"
                                >
                                  <div className="font-normal not-italic text-left text-sm text-white_A700">
                                    3:00 PM
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[104px] w-auto"
                                  rightIcon={
                                    <Img
                                      src="images/img_arrowdown.svg"
                                      className="ml-4 my-px"
                                      alt="arrow_down"
                                    />
                                  }
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlack90001"
                                >
                                  <div className="font-normal not-italic text-left text-sm text-white_A700">
                                    6:30 PM
                                  </div>
                                </Button>
                                <div className="flex flex-row gap-1 items-center justify-center self-stretch w-auto">
                                  <Img
                                    src="images/img_iconsaxboldclock.svg"
                                    className="h-6 w-6"
                                    alt="iconsaxboldcloc"
                                  />
                                  <PlaysAddPlayAddshift
                                    className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-auto sm:w-full"
                                    addshift="Add time"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                                <Img
                                  src="images/img_calendar.svg"
                                  className="h-6 w-6"
                                  alt="calendar"
                                />
                                <Text
                                  className="font-normal not-italic text-center text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  Fri, 23 April 2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3.5 items-center justify-center self-stretch w-auto">
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[96px] w-auto"
                                  rightIcon={
                                    <Img
                                      src="images/img_arrowdown.svg"
                                      className="ml-2 my-px"
                                      alt="arrow_down"
                                    />
                                  }
                                  shape="RoundedBorder4"
                                  size="sm"
                                  variant="FillBlack90001"
                                >
                                  <div className="font-normal not-italic text-left text-sm text-white_A700">
                                    3:00 PM
                                  </div>
                                </Button>
                                <div className="flex flex-row gap-1 items-center justify-center self-stretch w-auto">
                                  <Img
                                    src="images/img_iconsaxboldclock.svg"
                                    className="h-6 w-6"
                                    alt="iconsaxboldcloc"
                                  />
                                  <PlaysAddPlayAddshift
                                    className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-auto sm:w-full"
                                    addshift="Add time"
                                  />
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                              <Img
                                src="images/img_calendar.svg"
                                className="h-6 w-6"
                                alt="calendar"
                              />
                              <Text
                                className="font-normal not-italic text-center text-white_A700 w-auto"
                                variant="body4"
                              >
                                Sun, 25 April 2022
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-center self-stretch w-auto">
                              <div className="flex flex-row gap-1 items-center justify-center self-stretch w-auto">
                                <Img
                                  src="images/img_iconsaxboldclock.svg"
                                  className="h-6 w-6"
                                  alt="iconsaxboldcloc"
                                />
                                <PlaysAddPlayAddshift
                                  className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-auto sm:w-full"
                                  addshift="Add time"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>




                    </div>
                    <div className="bg-black_900 flex sm:flex-1 flex-col items-start justify-start mb-[51px] md:px-10 px-12 sm:px-5 py-6 rounded-lg w-[535px] sm:w-full">
                     

                    <List
                        className="flex-col gap-8 grid items-start w-[443px] md:w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-col gap-4 items-start justify-center my-0 w-[443px] sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Play poster
                          </Text>
                          <PlaysAddPlayColumniconparkoutli
                            className="border border-dashed border-gray_800 flex flex-col gap-2.5 h-[150px] md:h-auto items-center justify-center p-2.5 rounded w-[443px] sm:w-full"
                            dropanimagehereOne="Drop an image here or click to browse."
                          />
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-center my-0 w-[443px] sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Infotrailer
                          </Text>
                          <PlaysAddPlayColumniconparkoutli
                            className="border border-dashed border-gray_800 flex flex-col gap-2.5 h-[150px] md:h-auto items-center justify-center p-2.5 rounded w-[443px] sm:w-full"
                            dropanimagehereOne="Drop a video here or click to browse."
                          />
                        </div>
                      </List>


                    </div>
                  </div>
                  <div className="bg-black_900 flex flex-col gap-6 items-start justify-center mt-6 p-6 sm:px-5 rounded-lg w-[536px] sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Select theatre
                      </Text>
                      <div className="flex flex-row gap-4 items-start justify-start self-stretch w-auto">
                        <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                          <Img
                            src="images/img_carbonradiobutton.svg"
                            className="h-6 w-6"
                            alt="carbonradiobutt"
                          />
                          <Text
                            className="not-italic text-left text-white_A700 w-auto"
                            variant="body5"
                          >
                            Theatre 1
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                          <Img
                            src="images/img_carbonradiobuttonchecked.svg"
                            className="h-6 w-6"
                            alt="carbonradiobutt_One"
                          />
                          <Text
                            className="not-italic text-left text-white_A700 w-auto"
                            variant="body5"
                          >
                            Theatre 2
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Venue link
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                        name="frame40146"
                        placeholder="Search"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray800"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-6 h-7 md:h-auto items-center justify-center self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Ticket availability status
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Switch value={false} className="w-[29%]" />
                        <div className="flex flex-col items-center justify-center self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            Not available
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[1097px] mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Add cast
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_300 text-left w-auto"
                      variant="body4"
                    >
                      Cast picture
                    </Text>
                    <div className="gap-2 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start self-stretch w-auto md:w-full">
                      <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                        <div className="flex flex-col h-[200px] items-center justify-start w-[200px]">
                          <Img
                            src="images/img_rectangle4_200x200.png"
                            className="h-[200px] md:h-auto object-cover rounded-lg w-[200px]"
                            alt="rectangleFour"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Real name
                            </Text>
                            <Input
                              wrapClassName="w-full"
                              className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                              name="groupThirteen"
                              placeholder="Gloria Osoro"
                              shape="RoundedBorder4"
                              size="md"
                              variant="FillGray800"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Cast name
                            </Text>
                            <Input
                              wrapClassName="w-full"
                              className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                              name="groupFourteen"
                              placeholder="Anne Gitau"
                              shape="RoundedBorder4"
                              size="md"
                              variant="FillGray800"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                        <div className="flex flex-col items-start justify-start w-[200px]">
                          <PlaysAddPlayColumniconparkoutli
                            className="border border-dashed border-gray_800 flex flex-col gap-2.5 h-[200px] md:h-auto items-center justify-center p-2.5 rounded w-[200px] sm:w-full"
                            dropanimagehereOne="Drop image (s) here or click to browse."
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Real name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_One"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Cast name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Two"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                        <div className="flex flex-col items-start justify-start w-[200px]">
                          <PlaysAddPlayColumniconparkoutli
                            className="border border-dashed border-gray_800 flex flex-col gap-2.5 h-[200px] md:h-auto items-center justify-center p-2.5 rounded w-[200px] sm:w-full"
                            dropanimagehereOne="Drop image (s) here or click to browse."
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Real name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Three"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Cast name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Four"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                        <div className="flex flex-col items-start justify-start w-[200px]">
                          <PlaysAddPlayColumniconparkoutli
                            className="border border-dashed border-gray_800 flex flex-col gap-2.5 h-[200px] md:h-auto items-center justify-center p-2.5 rounded w-[200px] sm:w-full"
                            dropanimagehereOne="Drop image (s) here or click to browse."
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Real name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Five"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Cast name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Six"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                        <div className="flex flex-col items-start justify-start w-[200px]">
                          <PlaysAddPlayColumniconparkoutli
                            className="border border-dashed border-gray_800 flex flex-col gap-2.5 h-[200px] md:h-auto items-center justify-center p-2.5 rounded w-[200px] sm:w-full"
                            dropanimagehereOne="Drop image (s) here or click to browse."
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Real name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Seven"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Cast name
                            </Text>
                            <Input
                              wrapClassName="flex h-12 w-full"
                              className="p-0 w-full"
                              name="rectangleNine_Eight"
                              placeholder=""
                              shape="RoundedBorder4"
                              variant="FillGray800"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[25px] items-start justify-start ml-auto mt-6 self-stretch w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[166px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_iconsax_bold_save2.svg"
                          className="mb-px"
                          alt="Iconsax/Bold/save2"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineWhiteA700_1"
                    >
                      <div className="font-bold text-left text-white_A700 text-xl">
                        Save play
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[164px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_iconsax_bold_addcircle.svg"
                          className="mb-px"
                          alt="Iconsax/Bold/addcircle"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                    >
                      <div className="font-bold text-left text-white_A700 text-xl">
                        Post play
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

export default AdminAddPlay