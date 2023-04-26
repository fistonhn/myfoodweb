import { Header } from '@/components/Header/Header'
import React, { useState } from 'react'
import { Menue } from '@prisma/client'
import Dialog from '@mui/material/Dialog'
import { ContractorModel } from '@/components/ContractorModel/ContractorModel'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { OperationMenueTable } from '@/components/operation/OperationMenueTable'
const WagePage = () => {
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [contractorDialogeState, setcontractorDialogeState] = useState(false)

    const manuetable = () => {
        return (
            <div className='px-5 space-y-2'>
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


