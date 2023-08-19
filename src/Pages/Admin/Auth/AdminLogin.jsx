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
      if (error.response && error.response.status === 401) {
        setLoginError('Invalid email or password'); // Display error message
      } else {
        console.error('Error logging in:', error);
        setLoginError('An error occurred. Please try again later.');
      }
    }
  };

 


  

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[242px] w-full">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full sm:p-4" />
        <a
          className="font-bold mt-[29px] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
        >
          <Text className="">Admin Login</Text>
        </a>
        <div className="flex flex-col gap-12 items-start justify-start mt-[49px] md:px-5 self-stretch w-auto sm:w-full sm:pt-2">
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
                    {/* <Button
                        className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
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
            </div>





            <div
              className="common-pointer flex flex-col gap-4 items-center justify-start self-stretch w-430 sm:w-full"
              onClick={() => navigate("/admin-forgot-password")}
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
              onClick={() => navigate("/admin-signup")}
            >
              Sign up for a new account
            </Button>


          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;