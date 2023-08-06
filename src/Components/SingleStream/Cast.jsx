import React from 'react';
import {Link } from 'react-router-dom'
import { Text, Slider, PagerIndicator } from 'UI_Components';
import DetailsPagePlayColumn from 'UI_Components/DetailsPagePlayColumn';

const Cast = ({ stream }) => {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
    <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[150px] md:px-5 self-stretch w-auto md:w-full">
        <Text
          className="text-left text-white_A700 w-auto"
          as="h2"
          variant="h2"
        >
          Cast
        </Text>
        </div>
      <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mx-auto md:px-5 self-stretch w-full">
        <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
          <div className="flex flex-col gap-[34px] items-start justify-start w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                568: { items: 2 },
                1024: { items: 4 },
              }}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="gap-6 self-stretch w-auto"
              items={stream.casts.map((cast, index) => (
                <Link to={`/cast/${Cast.title}`} target="_self"
                    onClick={() => window.location.reload()}>

                  
                <DetailsPagePlayColumn
                  key={index}
                  className="flex flex-col gap-2 items-start justify-center mx-2.5 self-stretch"
                  rectanglefour={cast.image} // Assuming this is the image URL
                  realname={cast.realName}
                  ascastname={cast.castName}
                />
                </Link>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer h-2.5 bg-red_900_01 w-6 rounded-[5px]" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white_A700 w-2.5"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />



          </div>
        </div>
        <PagerIndicator
          className="flex gap-4 h-2.5 items-center justify-center self-stretch w-full"
        //   className="flex gap-4 h-2.5 items-center justify-center self-stretch w-full" // Adjust the class name as needed

          count={4}
          activeCss="inline-block cursor-pointer h-2.5 bg-red_900_01 w-6 rounded-[5px]"
          activeIndex={sliderState}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white_A700 w-2.5"
          sliderRef={sliderRef}
          selectedWrapperCss="inline-block"
          unselectedWrapperCss="inline-block"
        />
      </div>
    </>
  );
};

export default Cast;
