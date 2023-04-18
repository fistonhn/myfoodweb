import React, { useState } from 'react'
import { Categories, Contractor, Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import { convertJSONintoExcelFile } from '@/utils/convertJSONintoExcelFile'
import { TotalBookingComponent } from '@/components/Admin/TotalBookingComponent'
import { getTotalBookingsApi, startenddatewages } from '@/providers/apis/report'
import { WageSearchTable } from './WageSearchTable'
import { getFinalWages, getTotalwages } from './utils'

type ITypeMenue = (Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
})
const WageSearch = () => {
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [menuesData, setmenuesData] = useState<ITypeMenue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [total, settotal] = useState<number>(0)
    const getMenueData = async () => {
        if (!startDate || !endDate) {
            return alert("select start and end date")
        }
        try {
            const res = await startenddatewages({
                startdate: startDate,
                enddate: endDate
            })
            const {
                menues,
                totalwages,
                finalwages
            } = res.data
            setmenuesData(menues)
            console.log({
                menues,
                totalwages,
                finalwages
            })
        } catch (error: any) {
            const err = handleApiErrors(error.message)
            alert(err)
        }
    }
    const handleConvertJSONToExcel = () => {
        try {
            const data = [] as any[]
            menuesData.forEach((v) => {
                data.push({
                    START_DATE: startDate,
                    END_DATE: endDate,
                    BOOKING_ID: v.bookingId,
                    VENUE: v.venue,
                    TOTAL_WAGES: getTotalwages(v),
                    FINAL_WAGES: getFinalWages(v)
                })
            })
            convertJSONintoExcelFile(data, "FROM-TO DATE WAGE")
        } catch (error: any) {
            alert(error.message)
        }
    }
    return (
        <div>
            <div className='px-5 space-y-2'>

                <div className='flex items-center space-x-4'>
                    <Input labelClassName='!text-black' label='Booking From' onChange={(e) => { setstartDate(e.target.value) }} type='date' value={startDate} />
                    <Input labelClassName='!text-black' label='Booking To' onChange={(e) => { setendDate(e.target.value) }} type='date' value={endDate} />
                </div>
                <div className='flex items-center gap-2'>
                    <Button title='Search' onClick={() => {
                        getMenueData()
                    }} />
                    <Button title='Download' onClick={handleConvertJSONToExcel} />
                    <Button title='Reset' onClick={() => {
                        setstartDate("")
                        setendDate("")
                        setmenueSearch("")
                        setmenuesData([])
                    }} />
                </div>
                <div>
                    <WageSearchTable meunues={menuesData} />
                </div>
            </div>
        </div>
    )
}

export { WageSearch }


