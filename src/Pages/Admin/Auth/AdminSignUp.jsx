import React, { useState } from 'react';
  import {Navigate,useNavigate} from 'react-router-dom';
  // import { useHistory } from 'react-router-dom';
  
  import { connect } from 'react-redux';
  import axios from 'axios';
  //API IMPORT
  import { apiUrl } from '../../../../env.js';
  // console.log(apiUrl)
  
  
  import { signup } from '../../../actions/auth';
  import { Button, Img, Input, Line, Text } from "UI_Components";
  import SignupColumnlogotwo from "UI_Components/SignupColumn";
  import SignupColumnsearchone from "UI_Components/SignupColumnsearchone";
  
  
  

const AdminSignUp = () => {
    const navigate = useNavigate();
    // const history = useHistory();
    const [alertMessage, setAlertMessage] = useState(null);
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_password] = useState('');
  
    const onSubmit = async (e) => {
      e.preventDefault();
    
      if (password === re_password) {
        try {
          const response = await axios.post(`${apiUrl}/auth/superuser/`, {
            first_name,
            last_name,
            phone,
            email,
            password,
          });
    
  
            if (response.status >= 200 && response.status < 300) {
  
            console.log('Data posted successfully.');
            navigate('/admin-login');
          } else {
            console.log(response.data.message);
          }
        } catch (error) {
          // console.error('An error occurred:', error);
          // console.error('Response:', error.response);
          // console.log('Error message:', error.response && error.response.data && error.response.data.error.message);
          if (error.response && error.response.data && error.response.data.email) {
            // window.alert(error.response.data.email[0]);
            setAlertMessage(error.response.data.email[0]);
  
  
          }
  
        }
      } else {
        console.log("Passwords don't match");
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
          <Text className="">Signup</Text>
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

              <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-8 items-start justify-start self-stretch  max-w-[420px] sm:max-w-[320px]">
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    First Name
                  </Text>
                  
                  <input
                       
                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirst_name(e.target.value)}
                        required
                      />
                  </div>

                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Last Name
                    </Text>

                    <input
                        
                          className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setLast_name(e.target.value)}
                          required
                            />
                    </div>
              
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Email address
                      </Text>
                      <input
                          className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                          type="email"
                          placeholder="Valid Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                  />                      
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Phone Number
                        </Text>
                        <input
                          className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                          type="text"
                          placeholder="Phone Number"
                          onChange={(e) => setPhone(e.target.value)}
                          required
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
                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        x-model="password"
                        required
                     />
                      </div>

                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Confirm Password
                      </Text>
                      <input
                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setRe_password(e.target.value)}
                        x-model="re_password"
                        required
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
                    

                    <Button
                      className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                      type="submit"
                    >
                      Signup
                    </Button>
                    <Text
                        className="pl-6 font-normal not-italic text-center text-white_A700"
                        variant="sm"
                      >
                        By creating an account, you agree to our <a
                        href="/terms-and-conditions"
                        className="font-normal not-italic text-base text-light_blue_500"
                      >
                        Terms of use </a> and  
                        <a
                        href="/privacy-policy"
                        className="font-normal not-italic text-base text-light_blue_500"
                      > Privacy Policy</a>

                      </Text>

                    <Line className="bg-gray_900 mt-2 h-px w-full" />
                    <div className="flex flex-col gap-4 items-center justify-start self-stretch w-[430px] sm:w-full">

                      <a
                        href="#"
                        className="font-normal not-italic text-base text-left text-white_A700 w-auto"
                      >
                        <Text className="mb-2">Already have an account?</Text>
                      </a>


                      <Button
                        className="cursor-pointer font-bold text-center text-white_A700 text-xl  w-[430px] sm:w-full"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="OutlineWhiteA700_1"
                        onClick={() => navigate("/admin-login")}
                      >
                        Login
                      </Button>


                      </div>
                    

                  
                 
                  </div>

                  </form>

          {/* )} */}
            </div>

          </div>
        </div>
      </div>
  
      </>
    );
  };
  
export default AdminSignUp