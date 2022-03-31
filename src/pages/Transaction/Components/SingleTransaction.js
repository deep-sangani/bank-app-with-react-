import React from "react";
import Sign from "../../../assets/images/sign.png";
const SingleTransaction = React.forwardRef(({ signaltransaction }, ref) => {
  const {
    trasnsactionId,
    accountNumber,
    name,
    email,
    mobileNo,
    type,
    particulars,
    date,
    amount,
    balance,
  } = signaltransaction;
  return (
    <div className="bg-white m-4 px-16 py-4 rounded-2xl" ref={ref}>
      <h4 className="text-sm">Transaction id</h4>
      <h1 className="text-xl font-bold pt-2">{trasnsactionId}</h1>
      {/* upper */}
      <div className="grid grid-cols-3 border-b-2 border-indigo-600">
        {/* first col */}
        <dl className="col-span-1">
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500"> customer</dt>
            <dd class="">
              <div class="flex items-center ">
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    class="h-10 w-10 rounded-full"
                    src={`http://localhost:4000/app/services/getAccImg.php?acc_no=${accountNumber}`}
                    alt=""
                  />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-semibold text-gray-900">{name}</div>
                  <div class="text-sm text-gray-500">{accountNumber}</div>
                </div>
              </div>
            </dd>
          </div>
        </dl>
        {/* second col */}
        <dl>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">contect</dt>
            <dd>
              <p className="text-sm font-semibold">{email}</p>
              <p className="text-sm font-semibold">+91 {mobileNo}</p>
            </dd>
          </div>
        </dl>
        {/* third col */}
        {/* <dl>
            <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Recipient</dt>
              <dd class="mt-1 text-[12px] text-gray-900 sm:mt-0 sm:col-span-1">
                <p class="font-bold">mr aayush monani</p>
                <p>aayush@gmail.com</p>
                <p>+91 87654 45678</p>
              </dd>
            </div>
          </dl> */}
        {/* fourth col */}
        <dl>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 font-semibold">
              {type}
            </dd>
          </div>
        </dl>
      </div>
      {/* lower */}
      <div className="mt-12 grid grid-cols-3 border-b-2 border-b-gray-300 pb-16 ">
        <div className="col-span-1">
          <p className="text-[12px] font-semibold text-gray-400 mb-2">
            payment type
          </p>
          <p className="uppercase mb-2 font-semibold">{particulars}</p>
          <p className="text-[12px] font-semibold text-gray-400 mb-2">
            transaction date
          </p>
          <p className="text-indigo-500 font-semibold text-sm">{date}</p>
        </div>
        <div className="col-span-1 text-[12px] font-semibold text-gray-400">
          <p className="mb-4">{type.toUpperCase()} AMOUNT</p>
          <p className="mb-4">TOTAL BALANCE </p>
        </div>
        <div className="col-span-1 text-right pr-12 text-gray-700">
          <p className="mb-2 font-bold text-xl">₹ {amount}</p>
          <p>₹ {balance}</p>
        </div>
        <div className="absolute w-full mt-12 right-16 bottom-60">
          <img
            src={Sign}
            alt=""
            width="150px"
            className="ml-24 absolute -bottom-4 right-4"
          />
          <span className="font-bold text-[#6160dc] text-[15px] absolute bottom-3 right-3 ">
            MANAGER
            <h1>DAT GROUP OF BANK</h1>
          </span>
        </div>
      </div>
      {/* note */}
      <div className="bg-gray-100 my-10 p-4 rounded-lg">
        <h1 className="text-gray-600 pb-2">Note :</h1>
        <p> This slip is made by Authorize Person of DAT GROUP OF BANK</p>
      </div>
    </div>
  );
});

export default SingleTransaction;
