import React from 'react'
import {useState} from 'react'
import TextInputWithLabel from './TextInputWithLabel';
import ValidForNewMarriage from './ValidForNewMarriage';


const DatepickerModal = ({hiddenStatus, isValidForMarriageDiscount, setIsValidForMarriageDiscount}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate,setSelectedDate] = useState("1989/01/01");
    
    const [hiddenStatusForValidator, setHiddenStatusForValidator] = useState(true);
    
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    const toggleValidationFeedback = () => {
        setHiddenStatusForValidator(false);
    };
    const onSave = () => {
        const currentDate = new Date();
        let selectedDateObj = new Date(selectedDate);
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(currentDate.getFullYear() - 2);
       

        if (selectedDateObj >= twoYearsAgo && selectedDateObj <= currentDate) {
            setIsValidForMarriageDiscount(true);
        } else {
            setIsValidForMarriageDiscount(false);
        }
        toggleModal();
        toggleValidationFeedback();
    };

  return (
    <div>
    <button type="button" className={`${hiddenStatus ? "hidden" : ""} top-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-0.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2`} onClick={toggleModal}>Dátum hozzáadása</button>
    <ValidForNewMarriage hiddenStatus={hiddenStatusForValidator} validityStatus={isValidForMarriageDiscount}/>
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`${modalOpen ? "" : "hidden"} fixed inset-0 z-50 overflow-y-auto flex justify-center items-center backdrop-filter backdrop-blur-md`}>
        <div className="relative p-4 w-full max-w-xl max-h-full">
            
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-500">
                
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Dátum kiválasztása
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={toggleModal}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                
                <div className="p-4 md:p-5 space-y-4">
                    <TextInputWithLabel label="Dátum megadása" placeHolder="YYYY/MM/DD" instruction="Például 2020/03/28" onTextChange={setSelectedDate}/>
                </div>
                
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onSave}>Mentés</button>
                    <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={toggleModal}>Bezárás</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DatepickerModal