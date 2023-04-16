import { axios } from '../axios'


export interface IUpdateCategoryFinalWage {
    finalWage: string
    categoryId: string
}

export const updateCategoryFinalWage = async ({ finalWage, categoryId }: IUpdateCategoryFinalWage) => {
    return await axios.post('/category/updatecategoryfinalwage', { finalWage, categoryId })
}