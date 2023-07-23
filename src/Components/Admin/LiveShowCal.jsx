import React, {Fragment, useState } from "react";
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'


import { Button, Img, Input, Line, List, Switch, Text } from "UI_Components";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function LiveShowCal() {
        // let today = startOfToday()
        // let [selectedDay, setSelectedDay] = useState(today)
        // let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
        // let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
        
        
          function previousMonth() {
            let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
            setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
          }
        
          function nextMonth() {
            let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
            setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
          }
        
        let today = startOfToday();
        let [selectedDays, setSelectedDays] = useState([]);
        let [selectedTimes, setSelectedTimes] = useState([]);

        let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
        let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

        let days = eachDayOfInterval({
            start: firstDayCurrentMonth,
            end: endOfMonth(firstDayCurrentMonth),
        });

        function previousMonth() {
            let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
            setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
        }

        function nextMonth() {
            let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
            setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
        }

        function handleDateSelection(day) {
            if (selectedDays.includes(day)) {
            // Date already selected, no need to do anything
            return;
            }

            if (selectedDays.length >= 10) {
            // Limit to 10 selected dates (you can adjust this limit as needed)
            return;
            }

            setSelectedDays([...selectedDays, day]);
            setSelectedTimes([...selectedTimes, { time1: '', time2: '' }]);
        }

        

        function generateTimeSlots() {
            const timeSlots = [];
            for (let hour = 0; hour < 24; hour++) {
              for (let minute = 0; minute < 60; minute += 30) {
                const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
                timeSlots.push(time);
              }
            }
            return timeSlots;
          }
        
          function handleTimeSelection(index, slot, event) {
            const updatedTimes = [...selectedTimes];
            updatedTimes[index][slot] = event.target.value;
            setSelectedTimes(updatedTimes);
          }

      
        
        // let selectedDayMeetings = meetings.filter((meeting) =>
        //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
        // )


      
      
      
        return (
            <div className="pt-16 w-full text-gray_400">
            <div className="px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 ">
              <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-300 ">
                <div className="md:pr-6 bg-red_900 rounded-lg w-[650px] h-[348px] p-6 sm:w-full">
                  <div className="flex items-center">
                    <h2 className="flex-auto font-semibold text-gray_300">
                      {format(firstDayCurrentMonth, 'MMMM yyyy')}
                    </h2>
                    <button
                      type="button"
                      onClick={previousMonth}
                      className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-300 hover:text-gray-300"
                    >
                      <span className="sr-only">Previous month</span>
                      <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                    <button
                      onClick={nextMonth}
                      type="button"
                      className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-300 hover:text-gray-300"
                    >
                      <span className="sr-only">Next month</span>
                      <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray_300">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                  </div>
                  <div className="grid grid-cols-7 mt-2 text-sm">
                    {days.map((day, dayIdx) => (
                      <div
                        key={day.toString()}
                        className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5')}
                      >
                        <button
                          type="button"
                          onClick={() => handleDateSelection(day)}
                          disabled={selectedDays.includes(day)}
                          className={classNames(
                            // ... (classNames for styling remain the same)
                          )}
                        >
                          <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
      
                <section className="mt-12 md:mt-0 md:pl-14 ">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    

                    <ul>
            {selectedDays.map((selectedDay, index) => (
              <li className="text-base text-center" size="txtRobotoRomanRegular16"
               key={selectedDay.toString()}>

               <div className="flex flex-row gap-2 items-center justify-start w-auto mb-4 text-white_A700 w-auto">
                <Img
                    className="h-6 w-6"
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927647/HeartStrings/SVG/img_calendar_dzho0s.svg"
                    alt="calendar"
                  />
                <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtRobotoRomanRegular16"
                >
                
                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                    {format(selectedDay, 'EEE, dd MMM yyyy')}
                </time>

                </Text>
                </div>

            <div className="flex flex-row gap-3.5 items-center justify-center w-auto ">
                <select
                className="cursor-pointer flex items-center justify-center min-w-[104px] px-2.5 py-[9px] rounded"
                value={selectedTimes[index].time1}
                  onChange={(event) => handleTimeSelection(index, 'time1', event)}
                //   className="ml-2 border rounded"
                required
                >
                  <option value="">Select Time</option>
                  {generateTimeSlots().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTimes[index].time2}
                  onChange={(event) => handleTimeSelection(index, 'time2', event)}
                //   className="ml-2 border rounded"
                className="cursor-pointer flex items-center justify-center min-w-[104px] px-2.5 py-[9px] rounded"

                >
                  <option value="">Select Time</option>
                  {generateTimeSlots().map((time) => (
                    <option key={time} value={time}
                    >
                      {time}
                    </option>
                  ))}
                </select>

                <Img
                    className="h-6 w-6"
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927656/HeartStrings/SVG/img_iconsaxboldclock_suvvop.svg"
                    alt="iconsaxboldcloc"
                    />
                <Text
                    className="text-sm text-white_A700 underline"
                    size="txtRobotoRomanRegular14WhiteA700"
                >
                    Add time
                </Text>
            </div>


              </li>
            ))}
          </ul>
          
                  </div>
                </section>
              </div>
            </div>
          </div>
        );
      }
      
      let colStartClasses = [
        '',
        'col-start-2',
        'col-start-3',
        'col-start-4',
        'col-start-5',
        'col-start-6',
        'col-start-7',
      ];
      