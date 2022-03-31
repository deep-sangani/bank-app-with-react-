import { data } from "autoprefixer";
import React, { useState } from "react";
import Model from "../../../GlobalComponents/Model";
import dipositBalance from "../../../sdk/depositBalance";

function DepositInfo({ accountinfo, setAccountinfo }) {
  const [perticulers, setPerticulers] = useState();
  const [depositamount, setDepositamount] = useState();
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState();
  const [transactionid] = useState(
    Math.floor(Math.random() * new Date().getTime())
  );
  const onSubmit = async () => {
    console.log("submited");
    if (perticulers && depositamount) {
      const { data } = await dipositBalance({
        depositamount,
        perticulers,
        accountno: accountinfo.acc_no,
        transactionid,
      });
      console.log(data);

      if (data.status === "success") {
        setBalance(data.balance);
        setOpen(true);
      }
    }
  };

  return (
    <div>
      <Model
        open={open}
        setOpen={setOpen}
        title={"balance deposited 😃"}
        callback={() => setAccountinfo(false)}
      >
        <div>
          <p>
            Your amount is deposited successfully in your account.
            <br />
            <div>
              <div className="flex  mt-4">
                <label className="w-1/2">Account Number</label>
                <span className="text-black font-bold">
                  {" "}
                  {accountinfo.acc_no}
                </span>
              </div>
              <div className="flex  mt-4">
                <label className="w-1/2">Deposit Amount</label>
                <span className="text-black font-bold"> ₹ {depositamount}</span>
              </div>
              <div className="flex  mt-4">
                <label className="w-1/2">Total Balnce</label>
                <span className="text-black font-bold"> ₹ {balance}</span>
              </div>
              <div className="flex  mt-4">
                <label className="w-1/2">Transaction Number</label>
                <span className=" font-bold"> {transactionid}</span>
              </div>
            </div>
          </p>
        </div>
      </Model>
      <div className="flex justify-around mt-4 p-4 pr-10">
        <div className="w-3/5 min-h-full  bg-white rounded-md p-4 mt-8">
          <h2 className="font-semibold text-lg">Transaction</h2>
          <div className="grid grid-cols-2 my-8 gap-4 ">
            {/* transaction Number */}
            <div>
              <label className="text-sm text-gray-600">
                Transaction Number
              </label>
              <input
                type="text"
                value={transactionid}
                className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                disabled
              />
            </div>
            {/* Current Date */}
            <div>
              <label className="text-sm text-gray-600">Date</label>
              <input
                type="text"
                value={new Date().toLocaleDateString()}
                className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                disabled
              />
            </div>
            {/* account number */}
            <div>
              <label className="text-sm text-gray-600">Account Number</label>
              <input
                value={accountinfo.acc_no}
                type="text"
                className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* depositer name */}
            <div>
              <label className="text-sm text-gray-600">
                Account Holder's Name
              </label>
              <input
                value={accountinfo.first_name + " " + accountinfo.last_name}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* {mobile number} */}
            <div>
              <label className="text-sm text-gray-600">Mobile Number</label>
              <input
                value={accountinfo.mobile_no}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* {account type} */}
            <div>
              <label className="text-sm text-gray-600">Account type</label>
              <input
                value={accountinfo.account_type}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
            {/* {dob} */}
            <div className="col-span-2">
              <label className="text-sm text-gray-600">Perticulers</label>
              <input
                value={perticulers}
                onChange={(e) => setPerticulers(e.target.value)}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
              />
            </div>
          </div>
        </div>
        <div className=" min-h-full bg-white rounded-md p-4 w-72 pt-28">
          <div className="grid grid-cols-1 gap-4">
            {/* {"deposit amount "} */}
            <div>
              <label className="text-sm text-gray-600">Deposit amount</label>
              <input
                value={depositamount}
                onChange={(e) => setDepositamount(e.target.value)}
                type="text"
                className="w-full mt-2 py-4 px-6 rounded-2xl text-3xl outline-none border-4 border-[#6160D0] font-bold"
              />
            </div>

            {/* {"pan no"} */}
            <div>
              <label className="text-sm text-gray-600">pan number</label>
              <input
                value={accountinfo.pan_card}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* {submit} */}

            <button
              onClick={() => onSubmit()}
              className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#5252d3]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositInfo;
