export const ISODateIntoLocalDate = (inputDate: string | Date) => {
    console.log("input date", inputDate)
    let date = new Date(inputDate);
    date.setMonth(date.getMonth() + 1)
    date = new Date(date)
    const year = date.getFullYear();
    const month = (date.getMonth() ).toString().padStart(2, '0');
    const day = (date.getDate() ).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const isoDate = `${year}-${month}-${day}`;
    console.log(isoDate)
    // T${hours}:${minutes}
    return isoDate
}