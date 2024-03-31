import React from 'react'
import {useState} from 'react'
const WageSlider = ({sliderValue,setSliderValue}) => {
    
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
      };
  return (
    <>
        <input 
        id="default-range" 
        type="range" 
        value={sliderValue}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleSliderChange}></input>
    </>
  )
}

export default WageSlider