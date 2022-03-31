import React, { useState, useEffect } from "react";
import Model from "../../GlobalComponents/Model";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import fetchAllCustomer from "../../sdk/fetchAllCustomer";
import transferBalance from "../../sdk/transfer";
import { useToasts } from "react-toast-notifications";
export default function Transfer() {
  const [items, setItems] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [perticulers, setPerticulers] = useState("");
  const [open, setOpen] = useState(false);
  const [ref, setRef] = useState(
    Math.floor(Math.random() * new Date().getTime())
  );
  const { addToast } = useToasts();
  useEffect(() => {
    (async () => {
      const { data } = await fetchAllCustomer();

      setItems(data.data);
    })();
    return () => {};
  }, []);

  useEffect(() => {
    const p = `TRFR ${from.acc_no} to ${to.acc_no} #${ref}`;
    setPerticulers(p);
  }, [from, to, ref]);

  const onSubmit = async () => {
    if (from && to && amount) {
      const { data } = await transferBalance({
        from: from.acc_no,
        to: to.acc_no,
        amount,
        particulars: perticulers,
        ref,
      });
      if (data.status === "success") {
        setOpen(true);
      } else {
        console.log(data);
        addToast(data.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  };
  return (
    <div className="mt-10">
      <Model open={open} setOpen={setOpen} title={"Tranaction Succeed 😃"}>
        <div>
          <p>
            Transfer Proccess is done successfully.
            <br />
            <div>
              <div className="flex  mt-4">
                <label className="w-1/2">From : </label>
                <span className="text-black font-bold">
                  {from.acc_no}
                  {}
                </span>
              </div>
              <div className="flex  mt-4">
                <label className="w-1/2">To :</label>
                <span className="text-black font-bold"> {to.acc_no}</span>
              </div>
              <div className="flex  mt-4">
                <label className="w-1/2">Transfer Amount :</label>
                <span className="text-black font-bold"> ₹ {amount}</span>
              </div>
              <div className="flex  mt-4">
                <label className="w-1/2">Transaction Number</label>
                <span className=" font-bold"> {ref}</span>
              </div>
            </div>
          </p>
        </div>
      </Model>
      <div>
        <h3 className="font-bold text-lg ">Transfer Balance 💰</h3>
        <div className="flex justify-around mt-8 p-4 pr-10 scale-125">
          <div className="w-3/5 min-h-full  bg-white rounded-md p-10 mt-8">
            <h2 className="font-semibold text-lg">Transfer details</h2>
            <div className="grid grid-cols-2 my-4 gap-4 ">
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
              {/* transfer ref no */}
              <div>
                <label className="text-sm text-gray-600">Transfer Ref No</label>
                <input
                  value={ref}
                  type="text"
                  className=" w-full mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black"
                  disabled
                />
              </div>
              {/* party 1 */}
              <div>
                <label className="text-sm text-gray-600 ">
                  Transfer Account From (acc no)
                </label>
                <div className="mt-4">
                  <ReactSearchAutocomplete
                    items={items}
                    onSelect={(item) => {
                      setFrom(item);
                    }}
                  />
                </div>
              </div>

              {/* party 2 */}
              <div>
                <label className="text-sm text-gray-600">
                  Transfer Account To (acc no)
                </label>
                <div className="mt-4">
                  <ReactSearchAutocomplete
                    items={items}
                    onSelect={(item) => setTo(item)}
                  />
                </div>
              </div>
              {/* {Transfer Amount} */}
              <div>
                <label className="text-sm text-gray-600">Transfer Amount</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="text"
                  className="w-full mt-2 p-2 px-4 rounded-2xl font-bold text-xl outline-none border border-black"
                />
              </div>

              {/* {Particuler} */}
              {/* <div className="flex flex-col">
                <label className="text-sm text-gray-600">Particulers</label>
                <div
                  className="w-full  mt-2 p-2 px-4 rounded-2xl text-md outline-none"
                  maxLength="10"
                >
                  {from && to && perticulers}
                </div>
              </div> */}

              {/* {submit} */}
              <div></div>

              <button
                onClick={onSubmit}
                type="submit"
                className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold mt-4 hover:bg-[#5252d3]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
