import { Header } from '@/components/Header/Header'
import { getMenuesApi, IUploadContractorApi, uploadContractor } from '@/providers/apis'
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
const OperationPage = () => {
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [contractorNameSearch, setcontractorNameSearch] = useState("")
    const [searchDepartureDate, setsearchDepartureDate] = useState("")
    const [disableContractorEdit, serdisableContractorEdit] = useState(true)
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [contractorDialogeState, setcontractorDialogeState] = useState(false)
    const getMenueData = async (search = "") => {
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
        getMenueData()
    }, [])
    const handleExcelJsonData = async (data: Contractor[]) => {
        let updatedData = [] as Omit<Contractor, "id" | "documents">[]
        const prevDate = new Date()
        prevDate.setDate(prevDate.getDate() - 1)
        data.forEach((d) => {
            console.log({ d })
            updatedData.push({
                name: String(d.name),
                item: String(d.item),
                age: Number(d.age),
                wage: Number(d.wage),
                group: String(d.group),
                assignTillDate: new Date(prevDate),
                area: String(d.area),
                address: String(d.address),
                identitynumber: String(d.identitynumber),
                phone: String(d.phone)
            })
        })
        try {

            const res = await uploadContractor({
                contractors: updatedData
            })
            alert(res.data.msg)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    const handleFileChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
        _e.preventDefault();
        if (_e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target?.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                handleExcelJsonData(json as any)
                _e.target.value = ""
            };
            reader.readAsArrayBuffer(_e.target.files[0]);
        }
    }
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
    const manuetable = () => {
        return (
            <div className='px-5 space-y-2'>
                <div className='flex items-center space-x-4'>
                    <Input label='Start Date' onChange={(e) => { setstartDate(e.target.value) }} type='date' value={startDate} />
                    <Input label='End Date' onChange={(e) => { setendDate(e.target.value) }} type='date' value={endDate} />

                    <div className='flex items-center space-x-4 mt-6'>
                        <Input placeholder='Search...' value={menueSearch} onChange={(e) => { setmenueSearch(e.target.value) }} />
                        <Button title='Search' onClick={() => {
                            getMenueData(menueSearch)                            
                        }} />
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <Button title='Search' onClick={() => {
                        getMenueData(menueSearch)
                    }} />
                    <Button title='Download' onClick={handleConvertJSONToExcel} />
                    <Button title='Reset' onClick={() => {
                        setstartDate("")
                        setendDate("")
                        setmenueSearch("")
                        getMenueData()
                    }} />
                </div>
                <OperationMenueTable menues={menuesData} search={menueSearch} 
                searchDepartureDate={searchDepartureDate} 
                contractorNameSearch={contractorNameSearch}
                startDate={startDate}
                endDate={endDate} />
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

export default OperationPage


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (!session || (session.user.role !== "admin" && session.user.role !== "operationclerk")) {
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