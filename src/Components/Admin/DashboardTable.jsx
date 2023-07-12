import React from 'react'


import { Button, Img, Input, List, Line,Text } from "UI_Components";
   

const DashboardTable = () => {
    
      const data = [
        {
            activityId: 190,
            eventType: 'LOG_IN',
            userId: 'HS 41723',
            userType: 'Viewer',
            dateTime: '18/07/2023', // Insert your date and time value here
          },
          {
            activityId: 110,
            eventType: 'LOG_IN',
            userId: 'HS 41723',
            userType: 'Viewer',
            dateTime: '14/07/2023', // Insert your date and time value here
          },
          {
            activityId: 101,
            eventType: 'LOG_IN',
            userId: 'HS 41723',
            userType: 'Viewer',
            dateTime: '12/07/2023', // Insert your date and time value here
          },
          {
            activityId: 100,
            eventType: 'LOG_IN',
            userId: 'HS 41723',
            userType: 'Viewer',
            dateTime: '06/06/2023', // Insert your date and time value here
          },
          // Add more data objects as needed
        ];

  return (
    <>
    
<div class="sm:hidden relative overflow-x-auto w-full">
    <table class="w-full text-sm text-left text-white_400">
        <thead class="text-xs uppercase bg-gray_800 text-white_A700">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Activity ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Event Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    User ID
                </th>
                <th scope="col" class="px-6 py-3">
                    User Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Date and Time
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
    <tr key={index} className="border-b bg-transparent border-gray_800 text-white_A700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {item.activityId}
      </th>
      <td className="px-6 py-4">{item.eventType}</td>
      <td className="px-6 py-4">{item.userId}</td>
      <td className="px-6 py-4">{item.userType}</td>
      <td className="px-6 py-4">{item.dateTime}</td>
    </tr>
  ))}

        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">
                <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Results per page
                        </Text>
                        </th>
                <td class="px-6 py-3">
                        
                        <div className="bg-red_900 flex flex-row gap-6 items-center justify-center px-2.5 py-[5px] rounded self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            {data.length}
                          </Text>
                          <Img
                            src="images/img_iconsax_bold_arrowdown2.svg"
                            className="h-6 w-6"
                            alt="iconsaxboldarro"
                          />
                      </div>
                </td>
                <td class="px-6 py-3">
                <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldarrowleft2.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldarro_One"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Previous
                        </Text>
                      </div>
                </td>

                <td class="px-6 py-3">
                <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-auto"
                          variant="body4"
                        >
                          |
                        </Text>
                        <Button
                          className="cursor-pointer font-normal min-w-[29px] not-italic text-base text-center text-white_A700 w-auto"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed900"
                        >
                          3
                        </Button>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          out of 3
                        </Text>
                        
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-auto"
                          variant="body4"
                        >
                          |
                        </Text>
                      </div>
                </td>
                <td class="px-6 py-3">
                        
                        <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Next
                        </Text>
                        <Img
                          src="images/img_iconsaxboldarrowright2.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldarro_Two"
                        />
                        </div>
                </td>
            </tr>
        </tfoot>
    </table>
</div>

    </>
  )
}

export default DashboardTable