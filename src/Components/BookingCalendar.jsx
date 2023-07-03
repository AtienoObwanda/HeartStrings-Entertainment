import React from 'react'
import { useState } from "react";
import moment from "moment"; // Import the moment library
import SelectingShowTimeColumn from "UI_Components/SelectingShowTimeColumn";
import SelectingShowTimeColumn1 from "UI_Components/SelectingShowTimeColumn1";
import SelectingShowTimeRowa from "UI_Components/SelectingShowTimeRow";
import { Button, Img, List, Text } from "UI_Components";



const BookingCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(moment());
  
    const generateCalendar = () => {
      const startDate = moment(currentMonth).startOf("month");
      const endDate = moment(currentMonth).endOf("month");
  
      const calendarDays = [];
  
      let currentDate = moment(startDate);
  
      while (currentDate.isSameOrBefore(endDate)) {
        const dayOfWeek = currentDate.format("ddd");
        const dayOfMonth = currentDate.format("D");
  
        const imageSrc = "images/img_group39896.svg";
  
        const calendarDay = (
        
        <SelectingShowTimeColumn
        key={currentDate.toString()}
        className="bg-cover bg-no-repeat flex flex-col h-[14em] items-center justify-start p-[31px] sm:px-5 w-full"
        style={{
          backgroundImage: "url('images/img_group39896.svg')",
        }}
        language={dayOfWeek + " "}
        p1st={dayOfMonth + "st"}
      />
        );
  
        calendarDays.push(calendarDay);
  
        currentDate.add(1, "day");
      }
  
      return calendarDays;
    };
  
    return (
      <List className="sm:flex-col flex-row gap-3 grid grid-cols-4 w-[36%] md:w-full" orientation="horizontal">
        {generateCalendar()}
      </List>
    );
  };
  
  export default BookingCalendar;
  








