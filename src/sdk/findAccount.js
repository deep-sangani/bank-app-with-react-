import axios from "./customAxiosConfig";

const findAccount = async (data) => {
  const payload = {
    acc_no: data.accountno,
  };

  try {
    return await axios.post("/checkacc", payload);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.error);
    }
  }
};

export default findAccount;
