import axios from "./customAxiosConfig";
const transferBalance = async (data) => {
  console.log({ data });

  const payload = {
    from: data.from,
    to: data.to,
    amount: data.amount,
    particulars: data.particulars,
    ref: data.ref,
  };

  return await axios.post("/transfer", payload);
};

export default transferBalance;
