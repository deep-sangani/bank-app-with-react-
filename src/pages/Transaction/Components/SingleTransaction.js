import React from "react";

function SingleTransaction({ accountinfo }) {
  return (
    <div className="bg-white m-4 px-16 py-4 rounded-2xl">
      <h4 className="text-sm">Transaction id</h4>
      <h1 className="text-xl font-bold pt-2">INV-001-123456</h1>
      {/* upper */}
      <div className="grid grid-cols-4 border-b-2 border-indigo-600">
        {/* first col */}
        <dl className="col-span-1">
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500"> customer</dt>
            <dd class="">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt=""
                  />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-semibold text-gray-900">
                    Jane Cooper
                  </div>
                  <div class="text-sm text-gray-500">5326365237535325</div>
                </div>
              </div>
            </dd>
          </div>
        </dl>
        {/* second col */}
        <dl>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">content</dt>
            <dd>
              <p className="text-sm font-semibold">drsangani@gmail.com</p>
              <p className="text-sm font-semibold">+91 97232 43444</p>
            </dd>
          </div>
        </dl>
        {/* third col */}
        <dl>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Recipient</dt>
            <dd class="mt-1 text-[12px] text-gray-900 sm:mt-0 sm:col-span-1">
              <p class="font-bold">mr aayush monani</p>
              <p>aayush@gmail.com</p>
              <p>+91 87654 45678</p>
            </dd>
          </div>
        </dl>
        {/* fourth col */}
        <dl>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 font-semibold">
              withdraw
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
          <p className="uppercase mb-2 font-semibold">cash</p>
          <p className="text-[12px] font-semibold text-gray-400 mb-2">
            transaction date
          </p>
          <p className="text-indigo-500 font-semibold text-sm">
            13 january 2015
          </p>
        </div>
        <div className="col-span-1 text-[12px] font-semibold text-gray-400">
          <p className="mb-4">BEFORE BALANCE AMOUNT </p>
          <p className="mb-4">WITHDRAW AMOUNT</p>
          <p className="mb-4">TOTAL BALANCE </p>
        </div>
        <div className="col-span-1 text-right pr-12 text-gray-700">
          <p className="mb-2 ">₹ 3,00,000</p>
          <p className="mb-2 font-bold text-xl">₹ 20,000</p>
          <p>₹ 2,80,000</p>
        </div>
      </div>
      {/* note */}
      <div className="bg-gray-100 my-10 p-4 rounded-lg">
        <h1 className="text-gray-600 pb-2">Note :</h1>
        <p className="font-bold text-[12px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          commodi, expedita ipsum corrupti aliquam dolore temporibus ullam porro
          omnis laborum laboriosam neque! Qui suscipit atque nobis repellat enim
          harum libero!
        </p>
      </div>
    </div>
  );
}

export default SingleTransaction;
