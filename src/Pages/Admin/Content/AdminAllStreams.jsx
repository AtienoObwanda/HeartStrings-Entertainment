import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "UI_Components";
import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";

const AdminAllStreams = () => {

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

  const handleLogout = () => {
    setIsAuthenticated(false);
    
  navigate('/admin-login');
  };

  return (

    
    <>
      <div className="bg-black_900_01 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-center mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">

        {/* Large screen */}
        <aside className="md:hidden flex justify-start md:px-5 w-[247px]">
          {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
            <div className="flex flex-col justify-start mb-[420px] mt-12 mx-auto  w-[81%]">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="common-pointer h-[40%] w-[40%]"
                alt="Heart Strings Entertainment Logo"
                onClick={() => navigate("/")}
              />
              
          <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/admin-dashboard")}
              >                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsaxboldactivity_vlojze.svg"
                  className="h-10 w-10"
                  alt="iconsaxboldacti"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Dashboard
                </Text>
              </div>

              <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/admin-allplays")}>
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                  className="h-10 w-10"
                  alt="Play Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Live Shows
                </Text>
              </div>

              <div
                className="bg-gray_800 common-pointer flex flex-row gap-2 items-center justify-center  mt-6 pl-6 md:pr-10 pr-[6px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"

                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927661/HeartStrings/SVG/img_iconsaxboldvideoplay_white_a700_z0bppl.svg"
                  className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Online Plays
                </Text>
              </div>


              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/ticket-management")}
              >
                <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                    className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                 Ticket Management
                </Text>
              </div>

              <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/user-management")}
              >
                <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldprofile2user_white_a700_qdp6it.svg"
                    className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  User Management
                </Text>
              </div>

              <Line className="bg-gray_800 h-px mt-16 w-full" />


                <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto group">
                      <div 
                        onClick={handleLogout}
                        className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                          <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                              className="h-full w-full hover:fill-red-500 svg"
                              alt="iconsaxboldlogo"
                                  />

                         
                            </div>
                              
                                  <Text className="text-white">Logout</Text>
                      </div>




            </div>
          </aside>


            {/* Display Medium Screens  */}
          <aside className="hidden md:flex justify-start md:px-5 w-[247px]">

          <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%] ">

              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain pt-3"
                  onClick={() => setToggle((prev) => !prev)}
                />
                <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="common-pointer h-[60%] w-[80%] ml-[20em]"
                alt="Heart Strings Entertainment Logo"
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
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsaxboldactivity_vlojze.svg"
                            className="h-10 w-10"
                            alt="Admin Dashboard Icon"
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
                    <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                    onClick={() => navigate("/admin-allplays")}
                    > 
                  
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                            className="h-10 w-10"
                            alt="Plays Icon"
                          />

                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            Live Shows
                          </Text>
                        </div>
                    </li>

                    <li className="py-3 cursor-pointer text-16">
                    <div className="bg-gray_800 common-pointer flex flex-row gap-2 items-center justify-center  mt-6 pl-6 md:pr-10 pr-[6px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                          onClick={() => navigate("/admin-allstreams")}
                        >
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927661/HeartStrings/SVG/img_iconsaxboldvideoplay_white_a700_z0bppl.svg"
                            className="h-10 w-10"
                            alt="Stream Icon"
                          />
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            Online Plays
                          </Text>
                        </div>
                    </li>


                    <li className="py-3 cursor-pointer text-16">
                        <div
                            className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                            onClick={() => navigate("/ticket-management")}
                          >
                            <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                              className="h-10 w-10"
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
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldprofile2user_white_a700_qdp6it.svg"
                              className="h-10 w-10"
                              alt="User Management Icon"
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
                    
                    
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto group">
                                <div 
                                  onClick={handleLogout}
                                  className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                                    <Img
                                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                                        className="h-full w-full hover:fill-red-500 svg"
                                        alt="iconsaxboldlogo"
                                            />

                                  
                                      </div>
                                        
                                            <Text className="text-white">Logout</Text>
                                </div>

                      

                    </li>
                  </ul>
          </div>
          </div>

          </aside>




        <div className="flex-1 h-[1024px] md:h-[1198px] sm:h-[1776px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col gap-6 inset-x-[0] items-center justify-center mx-auto p-[46px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-row md:gap-10 gap-[788px] items-center justify-between mt-0.5 self-stretch w-auto md:w-full">
              <div className="flex flex-col items-start justify-center self-stretch w-auto">
                <div className="flex flex-col items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    All Streams
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[184px] w-auto"
                onClick={() => navigate("/add-stream")}
                leftIcon={
                  <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconsax_bold_addcircle_a598f7.svg"
                    className="mt-px"
                    alt="Iconsax/Bold/addcircle"
                  />
                }
                shape="RoundedBorder8"
                size="lg"
                variant="FillRed900"
              >
                <div className="font-bold text-left text-white_A700 text-xl">
                  Add stream
                </div>
              </Button>
            </div>
            <div className="md:h-[1025px] sm:h-[1603px] h-[275px] mb-[472px] relative w-full">
              <div className="flex flex-row h-full items-center justify-between ml-[104px] mt-[59px] w-[56%]">
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927663/HeartStrings/SVG/img_materialsymbolsplaycircle_black_900_e8p0ow.svg"
                  className="h-12 w-12"
                  alt="materialsymbols"
                />
                
                
              </div>
              <List
                className="absolute sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-start m-auto self-stretch w-auto"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                  <div className="h-[200px] relative w-full">
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927767/HeartStrings/SVG/img_rectangle8_570x1140_ot5kmw.png"
                      className="h-[200px] m-auto object-cover rounded-lg w-full"
                      alt="rectangleFour"
                    />
                    <Button
                      className="absolute flex h-11 items-center justify-center right-[6%] top-[5%] w-11"
                      shape="icbRoundedBorder2"
                      size="smIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927647/HeartStrings/SVG/img_camera_n3rcqz.svg"
                        className="h-6"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
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
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
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
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
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
                      className="absolute h-12 inset-x-[0] mx-auto top-[30%] w-12"
                      alt="materialsymbols"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
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
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[29px] sm:px-5 top-[0] w-full">
            <Text
              className="ml-[19px] text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Streams
            </Text>
            <div className="flex flex-row gap-[21px] items-center justify-start mr-[19px] self-stretch w-auto">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_ellipse1_jfdd8k.png"
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
        </div>
      </div>
      </div>
    </>
  );
};

export default AdminAllStreams