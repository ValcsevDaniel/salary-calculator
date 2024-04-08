import React from 'react'
import CheckboxDiscount from './CheckboxDiscount'
import DatepickerModal from './DatepickerModal'
import {useState , useEffect} from 'react'
import ValidForNewMarriage from './ValidForNewMarriage'
import NumberInput from './NumberInput'


const CheckboxContainer = ({  netValue, 
    setNetValue,selectedMemberPay, 
    checked25Under, 
    checkedNewlyMarried, 
    checkedIncomeTaxDiscount,
    checkedFamilyDiscount, 
    setChecked25Under,
    setCheckedFamilyDiscount,
    setCheckedNewlyMarried,
    setCheckedIncomeTaxDiscount,
    numberOfDependants,
    setNumberOfDependants,
    numberOfDiscountedDependants,
    setNumberOfDiscountedDependants,
    isValidForMarriageDiscount,
    setIsValidForMarriageDiscount}) => {
      
    
    const [hiddenStatusForDatepicker,setHiddenStatusForDatePicker] = useState(true);
    const [hiddenStatusForFamilyDiscount,setHiddenStatusForFamilyDiscount] = useState(true);

    useEffect(() => {
        setHiddenStatusForDatePicker(!checkedNewlyMarried)
      }, [checkedNewlyMarried])
      useEffect(() => {
        setHiddenStatusForFamilyDiscount(!checkedFamilyDiscount)
      }, [checkedFamilyDiscount])
  return (
    <div className="flex flex-col">
      <CheckboxDiscount text="25 év alatti SZJA mentesség" checked={checked25Under} setChecked={setChecked25Under}/>
      <div className="flex items-center"> 
        <CheckboxDiscount text="Friss házasok kedvezménye" checked={checkedNewlyMarried} setChecked={setCheckedNewlyMarried}/>
        <DatepickerModal hiddenStatus={hiddenStatusForDatepicker}
        isValidForMarriageDiscount={isValidForMarriageDiscount}
        setIsValidForMarriageDiscount={setIsValidForMarriageDiscount}/> 
      </div>
      <CheckboxDiscount text="Személyi adókedvezmény" checked={checkedIncomeTaxDiscount} setChecked={setCheckedIncomeTaxDiscount}/>
      <CheckboxDiscount text="Családi kedvezmény" checked={checkedFamilyDiscount} setChecked={setCheckedFamilyDiscount}/>
      <NumberInput hiddenStatus={hiddenStatusForFamilyDiscount} 
      numberOfDependants={numberOfDependants} 
      numberOfDiscountedDependants={numberOfDiscountedDependants} 
      setNumberOfDependants={setNumberOfDependants} 
      setNumberOfDiscountedDependants={setNumberOfDiscountedDependants}/>
    </div>
  )
}

export default CheckboxContainer
