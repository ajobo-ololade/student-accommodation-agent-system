import axios from ".";

export const createMessageRequest = (value) => axios.post(`messaging/create`, value).then((res) => res.data);

export const getMessageRequest = (value) => axios.get(`messaging`).then((res) => res.data);

export const getAgentRequest = (value) => axios.get(`getAgent`).then((res) => res.data);

export const deleteMessageRequest = (value) => axios.delete(`messaging/delete/{message}/${value}`).then((res) => res.data);