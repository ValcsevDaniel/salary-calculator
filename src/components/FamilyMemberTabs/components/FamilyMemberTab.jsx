import React from 'react'

const FamilyMemberTab = ({member ,selectedMember, setSelectedMember}) => {
    
  return (
    <li className="me-2" onClick={()=>setSelectedMember(member)}>
      <a href="#" className={ selectedMember.id === member.id ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"  }>{member.name}</a>
    </li>
  )
}

export default FamilyMemberTab