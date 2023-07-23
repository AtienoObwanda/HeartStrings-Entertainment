import React, { useState } from "react";

  import { useNavigate } from "react-router-dom";
  
  import { Button, Img, Input, Line, List, Switch, Text } from "UI_Components";
  import PlaysAddPlayAddshift from "UI_Components/PlaysAddPlay";
  import PlaysAddPlayColumniconparkoutli from "UI_Components/PlaysAddPlayColumnIcon";
  import PlayAddPlayVideo from "UI_Components/PlayAddPlayVideo"
  import {InputRadio} from "UI_Components/InputRadio"

  import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
import DatePickerCal from "Components/Admin/DatePickerCal";
import LiveShowCal from "Components/Admin/LiveShowCal";




  
const AdminAddPlay = () => {
  
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [availability, setAvailability] = React.useState(false);

  const handleSwitchChange = (newValue) => {
    setAvailability(newValue);
  };
    
    return (
      <>
        <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto pb-[109px] w-full">
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

              <div className="bg-gray_800 common-pointer flex flex-row gap-2 items-center justify-center  mt-6 pl-6 md:pr-10 pr-[6px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"

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
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
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
                onClick={() => navigate("/admin-allstreams")}
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
                onClick={() => navigate("/admin-allstreams")}
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
                      <div className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                          <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                              className="h-full w-full hover:fill-red-500 svg"
                              alt="iconsaxboldlogo"
                                  />

                         
                            </div>
                              <a
                                  href="#:"
                                  className="font-normal not-italic text-base text-gray-300 text-left w-auto"
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
                  <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-6 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
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
                  <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-0 self-stretch w-auto"
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
                              <div className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                                  <Img
                                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                                      className="h-full w-full hover:fill-red-500 svg"
                                      alt="iconsaxboldlogo"
                                          />

                                
                                    </div>
                                      <a
                                          href="#:"
                                          className="font-normal not-italic text-base text-gray-300 text-left w-auto"
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
                    Live shows
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
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927647/HeartStrings/SVG/img_arrowleft_rjkqfd.svg"
                      className="h-6 w-6"
                      alt="ictwotonearrowr"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Go back to all live shows
                    </Text>
                  </div>


                  <div className="flex md:flex-col flex-row gap-4 items-start justify-between mt-6 w-full">








                    <div className="bg-black_900 w-[725px] flex sm:flex-1 flex-col gap-6 items-center justify-center mb-8 sm:px-5 px-6 py-12 rounded-lg md:w-[535px] sm:w-full">
                      {/* Content Form */}
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Play title
                        </Text>
                        <textarea className="bg-gray_800 text-gray_300 rounded w-full"></textarea>

                      </div>
                        
                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Synopsis
                          </Text>
                          <textarea className="bg-gray_800 h-[200px] text-gray_300 rounded w-full"></textarea>
                        </div>
                        <Text
                          className="not-italic text-gray_300 text-left w-auto"
                          variant="body5"
                        >
                          Do not exceed 100 characters when entering the play’s
                          synopsis
                        </Text>
                      </div>
                      {/* Poster Upload */}
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full sm:w-full">
                      
                        <div className="flex flex-col gap-4 items-start justify-center my-0 w-full sm:w-full">
                            <Text
                                className="font-normal not-italic text-left text-white_A700 w-auto"
                                variant="body4"
                            >
                                Play poster
                            </Text>
                            {/* Drag and Drop */}
                            <div class="flex items-center justify-center w-full">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                  className="h-6 w-6 mb-4"
                                  alt="iconparkoutli"
                                />
                                  <p class="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to upload</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" class="hidden" />
                              </label>
                              <div id="image-preview" class="hidden mt-4">
                                <img id="preview-image" class="w-64 h-32" src="#" alt="Preview" />
                              </div>
                            </div>

                        </div>

                        <div className="flex flex-col gap-6 items-start mt-4 justify-center my-0 w-full sm:w-full">
                            <Text
                                className="font-normal not-italic text-left text-white_A700 w-auto"
                                variant="body4"
                            >
                                Infotrailer
                            </Text>
                             {/* Drag and Drop */}
                             <div class="flex items-center justify-center w-full">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                  className="h-6 w-6 mb-4"
                                  alt="iconparkoutli"
                                />
                                  <p class="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to upload</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" class="hidden" />
                              </label>
                              <div id="image-preview" class="hidden mt-4">
                                <img id="preview-image" class="w-64 h-32" src="#" alt="Preview" />
                              </div>
                            </div>
                        </div>
                    </div>


                      
                       
                    </div>
                    
                    <div className="bg-black_900 w-[725px] flex sm:flex-1 flex-col items-start justify-start mb-[51px] md:px-10 px-12 sm:px-5 py-6 rounded-lg md:w-[535px] sm:w-full">
                    <Text
                              className="text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto"
                              size="txtRobotoRomanRegular24WhiteA700"
                            >
                              Select show time
                            </Text>
                            {/* Calendar: */}
                            <LiveShowCal/>


                    </div>
                  </div>



                  {/* Theatre */}
                  <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[725px] mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
                  <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Select Theatre
                            </Text>

                            <div className="flex flex-row gap-4 items-start justify-start w-auto">

                              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                                <input type="radio" 
                                 class="h-6 w-6 checked:bg-red-900 
                                 text-red-900 p-3 my-4" 
                                 id="theatre1" 
                                name="theatre" 
                                value="Theatre 1"
                                 />
                                <label htmlFor="theatre1">
                                  <Text
                                    className="text-white_A700 w-auto"
                                    size="txtRobotoRomanRegular14WhiteA700"
                                  >
                                    Theatre 1
                                  </Text>
                                </label>
                              </div>


                              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                              <input type="radio" class="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4" id="theatre2" name="theatre" value="Theatre 2"/>
                                 <label htmlFor="theatre2">
                                  <Text
                                    className="text-white_A700 w-auto"
                                    size="txtRobotoRomanRegular14WhiteA700"
                                  >
                                    Theatre 2
                                  </Text>
                                </label>
                              </div>

                              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                              <input type="radio" class="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4" id="theatre3" name="theatre" value="Theatre 3" />
                                <label htmlFor="theatre3">
                                  <Text
                                    className="text-white_A700 w-auto"
                                    size="txtRobotoRomanRegular14WhiteA700"
                                  >
                                    Theatre 3
                                  </Text>
                                </label>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start justify-start w-full sm:w-full">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtRobotoRomanRegular16"
                        >
                          Location
                        </Text>
                        <Input
                          name="frame40146"
                          placeholder="Search"
                          className="p-0 placeholder:text-gray-300 sm:pr-5 text-base text-gray-300 text-left w-full"
                          wrapClassName="bg-gray_800 pl-[13px] pr-[35px] py-4 rounded w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-6 h-7 md:h-auto items-center justify-center w-auto">
                        <Text
                          className="text-base text-white_A700 w-auto"
                          size="txtRobotoRomanRegular16"
                        >
                          Ticket availability status
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-center w-auto">
                          <Switch
                            value={availability}
                            onChange={handleSwitchChange}
                            onColor="#3d3d3d"
                            offColor="#3d3d3d"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            className="w-[29%]"
                          />
                          <Text
                              className="ml-6 text-base text-gray-300 w-auto"
                              size="txtRobotoRomanRegular16Gray300"
                            >
                            {availability ? "Available" : "Not available"}
                            </Text>
                        </div>
                      </div>
                      </div>



                    </div>
                 
                  {/* Cast */}
                  <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[1450px] mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
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
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927679/HeartStrings/SVG/img_rectangle4_200x200_j1rxou.png"
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
                              name="groupFourteen"
                              placeholder="Anne Gitau"
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
                           {/* Drag and Drop */}
                           <div class="flex items-center justify-center w-full">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                  className="h-6 w-6 mb-4"
                                  alt="iconparkoutli"
                                />
                                  <p class="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to browse</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" class="hidden" />
                              </label>
                              <div id="image-preview" class="hidden mt-4">
                                <img id="preview-image" class="w-64 h-32" src="#" alt="Preview" />
                              </div>
                            </div>
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
                              name="groupFourteen"
                              placeholder="Anne Gitau"
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
                          <div class="flex items-center justify-center w-full">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                  className="h-6 w-6 mb-4"
                                  alt="iconparkoutli"
                                />
                                  <p class="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to browse</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" class="hidden" />
                              </label>
                              <div id="image-preview" class="hidden mt-4">
                                <img id="preview-image" class="w-64 h-32" src="#" alt="Preview" />
                              </div>
                            </div>
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
                              name="groupFourteen"
                              placeholder="Anne Gitau"
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
                        <div class="flex items-center justify-center w-full">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                  className="h-6 w-6 mb-4"
                                  alt="iconparkoutli"
                                />
                                  <p class="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to browse</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" class="hidden" />
                              </label>
                              <div id="image-preview" class="hidden mt-4">
                                <img id="preview-image" class="w-64 h-32" src="#" alt="Preview" />
                              </div>
                            </div>
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
                              name="groupFourteen"
                              placeholder="Anne Gitau"
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
                        <div class="flex items-center justify-center w-full">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <Img
                                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                  className="h-6 w-6 mb-4"
                                  alt="iconparkoutli"
                                />
                                  <p class="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to browse</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" accept="image/*" class="hidden" />
                              </label>
                              <div id="image-preview" class="hidden mt-4">
                                <img id="preview-image" class="w-64 h-32" src="#" alt="Preview" />
                              </div>
                            </div>
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
                              name="groupFourteen"
                              placeholder="Anne Gitau"
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
                    </div>
                  </div>

                  {/* Save Play */}
                  <div className="flex flex-row gap-[25px] items-start justify-start ml-auto mt-6 self-stretch w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[166px] w-auto"
                      leftIcon={
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsax_bold_save2_bgaabn.svg"
                          className="mb-px mr-3"
                          alt="Save"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineWhiteA700_1"
                    >
                      <div className="font-bold text-left text-white_A700 text-xl">
                        Save Live Show
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[164px] w-auto"
                      leftIcon={
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1690007593/circle_gsm6z1.svg"
                          className="mb-px mr-3"
                          alt="Save Icon"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                    >
                      <div className="font-bold text-left text-white_A700 text-xl">
                        Post Live Show
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