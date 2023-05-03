export const generatePastDate = () => {
    let date = new Date()
    date.setDate(date.getDate() - 7)
    return new Date(date)
}