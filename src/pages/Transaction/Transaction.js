import React, { useState } from "react";
import TranasctionHistory from "./Components/TransactionHistory";

import SingleTransaction from "./Components/SingleTransaction";

export default function Transaction() {
  const [accountinfo, setAccountinfo] = useState("");
  return (
    <div className="">
      <div className=" h-full  mt-16 ">
        {!accountinfo ? (
          <>
            <h3 className="font-bold text-lg">Transaction History</h3>

            <TranasctionHistory setAccountinfo={setAccountinfo} />
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg">
              <button
                className="btn px-4 py-1 mr-4 border-2 border-[#6160D0] hover:bg-slate-50 rounded text-sm "
                onClick={() => {
                  setAccountinfo(false);
                }}
              >
                back
              </button>
              <span>Transaction details</span>
            </h3>

            <SingleTransaction accountinfo={accountinfo} />
          </>
        )}
      </div>
    </div>
  );
}
