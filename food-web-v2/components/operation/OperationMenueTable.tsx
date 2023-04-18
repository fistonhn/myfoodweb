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
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchContractorsThunk, selectContractorsUsingCategoryId } from '@/slices/contractors.slice'
import { GetContractorModal } from '../Admin/GetContractorsModal/GetContractorModal'
interface ICategories extends Categories {
    contractor?: Contractor
}
interface IMenue extends Menue {
    Categories?: ICategories[]
}
interface MenueTableProp {
    menues: IMenue[]
    isWagePageRequest?: boolean
}


const OperationMenueTable = ({ menues, isWagePageRequest = false }: MenueTableProp) => {
    const dispatch = useAppDispatch()
    const cstate = useAppSelector(s => s.contractor)
    const handleShowModal = (cid: string) => {
        dispatch(selectContractorsUsingCategoryId({ cid: cid }))
        dispatch(fetchContractorsThunk(cid))
    }
    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            {
                cstate.showUpdateContractorModal &&
                <GetContractorModal />
            }
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase">booking id</th>
                            <th className="px-4 py-3 uppercase">Categories</th>
                            {/* <th className="px-4 py-3 uppercase">function</th> */}
                            {/* <th className="px-4 py-3 uppercase whitespace-nowrap">name</th> */}
                            <th className="px-4 py-3 uppercase">function date</th>
                            {/* <th className="px-4 py-3 uppercase">mobile</th> */}
                            {/* <th className="px-4 py-3 uppercase">Service Time</th> */}
                            {/* <th className="px-4 py-3 uppercase">venue</th> */}
                            {/* <th className="px-4 py-3 uppercase">Departure Date</th> */}
                            {/* <th className="px-4 py-3 uppercase">Departure Time</th> */}
                            {/* <th className="px-4 py-3 uppercase">PAX</th> */}
                            {/* <th className="px-4 py-3 uppercase">Special Instruction</th> */}
                            <th className="px-4 py-3 uppercase">Head Name</th>
                            <th className="px-4 py-3 uppercase">Head Mobile Number</th>
                            <th className="px-4 py-3 uppercase">Driver Name</th>
                            <th className="px-4 py-3 uppercase">Vehicle Number</th>
                            {/* <th className="px-4 py-3 uppercase">words</th> */}
                            <th className="px-4 py-3 uppercase">cleaner</th>
                            <th className="px-4 py-3 uppercase">actions</th>
                            {/* <th className="px-4 py-3 uppercase">booked By</th> */}
                            {/* <th className="px-4 py-3 uppercase">booker Mobile Number</th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white whitespace-nowrap">
                        {
                            menues.map((val, index) => (
                                <tr className="text-gray-700" key={index}>
                                    <td className="px-4 py-3 border">
                                        {val.bookingId}
                                    </td>
                                    <td className="px-4 py-3 border space-y-4">
                                        {
                                            val.Categories?.map((c, ci) => {
                                                return (
                                                    <div key={ci} className=" grid gap-y-2 bg-gray-100 p-[1px]">
                                                        <span className='font-bold text-lg underline underline-offset-4'>{` `}Item: {c.itemName}</span>
                                                        <span onClick={() => {
                                                            handleShowModal(c.id)
                                                        }} className='font-bold text-lg underline underline-offset-4 cursor-pointer hover:text-green-500'>Contractor: {c.contractor?.name}</span>
                                                        <span className='font-bold text-lg underline underline-offset-4'>{` `}Comment: {c.comment}</span>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.functionDate).toLocaleDateString()}
                                    </td>
                                    <EditAbleColumns isWagePageRequest={isWagePageRequest} val={val} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { OperationMenueTable }
interface EditAbleColumnsProp {
    val: IMenue
    isWagePageRequest: boolean
}
const EditAbleColumns = ({ val, isWagePageRequest }: EditAbleColumnsProp) => {
    const [update, setupdate] = useState(false)
    const [data, setData] = useState(val)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const handleUpdate = async () => {
        try {
            await updateOperationMenueApi({
                data: {
                    cleaner: data.cleaner,
                    driverName: data.driverName,
                    headMobileNumber: data.headMobileNumber,
                    headName: data.headName,
                    vehicleNumber: data.vehicleNumber,
                    id: data.id
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
            <td className="px-4 py-3 border" >
                {
                    update ?
                        <Input name='headName' value={data.headName} onChange={handleChange} />
                        :
                        data.headName
                }
            </td >
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='headMobileNumber' value={data.headMobileNumber} onChange={handleChange} />
                        :
                        data.headMobileNumber
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='driverName' value={data.driverName} onChange={handleChange} />
                        :
                        data.driverName
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='vehicleNumber' value={data.vehicleNumber} onChange={handleChange} />
                        :
                        data.vehicleNumber
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='cleaner' value={data.cleaner} onChange={handleChange} />
                        :
                        data.cleaner
                }
            </td>
            <td className="px-4 py-3 border space-x-3">
                {
                    isWagePageRequest ?
                        <Button title='Edit' onClick={() => {
                            window.location.href = `/wage/edit/${val.id}`
                        }} />
                        :
                        <>
                            <Button onClick={() => {
                                setupdate(!update)
                            }} title="Edit" />
                            <Button title="Update" onClick={handleUpdate} disabled={!update} />
                            <Link href={`/admin/menueprint/${val.id}`}>
                                <Button title='Print' />
                            </Link>
                        </>
                }
            </td>
        </>
    )
}

