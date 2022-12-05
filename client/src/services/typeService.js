import {$authHost, $host} from "./axiosService";

export const createType = async (type) => {
    const {data} = await $authHost.post('type', type)
    return data
}
export const fetchType = async () => {
    const {data} = await $host.get('type')
    return data
}
