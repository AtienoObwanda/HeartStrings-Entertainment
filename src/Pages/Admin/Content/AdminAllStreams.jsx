import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {FaEdit} from "react-icons/fa"
import axios from 'axios';

import { Button, Img, Line, List, Text } from "UI_Components";
import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
import ReactPlayer from 'react-player';


import { apiUrl } from '../../../../env';

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

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  
  async function fetchMovies() {
    try {
      const response = await axios.get(`${apiUrl}/api/videos/`);
      const data = response.data;
      if (data.error === false) {
        // Sort the movies array by the 'added_on' property in descending order
        const sortedMovies = data.data.sort((a, b) => {
          return new Date(b.added_on) - new Date(a.added_on);
        });
        setMovies(sortedMovies); // Update state with sorted array
        console.log(data);
      } else {
        console.error('Error fetching movies:', data.message);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (

    
    <>
      <div className="bg-black_900_01  flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto w-full pb-[300em]">
      {/* <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full"> */}

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
       
          <div className="flex-1 h-[1123px] md:h-[175px] md:px-5 relative w-full">
          <div className=" flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-6 sm:px-5 top-[0] w-full">
              <div className="flex flex-col items-center justify-center ml-6 mt-[9px] self-stretch w-auto">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Plays
                </Text>
              </div>
              <div className="flex flex-row gap-[21px] items-center justify-start mr-6 self-stretch w-auto">
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
            <div className="flex flex-col gap-6  items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
              <div className="flex flex-row md:gap-10 gap-[40px] items-center justify-between self-stretch w-auto md:w-full">
                <Text
                  className="font-bold text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  All Streams
                </Text>
                <Button
                  className="common-pointer cursor-pointer flex items-center  justify-center min-w-[164px] w-auto"
                  onClick={() => navigate("/add-stream")}
                  leftIcon={
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconsax_bold_addcircle_a598f7.svg"
                      className="mb-px mr-4"
                      alt="Iconsax/Bold/addcircle"
                    />
                  }
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  <div className="font-bold text-left text-white_A700 text-xl">
                    Post Online Play
                  </div>
                </Button>
              </div>
             

              {/* Live */}
              <div className="flex flex-col gap-6 items-start justify-start  max-w-[1140px] mt-24  mx-auto md:px-5 self-stretch w-full">
                {movies.length === 0 ? (
                  <Text
                  className="text-center justify-center items center text-black w-auto"
                  as="h2"
                  variant="h2"
                >
                  No Plays Available
                </Text>
                ):(
                  <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Live Plays
                </Text>
                )} 
                <div className="flex flex-col items-center justify-center self-stretch w-auto md:w-full">
                {movies.length === 0 ? (
                      <div className="bg-black_900_01 h-80 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-1/2 md:w-90% md:mt-[130px] sm:w-full  mx-auto">

                      <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto sm:w-full">
                          <Text
                            className="text-gray_300 text-center w-auto"
                            as="h3"
                            variant="h3"
                          >
                            No live plays available!
                          </Text>
                          <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
                            <Text
                              className="font-normal leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
                              as="h6"
                              variant="h6"
                            >
                              <>
                              Please check in soon for new updates.
                              </>
                            </Text>
                          </div>
                          
                        </div>

                    </div>
                ) : (
                  <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      
                  {movies.map((movie, index) => (
                    
                    
                        <div
                          className="bg-black_900_01 flex flex-col gap-4 h-[430px] items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                          key={index} >
                            <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[250px] relative w-full">
                          <FaEdit
                            className="absolute top-[0%] w-8 h-8 right-[2%] text-white"
                            alt="Edit Play"
                            onClick={() => navigate(`/edit-stream/${movie.id}`)}                            
                          />
                          <ReactPlayer 
                          light={
                          <img 
                          src={movie.video_poster}
                          alt='Poster' 
                          className="h-[249px] md:h-auto object-cover rounded-lg w-full"

                          />}
                          url={movie.trailer} 
                          playing  controls 
                          width='100%'
                          height='240px'
                          config={{
                            file: {
                              attributes: {
                                controlsList: 'nodownload' // Disable download
                              }
                            }
                          }}
                          />
                        
                          </div>
                              </div>

                              <Link to={`/stream/${movie.id}`} >  
                              <div className="flex flex-col gap-8 items-start justify-start w-auto">
                              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-2xl md:text-[22px] text-white sm:text-xl w-auto"
                                  size="txtRobotoRomanBold24"
                                >
                                  {movie.title}
                                </Text>
                                <Text
                                  className="leading-[175.00%] max-w-[332px] md:max-w-full text-gray-300 text-xl"
                                  size="txtRobotoRomanRegular20Gray300"
                                >
                                  {movie.synopsis.substring(0, 70) + '...'}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
                                
                                
                              </div>
                            </div>
                            </Link>

                    </div>   
                
              ))}
               
                </div>

            )}
            </div>
            
          </div>
    

              {/* Archived */}


              <div className="flex md:flex-1 flex-col mt-[44px] gap-6 items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col items-center justify-center self-stretch w-auto sm:w-full">
                    <Text
                      className="font-bold text-5xl md:text-[22px] text-left text-white_A700 sm:text-xl"
                      
                    >
                      Archived Streams
                    </Text>
                  </div>
                 
                </div>
            </div>
           
          </div>
      {/* </div> */}
      </div>
    </>
  );
};

export default AdminAllStreams