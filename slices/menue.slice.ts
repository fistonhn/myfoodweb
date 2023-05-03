import { IGetMenueApi, getMenuesApi } from "@/providers/apis";
import { Categories, Contractor, Menue } from "@prisma/client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IMeneuSlice {
    // menue: (Menue & {
    //     Categories: (Categories & {
    //         contractor: Contractor | null;
    //     })[];
    // })[]
    refetchData: boolean
}

const initialState: IMeneuSlice = {
    refetchData: false
}
// export const filterMenuesThunk = createAsyncThunk(
//     "menue/filterdata",
//     async ({ contractorName, departureDate, endDate, search, startDate }: IGetMenueApi) => {
//         const response = await getMenuesApi({
//             search: search,
//             startDate: startDate,
//             endDate: endDate,
//             departureDate: departureDate,
//             contractorName: contractorName
//         })
//         return response.data
//     }
// )
export const menueSlice = createSlice({
    name: "menue",
    initialState,
    reducers: {
        toggleAdminFetchMenuesData: (state) => {
            state.refetchData = !state.refetchData
        }
    }
})

export const { toggleAdminFetchMenuesData } = menueSlice.actions
export const MenueReducer = menueSlice.reducer