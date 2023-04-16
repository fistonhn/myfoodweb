import { Categories, Contractor, Menue } from "@prisma/client";

export const getTotalwages = (w: Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
}): number => {
    let sum = 0;
    w.Categories.forEach((v) => {
        if (v.contractor?.wage !== undefined) {
            sum += Number(v.contractor?.wage)
        }
    })
    return sum
}
export const getFinalWages = (w: Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
}): number => {
    let sum = 0;
    w.Categories.forEach((v) => {
        if (v.finalWage !== null) {
            sum += Number(v.finalWage)
        }
    })
    return sum
}