import FamilyMemberTab from "./components/FamilyMemberTab";
import FamilyMemberButtonAdd from "./components/FamilyMemberButtonAdd";
import { useState } from "react";



const FamilyMemberTabs = ({
    familyMemberPay,
   setFamilyMemberPay, 
   selectedMember, 
   setSelectedMember,
   setNetValue}) => {
  function handlAddFamilyMember(){
    const idVal = familyMemberPay.length
    setFamilyMemberPay([...familyMemberPay, {name : "Új családtag" , pay : 10, netPay : 7, id : idVal + 1}])
  }
  
  
  
  
  return <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    {familyMemberPay.map(e=>
    <FamilyMemberTab key={e.id} member={e} selectedMember={selectedMember} setSelectedMember={setSelectedMember} setNetValue={setNetValue}></FamilyMemberTab>
     )}
  
  
  <FamilyMemberButtonAdd onClick={handlAddFamilyMember}></FamilyMemberButtonAdd>
  
  
</ul>;
};

export default FamilyMemberTabs;
