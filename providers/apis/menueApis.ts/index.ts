import { axios } from './../axios'
import { Menue } from '@prisma/client'
import { IItem } from '@/types/order'

export interface ICreateMenueApi {
    formdata: Omit<Menue, "createdAt" | "updatedAt">,
    selectedItems: IItem[]
}

export interface ICreateItemApi {
    itemName?: String,
}

export const createMenueApi = async ({ formdata, selectedItems }: ICreateMenueApi) => {  
    return axios.post('/menue/create', { formdata, selectedItems })
}

export const createItemApi = async ({ itemName }: ICreateItemApi) => {    
    return axios.post('/item/create', { itemName })
}


export interface IGetItemApi {}
export interface IGetMenueApi {
    search?: string
    startDate?: string
    endDate?: string,
    departureDate?: string
    contractorName?: string

}
export interface IDeleteMenueApi {
    selId: any
}

export const getItemsApi = async (data: IGetItemApi) => {    
    return axios.get('/item/getdata', data)
}

export const deleteBookingApi = async ({selId}: IDeleteMenueApi) => { 
    return axios.post('/menue/deletebooking', {selId})
}


export const getAllMenuesApi = async () => {
    return axios.post(`/menue/getalldata`)
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