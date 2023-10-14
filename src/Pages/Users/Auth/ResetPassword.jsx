import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Input, Text } from 'UI_Components';
import SignupColumnlogotwo from "UI_Components/SignupColumn";
import { apiUrl } from '../../../../env.js';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { uidb64, token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  // const handleReset = async () => {
  //   try {
  //     console.log('uid:', uidb64);
  //     console.log('token:', token);
  //       const response = await axios.post(`${apiUrl}/auth/users/reset_password_confirm/`, {

  //       uid: uidb64,
  //       token: token,
  //       new_password: password,
  //       re_new_password: confirmPassword,
  //     });

  //     setResetMessage(response.data.message);
  //     if (response.status >= 200 && response.status < 300) {
  //       navigate('/reset-complete'); 
  //     }
  //   } catch (error) {
  //     console.error('Error confirming password reset:', error);
  //     setResetMessage('An error occurred. Please try again later.');
  //   }
  // };
 
  // const handleReset = async () => {
  //   try {
  //     console.log('uid:', uidb64);
  //     console.log('token:', token);
  //     const response = await axios.post(`${apiUrl}/auth/users/reset_password_confirm/`, {
  //       uid: uidb64,
  //       token: token,
  //       new_password: password,
  //       re_new_password: confirmPassword,
  //     });
  
  //     setResetMessage(response.data.message);
  
  //     if (response.data.error === false) {
  //       navigate('/reset-complete'); 
  //     }
  //   } catch (error) {
  //     console.error('Error confirming password reset:', error);
  //     setResetMessage('An error occurred. Please try again later.');
  //   }
  // };

    const handleReset = async () => {
      try {
        console.log('uid:', uidb64);
        console.log('token:', token);
        const response = await axios.post(`${apiUrl}/auth/users/reset_password_confirm/`, {
          uid: uidb64,
          token: token,
          new_password: password,
          re_new_password: confirmPassword,
        });
      
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
      
        if (response.status >= 200 && response.status < 300) 
         {
          navigate('/reset-complete'); 

        } else {
          console.log('Activation failed:', response.data.message);
          setActivationMessage('Error activating account. Please try again later...');
        }
      } catch (error) {
        console.error('Error activating account:', error);
        console.error('Error activating account. Please try again later...');
      }
    };


  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[680px] w-full">

      <img  
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="h-[80px] w-[80px] mt-[4em]"
      alt="Heart Strings Entertainment logo"
      onClick={() => navigate("/")} 
      />
        <div className="flex flex-col gap-12 items-center justify-start md:px-5 self-stretch w-auto sm:w-full">
          <a
            className="font-bold text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
          >
            <Text 
            className="">Reset password</Text>
          </a>
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
            <a
            href="javascript:"
            className="font-normal md:text-[15px] text-left text-white_A700 sm:text-xl w-auto"
          >
            <Text 
            className="">Enter your new password.</Text>
          </a>
          
              {/* <Line className="bg-gray_900_63 h-px w-full" /> */}
            </div>
            <div className="flex flex-col gap-8 items-center justify-center self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                 
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-[430px] sm:w-full mt-2 mx-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      New password
                    </Text>
                    <input
                      className="flex h-12 w-full p-0 pl-4 w-full"
                      type="password"
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      x-model="password"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-[430px] sm:w-full mt-2 mx-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Confirm password
                    </Text>
                    <input
                      className="flex h-12 w-full p-0 pl-4 w-full"
                      type="password"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      x-model="re_password"
                    />
                  </div>
                  <div className="flex justify-start mt-3 ml-4 p-1">
                      <ul>
                        <li className="flex items-center py-1">
                          <div className={`rounded-full p-1 fill-current ${password === re_password && password.length > 0 ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {password === re_password && password.length > 0 ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              )}
                            </svg>
                          </div>
                          <span className={`font-medium text-sm ml-3 ${password === re_password && password.length > 0 ? 'text-green-700' : 'text-red-700'}`}>
                            {password === re_password && password.length > 0 ? 'Passwords match' : 'Passwords do not match'}
                          </span>
                        </li>
                        <li className="flex items-center py-1">
                          <div className={`rounded-full p-1 fill-current ${password.length > 7 ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {password.length > 7 ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              )}
                            </svg>
                          </div>
                          <span className={`font-medium text-sm ml-3 ${password.length > 7 ? 'text-green-700' : 'text-red-700'}`}>
                            {password.length > 7 ? 'The required length reached' : 'At least 8 characters required'}
                          </span>
                        </li>
                      </ul>
                    </div>
                    

                </div>
                <Button
                      className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                      // type="submit"
                      onClick={handleReset}
                    >
                      Reset Password
                    </Button>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start self-stretch w-auto"
                onClick={() => navigate("/login")}
              >
                <Text
                  className="font-normal not-italic text-left text-white_A700 underline w-auto"
                  variant="body4"
                >
                  Remembered my password
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ResetPassword