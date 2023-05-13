import React from "react";

import { Img } from "Components";

const SignupColumndummylogotwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_dummylogo02.svg"
          className="h-14 w-auto"
          alt="dummylogoTwo"
        />
      </div>
    </>
  );
};

SignupColumndummylogotwo.defaultProps = {};

export default SignupColumndummylogotwo;
