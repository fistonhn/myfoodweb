import { UpdateContractorBySelectedOneDTO } from '@/pages/api/contractor/updateContractorUsingSelectedOne'
import { axios } from '../axios'
import { Contractor } from '@prisma/client'
export interface IUploadContractorApi {
    contractors: Omit<Contractor, "id" | "documents">[],
    query?: string
}
export const uploadContractor = async ({ contractors }: IUploadContractorApi) => {    
    return await axios.post(`/contractor/create`, { contractors })
}

export const getAllContractorsApi = async () => {
    return await axios.get("/contractor/getallcontractors")
}
export interface IGetAvailableContractorsWithItem {
    item: string
}
export const getAvailableContractorsWithItem = async ({ item }: IGetAvailableContractorsWithItem) => {
    return await axios.post('/contractor/getavailablebyitem', { item })
}

export interface IUpdateCategoryContractor {
    categoryId: string
    contractorid: string
}

export const updateCatgoryContractor = async ({ categoryId, contractorid }: IUpdateCategoryContractor) => {
    return await axios.post("/contractor/updatecategorycontractor", { categoryId, contractorid })
}
export interface IUploadDoc {
    contractorid: string
    name: string
    file: File
}

export const uploadDocApi = async ({ file, name, contractorid }: IUploadDoc) => {
    const formdata = new FormData()
    formdata.append("name", name)
    formdata.append("file", file)
    formdata.append("contractorid", contractorid)
    return await axios.post("/contractor/uploaddocuments", formdata)
}

export interface UpdateContractorDTO {
    data: Contractor
}
export const updateContractorAPi = async (data: UpdateContractorDTO) => {
    return await axios.post('/contractor/updatesinglecontractor', data)
}

export interface GetAllFreeContractorsAPIDTO {
    categoryID: string
}
export const getAllFreeContractorsUsingCategoryIDAPI = async (body: GetAllFreeContractorsAPIDTO) => {
    return await axios.post("/contractor/getFreeContractorsUsingCategoryId", body)
}

export const updateContractorUsingSelectedOneApi = async (body: UpdateContractorBySelectedOneDTO) => {
    return await axios.post('/contractor/updateContractorUsingSelectedOne', body)
}


export interface GetAllOtherItemsContractorsDTO {
    categoryID: string
}
export const getAllOtherItemsContractorsAPI = async (body: GetAllOtherItemsContractorsDTO) => {
    return await axios.post("/contractor/getOtherItemsContractors", body)
}


export interface removeContractorFromCategoryDTO {
    categoryID: string
}

export const removeContractorFromCategoryAPI = async (body: removeContractorFromCategoryDTO) => {
    return await axios.post("/contractor/removeContractorFromCategory", body)
}
