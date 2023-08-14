import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";

import { apiUrl } from '../../../../env.js';
    
const NewActivation = () => {
 
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [resetMessage, setResetMessage] = useState('');
    
      const handleReset = async () => {
        try {
          const response = await axios.post(`${apiUrl}/auth/users/resend_activation/`, {
            email
          });
    
          setResetMessage(response.data.message);
    
        //   if (response.data.error === false) {
            if (response.status >= 200 && response.status < 300) {
            navigate('/activate-account');// Render Navigate component

          }
        } catch (error) {
          console.error('Error requesting new link:', error);
          setResetMessage('An error occurred. Please try again later.');
        }
      };
    
      return (
        <>
          <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[429px] w-full">
            <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
            <div className="flex flex-col gap-8 items-center justify-start md:px-5 md:pb-[350px] self-stretch w-auto sm:w-full">
              <a
                className="font-bold text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
              >
                <Text className="">Forgot password?</Text>
              </a>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-normal leading-[175.00%] not-italic text-center text-white_A700"
                    variant="body4"
                  >
                    <>
                      Enter your email address and you will receive a link <br />
                      to reset your password.
                    </>
                  </Text>
                  {/* <Line className="bg-gray_900_63 h-px w-full" /> */}
                </div>
                <div className="flex flex-col items-center justify-center self-stretch w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start self-stretch w-auto sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-[430px] sm:w-full mt-2 mx-auto">
                         <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Email address
                        </Text>
                        <input
                          // wrapClassName="flex h-12 w-full"
                          className="flex p-0 pl-4 w-full w-full h-12"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          placeholder="your-email@gmail.com"
                          shape="RoundedBorder4"
                          variant="FillGray800"
                        />
                      </div>
                    </div>
                    <Button
                      // className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
                      className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                      onClick={handleReset}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </>
      );
    };


export default NewActivation

