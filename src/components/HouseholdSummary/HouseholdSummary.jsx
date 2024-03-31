import TableRow from "./components/TableRow";

const HouseholdSummary = ({familyMemberPay}) => {
  return (
  <div className=" ml-2 mr-2 w-full h-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-200 dark:border-gray-700 max-w-lg mx-auto lg:max-w-3xl xl:max-w-4xl">
    <h1 className="lg:mb-4 text-l font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-black text-center"><span className="text-blue-600 dark:text-blue-500">Család</span> nettó bére </h1>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:mt-20 mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Családtag
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Nettó bér
                        
                    </div>
                </th>
            </tr>
            {familyMemberPay.map((member) => (
              <TableRow key={member.id} name={member.name} netpay={member.netPay} />
            ))}
           
        </thead>
    </table>
</div>

  </div>
  )
};

export default HouseholdSummary;
