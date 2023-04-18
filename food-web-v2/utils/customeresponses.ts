import { NextApiResponse } from 'next'
interface IHandlerErros {
    statusCode: 400 | 500
    msg: string | {},
    res: NextApiResponse
}
export const ErrorResponse = ({ msg, statusCode, res }: IHandlerErros) => {
    let response = {}
    if (typeof msg === "object") {
        response = msg
    } else {
        response = { msg }
    }
    return res.status(statusCode).json(response)
}
interface ISuccessResponse {
    statusCode: number
    msg: string | {},
    res: NextApiResponse
}
export const SuccessResponse = ({ msg, res, statusCode = 200 }: ISuccessResponse) => {
    let response = {}
    if (typeof msg === "object") {
        response = msg
    } else {
        response = { msg }
    }
    return res.status(statusCode).json(response)
}