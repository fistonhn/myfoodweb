import { axios } from "../axios"


export interface IToalBookings {
    startdate: string
    enddate: string
}

export const getTotalBookingsApi = async (data: IToalBookings) => {
    return axios.post('/report/totalbookings', data)
}

export const startenddatewages = async (data: IToalBookings) => {
    return axios.post('/report/tofromdatewages', data)
}

export interface ISearchContractor {
    search: string
}

export const searchReportContractorApi = async (data: ISearchContractor) => {
    return await axios.post("/contractor/search", data)
}
