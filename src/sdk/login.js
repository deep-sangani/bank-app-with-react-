import axios from "./customAxiosConfig";

const login = async (data) => {
  const payload = {
    empid: data.empid,
    pass: data.password,
  };
  return await axios.post("/login", payload);
};

export default login;
