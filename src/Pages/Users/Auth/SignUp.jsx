import React, {useState} from "react";

import { Button, Img, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";
import SignupColumnsearchone from "UI_Components/SignupColumnsearchone";
import { useNavigate } from "react-router-dom";




const SignUp = () => {
  // Form fields variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Function to handle Form submit
  const handleSubmit = (e) => {
    e.preventDefault();


  // Form validation:
      // if (email && password){
  //Login Function:
        console.log(email);
        console.log(password);


  //Clear the form fields
    //   setEmail('');
    //   setPassword('');
    // } else{
    //   alert('Please fill in all the required fields.');
    // }

  };


  return (
    <>


<div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[242px] w-full">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        <a
          className="font-bold mt-[29px] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
        >
          <Text className="">Signup</Text>
        </a>
        <div className="flex flex-col gap-12 items-start justify-start mt-[49px] md:px-5 self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
            
            
            
            
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Name:
                  </Text>
                  <Input
                    wrapClassName="flex h-12 w-full"
                    className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="FirstName LastName"
                    shape="RoundedBorder4"
                    variant="FillGray800"
                  ></Input>
                  </div>
              
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Email address
                      </Text>
                      <Input
                        wrapClassName="flex h-12 w-full"
                        className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="youremail@gmail.com"
                        shape="RoundedBorder4"
                        variant="FillGray800"
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">

                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Phone Number
                        </Text>
                        <Input
                          wrapClassName="flex h-12 w-full"
                          className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                          value={email} onChange={(e) => setEmail(e.target.value)}
                          type="number"
                          name="phone"
                          placeholder="0783976879"
                          shape="RoundedBorder4"
                          variant="FillGray800"
                        ></Input>
                        </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Password
                      </Text>
                      <Input
                        wrapClassName="flex h-12 w-full"
                        className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        value={password}onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="******************"
                        shape="RoundedBorder4"
                        variant="FillGray800"
                      ></Input>
                      </div>

                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Confirm Password
                      </Text>
                      <Input
                        wrapClassName="flex h-12 w-full"
                        className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                        value={password}onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="******************"
                        shape="RoundedBorder4"
                        variant="FillGray800"
                      ></Input>
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
                    <Line className="bg-gray_900_63 mt-5 h-px w-full" />
                    <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">

                      <a
                        href="javascript:"
                        className="font-normal not-italic text-base text-left text-white_A700 w-auto"
                      >
                        <Text className="mb-2">Already have an account?</Text>
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
                    
                    <SignupColumnsearchone
                      className="flex flex-col items-center justify-center w-[430px] sm:w-full"
                      loginwithgoogleOne="Login with google"
                    />
                  </div>

                  </form>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default SignUp