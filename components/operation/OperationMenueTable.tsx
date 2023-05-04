import React, { useEffect, useState } from 'react'
import { Menue, Categories, Contractor } from '@prisma/client'
// import Dialoge from '@mui/material/Dialog'
import { handleApiErrors } from '@/utils/handleapierrors'
import { getMenuesApi } from '@/providers/apis'
// import DialogTitle from '@mui/material/DialogTitle'
// import CheckBox from '@mui/material/Checkbox'
// import { DialogActions } from '@mui/material'
import { Button } from '../Button/Button'
import Input from '../Inputs/Input'
import { updateOperationMenueApi } from '@/providers/apis/operation'
import { convertJSONintoExcelFile } from '@/utils/convertJSONintoExcelFile'
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
    const menueState = useAppSelector(s => s.menue)
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [contractorNameSearch, setcontractorNameSearch] = useState("")
    const [searchDepartureDate, setsearchDepartureDate] = useState("")
    // const [disableContractorEdit, serdisableContractorEdit] = useState(true)
    const [menuesData, setmenuesData] = useState<Menue[]>([])
    const [menueSearch, setmenueSearch] = useState<string>("")  

    // console.log('mm', menuesData);
        
    const getMenueData = async (search: "") => {      
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

    const resetMenue = async() => {                  
        setsearchDepartureDate("")
        setstartDate("")
        setendDate("")
        setmenueSearch("")
        
        const menues = await getMenuesApi({})
        setmenuesData(menues.data.menues)    
    }

    const dispatch = useAppDispatch()
    const cstate = useAppSelector(s => s.contractor)

    useEffect(() => {
        getMenueData(menueSearch)
    }, [])
    useEffect(() => {
        getMenueData(menueSearch)
    }, [menueState.refetchData])
    
    const handleShowModal = async (cid: string, workAssigned: string) => { 
        
        dispatch(selectContractorsUsingCategoryId({ cid: cid, workAssigned: workAssigned }))
        dispatch(fetchContractorsThunk(cid))

        console.log('cid', cid);
        
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

    // get all categories from the system
    const categories: ICategories[] = []
    menuesData?.filter((it)=> it.cancel===false)?.map((item)=> {
        item?.Categories?.map((it: ICategories)=>{
            categories.push(it)
        })
    })
        
    return (
        <>
                <div className='flex items-center space-x-4'>
                    <Input label='Start Date' onChange={(e) => { setstartDate(e.target.value) }} type='date' value={startDate} />
                    <Input label='End Date' onChange={(e) => { setendDate(e.target.value) }} type='date' value={endDate} />
                </div>
                <div className='flex items-center'>
                    <Input type='date' label='Departure Date' value={searchDepartureDate}
                        onChange={(e) => { setsearchDepartureDate(e.target.value) }}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <Input placeholder='Search...' value={menueSearch} onChange={(e) => { setmenueSearch(e.target.value) }} />
                    <Button title='Search' onClick={() => {
                        getMenueData(menueSearch)
                    }} />
                    <Button title='Download' onClick={handleConvertJSONToExcel} />
                    <Button
                        title='Reset'
                        onClick={() => resetMenue()}
                    />
                </div>
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
                                <th className="px-4 py-3 uppercase">Helper</th>

                                <th className="px-4 py-3 uppercase">function date</th>
                                <th className="px-4 py-3 uppercase">service time</th>
                                <th className="px-4 py-3 uppercase">departure date</th>
                                <th className="px-4 py-3 uppercase">departure time</th>
                                <th className="px-4 py-3 uppercase">guest mobile number</th>
                                <th className="px-4 py-3 uppercase">Head Name</th>
                                <th className="px-4 py-3 uppercase">Head Mobile Number</th>
                                <th className="px-4 py-3 uppercase">Cleaner</th>
                                <th className="px-4 py-3 uppercase">Driver Name</th>
                                <th className="px-4 py-3 uppercase">Vehicle Number</th>
                                <th className="px-4 py-3 uppercase">actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white whitespace-nowrap">
                            {
                               ( menuesData ? menuesData : menues)?.filter((it)=> it.cancel===false).map((val, index) => (
                                    <tr className="text-gray-700 even:bg-#D6EEEE odd:bg-blue-100" key={index}>
                                        <td className="px-4 py-3 border">
                                            {val.name}
                                        </td>
                                        <td className="px-4 py-3 border space-y-4">
                                            { 
                                                    [...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.filter((item)=>item.itemName !== 'head' && item.itemName !== 'helper' && item.itemName !== 'cleaner')?.map((c: any, ci) => {
                                                    return (
                                                        <div key={ci} className="bg-gray-100 p-[1px]">
                                                            <span className='font-bold text-md underline underline-offset-4 overflow-y-auto'>
                                                                {c.itemName}

                                                                {((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? '' : ' ( ' }

                                                                {((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? '' :
                                                                ((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) }

                                                                {((val.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === val.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? ' ' : ' ) ' }

                                                            </span>
                                                            
                                                            <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 pl-3 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(
                                                                `${[...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.filter((item)=> item.menueId === val.id &&  item.itemName === c.itemName && item.itemName !== 'head' && item.itemName !== 'helper' && item.itemName !== 'cleaner' )[0].id}`, 
                                                                
                                                                'contractor') }}> 
                                                                MP:- 
                                                            </span>
                                                            <span>
                                                                {
                                                                    val.Categories.filter((it)=> (it.menueId === val.id &&  it.itemName === c.itemName && it?.itemName !== 'head' && it?.itemName !== 'cleaner' && it?.itemName !== 'helper')).map((ctgr, index)=> (
                                                                        <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2' onClick={() => { handleShowModal(ctgr.id, 'contractor') }} key={index}>
                                                                            {ctgr?.contractor?.name }
                                                                        </span>
                                                                    ))
                                                                }
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </td>
                                        <td className="px-4 py-3 border">
                                            <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(
                                                `${[...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.filter((item)=>item.itemName !== 'head' && item.itemName !== 'helper' && item.itemName !== 'cleaner' && item.itemName !== 'contractor')[0].id}`, 
                                                
                                                'helper') }}> 
                                                Hp:- 
                                            </span>
                                            {/* {   
                                                val?.Categories.filter((it)=> it.menueId === val.id || (it.itemName === 'helper' || it?.contractor?.item === 'helper')).map((ctgr, index)=> (
                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 pr-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(ctgr.id, 'helper') }} key={index}>
                                                        {ctgr?.contractor?.item === 'helper' ? ctgr?.contractor?.name : ''}
                                                    </span>
                                                ))
                                            } */}
                                            { 
                                                val.Categories.filter((it: { menueId: string; contractor: { item: string }; itemName: string })=> (it.menueId === val.id && it.itemName === 'helper')).map((ctgr: { id: string; contractor: { name: any } }, index: React.Key | null | undefined)=> (
                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(ctgr.id, 'helper') }} key={index}>
                                                       {ctgr?.contractor?.name}
                                                    </span>
                                                ))                  
                                            }
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {new Date(val.functionDate).toLocaleDateString('en-GB')}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {new Date(val.serviceTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {new Date(val.departureDate).toLocaleDateString('en-GB')}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {new Date(val.departureTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {val.mobile}
                                        </td>

                                        <td className="px-4 py-3 border space-y-4">
                                            {/* { 
                                                val.Categories.filter((it: { menueId: string; contractor: { item: string }; itemName: string })=> (it.menueId === val.id && it.contractor?.item === 'head' && it.itemName === 'head')).map((ctgr: { id: string; contractor: { name: any } }, index: React.Key | null | undefined)=> (
                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(ctgr.id) }} key={index}>
                                                        { `Hd-${ctgr?.contractor?.name}`}
                                                    </span>
                                                ))                  
                                            } */}
                                            <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(
                                                `${[...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.filter((item)=>item.itemName !== 'head' && item.itemName !== 'helper' && item.itemName !== 'cleaner' && item.itemName !== 'contractor')[0].id}`, 
                                                
                                                'head') }}> 
                                                Hd:- 
                                            </span>
                                            { 
                                                val.Categories.filter((it: { menueId: string; contractor: { item: string }; itemName: string })=> (it.menueId === val.id && it.itemName === 'head')).map((ctgr: { id: string; contractor: { name: any } }, index: React.Key | null | undefined)=> (
                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(ctgr.id, 'head') }} key={index}>
                                                       {ctgr?.contractor?.name}
                                                    </span>
                                                ))                  
                                            }
                                            
                                        </td>
                                        <td className="px-4 py-3 border">
                                            { 
                                                val.Categories.filter((it: { menueId: string; contractor: { item: string }; itemName: string })=> (it.menueId === val.id && it.itemName === 'head')).map((ctgr: { id: string; contractor: { name: any } }, index: React.Key | null | undefined)=> (
                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 px-2 bg-gray-100 p-[1px]' key={index}>
                                                        {ctgr?.contractor?.phone}
                                                    </span>
                                                ))                  
                                            }
                                        </td>

                                        <td className="px-4 py-3 border space-y-4">

                                            <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(
                                                `${[...new Map(val.Categories?.map((item: any) => [item['itemName'], item])).values()]?.filter((item)=>item.itemName !== 'head' && item.itemName !== 'helper' && item.itemName !== 'cleaner' && item.itemName !== 'contractor')[0].id}`, 
                                                
                                                'cleaner') }}> 
                                                Cl:- 
                                            </span>
                                            { 
                                                val.Categories.filter((it: { menueId: string; contractor: { item: string }; itemName: string })=> (it.menueId === val.id && it.itemName === 'cleaner')).map((ctgr: { id: string; contractor: { name: any } }, index: React.Key | null | undefined)=> (
                                                    <span className='font-semi-bold text-semi-lg underline underline-offset-4 cursor-pointer hover:text-green-500 px-2 bg-gray-100 p-[1px]' onClick={() => { handleShowModal(ctgr.id, 'cleaner') }} key={index}>
                                                       {ctgr?.contractor?.name}
                                                    </span>
                                                ))                  
                                            }                 
                                        </td>

                                        <EditAbleColumns isWagePageRequest={isWagePageRequest} val={val} />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
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
                    // cleaner: data.cleaner,
                    driverName: data.driverName,
                    // headMobileNumber: data.headMobileNumber,
                    // headName: data.headName,
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
            {/* <td className="px-4 py-3 border" >
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
            </td> */}
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
            {/* <td className="px-4 py-3 border">
                {
                    update ?
                        <Input name='cleaner' value={data.cleaner} onChange={handleChange} />
                        :
                        data.cleaner
                }
            </td> */}
            <td className="px-4 py-3 border space-x-3">
                {
                    isWagePageRequest ?
                        <>
                            <Button title='Edit' onClick={() => {
                                window.location.href = `/wage/edit/${val.id}`
                            }} />
                            <Link href={`/admin/menueprint/${val.id}`}>
                                <Button title='Print' />
                            </Link>
                        </>
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

