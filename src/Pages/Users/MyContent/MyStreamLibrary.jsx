import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import { Button, Img, Input, Line, List, Text } from "UI_Components";
// import WhiteIcon from "Components/WhiteIcon";
import LibrarySmallnoicon from "UI_Components/LibrarySmallnoicon";
import close from "../../../assets/close.svg";
import menu from "../../../assets/menu.svg";

const MyStreamLibrary = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const accessToken = localStorage.getItem('accessToken');


  
  useEffect(() => {

    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])

  console.log(accessToken)

  const handleLogout = () => {
    setIsAuthenticated(false);
    
   navigate('/login');
  };

  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          {/* Side Bar */}
          {/* Display on Large Screens  */}
          {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
          <aside className="md:hidden flex bg-black_900 justify-start md:px-5 w-[247px]">
            <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%]">
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
              className="common-pointer h-[25%] w-[35%]"
              alt="Heart Strings Entertainment Logo"
              onClick={() => navigate("/")}
            />
              <div 
              className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/edit-my-account")}
              >
                {/* <div className="flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-[9px] mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto"> */}
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxbolduser_cixk7a.svg"
                  className="h-6 w-6"
                  alt="iconsaxbolduser"
                />
                <Text
                  className="font-normal not-italic text-left text-gray_300 w-auto"
                  variant="body4"
                >
                  My Account
                </Text>
              </div>

              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[55px] sm:px-5 py-2.5 rounded-lg w-[199px]">
                <Img
                  src=" https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  My streams
                </Text>
              </div>
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/my-tickets")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldrece"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  My Tickets
                </Text>
              </div>
              <Line className="bg-gray_800 h-px mt-[60px] w-full" />
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/contact-us")}>
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldmessagequestion_gray_300_nml9u7.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldmess"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Help
                </Text>
              </div>
              <div
              onClick={handleLogout}
               className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                className="h-6 w-6"
                alt="iconsaxboldlogo"
              />
               
                  <Text className="text-white"
                  >Logout</Text>
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
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="common-pointer h-18 w-[35%]"
                alt="Heart Strings Entertainment Logo"
                onClick={() => navigate("/")}
                />
              </div>
              <div
                className={`${toggle ? "flex" : "hidden"}
                      p-6 bg-black_900 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none justify-start items-center flex-1">
                  <li className="py-3 cursor-pointer text-16">
                  <div 
              className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/edit-my-account")}
              >                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxbolduser_cixk7a.svg"
                        className="h-6 w-6"
                        alt="iconsaxbolduser"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        My Account
                      </Text>
                    </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                    <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[55px] sm:px-5 py-2.5 rounded-lg w-[199px]">
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldelem"
                      />
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        My streams
                      </Text>
                    </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                    <div
                      className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
                      onClick={() => navigate("/mytickets")}
                    >
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldrece"
                      />
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        My Tickets
                      </Text>
                    </div>
                  </li>

                  <Line className="bg-gray_800 h-px mt-[60px] w-full" />

                  <li className="py-3 cursor-pointer text-16">
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto">
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldmessagequestion_gray_300_nml9u7.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldmess"
                      />
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Help
                      </Text>
                    </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                    <div 
                    onClick={handleLogout}
                    className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto">
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldlogo"
                      />
                      
                        <Text className="text-white">Logout</Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* End Of Sidebar */}

          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            {/* User Nav */}
            <div className="flex sm:flex flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full md:mt-[-450px]">
              <div className="flex flex-col items-start justify-center ml-8 md:ml-0 self-stretch w-auto">
                <Text
                  className="md:text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  My Streams
                </Text>
              </div>

              <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927739/HeartStrings/SVG/img_share_obssio.svg"
                  className="h-6 w-6"
                  alt="share"
                />
                <div className="flex flex-col items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Hi, Gloria
                  </Text>
                </div>
              </div>
            </div>
            {/* End of nav */}
            <div className="flex flex-col items-center justify-start pb-[26px] sm:px-5 px-[26px] w-full">
              {/* Top Section */}
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-start justify-center ml-8 md:ml-[0] self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    Streamed plays that you have purchased.
                  </Text>
                </div>
              </div>

              {/* End of top Section */}

              {/* Main Page section */}
              <div className="flex flex-col gap-12 items-start justify-start self-stretch w-auto sm:w-full">
                {/* Main */}
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                  {/* Listed recent Purchases */}

                  <div className="flex flex-col gap-4 items-start justify-center ml-8 md:ml-[0] mt-6 self-stretch w-auto md:w-full">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Recently purchased
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <div className="h-[200px] relative w-full">
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927701/HeartStrings/SVG/img_rectangle4_200x256_ofmpv1.png"
                            className="common-pointer h-[200px] m-auto object-cover rounded-lg w-full"
                            alt="rectangleFour"
                            onClick={() => navigate("/mystreamlibrary")}
                          />
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_materialsymbolsplaycircle_white_a700_ousntd.svg"
                            className="absolute h-12 inset-[0] justify-center m-auto w-12"
                            alt="materialsymbols"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                          <div className="flex flex-col items-center justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Bridegroom for sale
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                              <Img
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                                className="h-6 w-6"
                                alt="mdiclocktimenin"
                              />
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  1hr 20mins
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxboldtimer_lugksa.svg"
                                  className="h-6 w-6"
                                  alt="iconsaxboldtime"
                                />
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  7 days to go
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <div className="h-[200px] relative w-full">
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927731/HeartStrings/SVG/img_rectangle8_300x557_xlnnpm.png"
                            className="h-[200px] m-auto object-cover rounded-lg w-full"
                            alt="rectangleFour"
                          />
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_materialsymbolsplaycircle_white_a700_ousntd.svg"
                            className="absolute h-12 inset-[0] justify-center m-auto w-12"
                            alt="materialsymbols"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                          <div className="flex flex-col items-center justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Bridegroom for sale
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                              <Img
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                                className="h-6 w-6"
                                alt="mdiclocktimenin"
                              />
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  1hr 20mins
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxboldtimer_lugksa.svg"
                                  className="h-6 w-6"
                                  alt="iconsaxboldtime"
                                />
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  7 days to go
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <div className="h-[200px] relative w-full">
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927725/HeartStrings/SVG/img_rectangle8_1_cblvcv.png"
                            className="h-[200px] m-auto object-cover rounded-lg w-full"
                            alt="rectangleFour"
                          />
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_materialsymbolsplaycircle_white_a700_ousntd.svg"
                            className="absolute h-12 inset-[0] justify-center m-auto w-12"
                            alt="materialsymbols"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                          <div className="flex flex-col items-center justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Bridegroom for sale
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                              <Img
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                                className="h-6 w-6"
                                alt="mdiclocktimenin"
                              />
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  1hr 20mins
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxboldtimer_lugksa.svg"
                                  className="h-6 w-6"
                                  alt="iconsaxboldtime"
                                />
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  7 days to go
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <div className="h-[200px] relative w-full">
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927736/HeartStrings/SVG/img_rectangle8_191x332_ykeufx.png"
                            className="h-[200px] m-auto object-cover rounded-lg w-full"
                            alt="rectangleFour"
                          />
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_materialsymbolsplaycircle_white_a700_ousntd.svg"
                            className="absolute h-12 inset-[0] justify-center m-auto w-12"
                            alt="materialsymbols"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                          <div className="flex flex-col items-center justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Bridegroom for sale
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                              <Img
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                                className="h-6 w-6"
                                alt="mdiclocktimenin"
                              />
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  1hr 20mins
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxboldtimer_lugksa.svg"
                                  className="h-6 w-6"
                                  alt="iconsaxboldtime"
                                />
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  7 days to go
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>

                  {/* Watched */}
<div className="flex flex-col gap-4 items-start justify-center mb-[108px] ml-8 md:ml-[0] mt-12 self-stretch w-auto">
    <Text
      className="font-bold text-left text-white_A700 w-auto"
      as="h5"
      variant="h5"
    >
      Watched
    </Text>
    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <div className="h-[200px] relative w-full">
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927701/HeartStrings/SVG/img_rectangle4_200x256_ofmpv1.png"
                            className="common-pointer h-[200px] m-auto object-cover rounded-lg w-full"
                            alt="rectangleFour"
                            //onClick={() => navigate("/mystreamlibrary")}
                          />
                          {/* <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_materialsymbolsplaycircle_white_a700_ousntd.svg"
                            className="absolute h-12 inset-[0] justify-center m-auto w-12"
                            alt="materialsymbols"
                          /> */}
                           <div className="absolute flex flex-col gap-[5px] h-max inset-[0] items-center justify-start m-auto self-stretch w-auto">
                            <Button
                              className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[100px]"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="FillRed900"
                            >
                              Rent again
                            </Button>
                            <Button
                              className="cursor-pointer font-bold min-w-[100px] text-black_900 text-center text-xl w-auto"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineWhiteA700"
                            >
                              Watch trailer
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                          <div className="flex flex-col items-center justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Bridegroom for sale
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                              <Img
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                                className="h-6 w-6"
                                alt="mdiclocktimenin"
                              />
                              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  1hr 20mins
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start self-stretch w-auto">
                              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxboldtimer_lugksa.svg"
                                  className="h-6 w-6"
                                  alt="iconsaxboldtime"
                                />
                                <Text
                                  className="font-normal not-italic text-left text-white_A700 w-auto"
                                  variant="body4"
                                >
                                  0 days to go
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </List>
  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStreamLibrary;