import React, { useState } from 'react';

const NumberInput = ({
    hiddenStatus,
    numberOfDependants,
    numberOfDiscountedDependants,
    setNumberOfDependants,
    setNumberOfDiscountedDependants
    }) => {

  const handleNumberOfDependantsIncrement = () => {
    setNumberOfDependants(numberOfDependants + 1); // Increment the value
  };

  const handleNumberOfDependantsDecrement = () => {
    if(numberOfDependants > 0 && numberOfDependants > numberOfDiscountedDependants){
    setNumberOfDependants(numberOfDependants - 1);
    } 
  };
  const handleNumberOfDiscountedDependantsIncrement = () => {
    if(numberOfDiscountedDependants < numberOfDependants && numberOfDiscountedDependants < 3){
        setNumberOfDiscountedDependants(numberOfDiscountedDependants + 1); 
    }
    
  };

  const handleNumberOfDiscountedDependantsDecrement = () => {
    if(numberOfDiscountedDependants > 0 ){
    setNumberOfDiscountedDependants(numberOfDiscountedDependants - 1);
    } 
  };
  
  return (
    <div className={`${hiddenStatus  ? "hidden" : ""} relative flex items-center`}>
      <button
        type="button"
        onClick={handleNumberOfDependantsDecrement}
        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
        </svg>
      </button>
      <input
        type="text"
        className="flex-shrink-0 text-gray-900 dark:text-black border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
        value={numberOfDependants}
        readOnly // Make the input read-only
      />
      <button
        type="button"
        onClick={handleNumberOfDependantsIncrement}
        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>
      <p className="mx-2"> Eltartott, ebből kedvezményezett: </p>
      <button
        type="button"
        onClick={handleNumberOfDiscountedDependantsDecrement}
        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
        </svg>
      </button>
      <input
        type="text"
        className="flex-shrink-0 text-gray-900 dark:text-black border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
        value={numberOfDiscountedDependants}
        readOnly // Make the input read-only
      />
      <button
        type="button"
        onClick={handleNumberOfDiscountedDependantsIncrement}
        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-2.5 h-2.5 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>

    </div>
  );
};

export default NumberInput;
