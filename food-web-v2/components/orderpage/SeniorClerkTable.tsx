import React, { useEffect, useState } from 'react'
import { Menue, Categories, Contractor } from '@prisma/client'
import Dialoge from '@mui/material/Dialog'
import { handleApiErrors } from '@/utils/handleapierrors'
import { getAvailableContractorsWithItem, updateCatgoryContractor } from '@/providers/apis'
import DialogTitle from '@mui/material/DialogTitle'
import CheckBox from '@mui/material/Checkbox'
import { DialogActions } from '@mui/material'
import { Button } from '../Button/Button'
import Input from '../Inputs/Input'
import { updateOperationMenueApi } from '@/providers/apis/operation'
import { updateSeniorClekMenueApi } from '@/providers/apis/order'
import { Select } from '../Select'
import { functionsConstants } from '@/data/data'
import { ISODateIntoLocalDate } from '@/utils/ISODateToLocalDate'
import { ISODateIntoLocalTime } from '@/utils/ISODateToLocalTime'
import { updateDateWithHourAndMinute } from '@/utils/updateDateWithHoursAndMinutes'

interface ICategories extends Categories {
    contractor?: Contractor
}
interface IMenue extends Menue {
    Categories?: ICategories[]
}
interface MenueTableProp {
    menues: IMenue[]
}
interface IModal {
    open: boolean
    onClose: () => void
    category?: Categories
}
const UpdateContractorsModal = ({ onClose, open, category }: IModal) => {
    const [contractors, setcontractors] = useState<Contractor[]>([])
    const [selectedContractor, setselectedContractor] = useState<Contractor>()
    const getContractores = async () => {
        try {
            const res = await getAvailableContractorsWithItem({ item: category?.itemName! })
            setcontractors(res.data.contractors)
            console.log({ setselectedContractores: res.data.contractors })
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    useEffect(() => {
        if (category?.itemName) {
            getContractores()
        }
    }, [category?.itemName])
    const handleUpdate = async () => {
        if (!selectedContractor) {
            return alert("Kindly select one contractor.")
        }
        if (!category) {
            return;
        }
        try {
            const res = await updateCatgoryContractor({
                categoryId: category.id,
                contractorid: selectedContractor.id
            })
            alert(res.data.msg)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <Dialoge open={open} maxWidth="md" fullWidth onClose={onClose}>
            <DialogTitle>
                Available Contractors
            </DialogTitle>
            {
                contractors.map((c, ci) => (
                    <div key={ci} className="flex items-center space-x-2">
                        <CheckBox checked={c.id === selectedContractor?.id} onChange={() => {
                            setselectedContractor(c)
                        }} />
                        <h1 className='text-lg font-bold'>{c.name}</h1>
                    </div>
                ))
            }
            <DialogActions>
                <div className='flex space-x-2'>
                    <Button title='Cancel' onClick={onClose} />
                    <Button title='Update' onClick={handleUpdate} />
                </div>
            </DialogActions>
        </Dialoge>
    )
}
const SeniorClerkTable = ({ menues }: MenueTableProp) => {
    const [updateDialoge, setupdateDialoge] = useState(false)
    const [selectedContractores, setselectedContractores] = useState<Contractor[]>([])
    const [selectedContractor, setselectedContractor] = useState<Contractor>()
    const [selectedCategory, setselectedCategory] = useState<Categories>()

    const handleClose = () => {
        setselectedCategory(undefined)
        setselectedCategory(undefined)
        setupdateDialoge(false)
    }
    return (
        <div className="w-full  overflow-hidden rounded-lg shadow-lg ">
            {
                updateDialoge &&
                <UpdateContractorsModal open={updateDialoge} onClose={handleClose} category={selectedCategory} />
            }
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase">booking id</th>
                            <th className="px-4 py-3 uppercase">Mobile</th>
                            <th className="px-4 py-3 uppercase">name</th>
                            <th className="px-4 py-3 uppercase">booked by</th>
                            <th className="px-4 py-3 uppercase">booker Mobile Number</th>
                            <th className="px-4 py-3 uppercase">cleaner</th>
                            <th className="px-4 py-3 uppercase">driver Name</th>
                            <th className="px-4 py-3 uppercase">function</th>
                            <th className="px-4 py-3 uppercase">head Mobile Number</th>
                            <th className="px-4 py-3 uppercase">head Name</th>
                            <th className="px-4 py-3 uppercase">PAX</th>
                            <th className="px-4 py-3 uppercase">special Instruction</th>
                            <th className="px-4 py-3 uppercase">vehicle Number</th>
                            <th className="px-4 py-3 uppercase">venue</th>
                            <th className="px-4 py-3 uppercase">words</th>
                            <th className="px-4 py-3 uppercase">function date</th>
                            <th className="px-4 py-3 uppercase">service time</th>
                            <th className="px-4 py-3 uppercase">departure date</th>
                            <th className="px-4 py-3 uppercase">departure time</th>
                            <th className="px-4 py-3 uppercase">actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white whitespace-nowrap">
                        {
                            menues.map((val, index) => (
                                <tr className="text-gray-700" key={index}>
                                    <td className="px-4 py-3 border">
                                        {val.bookingId}
                                    </td>
                                    <EditAbleColumns val={val} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { SeniorClerkTable }
interface EditAbleColumnsProp {
    val: IMenue
}
const EditAbleColumns = ({ val }: EditAbleColumnsProp) => {
    const [update, setupdate] = useState(false)
    const [data, setData] = useState(val)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        console.log(value)
        setData({
            ...data,
            [name]: value
        })
    }
    const handleUpdate = async () => {
        try {
            let _departureTime = data.departureTime
            if (data?.departureTime && !data.departureTime.toString().includes("Z")) {
                const _departureHourMinute = data.departureTime.split(":")
                _departureTime = updateDateWithHourAndMinute(new Date(data.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]))
            }


            // 
            let _serviceTime = data.serviceTime
            if (data?.serviceTime && !data.serviceTime.toString().includes("Z")) {
                const _serviceHourMinute = data.serviceTime.split(":")
                _serviceTime = updateDateWithHourAndMinute(new Date(data.functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]))
            }
            await updateSeniorClekMenueApi({
                data: {
                    bookingId: data.bookingId,
                    id: data.id,
                    mobile: data.mobile,
                    name: data.name,
                    bookedBy: data.bookedBy,
                    bookerMobileNumber: data.bookerMobileNumber,
                    cleaner: data.cleaner,
                    driverName: data.driverName,
                    function: data.function,
                    headMobileNumber: data.headMobileNumber,
                    headName: data.headName,
                    PAX: data.PAX,
                    specialInstruction: data.specialInstruction,
                    vehicleNumber: data.vehicleNumber,
                    venue: data.venue,
                    words: data.words,
                    functionDate: new Date(data.functionDate),
                    serviceTime: _serviceTime,
                    departureTime: _departureTime,
                    departureDate: new Date(data.departureDate)
                }
            })
            alert("Updated Successfully!")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='mobile' value={data.mobile} onChange={handleChange} />
                        :
                        data.mobile
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='name' value={data.name} onChange={handleChange} />
                        :
                        data.name
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='bookedBy' value={data.bookedBy} onChange={handleChange} />
                        :
                        data.bookedBy
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='bookerMobileNumber' value={data.bookerMobileNumber} onChange={handleChange} />
                        :
                        data.bookerMobileNumber
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    data.cleaner
                }
            </td>


            <td className="px-4 py-3 border">
                {
                    data.driverName
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Select options={Object.values(functionsConstants).map(v => ({ content: v, value: v }))} name='function' value={data.function} onChange={handleChange} />
                        :
                        data.function
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    data.headMobileNumber
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    data.headName
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='PAX' value={data.PAX} onChange={handleChange} />
                        :
                        data.PAX
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='specialInstruction' value={data.specialInstruction} onChange={handleChange} />
                        :
                        data.specialInstruction
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    data.vehicleNumber
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='venue' value={data.venue} onChange={handleChange} />
                        :
                        data.venue
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='words' value={data.words} onChange={handleChange} />
                        :
                        data.words
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input type='date' name='functionDate' value={typeof data.functionDate === "string" ? data.functionDate : ISODateIntoLocalDate(data.functionDate)} onChange={handleChange} />
                        :
                        new Date(data.functionDate).toLocaleDateString()
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input type='time' name='serviceTime' value={data.serviceTime} onChange={handleChange} />
                        :
                        new Date(data.serviceTime).toLocaleTimeString()
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input type='date' name='departureDate' value={data.departureDate} onChange={handleChange} />
                        :
                        new Date(data.departureDate).toLocaleDateString()
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input type='time' name='departureTime' value={data.departureTime} onChange={handleChange} />
                        :
                        new Date(data.departureTime).toLocaleTimeString()
                }
            </td>
            <td className="px-4 py-3 border space-x-3">
                <Button onClick={() => {
                    setupdate(!update)
                }} title="Edit" />
                <Button title="Update" onClick={handleUpdate} disabled={!update} />
            </td>
        </>
    )
}

