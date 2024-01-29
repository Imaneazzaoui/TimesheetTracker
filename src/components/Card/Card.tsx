import React from 'react'
import { MdDescription } from 'react-icons/md';

// function DefaultProgress(number: number) {
//   number = 80;
//   return (
//     <Progress progress={number} />
//   )
// }
const  pourcentage = 80;


export default function Card() {
  
  return (
    <div>

<div className="grid gap-4 grid-cols-2">
  <div>
  <div className="flex flex-col">
        <div className="relative flex flex-col p-4 md:flex-row md:space-x-5 space-y-3 md:space-y-0   p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-sky-100	 w-full">
          <h3 className="font-black text-gray-800 md:text-3xl text-xl text-left">Mahakim</h3>
        </div>
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0  shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    <div className="w-full bg-white grid place-items-center">
      <img src="../../../src/assets/mahakim.png" alt="tailwind logo" className="" />
    </div>
    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
      <h3 className="font-black text-gray-800 text-left">Description:</h3>
      <p className=" text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="text-xl font-black text-blue-500">in progress</p>
      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
     
      <div className="w-full bg-white dark:bg-neutral-600">
      <div className="w-full h-4 bg-blue-200 rounded-full"> {/* Ajustez la hauteur ici */}
        <div
          className="h-full text-center text-xs text-white bg-blue-500 rounded-full"
          style={{ width: `${pourcentage}%` }}>
          {pourcentage}%
        </div>
      </div>
    </div>
    </div>
     
</div>
</div>
</div>
</div>
</div>




 
    
</div>
  )
}
