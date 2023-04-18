import { axios } from './../axios'
import { Menue } from '@prisma/client'
import { IItem } from '@/types/order'

export interface ICreateMenueApi {
    formdata: Omit<Menue, "createdAt" | "updatedAt">,
    selectedItems: IItem[]
}

export const createMenueApi = async ({ formdata, selectedItems }: ICreateMenueApi) => {    
    return axios.post('/menue/create', { formdata, selectedItems })
}

export interface IGetMenueApi {
    search?: string
    startDate?: string
    endDate?: string,
    departureDate?: string
    contractorName?: string

}
export const getMenuesApi = async ({ search = "", endDate = "", startDate = "", departureDate = "", contractorName = "" }: IGetMenueApi) => {
    return axios.post(`/menue/getdata`, {
        search,
        endDate,
        startDate,
        departureDate,
        contractorName
    })
}

export const getSingleMenue = async (id: string) => {
    return axios.post("/menue/getsinglemenue", { id })
}

export interface ISeniorClerkSearchMenu {
    search: string
}

export const seniorClerkSearchMenueApi = async (data: ISeniorClerkSearchMenu) => {
    return await axios.post("/menue/seniorclerksearch", data)
}