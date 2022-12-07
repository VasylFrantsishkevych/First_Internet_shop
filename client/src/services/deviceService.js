import {$authHost, $host} from "./axiosService";

export const createDevice = async (type) => {
    const {data} = await $authHost.post('device', type)
    return data
}
export const fetchDevice = async (typeId, brandId, page, limit = 5 ) => {
    const {data} = await $host.get('device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('device/' + id)
    return data
}