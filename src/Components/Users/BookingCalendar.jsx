
import React, { useState, useRef } from 'react';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Autoplay } from 'swiper';
import SelectingShowTimeColumn from "UI_Components/SelectingShowTimeColumn";
import { Button, Img, List, Text } from "UI_Components";
import {BsCaretLeft, BsCaretRight} from 'react-icons/bs'



const getDayOfMonthString = (dayOfMonth) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const lastTwoDigits = dayOfMonth % 100;
  const lastDigit = dayOfMonth % 10;
  let suffix = suffixes[lastDigit] || suffixes[0];

  // Special case for numbers ending in 11, 12, and 13
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = 'th';
  }

  return dayOfMonth + suffix;
};


const BookingCalendar = () => {
    // const [nextE1, setNextE1] = useState(null)
    // const [preEv1, setPrevtE1] = useState(null)
    const [currentMonth, setCurrentMonth] = useState(moment());
    const nextEl = useRef(null);
    const prevEl = useRef(null);

  const generateCalendar = () => {
    const startDate = moment(currentMonth).startOf("month");
    const endDate = moment(currentMonth).endOf("month");
  
    const calendarDays = [];
    let weekDays = [];
  
    let currentDate = moment(startDate);
  
    while (currentDate.isSameOrBefore(endDate)) {
      weekDays.push(currentDate.clone());
  
      if (weekDays.length === 7) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
  
      currentDate.add(1, "day");
    }
  
    if (weekDays.length > 0) {
      calendarDays.push(weekDays);
    }
  
    return calendarDays;
  };
  


      
  return (
    <>
     <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Select show time
            </Text>
            <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
              
              <div className="bg-black_900_01 flex flex-col gap-4 items-start justify-start max-w-[1186px] p-12 md:px-10 sm:px-5 rounded-lg w-[80%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Select date
                </Text>
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-2 items-start justify-start self-stretch w-auto md:w-full">
                    
                    {/* Scroll Left */}
        <img
          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927651/HeartStrings/SVG/img_group40097_almxnl.svg"
          className="h-[60px] w-[54px]  mt-[3em] "
          alt="Scroll Left"
          ref={prevEl}
        />

        {/* <Swiper
          navigation={{ nextEl: nextEl.current, prevEl: prevEl.current }}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          modules={[Navigation]}
        >
          {generateCalendar().map((week, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-row gap-6">
                {week.map((day) => (
                  <SelectingShowTimeColumn
                    key={day.toString()}
                    className="bg-cover bg-no-repeat flex flex-col h-[118px] w-[54px] items-center justify-start p-[4em] sm:px-5"
                    style={{
                      backgroundImage: "url('images/img_group39896.svg')",
                    }}
                    language={day.format("ddd") + " "}
                    p1st={getDayOfMonthString(day.format("D"))}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
       <Swiper
  navigation={{ nextEl: nextEl.current, prevEl: prevEl.current }}
  slidesPerView={1}
  spaceBetween={10}
  loop={true}
  modules={[Navigation]}
>
  {generateCalendar().map((week, index) => (
    <SwiperSlide key={index}>
      <div className="flex flex-row gap-6">
        {week.map((day) => {
          const isCurrentDate = day.isSame(new Date(), "day");
          const isSelectedDate = 7; // add your logic to determine if the day is selected
          let backgroundColor = "";
          if (isCurrentDate) {
            backgroundColor = "#000";
          } else if (isSelectedDate) {
            backgroundColor = "black_900_01";
          } else {
            backgroundColor = "white";
          }

          return (
            <SelectingShowTimeColumn
              key={day.toString()}
              className={`bg-${backgroundColor}-500 bg-cover bg-no-repeat flex flex-col h-[118px] w-[54px] items-center justify-start p-[4em] sm:px-5`}
              style={{
                backgroundImage: isCurrentDate ? "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927650/HeartStrings/SVG/img_group39896_ze66d9.svg')" : "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927650/HeartStrings/SVG/img_group39896_ze66d9.svg')"
              }}
              language={day.format("ddd") + " "}
              p1st={getDayOfMonthString(day.format("D"))}
            />
          );
        })}
      </div>
    </SwiperSlide>
  ))}
</Swiper>



        {/* Scroll Right */}
        <img
          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927653/HeartStrings/SVG/img_group40096_uzttsv.svg"
          className="h-[60px] w-[54px]  mt-[3em] "
          alt="Scroll Right"
          ref={nextEl}
        />
        </div>


                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Select time
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-8 items-center justify-center self-stretch w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-normal not-italic text-base text-center text-white_A700 w-[108px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillRed900"
                      >
                        3:00 PM
                      </Button>
                      <Button
                        className="cursor-pointer font-normal not-italic text-base text-black_900_01 text-center w-[108px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        6:30 PM
                      </Button>
                      <Button
                        className="cursor-pointer font-normal not-italic text-base text-black_900_01 text-center w-[108px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        8:30 PM
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default BookingCalendar