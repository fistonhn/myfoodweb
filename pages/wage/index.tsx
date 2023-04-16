import { Header } from '@/components/Header/Header'
import { querywageApi } from '@/providers/apis'
import React, { useState } from 'react'
import { Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import Dialog from '@mui/material/Dialog'
import { ContractorModel } from '@/components/ContractorModel/ContractorModel'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { OperationMenueTable } from '@/components/operation/OperationMenueTable'
const WagePage = () => {
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [contractorDialogeState, setcontractorDialogeState] = useState(false)
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const getMenueData = async () => {
        try {
            if (menueSearch || (startDate && endDate)) {
                const menues = await querywageApi({ startdate: startDate, enddate: endDate })
                setmenuesData(menues.data.menues)
            }
        } catch (error: any) {
            return handleApiErrors(error.message)
        }
    }
    const manuetable = () => {
        return (
            <div className='px-5 space-y-2'>
                <div className='flex items-center space-x-3'>
                    <Input type='date' label='Start Date' onChange={(e) => {
                        setstartDate(e.target.value)
                    }} value={startDate} />
                    <Input type='date' onChange={(e) => {
                        setendDate(e.target.value)
                    }} label='End Date' value={endDate} />
                </div>
                <div className='flex items-center gap-2'>
                    <Button title='Search' onClick={() => { getMenueData() }} />
                </div>
                <OperationMenueTable isWagePageRequest={true} menues={menuesData} />
            </div>
        )
    }
    const handleContractorClose = () => {
        setcontractorDialogeState(false)
    }
    const contractorModals = () => {
        return (
            <Dialog fullWidth maxWidth="md" open={contractorDialogeState} onClose={handleContractorClose}>
                <ContractorModel />
            </Dialog>
        )
    }
    return (
        <div style={{
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
            className="h-screen overflow-auto"
        >

            <Header />
            {manuetable()}
            {contractorModals()}
        </div>
    )
}

export default WagePage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (!session || (session.user.role !== "admin" && session.user.role !== "wageclerk")) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}


