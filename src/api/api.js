import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67dc5267-18e8-431f-98ab-95f18c09c340"
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

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(
                response => response.data
            )
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(
                response => response.data
            )
    },

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
        return instance.put(`profile/status`, {status})
            .then(
                response => response.data
            )
    },
    updateAvatarImage(photo) {

        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then(
                response => response.data
            )
    }
};