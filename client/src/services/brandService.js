import {$authHost, $host} from "./axiosService";

export const createBrand = async (type) => {
    const {data} = await $authHost.post('brand', type)
    return data
}
export const fetchBrand = async () => {
    const {data} = await $host.get('brand')
    return data
}