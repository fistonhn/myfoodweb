import React, { useState } from 'react'
import { Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import { convertJSONintoExcelFile } from '@/utils/convertJSONintoExcelFile'
import { TotalBookingComponent } from '@/components/Admin/TotalBookingComponent'
import { getTotalBookingsApi } from '@/providers/apis/report'
const DateSearch = () => {
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")
    const [total, settotal] = useState<number>(0)
    const [menues, setmenues] = useState<Menue[]>([])
    const getMenueData = async () => {
        if (!startDate || !endDate) {
            return alert("select start and end date")
        }
        try {
            const res = await getTotalBookingsApi({
                startdate: startDate,
                enddate: endDate
            })
            setmenues(res.data.menues)
        } catch (error: any) {
            return handleApiErrors(error.message)
        }
    }
    const handleConvertJSONToExcel = () => {
        try {
            convertJSONintoExcelFile(menues, "FROM-TO DATE MENUES")
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
                    <Button title='Search...' onClick={() => {
                        getMenueData()
                    }} />
                    <Button title='Download' onClick={handleConvertJSONToExcel} />
                    <Button title='Reset' onClick={() => {
                        setstartDate("")
                        setendDate("")
                        setmenues([])

                    }} />
                </div>
                <div>
                    <TotalBookingComponent menues={menues} />
                </div>
            </div>
        </div>
    )
}

export { DateSearch }


