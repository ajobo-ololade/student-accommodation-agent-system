import axios from ".";

export const getUsersRequest = (value) => axios.post(`getUser`, value).then((res) => res.data);

export const usersUpdateRequest = (value) => axios.put(`updateUser/${value.id}`, value).then((res) => res.data);