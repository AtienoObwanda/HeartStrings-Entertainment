import React from "react";

import { Img } from "UI_Components";

const DetailsPagePlayRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_youtube1.png"
          className="h-8 md:h-auto object-cover w-8"
          alt="youtubeOne"
        />
        <Img
          src="images/img_instagram2.png"
          className="h-8 md:h-auto object-cover w-8"
          alt="instagramTwo"
        />
        <Img
          src="images/img_twitter1.png"
          className="h-8 md:h-auto object-cover w-8"
          alt="twitterOne"
        />
        <Img
          src="images/img_facebook1.png"
          className="h-8 md:h-auto object-cover w-8"
          alt="facebookOne"
        />
      </div>
    </>
  );
};

DetailsPagePlayRow.defaultProps = {};

export default DetailsPagePlayRow;
