import React from "react";

import { Img, Text } from "UI_Components";

const SignupColumnsearchone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_900 items-center justify-center p-4 mt-2 mb-4 rounded-lg w-full gap-[10px] flex sm:flex-row pl-0 pr-0 pt-4 pb-4">
          {/*         <div className="bg-gray_900 flex sm:flex-row flex-row gap-[29px] items-center justify-center p-4 mt-2 mb-4 rounded-lg w-full sm:p-0">
 */}
          <Img
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927734/HeartStrings/SVG/img_search1_hp3pkh.png"
            className="h-[25px] md:h-auto ml-16 md:ml-[65px] object-cover w-[15px]"
            alt="searchOne"
          />
          <Text
            className="font-bold font-roboto mr-[118px] text-center text-white_A700 w-auto md:mr-[100px]"
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
