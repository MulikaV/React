import * as axios from "axios/index";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "b38fc1b4-915f-42d7-b5be-0aa4a2615351"
  }
});

export const getUsers = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(
      response => response.data
    )
};

export const followUser = (id) => {
  return instance.post(`follow/${id}`)
    .then(response => response.data)
};

export const unfollowUser = (id) => {
  return instance.delete(`follow/${id}`)
    .then(
      response => response.data
    )
};