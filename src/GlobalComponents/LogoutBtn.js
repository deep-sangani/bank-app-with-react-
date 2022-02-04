import React from "react";
import logout from "../assets/icons/Logout.svg";
export default function LogoutBtn() {
  const logoutHandler = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };
  return (
    <div
      onClick={() => logoutHandler()}
      className="absolute top-6 right-6 flex border-2 hover:border-[#6160D0] p-1 rounded cursor-pointer"
    >
      <span className="font-semibold">logout</span>
      <img src={logout} alt="" className="w-6 ml-2" />
    </div>
  );
}
