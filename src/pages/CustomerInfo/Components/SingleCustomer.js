import React, { useRef } from "react";

export default function SingleCustomer() {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  return (
    <div>
      <div className="flex justify-around mt-10 p-4 pr-10">
        <div className="w-3/5 min-h-full  bg-white rounded-md p-4 mt-8">
          <h2 className="font-semibold text-lg">customer details</h2>
          <div className="grid grid-cols-2 my-8 gap-4 ">
            {/* Account Number */}
            <div>
              <label className="text-sm text-gray-600">Account Number</label>
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
            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
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
              <label className="text-sm text-gray-600">Type</label>
              <select
                type="select"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              >
                <option>savings</option>
                <option>salary</option>
                <option>minor</option>
                <option>pansion</option>
                <option>loan</option>
              </select>
            </div>
            {/* {dob} */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="date"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {pan number} */}
            <div>
              <label className="text-sm text-gray-600">Pan number</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                maxLength="10"
              />
            </div>
            {/* {submit} */}
            <div></div>
            <button
              type="submit"
              className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#5252d3]"
            >
              Submit
            </button>
          </div>
        </div>
        <div className=" min-h-full bg-white rounded-md p-4">
          <div className=" ">
            <img
              className="w-48 h-48 mx-auto rounded-full border-4 border-[#6160D0] flex items-center justify-center"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt=""
            />
          </div>
          <div
            className="font-bold text-sm text-white  rounded-2xl bg-[#6160d0] flex items-center justify-center cursor-pointer w-fit px-2 py-1 mx-auto mt-2 mb-4"
            onClick={onButtonClick}
          >
            update Profile pic
            <span className="font-bold text-2xl ml-2 "> +</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* {"aadhar number "} */}
            <div>
              <label className="text-sm text-gray-600">Aadhar Number</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {"address 1"} */}
            <div>
              <label className="text-sm text-gray-600">Address 1</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {"address 2"} */}
            <div>
              <label className="text-sm text-gray-600">Address 2</label>
              <input
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
