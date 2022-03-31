import axios from "./customAxiosConfig";
const withdrawBalance = async (data) => {
  const payload = {
    acc_no: data.acc_no,
    withdraw_amt: data.withdrawamount,
    particulars: data.perticulers,
    transactionid: data.transactionid,
  };

  try {
    return await axios.post("/withdraw", payload);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default withdrawBalance;
