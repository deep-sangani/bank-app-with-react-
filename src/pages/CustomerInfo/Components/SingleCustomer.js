import React, { useRef, useState, useEffect } from "react";
import updateAccount from "../../../sdk/updateAccount";
import { ToastProvider, useToasts } from "react-toast-notifications";
export default function SingleCustomer({
  customertinfo,
  modify,
  setcustomerinfo,
  setModify,
}) {
  useEffect(() => {
    return () => {
      setcustomerinfo(false);
      setModify(false);
    };
  }, []);
  const {
    acc_no,
    created_at,
    name,
    street_address,
    mobile_no,
    account_type,
    pan_card,
    first_name,
    last_name,
    postal_code,
    aadhar_card,
    balance,
  } = customertinfo;
  const { addToast } = useToasts();
  const inputFile = useRef(null);
  const [open, setOpen] = useState(false);
  const [firstname, setFirstname] = useState(first_name);
  const [lastname, setLastname] = useState(last_name);
  const [email, setEmail] = useState(customertinfo.email);
  const [phone, setPhone] = useState(mobile_no);
  const [address, setAddress] = useState(street_address);
  const [city, setCity] = useState(customertinfo.city);
  const [state, setState] = useState(customertinfo.state);
  const [zip, setZip] = useState(postal_code);

  const [accounttype, setAccounttype] = useState(account_type);
  const [panno, setPanno] = useState(pan_card);
  const [aadharno, setAadharno] = useState(aadhar_card);
  const [accountno, setAccountno] = useState(acc_no);
  const [img, setImg] = useState(
    `http://localhost:4000/app/services/getAccImg.php?acc_no=${acc_no}`
  );
  const isImg = img && img.includes("http");
  const imgChange = (e) => {
    const imgFile = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      console.log(e.target.result);
      setImg(e.target.result);
    };
    fileReader.readAsDataURL(imgFile);
  };

  const handleSubmit = async () => {
    const submitdata = {
      phone,
      address,
      city,
      state,
      zip,
      acc_no,
    };
    if (img && isImg == false) {
      submitdata.img = img;
    }
    const { data } = await updateAccount(submitdata);
    if (data.status === "success") {
      addToast(data.message, {
        appearance: "success",
        autoDismiss: true,
      });
      modify(false);
    }
  };

  return (
    <div>
      <div className="flex justify-around mt-0 p-4 pr-10">
        <div className="w-3/5 min-h-full  bg-white rounded-md p-4 mt-8">
          <h2 className="font-semibold text-lg">customer details</h2>
          <div className="grid grid-cols-2 my-8 gap-4 ">
            {/* Account Number */}
            <div>
              <label className="text-sm text-gray-600">Account Number</label>
              <input
                type="text"
                value={accountno}
                className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                disabled
              />
            </div>
            {/* Current Date */}
            <div>
              <label className="text-sm text-gray-600">
                Account Opening Date
              </label>
              <input
                type="text"
                value={created_at}
                className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                disabled
              />
            </div>
            {/* first Name */}
            <div>
              <label className="text-sm text-gray-600">First Name</label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                type="text"
                className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* last Name */}
            <div>
              <label className="text-sm text-gray-600">Last Name</label>
              <input
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                type="text"
                className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              />
            </div>
            {/* {mobile number} */}
            <div>
              <label className="text-sm text-gray-600">Mobile Number</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled={!modify}
              />
            </div>
            {/* {account type} */}
            <div>
              <label className="text-sm text-gray-600">Type</label>
              <select
                onChange={(e) => setAccounttype(e.target.value)}
                value={accounttype}
                type="select"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled
              >
                <option>savings</option>
                <option>salary</option>
                <option>minor</option>
                <option>pansion</option>
                <option>loan</option>
              </select>
            </div>

            {/* {pan number} */}
            <div>
              <label className="text-sm text-gray-600">Pan number</label>
              <input
                onChange={(e) => setPanno(e.target.value)}
                value={panno}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                maxLength="10"
                disabled
              />
            </div>
            {/* {"aadhar number "} */}
            <div>
              <label className="text-sm text-gray-600">Aadhar Number</label>
              <input
                onChange={(e) => setAadharno(e.target.value)}
                value={aadharno}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                maxLength="12"
                disabled
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Account Balance</label>
              <input
                value={"₹ " + balance}
                type="text"
                className="w-fit block mt-2 p-2 px-4 rounded-2xl text-md outline-none border-2 border-[#6160D0] font-bold text-2xl"
                disabled
              />
            </div>
            {/* {submit} */}
            <button
              onClick={onsubmit}
              type="delete"
              className="bg-[#e73322] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#e73222bd]"
              hidden={!modify}
            >
              Delete Account
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#5252d3]"
              hidden={!modify}
            >
              Submit
            </button>
          </div>
        </div>
        <div className=" min-h-full bg-white rounded-md p-4">
          <div className="w-48 h-48 mx-auto rounded-full border-4 border-[#6160D0] flex items-center justify-center ">
            {/* {file submit button} */}
            <input
              type="file"
              id="inputPic"
              hidden
              onChange={(e) => imgChange(e)}
            />
            {img ? (
              <img src={img} alt="" className="relative object-cover w-2/3 " />
            ) : (
              <label
                htmlFor="inputPic"
                className="font-bold text-sm text-white py-2 px-4 rounded-2xl bg-[#6160d0] flex items-center justify-center cursor-pointer"
                disabled={!modify}
              >
                Add Profile pic
                <span className="font-bold text-2xl ml-2 "> +</span>
              </label>
            )}
          </div>
          {img && modify && (
            <div className="flex justify-around">
              <label
                htmlFor="inputPic"
                className="font-bold text-sm text-white py-2 px-4 rounded-2xl bg-[#6160d0] flex items-center justify-center cursor-pointer my-4"
              >
                update Profile pic
                <span className="font-bold text-2xl ml-2 "> +</span>
              </label>
              <div
                onClick={() => setImg(null)}
                className="font-bold text-sm text-white py-2 px-4 rounded-2xl bg-[#e4582e] flex items-center justify-center cursor-pointer my-4"
              >
                clear Image
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4">
            {/* {" street_address"} */}
            <div>
              <label className="text-sm text-gray-600">street_address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled={!modify}
              />
            </div>
            {/* {"city"} */}
            <div>
              <label className="text-sm text-gray-600">City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled={!modify}
              />
            </div>
            {/* {"state"} */}
            <div>
              <label className="text-sm text-gray-600">state</label>
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled={!modify}
              />
            </div>
            {/* {"postal code"} */}
            <div>
              <label className="text-sm text-gray-600">postal code</label>
              <input
                onChange={(e) => setZip(e.target.value)}
                value={zip}
                type="text"
                className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                disabled={!modify}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
