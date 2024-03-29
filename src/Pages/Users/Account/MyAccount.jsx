import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "UI_Components";
import axios from 'axios';

import { apiUrl } from '../../../../env';
import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";

const MyAccount = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const accessToken = localStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState({});

  // USER DATA:
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phonenumber: ''
  });


  // USER DATA
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

      setUserData({
        name: `${response.data.first_name} ${response.data.last_name}`,
        email: response.data.email,
        phonenumber: response.data.phone,
      });

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

  const clearAccessToken = () => {
    localStorage.removeItem('accessToken');
  };

  const handleLogout = () => {
    localStorage.clear();
    clearAccessToken(); 
    setIsAuthenticated(false);
    navigate('/login');
  };


  
// Populate data


// const [userData, setUserData] = useState({
//   name: `${response.data.first_name} ${response.data.last_name}`,
//   email: response.data.email,
//   phonenumber: response.data.phone,
// });




const handleItemChange = (key, value) => {
  setUserData(prevUserData => ({
    ...prevUserData,
    [key]: value
  }));
};


// HandleEditSubmit:
const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name,email, phonenumber,password } = userData;
  
    const data = {
      id: userInfo.id,
      first_name: name.split(' ')[0],
      last_name: name.split(' ')[1],
      email,
      // email: userData.email,
      phone: phonenumber,
      password
    };
  try {
    console.log('Data to send:', data);
    const response = await axios.put(`${apiUrl}/api/update-user/`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    navigate('/my-streams');
  } catch (error) {
    console.error('Error updating user data:', error);
    // Handle error, show error message, etc.
  }
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
                <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[58px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
                  <Img
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
                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                  onClick={() => navigate("/my-streams")}
                >
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
                  
                    <Text className="text-white">Logout</Text>
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
                      <div className={`${toggle ? 'flex' : 'hidden'}
                        p-6 bg-black_900 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                        >
                        <ul className="list-none justify-start items-center flex-1">
                            <li className="py-3 cursor-pointer text-16">
                              
                              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[58px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
                                <Img
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
                                <div
                                    className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
                                    onClick={() => navigate("/my-streams")}
                                  >
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

                            {/* <li className="py-3 cursor-pointer text-16">
                              <div
                                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
                                    onClick={() => navigate("/my-tickets")}
                                  >
                                    <Img
                                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                                      className="h-6 w-6"
                                      alt="My Tickets"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_300 text-left w-auto"
                                      variant="body4"
                                    >
                                      My Tickets
                                    </Text>
                              </div>
                            </li> */}

                            <Line className="bg-gray_800 h-px mt-[60px] w-full" />


                            <li className="py-3 cursor-pointer text-16"> 
                                  <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto">
                                    <Img
                                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldmessagequestion_gray_300_nml9u7.svg"
                                      className="h-6 w-6"
                                      alt="Help"
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
                                  alt="Log Out"
                                />
                               
                                  <Text className="text-white_A07">Logout</Text>
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
                
                <div className="flex flex-col items-start justify-center ml-5 sm:ml-0 self-stretch w-auto">
                  <Text
                    className="md:text-left text-white_A700 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Account overview
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
                <div className="flex flex-col gap-12 items-start justify-start w-[97%] md:w-full">
                  
                  {/* Top Section */}

                 
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-3 items-start justify-center self-stretch w-auto sm:pt-5">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Personal information
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Update your personal information
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] sm:gap-[120px] items-start justify-start self-stretch w-auto sm:pt-5">
                     <a href='/my-streams'>
                     <Button
                        className="cursor-pointer font-bold min-w-[94px] text-center text-white_A700 text-xl w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="OutlineWhiteA700_1"
                      >
                        Cancel
                      </Button>
                     </a>
                     
                    </div>
                </div>

                    {/* End of top Section */}

                  {/* Edit Details section */}
                  <div className="flex flex-col gap-12 items-start justify-start self-stretch w-1/2 sm:w-full">
                    
                  <form onSubmit={handleSubmit}>

                    {/* Edit Account Details */}
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch w-[470px] sm:w-full">
                      <div className="flex flex-col gap-2 items-start mt-[1.5em] justify-start self-stretch w-full sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-full"
                          variant="body4"
                        >
                          Name
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                          type="text" 
                          name="name" 
                          defaultValue={userData.name}
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start mt-[1.5em] justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Email address
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          type="email"
                          name="email" 
                          defaultValue={userData.email}                          
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start mt-[1.5em] justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Phone number
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                          name="phonenumber" 
                          defaultValue={userData.phonenumber}
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch mt-[1.5em] w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                         New Password(Optional)
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          name="password_One"
                          placeholder="******************"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                        ></Input>
                      </div>
                    </div>





                    {/* <Button
                        className="cursor-pointer font-bold min-w-[76px] text-center text-white_A700 text-xl w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillGray900"
                      >
                        Save
                      </Button> */}

                      <Button
                        className="cursor-pointer font-bold min-w-[168px] text-center text-white_A700 text-xl w-auto mt-[3em]"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillRed900"
                        type="submit"
                      >
                        Save 
                      </Button>
                  </form>

                    {/* Edit Password */}
                    {/* <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Password settings
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Enter current password
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          name="password_Two"
                          placeholder="******************"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          New password
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          name="password_Three"
                          placeholder="******************"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Confirm password
                        </Text>
                        <Input
                          wrapClassName="w-full"
                          className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          name="password_Four"
                          placeholder="******************"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                        ></Input>
                      </div>
                      <Button
                        className="cursor-pointer font-bold min-w-[168px] text-center text-white_A700 text-xl w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillRed900"
                      >
                        Save password
                      </Button>
                    </div> */}




                  </div>
                 

                  {/* End of Editing Details section */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default MyAccount