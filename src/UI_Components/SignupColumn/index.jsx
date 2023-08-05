import React from "react";

import { Img } from "UI_Components";

const SignupColumnlogotwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
          className="h-[5%] w-[8%]"
          alt="Heart Strings Entertainment Logo"
        />
      </div>
    </>
  );
};

SignupColumnlogotwo.defaultProps = {};

export default SignupColumnlogotwo;
