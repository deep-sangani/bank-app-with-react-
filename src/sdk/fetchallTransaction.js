import axios from "./customAxiosConfig";

const fetchAllTransaction = async (data) => {
  const payload = {
    type: data ? data.type : "",
  };
  try {
    return await axios.post("/getAllTransactions", payload);
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};

export default fetchAllTransaction;
