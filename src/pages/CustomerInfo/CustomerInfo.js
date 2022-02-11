import React, { useState } from "react";
import Customer from "./Components/Customer";

import SingleCustomer from "./Components/SingleCustomer";

export default function CustomerInfo() {
  const [customertinfo, setcustomerinfo] = useState("");
  return (
    <div className="">
      <div className=" h-full  mt-16 ">
        {!customertinfo ? (
          <>
            <h3 className="font-bold text-lg">Happy Customers 😃 </h3>

            <Customer setcustomerinfo={setcustomerinfo} />
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg">
              <button
                className="btn px-4 py-1 mr-4 border-2 border-[#6160D0] hover:bg-slate-50 rounded text-sm "
                onClick={() => {
                  setcustomerinfo(false);
                }}
              >
                back
              </button>
              <span>Customer Details</span>
            </h3>

            <SingleCustomer customertinfo={customertinfo} />
          </>
        )}
      </div>
    </div>
  );
}
