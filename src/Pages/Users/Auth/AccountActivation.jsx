import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


import { Button, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";


import { apiUrl } from '../../../../env.js';

const AccountActivation = () => {
  const { uidb64, token } = useParams(); // Extract uidb64 and token from URL parameters

  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'
    
  const [activationMessage, setActivationMessage] = useState('');
  const [activationSuccess, setActivationSuccess] = useState(false);

  useEffect(() => {
    const activateUser = async () => {
      try {
        console.log('uid:', uidb64);
        console.log('token:', token);
        const response = await axios.post(`${apiUrl}/auth/users/activation/`, {
          uid: uidb64,
          token: token,
        });
      
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
      
        if (response.status >200 && response.status < 300) 
         {
          setActivationMessage(response.data.message);
          setActivationSuccess(true);
        } else {
          console.log('Activation failed:', response.data.message);
          setActivationMessage('Error activating account. Please try again later...');
        }
      } catch (error) {
        console.error('Error activating account:', error);
        setActivationMessage('Error activating account. Please try again later...');
      }
    };

    activateUser();
  }, [uidb64, token]);

  return (
   
<div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[850px] w-full md:pr-4 md:pl-4 md:pt-10 sm:pr-8 sm:pl-8">
<img  
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="h-[80px] w-[80px] mt-[4em]"
      alt="Heart Strings Entertainment logo"
      onClick={() => navigate("/")} 
      />
      
<div className="h-40 md:h-0"></div>
<div className="bg-black_900_01 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-1/2 md:w-90% md:mt-[130px] sm:w-full  mx-auto">

  <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
  <Text className="text-gray_300 text-left w-auto" as="h3" variant="h3">
        {activationSuccess ? 'Sign up successful!' : 'Sign up not successful!'}
      </Text>
      <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
        <Text
          className="font-normal mt-6 leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
          as="h6"
          variant="h6"
        >
          {activationSuccess
            ? 'Welcome to the Heartstrings Tribe.'
            : 'Account Activation not successful...'}
        </Text>
      </div>
      
  </div>
  <Button
        className="cursor-pointer mt-8 font-bold min-w-[166px] text-center text-gray_300 text-xl w-auto"

        shape="RoundedBorder8"
        size="lg"
        variant="FillRed900"
        onClick={() => {
          if (activationSuccess) {
            navigate("/login");
          } else {
            navigate("/activate-account/new-request");
          }
        }}
      >
        {activationSuccess ? 'Start Browsing' : 'Request New Activation Link'}
      </Button>
</div>


</div>
  );
};

export default AccountActivation;
