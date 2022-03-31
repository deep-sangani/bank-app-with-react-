import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePurple from "../../../assets/icons/HomePurple.svg";
import HomeGray from "../../../assets/icons/HomeGray.svg";
import BankGray from "../../../assets/icons/BankGray.svg";
import BankPurple from "../../../assets/icons/BankPurple.svg";
import CardGray from "../../../assets/icons/CardGray.svg";
import CardPurple from "../../../assets/icons/CardPurple.svg";
import WithdrawGray from "../../../assets/icons/WithdrawGray.svg";
import WithdrawPurple from "../../../assets/icons/WithdrawPurple.svg";
import TransactionGray from "../../../assets/icons/TransactionGray.svg";
import TransactionPurple from "../../../assets/icons/TransactionPurple.svg";
import CustomerInfoGray from "../../../assets/icons/CustomerInfoGray.svg";
import CustomerInfoPurple from "../../../assets/icons/CustomerInfoPurple.svg";
import TransferPurple from "../../../assets/icons/transferPurple.svg";
import TransferGray from "../../../assets/icons/transferGray.svg";
function Menu() {
  const [menucount, setMenuCount] = useState(1);
  return (
    <div className="mt-10 relative h-[40rem] ">
      {/* dashboard */}
      <Link to="/">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(1)}
        >
          <img
            src={menucount === 1 ? HomePurple : HomeGray}
            alt=""
            className="w-10"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 1 ? "text-black" : "text-[#8E8EA1]"
            }`}
          >
            Dashboard
          </span>
        </div>
      </Link>
      {/* new customer */}
      <Link to="/main/newcustomer">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(2)}
        >
          <img
            src={menucount === 2 ? BankPurple : BankGray}
            alt=""
            className="w-10"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 2 ? "text-black" : "text-[#8E8EA1]"
            } `}
          >
            New Customer
          </span>
        </div>
      </Link>
      {/* deposit */}
      <Link to="/main/deposit">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(3)}
        >
          <img
            src={menucount === 3 ? CardPurple : CardGray}
            alt=""
            className="w-10"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 3 ? "text-black" : "text-[#8E8EA1]"
            }  `}
          >
            Deposit
          </span>
        </div>
      </Link>
      {/* withdraw */}
      <Link to="/main/withdraw">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(4)}
        >
          <img
            src={menucount === 4 ? WithdrawPurple : WithdrawGray}
            alt=""
            className="w-10"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 4 ? "text-black" : "text-[#8E8EA1]"
            }  `}
          >
            Withdraw
          </span>
        </div>
      </Link>
      {/* transaction */}
      <Link to="/main/transaction">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(5)}
        >
          <img
            src={menucount === 5 ? TransactionPurple : TransactionGray}
            alt=""
            className="w-8"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 5 ? "text-black" : " text-[#8E8EA1]"
            } `}
          >
            Transaction
          </span>
        </div>
      </Link>
      {/* customer information */}
      <Link to="/main/customerinfo">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(6)}
        >
          <img
            src={menucount === 6 ? CustomerInfoPurple : CustomerInfoGray}
            alt=""
            className="w-8"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 6 ? "text-black" : "text-[#8E8EA1]"
            } `}
          >
            Customer Info
          </span>
        </div>
      </Link>
      {/* transfer */}
      <Link to="/main/transfer">
        <div
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] pl-16 py-4 "
          onClick={() => setMenuCount(7)}
        >
          <img
            src={menucount === 7 ? TransferPurple : TransferGray}
            alt=""
            className="w-8"
          />
          <span
            className={`ml-4 font-bold ${
              menucount === 7 ? "text-black" : "text-[#8E8EA1]"
            } `}
          >
            Transfer Balance
          </span>
        </div>
      </Link>
      <div className="absolute bottom-0 left-[30%]  mx-auto text-center text-sm font-bold p-2 bg-black rounded-3xl px-4 text-white flex justify-center items-center hover:opacity-70">
        made in <span className="text-3xl ml-2">🇮🇳</span>
      </div>
    </div>
  );
}

export default Menu;
