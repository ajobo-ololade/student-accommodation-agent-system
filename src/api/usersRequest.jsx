import axios from ".";

export const usersRequest = (value) => axios.post(`getUser`, value).then((res) => res.data);