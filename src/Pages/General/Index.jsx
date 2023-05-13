import React from "react";

import { Button, Img, Text } from "components";
import SignupColumndummylogotwo from "components/SignupColumndummylogotwo";

const NotFound1Page = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[77px] items-center justify-start mx-auto pb-[77px] w-full">
        
        <SignupColumndummylogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        <div className="flex flex-col gap-4 items-center justify-center md:px-5 self-stretch w-auto md:w-full">
          <Text
            className="text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            Page not found
          </Text>
          <Text
            className="font-normal leading-[175.00%] not-italic text-center text-white_A700"
            as="h6"
            variant="h6"
          >
            <>
              Whoopsie! It looks like the page you were looking for has gone
              missing. <br />
              We&#39;ll keep an eye out for it.
            </>
          </Text>
          <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start self-stretch w-auto md:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              4
            </Text>
            <Img
              src="images/img_unsplashpd4lo70ldbi.png"
              className="h-[346px] sm:h-auto object-cover w-[299px] md:w-full"
              alt="unsplashpd4loSeventy"
            />
            <Text
              className="text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              4
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[155px] text-center text-white_A700 text-xl w-auto"
            shape="RoundedBorder8"
            size="lg"
            variant="FillRed900"
          >
            Back to home
          </Button>
        </div>
     
      </div>
    </>
  );
};

export default NotFound1Page;