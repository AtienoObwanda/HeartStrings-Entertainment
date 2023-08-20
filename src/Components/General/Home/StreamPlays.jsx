import React from 'react'
import { Link } from 'react-router-dom'
import StreamCards from "UI_Components/StreamCards";
import { Button, Img, List, Text } from "UI_Components";
import {Streams} from '../../../Data/Streams'
import ReactPlayer from 'react-player';




const StreamPlays = () => {
  return (
    <>
     {/* Streaming Plays */}
     <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-[89px] mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
              className="text-center text-white_A700 w-auto"
              as="h2"
              variant="h2"
              style={{ fontSize: '35px', lineHeight: '42px' }}

            >
              Stream plays
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h6"
              variant="h6"
              style={{ fontSize: '18px', lineHeight: '42px' }}

            >
              The world of theatre from the comfort of your home.
            </Text>
          </div>
          <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
             
              {Streams.slice(0,3).map((Stream, index) => (
               <Link 
               // to={`/Stream/${Stream.id}`} key={index}
               > 
                   <div
                     className="bg-black_900_01 flex flex-col gap-4 h-[440px] items-center justify-start p-4 rounded-lg w-full hover:border border-white rounded-md p-2"
                     key={index} >
                       <div className="flex flex-col items-center justify-start w-full">
                     <div className="h-[230px] relative w-full">
                     <ReactPlayer 
                     light={
                     <img 
                     src='https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927767/HeartStrings/SVG/img_rectangle8_570x1140_ot5kmw.png' 
                     alt='Poster' 
                     className="max-w-full h-full"
                     />}
                     url='https://res.cloudinary.com/dyiuol5sx/video/upload/v1692514513/OFFICIAL_MULLY_MOVIE_THEATRICAL_TRAILER_bnobmj.mp4'
                     // url={Stream.infotrailer} 
                     playing  controls 
                     width='100%'
                     height='240px'
                     config={{
                       file: {
                         attributes: {
                           controlsList: 'nodownload' // Disable download
                         }
                       }
                     }}
                     />
                    
                     </div>
                         </div>
                         <div className="flex flex-col gap-8 items-start justify-start w-auto">
                         <div className="flex flex-col gap-4 items-start justify-start w-auto">
                           <Text
                             className="text-2xl md:text-[22px] text-white sm:text-xl w-auto"
                             size="txtRobotoRomanBold24"
                           >
                             {Stream.title}
                           </Text>
                           <Text
                             className="leading-[175.00%] max-w-[332px] md:max-w-full text-gray-300 text-xl"
                             size="txtRobotoRomanRegular20Gray300"
                           >
                             {Stream.synopsis.substring(0, 70) + '...'}
                           </Text>
                         </div>
                         <div className="flex flex-row gap-[103px] items-center justify-between w-auto pb-6">
                           <Button 
                            className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-xl w-auto"
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillGray900"
                            
                           >
                             Rent Play(s)
                           </Button>
                           <div className="flex flex-row gap-2 items-center justify-center w-auto">
                             <Img
                               className="h-6 w-6"
                               src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                               alt="clock icon"
                             />
                             <div className="flex flex-col items-start justify-start w-auto text-white">
                               <Text
                                 className="text-base text-white-A700 w-auto"
                                 size="txtRobotoRomanRegular16"
                               >
                                {/* {Stream.duration} */}
                                {/* {Stream.added_on.substring(0, 10)} */}
                                1hr 20 mins
                               </Text>
                             </div>
                           </div>
                         </div>
                       </div>

                   </div>   
               </Link>
            
          ))}
              
            </List>
        </div>

        {/* Pre-footer CTA Button */}
        <a href="/all-streams"> <Button
          className="common-pointer cursor-pointer font-bold mt-24 text-center text-white_A700 text-xl w-[200px]"
          shape="RoundedBorder8"
          size="lg"
          variant="OutlineWhiteA700_1"
  
        >
          View all
        </Button></a>



    </>
  )
}

export default StreamPlays