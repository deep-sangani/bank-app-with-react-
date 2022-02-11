import React from "react";
export default function FindAccount({ setAccountinfo }) {
  return (
    <div className="border border-black w-4/5 h-32 p-4 rounded-xl bg-white mx-auto ">
      <label>Account Number</label>
      <div className="flex justify-around items-center">
        <input
          type="text"
          className=" mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black w-72"
        />
        <button
          type="submit"
          className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold  w-48 hover:bg-[#5252d3]"
          onClick={() => setAccountinfo((prevstate) => !prevstate)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
