import React from "react";
import findAccount from "../../../sdk/findAccount";
export default function FindAccount({ setAccountinfo }) {
  const [accountno, setAccountno] = React.useState("");
  const onSubmit = async () => {
    if (accountno) {
      console.log({ accountno });
      const { data } = await findAccount({ accountno });
      console.log(data);
      setAccountinfo(data.data);
    }
  };
  return (
    <div className="border border-black w-4/5 h-32 p-4 rounded-xl bg-white mx-auto ">
      <label>Account Number</label>
      <div className="flex justify-around items-center">
        <input
          value={accountno}
          onChange={(e) => setAccountno(e.target.value)}
          type="text"
          className=" mt-2 p-2 px-4 rounded-2xl text-md outline-none border border-black w-72"
        />
        <button
          type="submit"
          className="bg-[#6160D0] text-white px-4 py-2 rounded-2xl font-bold  w-48 hover:bg-[#5252d3]"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
