import React from 'react'

const FamilyMemberButtonAdd = ({onClick}) => {
  return (
    <li className="me-2">
    <button onClick={onClick} type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-300">+</button>
    </li>
  )
}

export default FamilyMemberButtonAdd