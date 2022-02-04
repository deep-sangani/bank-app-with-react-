import React from "react";
import FindAccount from "./Components/FindAccount";
import LettestTransaction from "./Components/LettestTransaction";

export default function Deposit() {
  return (
    <div className="">
      <h3 className="font-bold text-lg">Deposit</h3>
      <div className=" h-full  mt-16 ">
        <FindAccount />
        <LettestTransaction />
      </div>
    </div>
  );
}
