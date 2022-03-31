import React, { useState, useEffect } from "react";
import fetchAllCustomer from "../../sdk/fetchAllCustomer";
import Customer from "./Components/Customer";

import SingleCustomer from "./Components/SingleCustomer";
import "./switch.css";
export default function CustomerInfo() {
  const [customertinfo, setcustomerinfo] = useState("");
  const [customers, setcustomers] = useState("");
  const [modify, setModify] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await fetchAllCustomer();
      console.log(data.data);
      setcustomers(data.data);
    })();
    return () => {
      setcustomers("");
      setcustomerinfo("");
    };
  }, []);
  return (
    <div className="">
      <div className=" h-full  mt-16 ">
        {!customertinfo ? (
          <>
            <h3 className="font-bold text-lg">Happy Customers 😃 </h3>

            <Customer setcustomerinfo={setcustomerinfo} customers={customers} />
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg">
              <button
                className="btn px-4 py-1 mr-4 border-2 border-[#6160D0] hover:bg-slate-50 rounded text-sm "
                onClick={() => {
                  setcustomerinfo(false);
                  window.location.reload();
                }}
              >
                back
              </button>
              <span className="w-fit">Customer Details</span>
              <label className="switch ml-12">
                <input
                  type="checkbox"
                  value={modify}
                  onChange={(e) => setModify((prev) => !prev)}
                />
                <span className="slider round"></span>
              </label>
            </h3>

            <SingleCustomer
              customertinfo={customertinfo}
              modify={modify}
              setcustomerinfo={setcustomerinfo}
              setModify={setModify}
            />
          </>
        )}
      </div>
    </div>
  );
}
