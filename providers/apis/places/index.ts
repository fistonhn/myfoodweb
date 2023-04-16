import { axios } from '../axios'
import { Places } from '@prisma/client'

export interface ICreatePlaces {
    places: {
        name: string
        value: string
    }[]
}

export const createPlacesApi = async (data: ICreatePlaces) => {
    return await axios.post("/places/create", data)
}


export const getAllPlacesApi=async()=>{
    return await axios.get("/places/getall")
}