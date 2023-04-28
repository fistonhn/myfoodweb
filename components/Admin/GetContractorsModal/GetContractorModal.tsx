import { useAppDispatch, useAppSelector } from '@/store'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Checkbox, CircularProgress } from '@mui/material'
import { Button } from '@/components/Button/Button'
import { setSelectedToUpdateUserId, toggleUpdateContractorModal, updateContractorThunk, fetchOtherItemsContractorsThunk } from '@/slices/contractors.slice'
import { Contractor } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { removeContractorFromCategoryAPI } from '@/providers/apis'
import Input from '@/components/Inputs/Input'

const GetContractorModal = () => {
    const [menueSearch, setmenueSearch] = useState("")  
    const [categoriesFiltered, setcategoriesFiltered] = useState([])  


    const dispatch = useAppDispatch()
    const contractorState = useAppSelector(s => s.contractor)

    const onClose = () => {
        dispatch(toggleUpdateContractorModal())
    }
    const handleUpdateSelectedContractor = async() => {
        const update = await dispatch(updateContractorThunk({ categoryID: contractorState.contractorCategoryID, contractorID: contractorState.selectedToUpdateUserId }))

        if(update?.meta?.requestStatus === 'fulfilled') {
            dispatch(setSelectedToUpdateUserId({ userId: 'null' }))

            setcategoriesFiltered([])
            setmenueSearch("")
            handleGetOtherContractors()
        }
    }
    const handleGetOtherContractors = () => {
        dispatch(fetchOtherItemsContractorsThunk(contractorState.contractorCategoryID))
    }
    const handleDeleteCurrentContractor = async () => {
        try {
            if (!contractorState.contractorCategoryID) {
                return alert("Kindly try again later.")
            }
            await removeContractorFromCategoryAPI({
                categoryID: contractorState.contractorCategoryID
            })
            alert("Contractor removed successfully.")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }    

    const searchMenueData = (e) => {
        setmenueSearch(e.target.value)

        const filteredct = contractorState?.contractors?.filter(function(it) {
          return it.name.toLowerCase()?.match((e.target.value).toLowerCase() );
        });
        setcategoriesFiltered(filteredct)
      }
    
    return (
        <Dialog maxWidth="md" fullWidth onClose={onClose} open={contractorState.showUpdateContractorModal}>
            <div className='flex items-center gap-2'>
                <DialogTitle>Edit Contractors </DialogTitle>
                <Input placeholder='Search...' value={menueSearch} onChange={(e) => { searchMenueData(e) }} />
                <Button title='Reset Search' onClick={() => { setcategoriesFiltered([]), setmenueSearch("") }} />
            </div>
            
            {
                contractorState.loadingContractors ?
                    <div className='flex items-center justify-center'>
                        < CircularProgress />
                    </div>
                    :
                    <DialogContent>
                        {
                            contractorState.updatedSuccessfullyMessage &&
                            <h1 className='text-center font-bold text-green-600'>{contractorState.updatedSuccessfullyMessage}</h1>
                        }
                        <div>
                            {
                                categoriesFiltered?.length > 0 ? 

                                (categoriesFiltered?.map((c, ci) => (
                                    <ContractorItem {...c} />
                                ))) : 


                                (contractorState?.contractors?.length > 0 ?
                                 contractorState?.contractors?.map((c, ci) => (
                                    <ContractorItem {...c} />
                                 )) :
                                  <h1 className='text-center fonbold text-red-600 '>No Contractors available</h1>
                                )
                            } 
                        </div>
                    </DialogContent>
            }
            <DialogActions>
                <Button onClick={handleGetOtherContractors} title='GET OTHER CONTRACTORS' className='bg-green-700' />
                <Button onClick={handleDeleteCurrentContractor} title='REMOVE CURRENT CONTRACTOR' className='text-red-200 bg-red-700' />
                <Button
                    title='CANCEL'
                    onClick={() => {
                        dispatch(toggleUpdateContractorModal())
                    }}
                />
                <Button onClick={handleUpdateSelectedContractor} title='UPDATE' />
            </DialogActions>
        </Dialog>
    )
}

export { GetContractorModal }


const ContractorItem = (c: Contractor) => {
    const cstate = useAppSelector(s => s.contractor)
    const dispatch = useAppDispatch()
    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <Checkbox
                    onChange={() => {
                        dispatch(setSelectedToUpdateUserId({ userId: c.id }))
                    }}
                    checked={cstate.selectedToUpdateUserId === c.id}
                />
                <h1>{c.name}</h1>
            </div>
            <h1>{c.item}</h1>
        </div>
    )
}