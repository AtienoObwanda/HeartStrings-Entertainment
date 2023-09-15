import React from 'react';
import {Link } from 'react-router-dom'
import { Text, Slider, PagerIndicator } from 'UI_Components';
import DetailsPagePlayColumn from 'UI_Components/DetailsPagePlayColumn';
import { apiUrl } from '../../../env';

const Cast = ({ stream }) => {
  // const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
    const video_cast = stream.video_casts;

    const filtered_cast = video_cast.map(group => {
      const unique_cast = group.reduce((unique, current) => {
        return unique.some(c => c.id === current.id) ? unique : [...unique, current];
      }, []);
      return unique_cast;
    });
  


  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
            <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
            <div className="flex flex-col gap-[34px] items-start justify-start w-full">
                <Text className="text-left text-white_A700 w-auto" as="h2" variant="h2">
                  Cast
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 4 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="gap-6 self-stretch w-auto"
                  items={filtered_cast.map((castGroup, index) => (

                    <div key={index} className="flex gap-2">
                      {castGroup.map(cast => (
                        <DetailsPagePlayColumn
                          key={cast.id}
                          className="flex flex-col gap-2 items-start justify-center self-stretch pr-4"                          
                          rectanglefour={`${apiUrl}${cast.image}`}
                          realname={cast.real_name}
                          ascastname={cast.cast_name}
                        />
                      ))}
                    </div>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer h-2.5 bg-red_900 w-6 rounded-[5px]" />
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
              className="flex gap-4 h-2.5 items-center justify-center self-stretch w-[102px]"
              count={4}
              activeCss="inline-block cursor-pointer h-2.5 bg-red_900 w-6 rounded-[5px]"
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
