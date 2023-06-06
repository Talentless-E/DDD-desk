/* eslint-disable react/prop-types */
import React from "react";

const ModelCard = ({ name, imgSrc }) => {
   return (
      <div className=" flex flex-col w-72  items-center bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         <img className="rounded-t h-60 w-full" src={imgSrc} alt="" />
         <div className="p-6">
            <p className="font-bold text-base text-black dark:text-gray-400 first-letter:capitalize">
               {name}
            </p>
         </div>
      </div>
   );
};

export default ModelCard;
