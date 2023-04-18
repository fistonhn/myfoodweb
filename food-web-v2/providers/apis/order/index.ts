import { axios } from '../axios'
import { Menue } from '@prisma/client'
type IMenue = Omit<Menue, 
    | "createdAt"
    | "updatedAt"
>
export interface IUpdateSeniorClerkMenue {
    data: IMenue
}


export const updateSeniorClekMenueApi = async (data: IUpdateSeniorClerkMenue) => {
    return await axios.post("/menue/seniorclerkupdatemenue", data)
}