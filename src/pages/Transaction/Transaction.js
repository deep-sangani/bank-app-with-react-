import React, { useState, useEffect, useRef } from "react";
import TranasctionHistory from "./Components/TransactionHistory";
import ReactToPrint from "react-to-print";
import SingleTransaction from "./Components/SingleTransaction";
import fetchAllTransaction from "../../sdk/fetchallTransaction";

export default function Transaction() {
  const [signaltransaction, setSingleTransaction] = useState("");
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetchAllTransaction();
      console.log(data.data);
      setTransaction(data.data);
    })();
    return () => {};
  }, []);
  const componentRef = useRef();
  return (
    <div className="">
      <div className=" h-full  mt-16 ">
        {!signaltransaction ? (
          <>
            <h3 className="font-bold text-lg">Transaction History</h3>

            <TranasctionHistory
              setSingleTransaction={setSingleTransaction}
              transaction={transaction}
            />
          </>
        ) : (
          <>
            <div className="font-bold text-lg">
              <button
                className="btn px-4 py-1 mr-4 border-2 border-[#6160D0] hover:bg-slate-50 rounded text-sm "
                onClick={() => {
                  setSingleTransaction(false);
                }}
              >
                back
              </button>
              <span>Transaction details</span>
              <ReactToPrint
                trigger={() => (
                  <div className="bg-[#6160D0] text-white font-bold px-2 py-1 float-right mr-16 rounded cursor-pointer">
                    Print
                  </div>
                )}
                content={() => componentRef.current}
                pageStyle="@page { size: landscape; margin-top: 0;
                   margin-bottom: 0;"
              />
            </div>

            <SingleTransaction
              signaltransaction={signaltransaction}
              ref={componentRef}
            />
          </>
        )}
      </div>
    </div>
  );
}
