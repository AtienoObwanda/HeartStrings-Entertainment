import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { Button, Img, Input, Line, Text } from "UI_Components";
import { apiUrl } from '../../../../env.js'; // Import  API URL
import {googleOAuth2Key} from '../../../../env.js'

console.log(googleOAuth2Key)
const redirectUri = 'http://localhost:5173'; // Redirect URI here

https://api.jaafrikaimages.org/auth/o/google-oauth2/?redirect_uri=http://localhost:5173&client_id=1164711596-p5kfhp9la2n1qm49dah7otobco81s2j0.apps.googleusercontent.com
//  POST /auth/o/google-oauth2/?redirect_uri=http://localhost:3000


console.log(`${apiUrl}/auth/o/google-oauth2/?redirect_uri=${redirectUri}&client_id=${googleOAuth2Key}`)

import SignupColumnlogotwo from "UI_Components/SignupColumn";
import SignupColumnsearchone from "UI_Components/SignupColumnsearchone";



const Login = ({  }) => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/gettoken/`, {
        email,
        password
      });

      // Store the access token and redirect on successful login
      localStorage.setItem('accessToken', response.data.access);
      navigate('/my-streams');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setAlertMessage(error.response.data.detail);
    }
        // console.error('Response:', error.response);

      
    }
  };

  const continueWithGoogle = async () => {
    try {
        const redUrl='http://localhost:5173'
        const res = await axios.get(`${apiUrl}/auth/o/google-oauth2/?redirect_uri=${redUrl}`)

        window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
};



  return (
    <>


<div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[242px] w-full">
        {/* <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" /> */}
        <img  
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="h-[80px] w-[80px] mt-[4em]"
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

                      {/* <SignupColumnsearchone
                      className="flex flex-col items-center justify-center w-[430px] sm:w-full"
                      loginwithgoogleOne="Login with google"
                      onClick={handleGoogleLogin}

                    /> */}
{/* .. */}
                  <div className="bg-gray_900 items-center gap-[29px] justify-center p-4 mt-2 mb-4 rounded-lg w-full flex sm:flex-row gap-[10px] pl-0 pr-0 pt-4 pb-4"
                   onClick={continueWithGoogle}>
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927734/HeartStrings/SVG/img_search1_hp3pkh.png"
                            className="h-[100%] w-[30px] md:h-auto ml-[65px] object-cover w-[15px]"
                            alt="searchOne"
                          />
                          <Text
                            className="font-bold font-roboto mr-[118px] text-center text-white_A700 w-auto md:mr-[10px]"
                            as="h6"
                            variant="h6"
                          >
                            Login with Google
                          </Text>
                        </div>
                    {/* ... */}
                    {/* <Button
                        className="cursor-pointer font-bold text-center text-white_A700 text-xl  w-[430px] sm:w-full mt-2 "
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillRed900"
                        type="button"
                        onClick={continueWithGoogle}
                      >
                        Login with Google
                      </Button> */}
                      
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
          onClick={() => navigate("/signup")}
        >
          Sign up for a new account
        </Button>


        </div>
      </div>

    </>
  );
};

export default Login