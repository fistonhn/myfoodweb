import { Menue } from '@prisma/client'
export interface IMenueForm {
    id: string;
    bookingId: string;
    function: Menue["function"];
    name: string;
    functionDate: string;
    mobile: string;
    serviceTime: string;
    venue: string;
    departureDate: string;
    departureTime: string;
    PAX: string;
    PLATE: string;
    specialInstruction: string;
    headName: string;
    headMobileNumber: string;
    driverName: string;
    vehicleNumber: string;
    words: string;
    cleaner: string;
    bookedBy: string;
    bookerMobileNumber: string;
    onion?: boolean
    garlic?: boolean
}

export interface IItem {
    item: string,
    counter: string,
    comment: string
}