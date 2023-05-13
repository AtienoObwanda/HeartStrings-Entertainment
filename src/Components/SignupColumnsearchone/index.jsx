import React from "react";

import { Img, Text } from "Components";

const SignupColumnsearchone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_900 flex sm:flex-col flex-row gap-[29px] items-center justify-center p-4 rounded-lg w-full">
          <Img
            src="images/img_search1.png"
            className="h-[25px] md:h-auto ml-16 sm:ml-[0] object-cover w-[25px]"
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
