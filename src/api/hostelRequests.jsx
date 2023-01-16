import axios from ".";

export const createHostelRequest = (value) => axios.post(`accommodations/create`, value).then((res) => res.data);

export const getHostelRequest = (value) => axios.get(`accommodations`).then((res) => res.data);

export const editHostelRequest = (value) => axios.put(`accommodations/update/${value.id}`, value).then((res) => res.data);

export const deleteHostelRequest = (value) => axios.delete(`accommodations/delete/${value}`).then((res) => res.data);

export const getHostelIdRequest = (id) => axios.get(`accommodations/${id}`).then((res) => res.data);

