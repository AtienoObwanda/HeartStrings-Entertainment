import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
//API IMPORT
import { apiUrl } from '../../../../env.js';
// console.log(apiUrl)


// import { signup } from '../../../actions/auth';
import { Button, Img, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";
import SignupColumnsearchone from "UI_Components/SignupColumnsearchone";




const SignUp = ({  }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const response = await axios.post(`${apiUrl}/register/`, {
          // const response = await axios.post(`${process.env.REACT_APP_API_URL}/register/`, {
        // const response = await axios.post('https://api.jaafrikaimages.org/api/register/', {
          name,
          phone,
          email,
          password
        });

        if (response.data.error === false) {
          setAccountCreated(true);
          navigate('/activate-account');
        } else {
          // Handle error case if needed
        }
      } catch (error) {
        alert('Error registering user: ' + error);
      }
    } else {
      alert('Passwords need to match!: ');

    }
  };

  


// if (isAuthenticated) {
//   navigate('/my-streams');
//   return null; // Returning null since the component has navigated away
// }

// if (accountCreated) {
//   navigate('/login');
//   return null; // Returning null since the component has navigated away
// }



  return (
    <>


<div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[242px] w-full">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        <a
          className="font-bold mt-[15px] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
        >
          <Text className="">Signup</Text>
        </a>
        <div className="flex flex-col gap-12 items-start justify-start mt-[49px] md:px-5 self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
            
            
            
            {/* {accountCreated ? (
            <p className='bg-light_blue_500 text-white_A700 W-40 H-40'>Account Created Successfully. An activation email has been sent.</p>
          ) : ( */}

            <form onSubmit={e => onSubmit(e)}>
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Name
                  </Text>
                  
                  <input
                       
                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        type="text" placeholder="Full Name" 
                        onChange={(e) => setName(e.target.value)}
                        // shape="RoundedBorder4"
                        // variant="FillGray800"
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
                          type="email" placeholder="Valid Email" onChange={(e) => setEmail(e.target.value)}
                         
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
                          country={'us'}
                          // value={this.state.phone}
                          type="text" placeholder="0783976879" onChange={(e) => setPhone(e.target.value)}
                          required
                          // shape="RoundedBorder4"
                          // variant="FillGray800"
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
                        type="password" placeholder="******************" onChange={(e) => setPassword(e.target.value)}
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
                        type="password" placeholder="******************" onChange={(e) => setConfirmPassword(e.target.value)}
                        // minLength='6'
                        required
                        
                     />
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

                    <Line className="bg-gray_900_63 mt-2 h-px w-full" />
                    <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">

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
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>


                      </div>
                    
                    <SignupColumnsearchone
                      className="flex flex-col items-center justify-center w-[430px] sm:w-full"
                      loginwithgoogleOne="Login with google"
                    />
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

export default SignUp