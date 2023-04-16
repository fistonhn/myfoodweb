import { UpdateContractorBySelectedOneDTO } from '@/pages/api/contractor/updateContractorUsingSelectedOne'
import { getAllFreeContractorsUsingCategoryIDAPI, getAllOtherItemsContractorsAPI, updateContractorUsingSelectedOneApi } from '@/providers/apis'
import { Contractor } from '@prisma/client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toggleAdminFetchMenuesData } from './menue.slice'
// Define a type for the slice state

interface ContractorsSlice {
    showUpdateContractorModal: boolean
    contractorCategoryID: string
    contractors: Contractor[]
    loadingContractors: boolean
    selectedToUpdateUserId: string
    updatedSuccessfullyMessage: string
}

// Define the initial state using that type
const initialState: ContractorsSlice = {
    showUpdateContractorModal: false,
    contractorCategoryID: "",
    contractors: [],
    loadingContractors: false,
    selectedToUpdateUserId: "",
    updatedSuccessfullyMessage: ""

}
export const fetchContractorsThunk = createAsyncThunk(
    'contractors/fetch',
    async (catId: string, thunkAPI) => {
        const response = await getAllFreeContractorsUsingCategoryIDAPI({ categoryID: catId })
        return response.data
    }
)
export const fetchOtherItemsContractorsThunk = createAsyncThunk(
    'contractors/fetch/others',
    async (catId: string, thunkAPI) => {
        const response = await getAllOtherItemsContractorsAPI({ categoryID: catId })
        return response.data
    }
)
export const updateContractorThunk = createAsyncThunk(
    "contractor/update",
    async (body: UpdateContractorBySelectedOneDTO, thunkAPI) => {
        const response = await updateContractorUsingSelectedOneApi(body)
        thunkAPI.dispatch(toggleAdminFetchMenuesData())
    }
)
export const contractorSlice = createSlice({
    name: 'contractor',
    initialState,
    reducers: {
        toggleUpdateContractorModal: (state) => {
            if (state.showUpdateContractorModal) {
                state.updatedSuccessfullyMessage = ""
            }
            state.showUpdateContractorModal = !state.showUpdateContractorModal
        },
        selectContractorsUsingCategoryId: (state, action: PayloadAction<{ cid: string }>) => {
            state.contractorCategoryID = action.payload.cid
            state.showUpdateContractorModal = true
        },
        setSelectedToUpdateUserId: (state, action: PayloadAction<{ userId: string }>) => {
            state.selectedToUpdateUserId = action.payload.userId
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContractorsThunk.fulfilled, (state, action) => {
            state.contractors = action.payload.contractors
            state.loadingContractors = false
        }),
            // 
            builder.addCase(fetchContractorsThunk.pending, (state, action) => {
                state.loadingContractors = true
            }),
            builder.addCase(fetchContractorsThunk.rejected, (state, action) => {
                state.loadingContractors = false
            }),
            builder.addCase(updateContractorThunk.fulfilled, (state) => {
                state.updatedSuccessfullyMessage = "updated Successfully!"
            }),
            // 
            // 
            builder.addCase(fetchOtherItemsContractorsThunk.pending, (state) => {
                state.loadingContractors = true
            }),
            builder.addCase(fetchOtherItemsContractorsThunk.rejected, (state) => {
                state.loadingContractors = false
            }),
            builder.addCase(fetchOtherItemsContractorsThunk.fulfilled, (state, action) => {
                state.contractors = action.payload.contractors
                state.loadingContractors = false
            })
        // 
    }
})
export const {
    toggleUpdateContractorModal,
    selectContractorsUsingCategoryId,
    setSelectedToUpdateUserId
} = contractorSlice.actions


const ContractorReducer = contractorSlice.reducer

export { ContractorReducer }