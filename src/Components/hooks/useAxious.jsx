import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxious = () => {
  const { logOut } = useContext(AuthContext);
  // Add a request interceptor
  instance.interceptors.request.use(
    function (response) {
      // Do something before request is sent
      return response;
    },
    function (error) {
      // Do something with request error
      if (error.response.status === 401 || error.response.status === 403) {
        logOut();
      }
    }
  );
  return instance;
};

export default UseAxious;
