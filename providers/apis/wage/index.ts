import { axios } from '../axios'
import { Categories, Contractor } from '@prisma/client'

export interface IQueryWage {
    startdate: string
    enddate: string
}
export const querywageApi = async (data: IQueryWage) => {
    return await axios.post("/wage/querymenues", data)
}

export interface IUpdateWageCategories {
    categories:
    (Categories & {
        contractor: Contractor | null;
    })[];
}
export const updateWageCategory = async (data: IUpdateWageCategories) => {
    return await axios.post('/wage/updatewages', data)
}