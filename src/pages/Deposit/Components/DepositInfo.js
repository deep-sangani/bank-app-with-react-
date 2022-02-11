import React from "react";

function DepositInfo() {
  return (
    <div>
      <div className="flex justify-around mt-4 p-4 pr-10">
        <div className="w-3/5 min-h-full  bg-white rounded-md p-4 mt-8">
          <h2 className="font-semibold text-lg">Transaction</h2>
          <div className="grid grid-cols-2 my-8 gap-4 ">
            {/* transaction Number */}
            <div>
              <label className="text-sm text-gray-600">
                Transaction Number
              </label>
              <input
                type="text"
                value="123456789"
                className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                disabled
              />
            </div>
            {/* Current Date */}
            <div>
              <label className="text-sm text-gray-600">Date</label>
              <input
                type="text"
                value="12/12/2020"
                className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                disabled
              />
            </div>
            {/* account number */}
            <div>
              <label className="text-sm text-gray-600">Account Number</label>
              <input
                type="text"
                className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* depositer name */}
            <div>
              <label className="text-sm text-gray-600">Depositer Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {mobile number} */}
            <div>
              <label className="text-sm text-gray-600">Mobile Number</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {account type} */}
            <div>
              <label className="text-sm text-gray-600">Account type</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {dob} */}
            <div className="col-span-2">
              <label className="text-sm text-gray-600">Perticulers</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
          </div>
        </div>
        <div className=" min-h-full bg-white rounded-md p-4 w-72 pt-28">
          <div className="grid grid-cols-1 gap-4">
            {/* {"deposit amount "} */}
            <div>
              <label className="text-sm text-gray-600">Deposit amount</label>
              <input
                type="text"
                className="w-full mt-2 py-4 px-6 rounded-2xl text-3xl outline-none border-4 border-[#6160D0] font-bold"
              />
            </div>

            {/* {"pan no"} */}
            <div>
              <label className="text-sm text-gray-600">pan number</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {submit} */}

            <button
              type="submit"
              className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#5252d3]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositInfo;
