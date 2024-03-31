import TextInputWithLabel from "./components/TextInputWithLabel";
import WageSlider from "./components/WageSlider";
import ButtonChangerContainer from "./components/ButtonChangerContainer";
import {useState, useEffect} from "react"
import CheckboxContainer from "./components/CheckboxContainer";
import CalculatedWage from "./components/CalculatedWage";


const SalaryCalculator = ({
  selectedMember,
   netValue, 
   setNetValue,
   selectedMemberPay , 
   setSelectedMemberPay, 
   checked25Under,
   checkedNewlyMarried,
   checkedIncomeTaxDiscount,
   checkedFamilyDiscount,
   setChecked25Under, 
   setCheckedNewlyMarried,
   setCheckedIncomeTaxDiscount,
   setCheckedFamilyDiscount,
   numberOfDependants,
   setNumberOfDependants,
   numberOfDiscountedDependants,
   setNumberOfDiscountedDependants,
   setFamilyMemberPay,
   familyMemberPay
  }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [displayBasePay, setDisplayBasePay] = useState(selectedMember.pay);
  
  const handleBasePayInput = (text) =>{
    let basePay = parseInt(text);
    setSelectedMemberPay(basePay);
    selectedMember.pay = basePay;
  }
  const handleNameInput = (text) => {
    console.log(text)
    // Find the member with the given name in the initial family members array
    const updatedMembers = familyMemberPay.map(member => {
      // If the member's name matches, update the pay to the given value
      if (member.id === selectedMember.id) {
        return { ...member, name: text};
      }
      return member;
    });
  
    // Update the state with the new array of family members
    setFamilyMemberPay(updatedMembers);
  };
  
  useEffect(() => {
    setSelectedMemberPay(selectedMember.pay)
    setDisplayBasePay(selectedMemberPay)
  }, [selectedMember])

  useEffect(() => {
    setSelectedMemberPay(selectedMember.pay * (1 + sliderValue / 100));
    setDisplayBasePay(Math.round(selectedMemberPay))        
   }, [sliderValue]);
   
  
    return (
    <>
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-200 dark:border-gray-700 max-w-lg mx-auto lg:max-w-3xl xl:max-w-4xl">
    <h1 className="mb-4 text-l font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-black text-left"><span className="text-blue-600 dark:text-blue-500">{selectedMember.name}</span> bérének kiszámítása</h1>
    <TextInputWithLabel label="Családtag neve" placeHolder={selectedMember.name} instruction="Add meg a családtagod nevét!" changingVal={false} onTextChange={handleNameInput}/>
    <TextInputWithLabel label="Bruttó bér" placeHolder={Math.round(displayBasePay)} instruction="Add meg a bruttó béred!" onTextChange={handleBasePayInput} selectedMemberPay={selectedMemberPay} selectedMember={selectedMember} changingVal={true}/>
    <WageSlider sliderValue={sliderValue} setSliderValue={setSliderValue}/>
    <ButtonChangerContainer  sliderValue={sliderValue} setSliderValue={setSliderValue}/>
    <div >
          <p class="text-m font-bold text-gray-900 dark:text-black text-left ml-1">Kedvezmények</p>
        </div>
        <CheckboxContainer netValue={netValue} 
        setNetValue={setNetValue} 
        selectedMemberPay={selectedMemberPay} 
        checked25Under={checked25Under} 
        checkedFamilyDiscount={checkedFamilyDiscount} 
        checkedNewlyMarried={checkedNewlyMarried} 
        checkedIncomeTaxDiscount={checkedIncomeTaxDiscount}
        setChecked25Under={setChecked25Under}
        setCheckedFamilyDiscount={setCheckedFamilyDiscount}
        setCheckedNewlyMarried={setCheckedNewlyMarried}
        setCheckedIncomeTaxDiscount={setCheckedIncomeTaxDiscount}
        numberOfDependants={numberOfDependants}
        numberOfDiscountedDependants={numberOfDiscountedDependants}
        setNumberOfDependants={setNumberOfDependants}
        setNumberOfDiscountedDependants={setNumberOfDiscountedDependants}/>
        <CalculatedWage netWage={netValue}/>
    </div>
    
    </>
    
    
  
  )};

export default SalaryCalculator;
