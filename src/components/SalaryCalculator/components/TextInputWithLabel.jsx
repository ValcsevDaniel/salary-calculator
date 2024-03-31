import React, { useState,useEffect } from 'react';

const TextInputWithLabel = ({ label, placeHolder, instruction, onTextChange,selectedMemberPay,selectedMember,changingVal}) => {
  const [inputText, setInputText] = useState(placeHolder);
  
  

  useEffect(() => {
    if(changingVal){
      setInputText(selectedMemberPay)  
    }else{
      setInputText("")
    }
    
  }, [placeHolder,selectedMemberPay])
  
  const handleChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    onTextChange(newText); // Call the onTextChange function passed from the parent component
  };

  return (
    <div className="grid gap-3 mb-6 md:grid-cols-2">
      <div className="flex flex-col">
        <label htmlFor="first_name" className="mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-black text-left">{label}</label>
        <input 
          type="text" 
          id="first_name" 
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
          placeholder={placeHolder} 
          value={inputText} 
          onChange={handleChange} 
          required

        />
        <label htmlFor="first_name" className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 text-left ml-1 mt-1">{instruction}</label>
      </div>
    </div>
  );
};

export default TextInputWithLabel;
