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


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

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
      if (error.response && error.response.status === 401) {
        setLoginError('Invalid email or password'); // Display error message
      } else {
        console.error('Error logging in:', error);
        setLoginError('An error occurred. Please try again later.');
        alert('An error occurred. Please try again later.');

      }
    }
  };

  
  
  // const continueWithGoogle = async () => {
  //   try {
  //     // const redirectUri = `${process.env.REACT_APP_API_URL}/google`; // Redirect URI here
  //     const redirectUri = 'http://localhost:5173'; // Redirect URI here
  //     // /auth/o/google-oauth2/?redirect_uri=http://localhost:3000
  //     const googleAuthUrl = `${apiUrl}/auth/o/google-oauth2/?redirect_uri=${redirectUri}&client_id=${googleOAuth2Key}`;
  // // POST /auth/o/google-oauth2/?redirect_uri=http://localhost:3000
  //     window.location.replace(googleAuthUrl);
  //   } catch (error) {
  //     // Handle error
  //     console.error('Error initiating Google login:', error);
  //   }
  // };
  
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
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        <a
          className="font-bold mt-[15px] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
        >
          <Text className="">Login</Text>
        </a>
        <div className="flex flex-col gap-12 items-start justify-start mt-[49px] md:px-5 self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
            
            
            
            
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
              
              
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Email address
                      </Text>
                      <input
                        className="flex bg-gray_800 h-12 w-full p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your-email@gmail.com"
                      />
                    </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Password
                      </Text>
                      <input
                        className="flex bg-gray_800 h-12 w-full p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******************"
                      />

                    </div>
                    <Button
                      className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
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
                    <Button
                        className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillRed900"
                        type="button"
                        onClick={continueWithGoogle}
                      >
                        Login with Google
                      </Button>
                  </div>

                  </form>
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



          <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">

            <a
              href="javascript:"
              className="font-normal not-italic text-base text-left text-white_A700 w-auto"
            >
              <Text className="mb-2">Don’t have an account?</Text>
            </a>


            <Button
              className="cursor-pointer font-bold text-center text-white_A700 text-xl  w-[430px] sm:w-full"
              shape="RoundedBorder8"
              size="lg"
              variant="OutlineWhiteA700_1"
              onClick={() => navigate("/signup")}
            >
              Sign up for a new account
            </Button>


          </div>
        </div>
      </div>
    </>
    
  );
};

export default Login