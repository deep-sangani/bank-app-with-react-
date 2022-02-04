import React from "react";
import AccountsChart from "./Components/AccountsChart";
import OverviewChart from "./Components/OverviewChart";
import Chartone from "../../assets/images/Chartone.svg";
import Charttwo from "../../assets/images/Charttwo.svg";
import Income from "../../assets/icons/Income.svg";
export default function Dashboard() {
  return (
    <div>
      <h3 className="font-bold text-lg">Dashboard</h3>
      <div className="h-[18rem] flex justify-center items-center">
        <div className="bg-white h-48 scale-125 w-72 rounded-xl mr-12 relative">
          {/* first card */}
          <div className=" flex items-center mt-4 ml-4">
            <img
              src={Income}
              alt=""
              className="w-16 rounded-full p-3 bg-[#6160D0]"
            />
            <div className="ml-4">
              <h6 className="text-sm text-[#8E8EA1]">Total deposit</h6>
              <h1 className="text-2xl font-bold">₹ 20,000</h1>
            </div>
            <div className="ml-4">
              <p className="text-md text-green-500 font-bold">+ 0.5%</p>
              <h5 className="text-[10px] text-[#8E8EA1] font-semibold">
                last month
              </h5>
            </div>
          </div>
          <img src={Chartone} alt="" className="absolute bottom-3" />
        </div>
        <div className="bg-white h-48 w-72 rounded-xl relative scale-125 ml-16">
          <div className=" flex items-center mt-4 ml-4">
            <img
              src={Income}
              alt=""
              className="w-16 rounded-full p-3 bg-[#54C5EB]"
            />
            <div className="ml-4">
              <h6 className="text-sm text-[#8E8EA1]">Total withdraw</h6>
              <h1 className="text-2xl font-bold">₹ 34,000</h1>
            </div>
            <div className="ml-4">
              <p className="text-md text-red-500 font-bold">- 0.5%</p>
              <h5 className="text-[10px] text-[#8E8EA1] font-semibold">
                last month
              </h5>
            </div>
          </div>
          <img src={Charttwo} alt="" className="absolute bottom-3" />
        </div>
      </div>

      <div className="h-[22rem] flex justify-around items-center mt-12">
        <div className="bg-white h-full w-5/12 rounded-md p-1 relative ">
          <h1 className="font-bold pt-4 pl-4 text-lg">Overview</h1>
          <OverviewChart />
        </div>
        <div className="bg-white h-full w-5/12 rounded-md p-1 ">
          <h1 className="font-bold pt-4 pl-4 text-lg">Accounts</h1>
          <AccountsChart />
        </div>
      </div>
    </div>
  );
}
