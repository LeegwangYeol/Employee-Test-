import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

const POST_INSERT_EMPLOYEE = "http://localhost:8080/api/epmloyees";

// export const listEmployees = () =>{
//     return axios.get(REST_API_BASE_URL);
// }

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const creatEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);
