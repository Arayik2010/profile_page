import axios from "axios";

export const postsApi = (page,size) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users?page = ${page}&count = ${size}`);
};
