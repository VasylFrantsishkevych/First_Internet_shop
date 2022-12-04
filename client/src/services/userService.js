import {$host} from "./axiosService";

export const registration = async (email, password) => {
    return await $host.post('user/login', {email, password, role: 'ADMIN'})
}
export const login = async (email, password) => {
    return await $host.post('user/login', {email, password})
}

export const check = async () => {
    return await $host.post('user/registration')
}