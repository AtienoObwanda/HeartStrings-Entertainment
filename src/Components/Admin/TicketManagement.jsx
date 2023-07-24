import React from 'react'
import {FiEdit} from 'react-icons/fi'
import {IoEyeSharp} from 'react-icons/io5'

import { Button, Img, Input, List, Line,Text } from "UI_Components";


const TicketManagement = () => {


const data = [
  {
    "Name": "John Doe",
    "Email": "johndoe@example.com",
    "Phone_Number": "+254712345678",
    "Status": "Bought",
    "Payment_Method": "Card",
    "Date_Time": "2023-07-12"
  },
  {
    "Name": "Jane Smith",
    "Email": "janesmith@example.com",
    "Phone_Number": "+254711234567",
    "Status": "Edited",
    "Payment_Method": "M-Pesa",
    "Date_Time": "2023-07-11"
  },
  {
    "Name": "David Kimani",
    "Email": "davidkimani@example.com",
    "Phone_Number": "+254712345678",
    "Status": "Reserved",
    "Payment_Method": "Card",
    "Date_Time": "2023-07-10"
  },
  {
    "Name": "Grace Wanjiru",
    "Email": "gracewanjiru@example.com",
    "Phone_Number": "+254711234567",
    "Status": "Cancelled",
    "Payment_Method": "M-Pesa",
    "Date_Time": "2023-07-09"
  },
  {
    "Name": "Peter Omondi",
    "Email": "peteromondi@example.com",
    "Phone_Number": "+254712345678",
    "Status": "Bought",
    "Payment_Method": "M-Pesa",
    "Date_Time": "2023-07-08"
  },
  {
    "Name": "Sarah Njeri",
    "Email": "sarahnjeri@example.com",
    "Phone_Number": "+254711234567",
    "Status": "Reserved",
    "Payment_Method": "Card",
    "Date_Time": "2023-07-07"
  },
  {
    "Name": "Michael Okoth",
    "Email": "michaelokoth@example.com",
    "Phone_Number": "+254712345678",
    "Status": "Edited",
    "Payment_Method": "M-Pesa",
    "Date_Time": "2023-07-06"
  },
  {
    "Name": "Catherine Mwangi",
    "Email": "catherinemwangi@example.com",
    "Phone_Number": "+254711234567",
    "Status": "Bought",
    "Payment_Method": "Card",
    "Date_Time": "2023-07-05"
  },
  {
    "Name": "Josephine Njoki",
    "Email": "josephinenjoki@example.com",
    "Phone_Number": "+254712345678",
    "Status": "Cancelled",
    "Payment_Method": "M-Pesa",
    "Date_Time": "2023-07-04"
  },
  {
    "Name": "Samuel Maina",
    "Email": "samuelmaina@example.com",
    "Phone_Number": "+254711234567",
    "Status": "Reserved",
    "Payment_Method": "Card",
    "Date_Time": "2023-07-03"
  },
  {
    "Name": "Mercy Nyambura",
    "Email": "mercynyambura@example.com",
    "Phone_Number": "+254712345678",
    "Status": "Edited",
    "Payment_Method": "Card",
    "Date_Time": "2023-07-02"
  },
  {
    "Name": "Patrick Kamau",
    "Email": "patrickkamau@example.com",
    "Phone_Number": "+254711234567",
    "Status": "Bought",
    "Payment_Method": "M-Pesa",
    "Date_Time": "2023-07-01"
  }
];



  return (
    <>
        
<div class="sm:hidden relative overflow-x-auto w-full">
    <table class="w-full text-sm text-left text-white_400">
        <thead class="text-xs uppercase bg-gray_800 text-white_A700">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment Method
                </th>
                <th scope="col" class="px-6 py-3">
                    Date and Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
                <th scope="col" class="px-6 py-3">
                    View
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
    <tr key={index} className="border-b bg-transparent border-gray_800 text-white_A700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {item.Name}
      </th>
      <td className="px-6 py-4">{item.Email}</td>
      <td className="px-6 py-4">{item.Phone_Number}</td>
      <td className="px-6 py-4">{item.Status}</td>
      <td className="px-6 py-4">{item.Payment_Method}</td>
      <td className="px-6 py-4">{item.Date_Time}</td>
      <td className="px-6 py-4">
        <FiEdit/>
      </td>
      <td className="px-6 py-4">
        <IoEyeSharp/>
      </td>



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
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927653/HeartStrings/SVG/img_iconsax_bold_arrowdown2_bxl9th.svg"
                            className="h-6 w-6"
                            alt="iconsaxboldarro"
                          />
                      </div>
                </td>
                <td class="px-6 py-3">
                <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927656/HeartStrings/SVG/img_iconsaxboldarrowleft2_zjxjcd.svg"
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
                          1
                        </Button>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          out of 2
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
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927656/HeartStrings/SVG/img_iconsaxboldarrowright2_hauua0.svg"
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

export default TicketManagement