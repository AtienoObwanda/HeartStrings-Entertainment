import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


import { Button, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";
import { apiUrl } from '../../../../env.js';



const AccountActivation = () => {
    
    // const AccountActivation = () => {
      const params = useParams();
      const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'
    
      const [activationMessage, setActivationMessage] = useState('');
      const [activationSuccess, setActivationSuccess] = useState(false);
    
      useEffect(() => {
        const { uidb64, token } = params;
    
        const activateAccount = async () => {
          try {
            // const response = await axios.get(`https://api.jaafrikaimages.org/api/activate/${uidb64}/${token}/`);
            const response = await axios.get(`${apiUrl}/activate/${uidb64}/${token}/`);
            setActivationMessage(response.data.message);
            setActivationSuccess(response.data.message === 'Account activated successfully.');
          } catch (error) {
            console.error('Error activating account:', error);
            setActivationMessage('Error activating account. Please try again later.');
          }
        };
    
        activateAccount();
      }, [params]);

    return (
    

<div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[850px] w-full md:pr-4 md:pl-4 md:pt-10 sm:pr-8 sm:pl-8">
<SignupColumnlogotwo className="flex flex-col mt-8 items-center justify-start p-8 sm:px-5 w-full" />
<div className="h-40 md:h-0"></div>
<div className="bg-black_900_01 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-1/2 md:w-90% md:mt-[130px] sm:w-full  mx-auto">

  <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
  <Text className="text-gray_300 text-left w-auto" as="h3" variant="h3">
        {activationSuccess ? 'Sign up successful!' : 'Sign up not successful!'}
      </Text>
      <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
        <Text
          className="font-normal leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
          as="h6"
          variant="h6"
        >
          {activationSuccess
            ? 'Welcome to the Heartstrings Tribe.'
            : 'Account Activation not successful, click the link again...'}
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
            navigate("/signup");
          }
        }}
      >
        {activationSuccess ? 'Start Browsing' : 'Sign Up Again'}
      </Button>
</div>


</div>
  )
}

export default AccountActivation