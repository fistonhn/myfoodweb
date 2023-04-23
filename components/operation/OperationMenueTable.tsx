import React, { useEffect, useState } from 'react'
import { Menue, Categories, Contractor } from '@prisma/client'
import Dialoge from '@mui/material/Dialog'
import { handleApiErrors } from '@/utils/handleapierrors'
import { getMenuesApi } from '@/providers/apis'
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


const OperationMenueTable = ({ menues, search, searchDepartureDate, contractorNameSearch, startDate, endDate, isWagePageRequest = false }: MenueTableProp) => {
    const [menuesData, setmenuesData] = useState(menues)    

    // const getMenueData = async () => {
    //     const menuesUpdate = await getMenuesApi({})
    //     setmenuesData(menuesUpdate.data.menues)
    // }

    const getMenueData = async (search = "") => {
        try {
            if (search ) {  
                console.log('this ', search);
                                              
                const menues = await getMenuesApi({
                    search: search, startDate: startDate, endDate: endDate,
                    departureDate: searchDepartureDate,
                    contractorName: contractorNameSearch
                })

                console.log('mmmm', menues);
                
                
                setmenuesData(menues.data.menues)
            } else {
                const menues = await getMenuesApi({})
                setmenuesData(menues.data.menues)
            }
        } catch (error: any) {
            return handleApiErrors(error.message)
        }
    }

    const dispatch = useAppDispatch()
    const cstate = useAppSelector(s => s.contractor)

    useEffect(() => {
        getMenueData()        
    }, [dispatch])
    
    const handleShowModal = async (cid: string) => {        
        dispatch(selectContractorsUsingCategoryId({ cid: cid }))
        dispatch(fetchContractorsThunk(cid))

        getMenueData()
    }


    // get all categories from the system

    const categories = []

    menuesData?.filter((it)=> it.cancel===false)?.map((item)=> {
        item.Categories?.map((it)=>{
            categories.push(it)
        })
    })
    
    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            {
                cstate.showUpdateContractorModal &&
                <GetContractorModal {...getMenueData()}/>
            }
            <div className="w-full overflow-x-auto max-h-[650px]">
                <table className="w-full">
                    <thead className='sticky top-0'>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase">guest name</th>
                            <th className="px-4 py-3 uppercase">Categories</th>
                            {/* <th className="px-4 py-3 uppercase">function</th> */}
                            {/* <th className="px-4 py-3 uppercase whitespace-nowrap">name</th> */}
                            <th className="px-4 py-3 uppercase">function date</th>
                            <th className="px-4 py-3 uppercase">service time</th>
                            <th className="px-4 py-3 uppercase">departure date</th>
                            <th className="px-4 py-3 uppercase">departure time</th>
                            <th className="px-4 py-3 uppercase">guest mobile number</th>
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
                            menuesData.filter((it)=> it.cancel===false).map((val, index) => (
                                <tr className="text-gray-700 even:bg-#D6EEEE odd:bg-blue-100" key={index}>
                                    <td className="px-4 py-3 border">
                                        {val.name}
                                    </td>
                                    <td className="px-4 py-3 border space-y-4">
                                        { 
                                                [...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.map((c: any, ci) => {
                                                return (
                                                    <div key={ci} className=" bg-gray-100 p-[1px]">
                                                        <span className='font-bold text-md underline underline-offset-4 mr-4 overflow-y-auto'>{` `}
                                                            {c.itemName} 

                                                            {((val.Categories.filter((it)=> it.menueId === val.id &&  it.itemName === c.itemName)).length) === 1 ? '' : ' ( ' }

                                                            {((val.Categories.filter((it)=> it.menueId === val.id &&  it.itemName === c.itemName)).length) === 1 ? '' :
                                                            ((val.Categories.filter((it)=> it.menueId === val.id &&  it.itemName === c.itemName)).length) }

                                                            {((val.Categories.filter((it)=> it.menueId === val.id &&  it.itemName === c.itemName)).length) === 1 ? ' ' : ' ) ' }

                                                        </span>
                                                        <span >
                                                            
                                                            {/* CT- {c.contractor?.name} */}

                                                            {(val.Categories.filter((it)=> it.menueId === val.id &&  it.itemName === c.itemName))?.map((ct, index)=>{
                                                                return(
                                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2' 
                                                                        onClick={() => { handleShowModal(ct.id) }} key={index}>
                                                                        
                                                                        {'Ct' + Number(index+1) + '-'} {ct.contractor?.name}</span>
                                                                )
                                                            })}
    
                                                        </span>
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.functionDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.serviceTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.departureDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.departureTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.mobile}
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

