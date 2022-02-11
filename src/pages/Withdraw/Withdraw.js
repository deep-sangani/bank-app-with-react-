import React, { useState } from "react";

import FindAccount from "./Components/FindAccount";
import LettestTransaction from "./Components/LettestTransaction";
import WithdrawInfo from "./Components/WithdrawInfo";

export default function Withdraw() {
  const [accountinfo, setAccountinfo] = useState(false);
  return (
    <div className="">
      <div className=" h-full  mt-16 ">
        {!accountinfo ? (
          <>
            <h3 className="font-bold text-lg">Withdraw</h3>
            <FindAccount setAccountinfo={setAccountinfo} />
            <LettestTransaction />
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
              <span>Withdraw</span>
            </h3>
            <WithdrawInfo />
          </>
        )}
      </div>
    </div>
  );
}
