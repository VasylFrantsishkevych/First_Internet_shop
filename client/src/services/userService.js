import {$authHost, $host} from "./axiosService";
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('users/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('users/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('users/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}