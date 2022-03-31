import axios from "./customAxiosConfig";

const getDashboardData = async (data) => {
  return await axios.get("/getdashboarddata");
};

export default getDashboardData;
