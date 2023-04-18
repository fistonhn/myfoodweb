// @ts-nocheck
import { ICategories, IManueModal } from '@/models/Menue/type'
import React, { useState } from 'react'
import { Dialog, Checkbox, DialogActions } from '@mui/material'
import { getContractorByItem, updateMenueCategories } from '@/providers/apis'
import { IContractor } from '@/models/Contractor/type'
import { Button } from '../Button/Button'
// name
// address
// email
// phone
// bookingDate
// bookingId
// categories
// function
// pinCode
interface IData extends IManueModal {
    _id: string
}
interface IExcel {
    data: IData[]
}

interface IContractorExtended extends IContractor {
    _id: string
}
const Excel = ({ data }: IExcel) => {
    const [modal, setmodal] = useState(false)
    const [currentMenueId, setcurrentMenueId] = useState<string>("")
    const [contractors, setcontractors] = useState<IContractorExtended[]>([])
    const [currectSelectCategories, setcurrectSelectCategories] = useState<ICategories[]>([])
    const [selectedContractors, setselectedContractors] = useState<IContractorExtended | null>(null)
    const [contractorIndex, setcontractorIndex] = useState<number | null>(null)
    const [parentCategoryIndex, setparentCategoryIndex] = useState<number | null>(null)
    const handleContractorChange = async (item: string, categories: ICategories[], _contractorIndex: number, parentIndex: number, menueId: string) => {
        setcurrentMenueId(menueId)
        setcurrectSelectCategories(categories)
        setmodal(true)
        setcontractorIndex(_contractorIndex)
        setparentCategoryIndex(parentIndex)
        try {
            const res = await getContractorByItem({ item: item })
            setcontractors(res.data.contractors)
        } catch (error: any) {
            alert(error.message)
        }
    }
    const handleModalClose = () => {
        setcontractors([])
        setcurrectSelectCategories([])
        setselectedContractors(null)
        setmodal(false)
        setcontractorIndex(null)
    }
    const handleUpdate = async () => {
        console.log(currectSelectCategories)
        console.log(selectedContractors)
        console.log("in change event")
        console.log("parent index===>", parentCategoryIndex)
        if (parentCategoryIndex === null) {
            return;
        }
        let changed = false
        let updatedCategories = [...currectSelectCategories]
        updatedCategories[parentCategoryIndex].contractor = [...updatedCategories[parentCategoryIndex].contractor?.map((c, i) => {
            if (contractorIndex === i) {
                changed = true
                console.log("changed==>")
                return selectedContractors
            }
            return c
        })]
        if (changed === false) {
            updatedCategories[parentCategoryIndex].contractor = [...updatedCategories[parentCategoryIndex].contractor!, selectedContractors]
        }
        console.log("updated==>", updatedCategories)
        try {
            await updateMenueCategories({ _id: currentMenueId, categories: updatedCategories })
            alert("updated successfully!")
        } catch (error: any) {
            alert(error.message)
        }
    }
    return (
        <section className="container mx-auto p-6 font-mono">
            <Dialog open={modal} maxWidth={"md"} onClose={handleModalClose}>
                <div className='p-10 w-[500px]'>
                    <h1>Available Contractors</h1>
                    {contractors.map((c, ci) => (
                        <div key={ci}>
                            <Checkbox
                                onClick={() => {
                                    setselectedContractors(c)
                                }}
                                checked={c._id === selectedContractors?._id}
                            /> <span>{c.name}</span>
                        </div>
                    ))}
                </div>
                <DialogActions>
                    <Button title='UPDATE' onClick={handleUpdate} />
                    <Button title='CANCEL' onClick={handleModalClose} />
                </DialogActions>
            </Dialog>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3 uppercase">order id</th>
                                <th className="px-4 py-3 uppercase">Name</th>
                                <th className="px-4 py-3 uppercase whitespace-nowrap">customer id</th>
                                <th className="px-4 py-3 uppercase">address</th>
                                <th className="px-4 py-3 uppercase">email</th>
                                <th className="px-4 py-3 uppercase">bookingDate</th>
                                <th className="px-4 py-3 uppercase">categories/contractors</th>
                                <th className="px-4 py-3 uppercase">function</th>
                                <th className="px-4 py-3 uppercase">pinCode</th>
                                <th className="px-4 py-3 uppercase">amount</th>
                                <th className="px-4 py-3 uppercase">advance</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white ">
                            {
                                data.map((item, index) => (
                                    <tr key={index} className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            {item._id}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-3 text-sm border !whitespace-nowrap">{item.customerId}</td>
                                        <td className="px-4 py-3 text-ms font-semibold border">{item.address}</td>
                                        <td className="px-4 py-3 text-xs border">
                                            {item.email}
                                        </td>
                                        <td className="px-4 py-3 text-sm border">{item.bookingDate}</td>
                                        <td className="px-4 py-3 text-sm border">
                                            <div>
                                                {item.categories.map((cat, ci) => {
                                                    return (
                                                        <div key={ci}>
                                                            <span className='bg-primary'>Stalls:{cat.stalls}</span>
                                                            {

                                                                Array(cat.stalls).fill("").map((v, i) => {
                                                                    let _contractor = cat.contractor && cat.contractor[i] ? cat.contractor[i] : null
                                                                    return (
                                                                        <div className='grid' key={i}>
                                                                            <span key={ci}>{cat.title}{", "}</span>
                                                                            <span onClick={() => { handleContractorChange(cat.title, item.categories, i, ci, item._id) }} className='bg-green-400 cursor-pointer'>{cat.contractor && cat.contractor[i] ? cat.contractor[i].name : "no contructor"}</span>
                                                                            {/* <Button title='Update' className='mt-3' /> */}
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm border">{item.function}</td>
                                        <td className="px-4 py-3 text-sm border">{item.pinCode}</td>
                                        <td className="px-4 py-3 text-sm border">{item.amount}</td>
                                        <td className="px-4 py-3 text-sm border">{item.advance}</td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export { Excel }