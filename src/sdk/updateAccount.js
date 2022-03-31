import axios from "./customAxiosConfig";
const updateAccount = async (data) => {
  console.log({ data });

  const payload = {
    street_address: data.address,
    city: data.city,
    state: data.state,
    mobile_no: data.phone,
    postal_code: data.zip,
    img: data.img,
    acc_no: data.acc_no,
  };

  return await axios.post("/updateacc", payload);
};

export default updateAccount;
