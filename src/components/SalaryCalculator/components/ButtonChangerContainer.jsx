import React from 'react'
import ButtonWageChanger from './ButtonWageChanger'
const ButtonChangerContainer = ({sliderValue, setSliderValue}) => {
  return (
    <div className='flex justify-center mt-2'>
        <ButtonWageChanger sliderValue={sliderValue} setSliderValue={setSliderValue} value={-1}/>
        <ButtonWageChanger sliderValue={sliderValue} setSliderValue={setSliderValue} value={-5}/>
        <ButtonWageChanger sliderValue={sliderValue} setSliderValue={setSliderValue} value={+1}/>
        <ButtonWageChanger sliderValue={sliderValue} setSliderValue={setSliderValue} value={+5} />
    </div>
  )
}

export default ButtonChangerContainer