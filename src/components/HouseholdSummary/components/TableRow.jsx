import React from 'react'

const TableRow = ({name, netpay}) => {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                </th>
                <td class="px-6 py-4 text-white">
                    {netpay}
               </td>
    </tr>
  )
}

export default TableRow