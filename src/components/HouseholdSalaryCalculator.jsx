import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import FamilyMemberButtonAdd from "./FamilyMemberTabs/components/FamilyMemberButtonAdd";
import { useState , useEffect} from "react"

const HouseholdSalaryCalculator = () => {
  
  let initialFamilyMembersPay = [
    { name: "Családtag 1", pay: 0 , netPay : 0, id : 1},
    { name: "Családtag 2", pay: 0 , netPay : 0 , id : 2},
  ];
  
  const [familyMemberPay, setFamilyMemberPay] = useState(initialFamilyMembersPay);
  const [selectedMember, setSelectedMember] = useState(initialFamilyMembersPay[0]);
  const [selectedMemberPay, setSelectedMemberPay] = useState(selectedMember.pay);
  const [netValue , setNetValue] = useState(Math.round(selectedMember.pay * 0.665))
  const [checked25Under, setChecked25Under] = useState(false);
  const [checkedNewlyMarried, setCheckedNewlyMarried] = useState(false);
  const [checkedIncomeTaxDiscount, setCheckedIncomeTaxDiscount] = useState(false);
  const [checkedFamilyDiscount, setCheckedFamilyDiscount] = useState(false);
  const [numberOfDependants, setNumberOfDependants] = useState(0);
  const [numberOfDiscountedDependants, setNumberOfDiscountedDependants] = useState(0);

  const calculateTax = (basePay) =>{
    let tax = basePay * 0.185;
    if(!checked25Under){
      tax += basePay * 0.15;
    }else if(basePay > 499952){
      tax += (basePay - 499952) * 0.15;
    }
    if(checkedIncomeTaxDiscount){
      if(tax > 77300){
        tax -= 77300;
      }else{
        tax = 0;
      }
    }
    if(checkedNewlyMarried){
      if(tax > 5000){
        tax -= 5000
      }else{
        tax = 0;
      }
    }
    if(checkedFamilyDiscount){
      let discount = 0;
      if(numberOfDiscountedDependants == 1){
        discount = 10000 * numberOfDependants;
      }else if(numberOfDiscountedDependants == 2){
        discount = 20000 * numberOfDependants;
      }else if(numberOfDiscountedDependants == 3){
        discount = 30000 * numberOfDependants;
      }
      if(tax >= discount ){
        tax -= discount;
      }else{
        tax = 0;
      }
    }
    return tax;
  }
  
  
  useEffect(() => {
    const newNetValue = Math.round(selectedMemberPay - calculateTax(selectedMemberPay));
    setNetValue(Math.round(selectedMemberPay - calculateTax(selectedMemberPay)));
    
  }, [checked25Under,checkedNewlyMarried,checkedIncomeTaxDiscount,checkedFamilyDiscount,selectedMemberPay])
  const updateIncome = (id, basePay, value) => {
    // Find the member with the given name in the initial family members array
    const updatedMembers = familyMemberPay.map(member => {
      // If the member's name matches, update the pay to the given value
      if (member.id === id) {
        return { ...member, pay: basePay, netPay: value };
      }
      return member;
    });
  
    // Update the state with the new array of family members
    setFamilyMemberPay(updatedMembers);
  };
  useEffect(() =>{
    updateIncome(selectedMember.id , selectedMemberPay, netValue)
    console.log(familyMemberPay)
  }, [selectedMemberPay, netValue])
  return (
    <>
      <header className="ml-2">
        <FamilyMemberTabs familyMemberPay={familyMemberPay} 
        setFamilyMemberPay={setFamilyMemberPay} 
        selectedMember={selectedMember} 
        setSelectedMember={setSelectedMember} 
        setNetValue={setNetValue}
        />
      </header>
      <main className="ml-2">
      <div className="flex justify-center">
        <div className="w-1/2">
        <SalaryCalculator selectedMember={selectedMember}
         familyMemberPay={familyMemberPay} 
         setFamilyMemberPay={setFamilyMemberPay} 
         netValue={netValue} setNetValue={setNetValue} 
         selectedMemberPay={selectedMemberPay} setSelectedMemberPay={setSelectedMemberPay} 
         checked25Under={checked25Under} checkedIncomeTaxDiscount={checkedIncomeTaxDiscount} 
         checkedFamilyDiscount={checkedFamilyDiscount} checkedNewlyMarried={checkedNewlyMarried}
         setChecked25Under={setChecked25Under} setCheckedFamilyDiscount={setCheckedFamilyDiscount} 
         setCheckedIncomeTaxDiscount={setCheckedIncomeTaxDiscount}
         setCheckedNewlyMarried={setCheckedNewlyMarried}
         numberOfDependants={numberOfDependants}
         numberOfDiscountedDependants={numberOfDiscountedDependants}
         setNumberOfDependants={setNumberOfDependants}
         setNumberOfDiscountedDependants={setNumberOfDiscountedDependants}
         />
         </div>
         <div className="w-1/2">
         <HouseholdSummary familyMemberPay={familyMemberPay}/>
         </div>
      </div>
        
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
