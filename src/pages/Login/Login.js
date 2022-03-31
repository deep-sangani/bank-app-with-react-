import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastProvider, useToasts } from "react-toast-notifications";
import Vector from "../../assets/images/Vector.svg";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/icons/user.svg";
import lock from "../../assets/icons/lock.svg";
import elipse1 from "../../assets/images/elipse1.svg";
import elipse2 from "../../assets/images/elipse2.svg";
import login from "../../sdk/login";
export default function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const submitHandler = async () => {
    try {
      if (username && password) {
        const { data } = await login({ empid: username, password: password });
        console.log(data);
        if (data.status === "success") {
          await localStorage.setItem("token", data.token);
          await setAuth(true);
          await navigate("/main");
        } else {
          addToast(<h1 className="text-lg">wrong credentials</h1>, {
            appearance: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen relative flex justify-center">
      <img src={Vector} alt="" className="-top-14 right-0 absolute -z-10" />
      <div className=" flex items-center justify-center flex-col ">
        <img src={logo} className="logo" alt="" />
        <div className="flex border px-2 py-1 rounded border-black mt-14 ">
          <img src={user} alt="" className="mr-4 w-6" />
          <input
            type="text"
            className="text-lg outline-none m-1"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex border px-2 py-1 rounded border-black mt-4 ">
          <img src={lock} alt="" className="mr-4 w-6" />
          <input
            type="password"
            className="text-lg outline-none m-1"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div
          onClick={() => submitHandler()}
          className="btn text-mg font-semibold text-center w-full bg-[#6160DC] rounded px-1 py-2 mt-10 text-white hover:bg-[#5252d3] cursor-pointer"
        >
          LOGIN
        </div>
      </div>
      <div>
        <img src={elipse2} alt="" className="left-0 bottom-0 absolute -z-10" />
        <img src={elipse1} alt="" className="left-0 bottom-0 absolute -z-10" />
      </div>
    </div>
  );
}
