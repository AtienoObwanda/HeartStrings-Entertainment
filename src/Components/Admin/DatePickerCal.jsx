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

// const meetings = [
//   {
//     id: 1,
//     name: 'Sooner or Later',
//     imageUrl:"https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927560/HeartStrings/Heartstrings_Ent_KE_two_cpqykr.png",
//     startDatetime: '2023-07-27T11:00',
//     endDatetime: '2023-08-11T14:30',
//   },
//   {
//     id: 2,
//     name: 'DENY, DENY, DENY!',
//     imageUrl:"https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927562/HeartStrings/Heartstrings_Ent_KE_deny_zk8lqw.png",
//     startDatetime: '2023-07-23T12:00',
//       endDatetime: '2023-08-08T14:30',
//   },
//   {
//     id: 3,
//     name: 'Society In Our Eyes',
//     imageUrl:"https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927559/HeartStrings/Heartstrings_Ent_KE_Hand_On_Face_jdoyth.png",
//       startDatetime: '2023-07-29T13:00',
//       endDatetime: '2023-08-19T15:30',
//   },
//   {
//     id: 4,
//     name: 'Once In A lifetime',
//     imageUrl:"https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927558/HeartStrings/Heartstrings_Ent_KE_2_kb2kdv.png",
//       startDatetime: '2023-08-02T16:00',
//       endDatetime: '2023-08-14T18:30',
//   },
//   {
//     id: 5,
//     name: 'Bride For Sale',
//     imageUrl:"https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927565/HeartStrings/Heartstrings_Ent_KE_Hug_mdvnsq.png",
//       startDatetime: '2023-07-22T13:00',
//       endDatetime: '2023-07-31T14:30',
//   },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DatePickerCal() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  
  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )



  return (
    <div className="pt-16 w-full text-gray_400">
      <div className="px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 ">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-300 ">
        {/* <div className="bg-red_900 flex flex-col font-inter gap-[15px] h-[348px] md:h-auto items-center justify-center p-6 sm:px-5 rounded-lg w-[406px] sm:w-full"> */}

          <div className="md:pr-6 bg-red_900 rounded-lg w-[650px] h-[348px] p-6 sm:w-full">
            <div className="flex items-center ">
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
            <div className="grid grid-cols-7 mt-2 text-sm ">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-gray-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-300',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-light_blue_500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-900',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-12 md:mt-0 md:pl-14 "> 
          <div className="flex flex-row gap-2 items-center justify-start w-auto"> 
          <Img
            className="h-6 w-6"
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927647/HeartStrings/SVG/img_calendar_dzho0s.svg"
            alt="calendar"
            />
            <h2 className="text-base text-center text-white_A700 w-auto" size="txtRobotoRomanRegular16">
            {' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            </div>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No Live shows scheduled for {' '}
                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                  {format(selectedDay, 'MMM dd, yyy')}
                </time>. </p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

// function Meeting({ meeting }) {
//   let startDateTime = parseISO(meeting.startDatetime)
//   let endDateTime = parseISO(meeting.endDatetime)

//   return (
//     <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-400">
//       <img
//         src={meeting.imageUrl}
//         alt=""
//         className="flex-none w-10 h-10 rounded-full"
//       />
//       <div className="flex-auto">
//         <p className="text-gray-100">{meeting.name}</p>
        
//         <div className="flex flex-row gap-1 items-center justify-start w-auto mt-2">
//         <Img
//         className="h-6 w-6"
//         src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927656/HeartStrings/SVG/img_iconsaxboldclock_suvvop.svg"
//         alt="iconsaxboldcloc"
//         />
//         <p className="mt-0.5">
            
//           <time dateTime={meeting.startDatetime}>
//             {format(startDateTime, 'h:mm a')}
//           </time>{' '}
//           -{' '}
//           <time dateTime={meeting.endDatetime}>
//             {format(endDateTime, 'h:mm a')}
//           </time>
//         </p>
//         </div>
        
//       </div>
//       <Menu
//         as="div"
//         className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
//       >
//         <div>
//           <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray_300 hover:text-gray-600">
//             <span className="sr-only">Open options</span>
//             <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
//           </Menu.Button>
//         </div>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm'
//                     )}
//                   >
//                     Edit
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block px-4 py-2 text-sm'
//                     )}
//                   >
//                     Cancel
//                   </a>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </li>
//   )
// }

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]


