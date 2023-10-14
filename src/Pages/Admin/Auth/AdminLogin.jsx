import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { Button, Img, Input, Line, Text } from "UI_Components";
import { apiUrl } from '../../../../env.js'; // Import  API URL
import {googleOAuth2Key} from '../../../../env.js'
// import SignupColumndummylogotwo from "components/SignupColumndummylogotwo";
import SignupColumnlogotwo from "UI_Components/SignupColumn";
import SignupColumnsearchone from "UI_Components/SignupColumnsearchone";




const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleRefresh = async (refreshToken) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/users/me/`, {
        refresh: refreshToken,
      });
  
      // Update the access token
      localStorage.setItem('accessToken', response.data.access);
  
      // You might also want to update the user information here if needed
  
      return response.data.access; // Return the new access token
    } catch (error) {
      console.error('Error refreshing token:', error);
      // Handle the error as needed
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/gettoken/`, {
        email,
        password
      });

      // Store the access token and redirect on successful login
      localStorage.setItem('accessToken', response.data.access);
      navigate('/admin-dashboard');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setAlertMessage(error.response.data.detail);
    }
    }
  };

 


  

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[242px] w-full">
        {/* <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" /> */}
        <img  
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="h-[80px] w-[80px] mt-[4em]"
      // md:ml-[0] ml-[150px] my-2 w-auto md:h-20 md:w-full md:mb-4
    // className="h-[30%] w-[4em] md:w-full md:ml-[0] ml-[150px] my-2 w-auto md:h-30 sm:object-fit: scale-down"

      alt="Heart Strings Entertainment logo"
      onClick={() => navigate("/")} 
      />
        <a
          className="font-bold mt-[15px] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
        >
          <Text className="">Login</Text>
        </a>
        <div className="flex flex-col gap-12 items-start justify-start mt-[49px] md:px-5 self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
            
            {alertMessage && (
        <div className="flex items-center bg-red_900 text-white text-sm font-bold px-4 py-3" role="alert">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
          </svg>
          <p>{alertMessage}</p>


        </div>
      )}
            
            {/* {accountCreated ? (
            <p className='bg-light_blue_500 text-white_A700 W-40 H-40'>Account Created Successfully. An activation email has been sent.</p>
          ) : ( */}

<form onSubmit={handleLogin}>
                <div className="flex flex-col gap-8 items-start justify-start self-stretch min-w-[320px]">
             

                  
              
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full mt-2">

                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Email address
                      </Text>
                      <input
                          className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your-email@gmail.com"
                          required
                  />                      
                    </div>

                    
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full ">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Password
                      </Text>
                      <input
                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******************"
                        required
                     />
                      </div>
                    

                      <Button
                      className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2 "
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                      type="submit"
                    >
                      Login
                    </Button>
                    {loginError && <p>{loginError}</p>}

                  
               
                  </div>

                  </form>

          {/* )} */}
            </div>
            <div
              className="common-pointer flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full"
              onClick={() => navigate("/forgot-password")}
            >
              <a
                href="javascript:"
                className="font-normal not-italic text-base text-left text-white_A700 underline w-auto"
              >
                <Text className="">Forgot your password?</Text>
              </a>
              <Line className="bg-gray_900_63 mt-5 h-px w-full" />
            </div>

          </div>
        </div>
        
        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">

        <a
          href="javascript:"
          className="font-normal not-italic text-base text-left text-white_A700 w-auto"
        >
          <Text className="mb-2">Don’t have an account?</Text>
        </a>


        <Button
          className="cursor-pointer font-bold text-center text-white_A700 text-xl  w-[430px] sm:w-3/4"
          shape="RoundedBorder8"
          size="lg"
          variant="OutlineWhiteA700_1"
          onClick={() => navigate("/admin-signup")}
        >
          Sign up for a new account
        </Button>


        </div>
      </div>
    </>
  );
};

export default AdminLogin;