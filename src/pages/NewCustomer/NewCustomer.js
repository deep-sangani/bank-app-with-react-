import React, { useRef, useState } from "react";
import Model from "../../GlobalComponents/Model";
import createAccount from "../../sdk/createAcc";

export default function NewCustomer() {
  const inputFile = useRef(null);
  const [open, setOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [accounttype, setAccounttype] = useState("savings");
  const [panno, setPanno] = useState("");
  const [aadharno, setAadharno] = useState("");
  const [accountno, setAccountno] = useState("");
  const [img, setImg] = useState("");
  const imgChange = (e) => {
    const imgFile = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      console.log(e.target.result);
      setImg(e.target.result);
    };
    fileReader.readAsDataURL(imgFile);
  };
  const onsubmit = async () => {
    console.log(img);

    const data = {
      firstname,
      lastname,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      accounttype,
      panno,
      aadharno,
      img,
    };
    const result = await createAccount(data);
    console.log(result.data);
    if (result.data.status === "success") {
      setAccountno(result.data.acc_no);
      setOpen(true);
    }
  };
  return (
    <>
      <div>
        <Model
          open={open}
          setOpen={setOpen}
          title={"account is open successfully"}
        >
          <div>
            <p>
              your account is open successfully, you can now deposit, withdraw
              and check your transaction.
              <br />
              your account number is:
              <span className="text-black font-bold"> {accountno}</span>
            </p>
          </div>
        </Model>
        <h3 className="font-bold text-lg">Add New Customer</h3>
        <div className="flex justify-around mt-10 p-4 pr-10">
          <div className="w-3/5 min-h-full  bg-white rounded-md p-4 mt-8">
            <h2 className="font-semibold text-lg">customer details</h2>
            <div className="grid grid-cols-2 my-8 gap-4 ">
              {/* Account Number */}
              <div>
                {/* <label className="text-sm text-gray-600">Account Number</label>
             <input
               type="text"
               value="123456789"
               className="bg-[#F5F5F5] w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none"
               disabled
             /> */}
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
              {/* first Name */}
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  type="text"
                  className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
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
                />
              </div>
              {/* {submit} */}
              <div></div>
              <button
                onClick={onsubmit}
                type="submit"
                className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#5252d3]"
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
                <img
                  src={img}
                  alt=""
                  className="relative object-cover w-2/3 "
                />
              ) : (
                <label
                  htmlFor="inputPic"
                  className="font-bold text-sm text-white py-2 px-4 rounded-2xl bg-[#6160d0] flex items-center justify-center cursor-pointer"
                >
                  Add Profile pic
                  <span className="font-bold text-2xl ml-2 "> +</span>
                </label>
              )}
            </div>
            {img && (
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
              {/* {country} */}
              <div>
                <label className="text-sm text-gray-600">Country</label>
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  type="text"
                  className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                  maxLength="10"
                />
              </div>
              {/* {" street_address"} */}
              <div>
                <label className="text-sm text-gray-600">street_address</label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  className="w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
