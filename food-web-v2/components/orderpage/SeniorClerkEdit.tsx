import { Header } from '@/components/Header/Header'
import { getMenuesApi, IUploadContractorApi, seniorClerkSearchMenueApi, uploadContractor } from '@/providers/apis'
import React, { useEffect, useState } from 'react'
import { Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { MenueTable } from '@/components/Admin/MenueTable'
import { Button } from '@/components/Button/Button'
import * as  xlsx from 'xlsx'
import { Contractor } from "@prisma/client"
import Input from '@/components/Inputs/Input'
import Dialog from '@mui/material/Dialog'
import { ContractorModel } from '@/components/ContractorModel/ContractorModel'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { convertJSONintoExcelFile } from '@/utils/convertJSONintoExcelFile'
import { OperationMenueTable } from '@/components/operation/OperationMenueTable'
import { SeniorClerkTable } from './SeniorClerkTable'
const SeniorClerkEdit = () => {
    const [disableContractorEdit, serdisableContractorEdit] = useState(true)
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [contractorDialogeState, setcontractorDialogeState] = useState(false)
    const getMenueData = async () => {
        try {
            const res = await seniorClerkSearchMenueApi({
                search: menueSearch
            })
            setmenuesData(res.data.menues)
        } catch (error: any) {
            const err = handleApiErrors(error.message)
            alert(err)
        }
    }
    const manuetable = () => {
        return (
            <div className='px-5 space-y-2'>
                <div className='flex items-center '>
                    <Input className='min-w-[50%]' label='Search' placeholder='Booking ID/Phone Number/Customer Name...' onChange={(e) => { setmenueSearch(e.target.value) }} type='text' value={menueSearch} />
                </div>
                <div className='flex items-center gap-2'>
                    <Button
                        title='Search'
                        onClick={() => {
                            getMenueData()
                        }}
                    />
                    <Button title='Reset' onClick={() => {
                        setmenueSearch("")
                        setmenuesData([])
                    }} />
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
