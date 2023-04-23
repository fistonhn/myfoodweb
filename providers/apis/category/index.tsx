import { axios } from '../axios'


export interface IUpdateCategoryFinalWage {
    finalWage: string
    categoryId: string
}

export interface ICreateCategoryApi {
    menue: any
    selectedItems: any
}

export interface IDeleteCategoryApi {
    selId: any
}

export const updateCategoryFinalWage = async ({ finalWage, categoryId }: IUpdateCategoryFinalWage) => {
    return await axios.post('/category/updatecategoryfinalwage', { finalWage, categoryId })
}

export const createNewCategory = async ({ menue, selectedItems }: ICreateCategoryApi) => {   
    return await axios.post('/category/create', { menue, selectedItems })
}

export const deleteCategory = async ({ selId }: IDeleteCategoryApi) => {   
    return await axios.post('/category/delete', { selId })
}