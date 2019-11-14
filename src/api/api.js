import * as axios from "axios/index";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "b38fc1b4-915f-42d7-b5be-0aa4a2615351"
  }
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(
        response => response.data
      )
  },

  followUser(id) {
    return instance.post(`follow/${id}`)
      .then(response => response.data)
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then(
        response => response.data
      )
  }
};

export const authApi = {

  getAuth() {
    return instance.get(`auth/me`)
      .then(
        response => response.data
      )
  },

  login(email,password,rememberMe) {
    return instance.post(`auth/login`, {email,password,rememberMe})
      .then(
        response => response.data
      )
  }
};


export const profileApi = {

  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(
        response => response.data
      )
  },

  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(
        response => response.data
      )
  },
  updateStatus(status) {
    return instance.put(`profile/status`,{status})
      .then(
        response => response.data
      )
  }
};