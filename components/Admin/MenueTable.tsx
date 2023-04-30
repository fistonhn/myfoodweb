import React, { useEffect, useState } from 'react'
import { deleteBookingApi, getMenuesApi } from '@/providers/apis'

import { Menue, Categories, Contractor } from '@prisma/client'
import { useAppDispatch, useAppSelector } from '@/store'
import { GetContractorModal } from './GetContractorsModal/GetContractorModal'
import { fetchContractorsThunk, selectContractorsUsingCategoryId } from '@/slices/contractors.slice'
import { Button } from '@/components/Button/Button'

interface ICategories extends Categories {
    contractor?: Contractor
}
interface IMenue extends Menue {
    menueId(id: string, menueId: any): void
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
const MenueTable = ({ menues }: MenueTableProp) => {
    const dispatch = useAppDispatch()
    const [menuesData, setmenuesData] = useState(menues)

    const cstate = useAppSelector(s => s.contractor)
    const handleShowModal = (cid: string) => {
        dispatch(selectContractorsUsingCategoryId({ cid: cid }))
        dispatch(fetchContractorsThunk(cid))
    }

    const getMenueData = async () => {
        const menuesUpdate = await getMenuesApi({})
        setmenuesData(menuesUpdate.data.menues)
    } 

    useEffect(() => {
        getMenueData()
    }, [])

    const handleDeleteBooking = async (id: any, menueId: any) => {        
        const selId = {
            id: id,
            menueId: menueId
        }
        await deleteBookingApi({selId}) 
        alert('Booking successfully deleted')
        getMenueData()

    }
    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            {
                cstate.showUpdateContractorModal &&
                <GetContractorModal />
            }
            <div className="w-full overflow-x-auto max-h-[650px]">
                <table className="w-full">
                    <thead className='sticky top-0'>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase whitespace-nowrap">guest name</th>
                            <th className="px-4 py-3 uppercase">Categories</th>
                            <th className="px-4 py-3 uppercase">function</th>
                            <th className="px-4 py-3 uppercase whitespace-nowrap">booking id</th>
                            <th className="px-4 py-3 uppercase whitespace-nowrap">created at</th>
                            <th className="px-4 py-3 uppercase">function date</th>
                            <th className="px-4 py-3 uppercase">guest mobile number</th>
                            <th className="px-4 py-3 uppercase">Service Time</th>
                            <th className="px-4 py-3 uppercase">venue</th>
                            <th className="px-4 py-3 uppercase">Departure Date</th>
                            <th className="px-4 py-3 uppercase">Departure Time</th>
                            <th className="px-4 py-3 uppercase">PAX</th>
                            <th className="px-4 py-3 uppercase">Plate</th>
                            <th className="px-4 py-3 uppercase">Special Instruction</th>
                            <th className="px-4 py-3 uppercase">Head Name</th>
                            <th className="px-4 py-3 uppercase">Head Mobile Number</th>
                            <th className="px-4 py-3 uppercase">Driver Name</th>
                            <th className="px-4 py-3 uppercase">Vehicle Number</th>
                            <th className="px-4 py-3 uppercase">words</th>
                            <th className="px-4 py-3 uppercase">cleaner</th>
                            <th className="px-4 py-3 uppercase">booked By</th>
                            <th className="px-4 py-3 uppercase">booker Mobile Number</th>
                            <th className="px-4 py-3 uppercase">note</th>
                            <th className="px-4 py-3 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white whitespace-nowrap">
                        {
                            menuesData.map((val, index) => (
                                <tr className="text-gray-700 even:bg-#D6EEEE odd:bg-blue-100" key={index}>
                                    <td className="px-4 py-3 border">
                                        {val.name}
                                    </td>
                                    <td className="px-4 py-3 border space-y-4">
                                            { 
                                                [...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.filter((item)=>item.itemName !== 'head' && item.itemName !== 'helper' && item.itemName !== 'cleaner')?.map((c: any, ci) => {
                                                return (
                                                    <div key={ci} className="p-[1px]">
                                                        <span className='font-bold text-md overflow-y-auto pr-2'>
                                                            {c.itemName}

                                                            {((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? '' : ' ( ' }

                                                            {((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? '' :
                                                            ((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) }

                                                            {((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? ' ' : ' ) ' }

                                                        </span>
                                                        <span>
                                                            { 
                                                                val.Categories.filter((it)=> (it.menueId === val.id &&  it.itemName === c.itemName && it?.itemName !== 'head' && it?.itemName !== 'cleaner' && it?.itemName !== 'helper')).map((ctgr, index)=> 
                                                                {
                                                                    return <span key={`ctname${index}`}>{ctgr?.contractor?.name ? (index ? ', ' : '') +  ctgr?.contractor?.name :  null}</span>;

                                                                })                  
                                                            }
                                                        </span>

                                                        
                                                    </div>
                                                )
                                            }
                                                )
                                            }
                                    </td>

                                    <td className="px-4 py-3 border">
                                        {val.function}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.bookingId}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {
                                            val.createdAt ?
                                                `${new Date(val.createdAt).toLocaleDateString()}`
                                                :
                                                "null"
                                        }
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.functionDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.mobile}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.serviceTime).toTimeString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.venue}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.departureDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.departureTime).toTimeString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.PAX}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.PLATE}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.specialInstruction}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        { 
                                            val.Categories.filter((it)=> (it.menueId === val.id && it.itemName === 'head')).map((ctgr, index)=> 
                                            {
                                                return <span key={`name${index}`}>{ ctgr?.contractor?.name ? (index ? ', ' : '') + ctgr?.contractor?.name :  null}</span>;

                                            })                  
                                        }
                                    </td>
                                    <td className="px-4 py-3 border">
                                       { 
                                        val.Categories.filter((it)=> (it.menueId === val.id && it.itemName === 'head')).map((ctgr, index) => 
                                        {
                                            return <span key={`phone_${index}`}>{ ctgr?.contractor?.phone ? (index ? ', ' : '') + ctgr?.contractor?.phone :  null}</span>;

                                        })                  
                                      }
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.driverName}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.vehicleNumber}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.words}
                                    </td>
                                    <td className="px-4 py-3 border">
                                      { 
                                        val.Categories.filter((it )=> (it.menueId === val.id && it.itemName === 'cleaner')).map((ctgr, index)=> 
                                        {
                                            return <span key={`cl_${index}`} className='px-1'>{ ctgr?.contractor?.name ? (index ? ', ' : '') + ctgr?.contractor?.name :  null}</span>;

                                        })                  
                                      }
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.bookedBy}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.bookerMobileNumber}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.note}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        <Button title='Delete' className=' relative' onClick={()=>handleDeleteBooking(val.id, val.menueId)}>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { MenueTable }

