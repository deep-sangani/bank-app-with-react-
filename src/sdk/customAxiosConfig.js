import axios from "axios";

const customAxios = axios.create({
  "Content-Type": "application/json",
  baseURL: "http://localhost:4000",
});

const requestHandler = (request) => {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.setItem("auth", "false");
  }
  request.headers.Authorization = token;

  return request;
};

const responseHandler = (response) => {
  return response;
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => Promise.reject(error)
);
customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  async (error) => {
    console.log({ error: error.response.data });
    if (error.response.status == 401) {
      const originalRequest = error.config;
      originalRequest._retry = true;
      localStorage.removeItem("token");
      const { data } = await customAxios.get("/getNewToken");
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);

        return customAxios(originalRequest);
      }
    }
  }
);

export default customAxios;
