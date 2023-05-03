import { axios } from '../axios'
import { Menue } from '@prisma/client'


export interface IUpdateOperationMenue {
    data: Pick<Menue, "headMobileNumber" | "headName" | "driverName" | "vehicleNumber" | "cleaner" | "id">
}

export const updateOperationMenueApi = async (data: IUpdateOperationMenue) => {
    return await axios.post("/operation/updateoperationmenue", data)
}
