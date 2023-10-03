import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'
import ReactPlayer from 'react-player';


import { Button, Img, Input, Line, List, Text } from "UI_Components";
// import WhiteIcon from "Components/WhiteIcon";
import LibrarySmallnoicon from "UI_Components/LibrarySmallnoicon";
import close from "../../../assets/close.svg";
import menu from "../../../assets/menu.svg";

import { apiUrl } from '../../../../env';

const MyStreamLibrary = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const accessToken = localStorage.getItem('accessToken');
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  const [activePlays, setActivePlays] = useState([]);
  const [archivedPlays, setArchivedPlays] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (accessToken) {
      fetchUserInfo();
    } else {
      navigate('/admin-login');
    }
  }, [accessToken]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${apiUrl}/auth/users/me/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      setUserInfo(response.data);
  
      console.log('User Info:', response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  useEffect(() => {

    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])

  console.log('AccessToken', accessToken)

  const clearAccessToken = () => {
    localStorage.removeItem('accessToken');
  };

  const handleLogout = () => {
    localStorage.clear();
    clearAccessToken(); 
    setIsAuthenticated(false);
    navigate('/login');
  };



// Fetch Paid Plays:
// useEffect(() => {
//     const headers = {
//       Authorization: `Bearer ${accessToken}`
//     };
//     axios.get(`${apiUrl}/api/my-stream/`, { headers })
//           .then(response => {
//             const { data } = response;

//             if (data.error) {
//               setErrorMessage(data.message);
//             } else {
//               setActivePlays(data.data);
//             }
//           })
//           .catch(error => {
//             console.error('Error fetching active plays:', error);
//             // setErrorMessage('An error occurred while fetching active plays.');
//           });
//       }, []);



useEffect(() => {
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    axios.get(`${apiUrl}/api/my-stream/`, { headers })
  .then(response => {
    console.log('Response:', response);
    const { data } = response;
    if (data.error) {
      setError(data.message);
    } else {
      const plays = data.data;
      const activePlays = plays.filter(play => play.remaining_access_time > 0);
      const archivedPlays = plays.filter(play => play.remaining_access_time === 0);

      setActivePlays(activePlays);
      setArchivedPlays(archivedPlays);
    }
  })
  .catch(error => {
    console.error('Error fetching plays:', error);
    setError('Error fetching plays');
  });
}, []);

const [showSection, setShowSection] = useState(false);

useEffect(() => {
  const delay = setTimeout(() => {
    setShowSection(true);
  }, 4000); 

  return () => clearTimeout(delay);
}, []);



  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full pb-[15em]">
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
              onClick={() => navigate("/my-account")}
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

              {/* <div
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
              </div> */}

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
                    Hi, {userInfo.first_name}
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
                    Stream plays that you have purchased.
                  </Text>
                </div>
              </div>


              <div className="flex flex-col gap-12 items-start justify-start self-stretch w-auto sm:w-full">
                {/* Main */}
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                  {/* If Error */}
                  {activePlays.length > 0 && (
                  <div className="flex flex-col gap-4 items-start justify-center ml-8 md:ml-[0] mt-6 self-stretch w-auto md:w-full">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Recently purchased
                    </Text>
                    <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">

                    {activePlays.map((play, index) => (
            // <Link to={`/stream/${movie.id}`} >  
            
                    <div
                      className="bg-black_900_01 flex flex-col gap-4 h-[440px] items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                      key={index} >
                        <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[230px] relative w-full">
                      <ReactPlayer 
                      light={
                      <img 
                      src={play.video_poster}
                      // src='https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927767/HeartStrings/SVG/img_rectangle8_570x1140_ot5kmw.png' 
                      alt='Poster' 
                      className="h-[249px] md:h-auto object-cover rounded-lg w-full"

                      />}
                      url={play.video} 
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
                          <div className="flex flex-col gap-8 items-start justify-start w-auto">
                          <div className="flex flex-col gap-4 items-start justify-start w-auto">
                         <Text
                            className="text-center text-2xl mt-8 md:text-[22px] text-white sm:text-xl w-auto"
                            size="txtRobotoRomanBold24"
                          >
                            {play.title}
                          </Text>
                           
                          </div>
                          <div className="flex flex-row gap-[103px] items-center justify-between w-auto pb-6">
                          <div className="flex flex-row gap-2 items-center justify-center w-auto">
                              <Img
                                className="h-6 w-6"
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1696318310/timee_vnhjaw.svg"
                                alt="Duration"
                              />
                              <div className="flex flex-col items-start justify-start w-auto text-white">
                                <Text
                                  className="text-base text-white-A700 w-auto"
                                  size="txtRobotoRomanRegular16"
                                >
                                 {/* {movie.duration} */}
                                 1hr 30mins
                                </Text>
                              </div>
                            </div>

                            
                            <div className="flex flex-row gap-2 items-center justify-center w-auto">
                              <Img
                                className="h-6 w-6"
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1696318310/timer_rvmgnj.svg"
                                alt="Remaining Time Icon"
                              />
                              <div className="flex flex-col items-start justify-start w-auto text-white">
                                <Text
                                  className="text-base text-white-A700 w-auto"
                                  size="txtRobotoRomanRegular16"
                                >
                                 {/* {movie.duration} */}
                                 {play.remaining_access_time} days to go
                                </Text>
                              </div>
                            </div>
                          </div>

           
                        </div>

                    </div>   
                // </Link>
            
          ))}
          </div>
                  </div>
                     )}
                    <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Archived
                      </Text>
                  {/* Watched */}
                  {archivedPlays.length > 0 && (
                  <div className="flex flex-col gap-4 items-start justify-center mb-[108px] ml-8 md:ml-[0] mt-12 self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Archived... Plays
                      </Text>
                      
                    </div>
                  )}


                    {/* No Active Plays */}
                    {showSection && activePlays.length === 0 && archivedPlays.length === 0 && (
                    <div className="flex flex-col gap-4 items-center justify-center mb-[108px] ml-8 md:ml-[0] mt-12 self-stretch w-auto">
                      <Text
                        className="text-center text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>

                        You have not purchased any plays. Start Browsing available plays.
                        <br></br>
                        <br></br>
                        <br></br>

                        <a
                        href='/all-streams'>
                          BROWSE PLAYS
                        </a>
                      </Text>
                      </div>
                      )}

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