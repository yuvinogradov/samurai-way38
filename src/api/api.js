import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a32afe5f-aee5-4c31-be29-45621ef91c59"
    }
})


export const usersAPI =
    {
        getUsers(currentPage = 1, pageSize = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
        }
    }
export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}