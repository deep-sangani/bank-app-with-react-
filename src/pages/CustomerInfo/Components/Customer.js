import React from "react";
export default function Customer({ setcustomerinfo }) {
  const data = [1, 2, 3, 4, 5, 6, 5, 6, 7];
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
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
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
                  {data.map((obj) => {
                    return (
                      <tr classname="" onClick={() => console.log("deep")}>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-semibold text-gray-900">
                                Jane Cooper
                              </div>
                              <div class="text-sm text-gray-500">
                                jan@gmail.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-semibold uppercase text-gray-900">
                            253623562535
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          march 22,2022
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                          ₹ 50,000
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div class="text-indigo-600 hover:text-indigo-900">
                            savings
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <span class="px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-600 text-white py-2 uppercase ">
                            active
                          </span>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-indigo-600 cursor-pointer hover:bg-slate-200"
                          onClick={() => setcustomerinfo("deep")}
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