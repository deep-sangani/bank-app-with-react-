import React from "react";
export default function Customer({ setcustomerinfo, customers }) {
  if (customers.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-[93%] p-12 bg-white mt-12 rounded-xl">
      <h3 className="m-4 font-semibold">Customer's List</h3>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-y-auto h-[400px]">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer's name'
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Account Number
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Opening Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Balance
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Account Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {""}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 overflow-y-auto max-h-[400px]">
                  {customers.map((obj) => {
                    const {
                      acc_no,
                      name,
                      email,
                      created_at,
                      balance,
                      account_type,
                    } = obj;
                    return (
                      <tr classname="" onClick={() => console.log("deep")}>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src={`http://localhost:4000/app/services/getAccImg.php?acc_no=${acc_no}`}
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-semibold text-gray-900">
                                {name}
                              </div>
                              <div class="text-sm text-gray-500">{email}</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-semibold uppercase text-gray-900">
                            {acc_no}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {created_at}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                          ₹ {balance}
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                          <span class="px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-600 text-white py-2 uppercase ">
                            {account_type}
                          </span>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-indigo-600 cursor-pointer hover:bg-slate-200"
                          onClick={() => setcustomerinfo(obj)}
                        >
                          see more
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
