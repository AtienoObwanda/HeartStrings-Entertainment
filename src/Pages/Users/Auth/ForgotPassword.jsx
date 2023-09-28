import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";

import { apiUrl } from '../../../../env.js';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleReset = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/users/reset_password/`, {
        email
      });

      setResetMessage(response.data.message);
      if (response.status >= 200 && response.status < 300) {
        navigate('/reset/email-sent'); // Navigates to the email sent confirmation page
      }
      // if (response.data.error === false) {
      //   navigate('/reset/email-sent'); // Navigates to the email sent confirmation page
      // }
    } catch (error) {
      console.error('Error resetting password:', error);
      setResetMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[49em] w-full">
      <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
      <div className="flex flex-col gap-8 items-center justify-start md:px-5 md:pb-[350px] self-stretch w-auto sm:w-full">
        <a className="font-bold text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto">
          <Text className="">Forgot password?</Text>
        </a>
        {/* Rest of your UI components */}
        <div>
          <Text className="font-normal leading-[175.00%] not-italic text-center text-white_A700" variant="body4">
            Enter your email address and you will receive a link to reset your password.
          </Text>
        </div>
        <div>
          <input
            className="flex p-0 pl-4 w-full w-full h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="your-email@gmail.com"
            shape="RoundedBorder4"
            variant="FillGray800"
          />
          <Button
            className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
            shape="RoundedBorder8"
            size="lg"
            variant="FillRed900"
            onClick={handleReset}
          >
            Send
          </Button>
          <Text className="text-white_A700 w-auto mt-2">{resetMessage}</Text>
        </div>
        {/* Rest of your UI components */}
      </div>
    </div>
  );
};

export default ForgotPassword;
