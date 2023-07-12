import React from 'react'

import { Chart } from 'chart.js';
import { Text } from "UI_Components";

// import {faker} from 'faker';

import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Import Filler plugin
} from "chart.js";

import faker from "faker";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler // 1. Register Filler plugin
  );
  



  export const options = {
    responsive: true,
    tension: 0.01,
    scales: {
      y: {
        grid: {
          display: true,
          // color: "#348632",
          // drawBorder: false,
          drawOnChartArea: true, 
        },
        border: {
          dash: [4,8],
      }, 
        ticks: {
          display: true,
          stepSize: 20000,
          max: 1000000,
          min: 0,
          reverse: true,
          callback: (value) => {
            if (value === 0) return '0k';
            else if (value === 20000) return '20k';
            else if (value === 40000) return '40k';
            else if (value === 60000) return '60k';
            else if (value === 80000) return '80k';
            else if (value === 100000) return '100k';
            else if (value === 120000) return '120k';
            else if (value === 140000) return '140k';
            else if (value === 160000) return '160k';
            else if (value === 180000) return '180k';
            else if (value === 200000) return '200k';
            else if (value === 220000) return '220k';
            else if (value === 240000) return '240k';
            else if (value === 260000) return '260k';
            else if (value === 280000) return '280k';
            else if (value === 300000) return '300k';
            else if (value === 320000) return '320k';
            else if (value === 340000) return '340k';
            else if (value === 360000) return '360k';
            else if (value === 380000) return '380k';
            else if (value === 400000) return '400k';
            else if (value === 420000) return '420k';
            else if (value === 440000) return '440k';
            else if (value === 460000) return '460k';
            else if (value === 480000) return '480k';
            else if (value === 500000) return '500k';
            else if (value === 520000) return '520k';
            else if (value === 540000) return '540k';
            else if (value === 560000) return '560k';
            else if (value === 580000) return '580k';
            else if (value === 600000) return '600k';
            else if (value === 620000) return '620k';
            else if (value === 640000) return '640k';
            else if (value === 660000) return '660k';
            else if (value === 680000) return '680k';
            else if (value === 700000) return '700k';
            else if (value === 720000) return '720k';
            else if (value === 740000) return '740k';
            else if (value === 760000) return '760k';
            else if (value === 780000) return '780k';
            else if (value === 800000) return '800k';
            else if (value === 820000) return '820k';
            else if (value === 840000) return '840k';
            else if (value === 860000) return '860k';
            else if (value === 880000) return '880k';
            else if (value === 900000) return '900k';
            else if (value === 920000) return '920k';
            else if (value === 940000) return '940k';
            else if (value === 960000) return '960k';
            else if (value === 980000) return '980k';
            else if (value === 1000000) return '1M';
  
  
  
            else return '';
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            const value = context.parsed.y;
            const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            label += 'KES ' + formattedValue;
            return label;
          }
        }
      },
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          // pointStyleWidth:10,
          // pointStyleHeight:8,
          padding:30,
        },
      },

    },
  };
  
  
  
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Tickets",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        data : [22000,17000,40000,46000,19000,108000,160000],
        borderColor: "RGB(199,26,26)",
        backgroundColor: "RGBA(199,26,26,1)",
        fill: {
          target: "origin", // Set the fill options
          above: "RGBA(199,26,26,0.3)"
        }
      },
      {
        label: "Streams",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        data : [20000,15000,90000,25000,30000,24000,60000],
        borderColor: "RGB(0,172,238)",
        backgroundColor: "RGBA(0,172,238,1)",
        fill: "origin" // Set the fill options
      }
    ]
  };

  

const LineGraph = () => {
  return (
<>
<div className="bg-black_900 flex md:flex-1 flex-col items-center justify-start p-[17px] rounded-lg w-[61%] md:w-full">
                    <div className="flex flex-col items-start justify-start my-[5px] w-[99%] md:w-full">
                      <div className="flex flex-row sm:gap-10 gap-[300px] items-center justify-start w-[620px] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Sales
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row font-roboto gap-4 items-center justify-between mt-6 w-full">
                      <div className="w-full xl:w-1/3 px-3">

                        <div className="w-full bg-transparent  rounded-lg p-4 mb-8 xl:mb-0">
                        <Line options={options} data={data} />;
                        </div>
                        </div>                      
                        </div>

                    </div>
                  </div> 
</> )
}

export default LineGraph