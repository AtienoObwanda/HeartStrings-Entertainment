
    import React from 'react';
    import { Link } from 'react-router-dom'

    import { Text, PagerIndicator } from 'UI_Components';
    import {RelatedSlider} from 'UI_Components/RelatedSlider'
    import StreamCards from 'UI_Components/StreamCards/index';
    
    import {Streams} from '../../Data/Streams'
    
    const RelatedPlays = () => {
      const [sliderState, setSliderState] = React.useState(0);
      const sliderRef = React.useRef(null);
    
      return (
        <>
          <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[150px] md:px-5 self-stretch w-auto md:w-full">
            <Text className="text-left text-white_A700 w-auto" as="h2" variant="h2">
              Related Streams
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center max-w-[1140px] mx-auto md:px-5 self-stretch w-full">
            <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-[34px] items-start justify-start w-full">
                <RelatedSlider
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
                  items={Streams.map((Stream, index) => (
                    <Link to={`/streams/${Stream.title}`} target="_self"
                    onClick={() => window.location.reload()}>
                        <StreamCards
                            key={index}
                            className="bg-black_900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                            playPoster={Stream.titleImage}
                            playTitle={Stream.title}
                            playDescription={Stream.synopsis.substring(0, 110) + '...'} // Trim synopsis to 50 words
                            userbuttonlabel="Rent play" //
                            usertime={Stream.duration}
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
    
    export default RelatedPlays;
    