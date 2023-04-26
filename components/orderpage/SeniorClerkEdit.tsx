import { Header } from '@/components/Header/Header'
import { getMenuesApi, IUploadContractorApi, seniorClerkSearchMenueApi, uploadContractor } from '@/providers/apis'
import React, { useEffect, useState } from 'react'
import { Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { MenueTable } from '@/components/Admin/MenueTable'
import { Button } from '@/components/Button/Button'
import * as  xlsx from 'xlsx'
import { Contractor } from "@prisma/client"
import { useAppDispatch, useAppSelector } from '@/store'

import Input from '@/components/Inputs/Input'
import Dialog from '@mui/material/Dialog'
import { ContractorModel } from '@/components/ContractorModel/ContractorModel'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { convertJSONintoExcelFile } from '@/utils/convertJSONintoExcelFile'
import { OperationMenueTable } from '@/components/operation/OperationMenueTable'
import { SeniorClerkTable } from './SeniorClerkTable'
import { updateOperationMenueApi } from '@/providers/apis/operation'

const SeniorClerkEdit = () => {
    const [disableContractorEdit, serdisableContractorEdit] = useState(true)
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [contractorDialogeState, setcontractorDialogeState] = useState(false)

    const menueState = useAppSelector(s => s.menue)
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [contractorNameSearch, setcontractorNameSearch] = useState("")
    const [searchDepartureDate, setsearchDepartureDate] = useState("")

    // const getMenueData = async () => {
    //     try {
    //         const res = await seniorClerkSearchMenueApi({
    //             search: menueSearch
    //         })
    //         setmenuesData(res.data.menues)
    //     } catch (error: any) {
    //         const err = handleApiErrors(error.message)
    //         alert(err)
    //     }
    // }

    const getMenueData = async (search: "") => {      
        try {
            if (search || (startDate && endDate) || searchDepartureDate || contractorNameSearch) {                                
                const menues = await getMenuesApi({
                    search: search, startDate: startDate, endDate: endDate,
                    departureDate: searchDepartureDate,
                    contractorName: contractorNameSearch
                })
                setmenuesData(menues.data.menues)
            } else {
                const menues = await getMenuesApi({})
                setmenuesData(menues.data.menues)

            }
        } catch (error: any) {
            return handleApiErrors(error.message)
        }
    }

    useEffect(() => {
        getMenueData(menueSearch)
    }, [])
    useEffect(() => {
        getMenueData(menueSearch)
    }, [menueState.refetchData])

    const handleConvertJSONToExcel = () => {
        try {
            const data = [] as any[]
            menuesData.forEach(v => {
                data.push({
                    ...v,
                    serviceTime: new Date(v.serviceTime).toLocaleTimeString(),
                    departureTime: new Date(v.departureTime).toLocaleTimeString(),
                    functionDate: new Date(v.functionDate).toLocaleDateString(),
                    departureDate: new Date(v.departureDate).toLocaleDateString()

                })
            })
            convertJSONintoExcelFile(data, "MENUE DATA")
        } catch (error: any) {
            alert(error.message)
        }
    }

    const resetMenue = async() => {                  
        setsearchDepartureDate("")
        setstartDate("")
        setendDate("")
        setmenueSearch("")
        
        const menues = await getMenuesApi({})
        setmenuesData(menues.data.menues)    
    }


    const manuetable = () => {
        return (
            <div className='px-5 space-y-2'>
                <div className='flex items-center space-x-4'>
                    <Input label='Start Date' onChange={(e) => { setstartDate(e.target.value) }} type='date' value={startDate} />
                    <Input label='End Date' onChange={(e) => { setendDate(e.target.value) }} type='date' value={endDate} />
                </div>
                <div className='flex items-center'>
                    <Input type='date' label='Departure Date' value={searchDepartureDate}
                        onChange={(e) => { setsearchDepartureDate(e.target.value) }}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <Input placeholder='Search...' value={menueSearch} onChange={(e) => { setmenueSearch(e.target.value) }} />
                    <Button title='Search' onClick={() => {
                        getMenueData(menueSearch)
                    }} />
                    <Button title='Download' onClick={handleConvertJSONToExcel} />
                    <Button
                        title='Reset'
                        onClick={() => resetMenue()}
                    />
                </div>
                {
                    menuesData.length > 0 ?
                        <SeniorClerkTable menues={menuesData} />
                        :
                        <div className='py-4'>
                            <h1 className='text-center text-white uppercase font-bold'>No records found</h1>
                        </div>
                }
            </div>
        )
    }
    const handleContractorClose = () => {
        setcontractorDialogeState(false)
    }
    const contractorModals = () => {
        return (
            <Dialog fullWidth maxWidth="md" open={contractorDialogeState} onClose={handleContractorClose}>
                <ContractorModel allowEdit={disableContractorEdit} />
            </Dialog>
        )
    }
    return (
        <div>
            {manuetable()}
            {contractorModals()}
        </div>
    )
}

export { SeniorClerkEdit }
