import React from 'react';
import { Spinner } from 'react-bootstrap';
// import { Spinner } from "@material-tailwind/react";


const Preloader = () => {

  
    return (
    
      <div className="min-h-screen flex justify-center items-center bg-black_900">
      <div className="loader">

      <div class="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-red_900 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"> </span>
      </div>

     

      </div>
    </div>
  );
}

export default Preloader;
