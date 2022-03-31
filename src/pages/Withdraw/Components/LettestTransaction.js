import React, { useState, useEffect } from "react";
import OutSign from "../../../assets/images/OutSign.svg";
import fetchAllTransaction from "../../../sdk/fetchallTransaction";
const data = [
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
  {
    name: "deep sangani",
    accno: "415224154",
    amount: "35267",
    status: "active",
    date: "25 Jan, 2021",
    time: "12:00 pm",
  },
];
export default function LettestTransaction() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetchAllTransaction({ type: "withdraw" });
      console.log(data.data);
      setData(data.data);
    })();
  }, []);
  return (
    <div className="mt-16 w-fit bg-white mx-auto p-4 rounded-xl scale-95 ">
      <h3 className="font-bold text-lg">latest Withdraw</h3>
      {/* tables */}
      <div class="flex flex-col mt-4 ">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-auto h-[400px] relative">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <table class="min-w-full divide-y divide-gray-200 scale-95">
                <thead class="bg-gray-50  ">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Transaction Id
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
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
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Perticulers
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date of withdraw
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {data.map((obj) => {
                    return (
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {obj.trasnsactionId}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src={OutSign}
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                {obj.name}
                              </div>
                              <div class="text-sm text-gray-500">
                                {obj.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            {obj.accountNumber}
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-lg font-bold text-gray-900">
                            ₹ {obj.amount}
                          </div>
                        </td>

                        <td class="px-6 py-4 w-full">
                          <span class="p-2 inline-flex text-xs leading-5 font-semibold rounded bg-green-100 text-green-800 ">
                            {" "}
                            {obj.particulars}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {obj.date}
                          <div class="text-[10px] text-gray-500">
                            {obj.time.toUpperCase()}
                          </div>
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
