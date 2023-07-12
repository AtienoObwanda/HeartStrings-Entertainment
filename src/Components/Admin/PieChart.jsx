import React from 'react';
// import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Text as TextTitle} from "UI_Components";
import { Img } from "UI_Components";
import 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Sold', 'Reserved', 'Available'],
    datasets: [
      {
        data: [200, 150, 100],
        backgroundColor: ['#C71A1A', '#00ACEE', '#0b0c0f'],
        hoverBackgroundColor: ['#C71A1A', '#00ACEE', '#0b0c0f'],
        borderColor: ['#C71A1A', '#00ACEE', '#0b0c0f'],
        
      },
    ],
  };
  
  const options = {
    responsive: true,
    aspectRatio: 1, 
    cutoutPercentage: 0, 
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltip
      },
      legend: {
        display: false, // Hide legend
      },
      datalabels: {
        display: 'auto', // Show labels on hover
        color: '#fff', // Label text color
        font: {
          weight: 'bold', // Label font weight
        },
      },
    },
  };
  

const PieChart = () => {
  return (
    <>
    <div className="bg-black_900 flex md:flex-1 flex-col font-roboto gap-4 items-start justify-start p-4 rounded w-[37%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-center ml-2 md:ml-[0] self-stretch w-auto">
                      <TextTitle
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Order/Ticket status
                      </TextTitle>
                      <div className="flex flex-row gap-12 items-center justify-center self-stretch w-auto">
                        <div className="h-[180px] relative w-[180px]">
                          

                          <div className="!w-[180px] absolute h-[180px] inset-[0] justify-center m-auto overflow-visible">
                          <Pie data={data} options={options} />
                            
                          </div>
                        </div>
                        <div className="sm:hidden flex flex-col gap-6 items-start justify-center self-stretch w-auto">
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-red_900 h-2.5 rounded-[50%] w-2.5"></div>
                            <TextTitle
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Sold
                            </TextTitle>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-light_blue_500 h-2.5 rounded-[50%] w-2.5"></div>
                            <TextTitle
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Reserved
                            </TextTitle>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-black_900_01 h-2.5 rounded-[50%] w-2.5"></div>
                            <TextTitle
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Available
                            </TextTitle>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="bg-black_900_01 flex flex-col gap-4 items-start justify-center ml-2 md:ml-[0] pl-4 sm:pr-5 pr-8 py-2 rounded-lg self-stretch w-auto">
                      <TextTitle
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Comparison
                      </TextTitle>
                      <div className="flex flex-col gap-3 items-start justify-center self-stretch w-auto">
                        <div className="flex flex-row gap-[39px] items-center justify-start self-stretch w-auto">
                          <TextTitle
                            className="not-italic text-gray_300 text-left w-auto"
                            variant="body5"
                          >
                            Last Week
                          </TextTitle>
                          <TextTitle
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            150 tickets sold
                          </TextTitle>
                        </div>
                        <div className="flex flex-row gap-10 items-center justify-start self-stretch w-auto">
                          <TextTitle
                            className="not-italic text-gray_300 text-left w-auto"
                            variant="body5"
                          >
                            This Week
                          </TextTitle>
                          <TextTitle
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            800 tickets sold
                          </TextTitle>
                          <TextTitle
                            className="not-italic text-left text-light_blue_500 w-auto"
                            variant="body5"
                          >
                            +4.5%
                          </TextTitle>
                        </div>
                      </div>
                    </div>
                  </div>
    </>
    )
}

export default PieChart