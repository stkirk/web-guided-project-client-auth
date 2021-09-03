import axios from "axios";

// STEP 5: look up server side requirements to access this protected endpoint
// create a axiosWithAuth request that fulfills those requirements
// authenticator (in server.js) takes a request object with a headers property, the headers property value is an object with a key called authorization that contains our token value
//template out with a baseURL because all calls to this enpoint and using this token with start with the baseURL then add a '/specificData' onto the end

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { Authorization: token },
  });
};
