import { User } from '@prisma/client'
import { axios } from '../axios'


// ........................................................


interface ICreateUser {
    email: string
    password: string,
    role: User["role"]
}
export const createUserApi = async (data: ICreateUser) => {
    return axios.post('/user/createusers', data)
}

interface IGetUsers {
}
export const getUsersApi = async (data: IGetUsers) => {
    return axios.post('/user/getusers', data)
}
interface IResetUser {
    id: string,
    email: string,
    password: string
    role: User["role"]
}
export const resetUserApi = async (data: IResetUser) => {
    return axios.post('/user/resetuser', data)
}
interface IDeleteUser {
    id: string
}
export const deleteUserApi = async (data: IDeleteUser) => {
    return axios.post('/user/deleteuser', data)
}
