export const handleApiErrors = (error: any): string => {
    if (error?.response?.data?.msg) {
        return error?.response?.data?.msg
    }
    return error.message
}