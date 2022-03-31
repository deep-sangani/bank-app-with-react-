import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LogoutBtn from "../../GlobalComponents/LogoutBtn";
import Logo from "../../assets/images/logo.svg";
import Menu from "./Components/Menu";

export const DashboardContainer = () => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-1/5 h-screen">
        <div className="flex justify-center items-center mt-4">
          <img src={Logo} alt="" className="w-44" />
        </div>
        <Menu />
      </div>
      <div className="w-4/5 h-screen pt-6 pl-6 bg-[#F5F5F5] relative">
        <LogoutBtn />
        <Outlet />
      </div>
    </div>
  );
};
