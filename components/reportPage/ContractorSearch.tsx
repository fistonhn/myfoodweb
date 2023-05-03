import React, { useState } from 'react'
import { Categories, Contractor, Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import { convertJSONintoExcelFile } from '@/utils/convertJSONintoExcelFile'
import { TotalBookingComponent } from '@/components/Admin/TotalBookingComponent'
import { getTotalBookingsApi, searchReportContractorApi } from '@/providers/apis/report'
import { ContractorSearchTable } from './ContractorSearchTable'

type TMenue = (Categories & {
    contractor: Contractor | null;
    menue: Menue;
})
const ContractorSearch = () => {
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [menuesData, setmenuesData] = useState<TMenue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [total, settotal] = useState<number>(0)
    const getMenueData = async () => {
        if (!menueSearch) {
            return alert("select start and end date")
        }
        try {
            const res = await searchReportContractorApi({
                search: menueSearch
            })
            console.log({ data: res.data.menues })
            // settotal(res.data.menues)
            setmenuesData(res.data.menues)
        } catch (error: any) {
            return handleApiErrors(error.message)
        }
    }
    const handleConvertJSONToExcel = () => {
        try {
            let data = [] as any[]
            menuesData.forEach(v => {
                data.push({
                    Booking_id: v.menue.bookingId,
                    Contractor_Name: v.contractor?.name,
                    Total_Wages: v.contractor?.wage,
                    Final_Wages: v.finalWage
                })
            })
            convertJSONintoExcelFile(data, "FROM-TO DATE MENUES")
        } catch (error: any) {
            alert(error.message)
        }
    }
    return (
        <div>
            <div className='px-5 space-y-2'>
                <div className='flex items-center'>
                    <Input
                        value={menueSearch} onChange={(e) => {
                            setmenueSearch(e.target.value)
                        }}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <Button title='Search' onClick={() => {
                        getMenueData()
                    }} />
                    <Button title='Download' onClick={handleConvertJSONToExcel} />
                    <Button title='Reset' onClick={() => {
                        setmenueSearch("")
                        setmenuesData([])
                    }} />
                </div>
                <div>
                    <ContractorSearchTable meunues={menuesData} />
                </div>
            </div>
        </div>
    )
}

export { ContractorSearch }


