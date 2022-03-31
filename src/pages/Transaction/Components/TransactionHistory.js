import React from "react";

function TransactionHistory({ setSingleTransaction, transaction }) {
  console.log({ transaction });
  return (
    <div className="w-[93%] p-12 bg-white mt-12 rounded-xl">
      <h3 className="m-4 font-semibold">Transaction History</h3>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Recipient
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Transaction id
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
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
                      {""}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {transaction.map((obj) => {
                    return (
                      <tr classname="" onClick={() => console.log("deep")}>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src={`http://localhost:4000/app/services/getAccImg.php?acc_no=${obj.accountNumber}`}
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-semibold text-gray-900">
                                {obj.name}
                              </div>
                              <div class="text-sm text-gray-500">
                                {obj.accountNumber}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm font-semibold uppercase text-gray-900">
                            {obj.trasnsactionId}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">{obj.date}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {obj.amount}
                        </td>
                        <td class="p-2 whitespace-nowrap  text-sm font-medium ">
                          <div
                            class={`hover:text-indigo-900 font-bold rounded px-2 py-1 ${
                              obj.type == "deposit" || obj.type == "credit"
                                ? "text-[#00A389]"
                                : "text-[#6160DC]"
                            }`}
                          >
                            {obj.type.toUpperCase()}
                          </div>
                        </td>

                        <td
                          class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-indigo-600 cursor-pointer hover:bg-slate-200"
                          onClick={() => setSingleTransaction(obj)}
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

export default TransactionHistory;
