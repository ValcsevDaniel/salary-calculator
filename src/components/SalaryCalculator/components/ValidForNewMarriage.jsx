import React from 'react';

const ValidForNewMarriage = ({hiddenStatus, validityStatus}) => {
    
  return (
    <>
    <button
    type="button"
    className={`${hiddenStatus ? "hidden" : ""} ${validityStatus ? "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-0.5 ml-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" : "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-0.5 ml-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}`}
    >
    {validityStatus ? "Érvényes" : "Érvénytelen"}
</button>

    </>
  );
}

export default ValidForNewMarriage;
