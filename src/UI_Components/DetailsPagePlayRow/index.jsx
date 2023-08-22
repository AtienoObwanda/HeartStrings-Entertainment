import React from "react";

import { Img } from "UI_Components";

const DetailsPagePlayRow = (props) => {
  return (
    <>
      <div className={props.className}>
      <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
  <a
    href="YOUR_YOUTUBE_SHARE_LINK"
    target="_blank" // This opens the link in a new tab/window
    rel="noopener noreferrer" // Recommended for security
  >
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927754/HeartStrings/SVG/img_youtube1_ronpc3.png"
      className="h-8 md:h-auto object-cover w-8"
      alt="youtubeOne"
    />
  </a>
  <a
    href="YOUR_INSTAGRAM_SHARE_LINK"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_instagram2_esci9n.png"
      className="h-8 md:h-auto object-cover w-8"
      alt="instagramTwo"
    />
  </a>
  <a
    href="https://twitter.com/intent/tweet?text=Heart Strings at it agin!"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927751/HeartStrings/SVG/img_twitter1_x6jimf.png"
      className="h-8 md:h-auto object-cover w-8"
      alt="twitterOne"
    />
  </a>
  <a
    href="YOUR_FACEBOOK_SHARE_LINK"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_facebook1_tazrho.png"
      className="h-8 md:h-auto object-cover w-8"
      alt="facebookOne"
    />
  </a>
</div>

      </div>
    </>
  );
};

DetailsPagePlayRow.defaultProps = {};

export default DetailsPagePlayRow;
