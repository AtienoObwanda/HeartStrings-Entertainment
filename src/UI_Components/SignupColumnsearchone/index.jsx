import React from "react";

import { Img, Text } from "UI_Components";

const SignupColumnsearchone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_900 flex sm:flex-row flex-row gap-[29px] items-center justify-center p-4 mt-2 mb-4 rounded-lg w-full">
          <Img
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927734/HeartStrings/SVG/img_search1_hp3pkh.png"
            className="h-[25px] md:h-auto ml-16 sm:ml-[45px] object-cover w-[25px]"
            alt="searchOne"
          />
          <Text
            className="font-bold font-roboto mr-[118px] text-left text-white_A700 w-auto"
            as="h6"
            variant="h6"
          >
            {props?.loginwithgoogleOne}
          </Text>
        </div>
      </div>
    </>
  );
};

SignupColumnsearchone.defaultProps = {
  loginwithgoogleOne: "Login with google",
};

export default SignupColumnsearchone;
