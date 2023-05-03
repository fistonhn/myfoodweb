export const updateDateWithHourAndMinute = (date: Date, hour: number, minute: number) => {
    const updatedDate = new Date(date); // Create a new date object to avoid modifying the original date

    updatedDate.setHours(hour); // Set the hour value
    updatedDate.setMinutes(minute); // Set the minute value
    updatedDate.setSeconds(0); // Set the seconds value to zero

    return updatedDate;
}