import React, { useEffect, useState } from 'react'
import { Categories, Contractor, ContractorDocs } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { getAllContractorsApi, updateContractorAPi, uploadContractor, uploadDocApi } from '@/providers/apis'
import Input from '../Inputs/Input'
import { Select } from '@/components/Select'
import { Button } from '../Button/Button'
interface contractorModalsProp {
    allowEdit?: boolean
}
type TContracotr = (Contractor & {
    Categories: Categories[];
    documents?: ContractorDocs[];
})
const ContractorModel = ({ allowEdit = true }: contractorModalsProp) => {
    const [update, setupdate] = useState(false)
    const [contractors, setcontractors] = useState<TContracotr[]>([])
    const getContractors = async () => {
        try {
            const res = await getAllContractorsApi()
            setcontractors(res.data.contractors)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    useEffect(() => {
        getContractors()
    }, [])
    const handleUpdate = async () => {
        try {
            await uploadContractor({
                contractors: contractors
            })
            alert("Contractors Uploaded Successfully.")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <div className={`relative w-full mb-8 overflow-hidden rounded-lg shadow-lg ${update && "pt-12"}`}>

            <div className="w-full overflow-x-auto">
                {
                    update &&

                    <Button className='absolute top-1 left-[50%]' title='Update' onClick={handleUpdate} />

                }
                <div className="w-full overflow-x-auto max-h-[450px]">
                    <table className="w-full">
                        <thead className='sticky top-0'>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                                <th className="px-4 py-3 uppercase">id</th>
                                <th className="px-4 py-3 uppercase">name</th>
                                <th className="px-4 py-3 uppercase">item</th>
                                <th className="px-4 py-3 uppercase ">age</th>
                                <th className="px-4 py-3 uppercase">wage</th>
                                <th className="px-4 py-3 uppercase">group</th>
                                <th className="px-4 py-3 uppercase">area</th>
                                <th className="px-4 py-3 uppercase">phone</th>
                                <th className="px-4 py-3 uppercase">address</th>
                                <th className="px-4 py-3 uppercase">identity number</th>
                                {/* <th className="px-4 py-3 uppercase">cleaner</th>
                                <th className="px-4 py-3 uppercase">cleaner wage</th>
                                <th className="px-4 py-3 uppercase">headname</th>
                                <th className="px-4 py-3 uppercase">headname wage</th> */}
                                <th className="px-4 py-3 uppercase">Docs</th>
                                <th className="px-4 py-3 uppercase">reactivedate</th>
                                <th className="px-4 py-3 uppercase">status</th>
                                <th className="px-4 py-3 uppercase">actions</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white whitespace-nowrap">
                            {
                                contractors.map((val, index) => (
                                    <tr className="text-gray-700" key={index}>
                                        <td className="px-4 py-3 border">
                                            {val.id}
                                        </td>
                                        <Item data={val} />
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export { ContractorModel }
interface DocUploadComponentProp {
    contractor: Contractor
}
const DocUploadComponent = ({ contractor }: DocUploadComponentProp) => {
    const [image, setimage] = useState<File | null>(null)
    const [name, setname] = useState("")
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleUpload = async () => {
        if (!name) {
            return alert("kindly enter the title of the document.")
        }
        if (!image) {
            return alert("kindly select the file.")
        }

        try {
            await uploadDocApi({
                name: name,
                file: image,
                contractorid: contractor.id
            })
            alert("Upload successfully!")
            if (inputRef.current) {
                inputRef.current.value = ""
            }
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <td className="px-4 py-3 border">
            <div className='grid gap-y-2'>
                <Input className='w-[200px]' placeholder='Title...' value={name} onChange={(e) => { setname(e.target.value) }} />
                <input ref={inputRef} type={"file"} onChange={async (e) => {
                    if (e.target.files === null) {
                        return;
                    }
                    const file = e.target.files[0]
                    setimage(file)

                }}
                />
                <Button onClick={handleUpload} title='Upload' />
            </div>
        </td>
    )
}

interface DocItemProp {
    doc: ContractorDocs
}
const DocItem = ({ doc }: DocItemProp) => {
    return (

        <div className='grid ga'>
            <h1>{doc.name}</h1>
            <a href={doc.url} className="text-blue-700 text-sm" target="_blank">
                {doc.url}
            </a>
        </div>

    )
}


interface ItemProp {
    data: TContracotr
}
const Item = ({ data }: ItemProp) => {
    const [val, setval] = useState(data)
    const [allowEdit, setallowEdit] = useState(false)
    const handleChange = (name: string, value: any) => {
        setval((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleUpdateContractor = async () => {
        try {
            const upData = {
                ...val,
                reActiveDate: new Date(val.reActiveDate),
            }

            await updateContractorAPi({
                data: upData
            })
            alert("Contractor updated successfully.")
            setallowEdit(false)
            
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className='!w-[200px]' value={val.name} onChange={(e) => {
                            handleChange("name", e.target.value)
                        }} />
                        :
                        val.name

                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val.item} onChange={(e) => {
                            handleChange("item", e.target.value)
                        }} />
                        :
                        val.item
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val.age} onChange={(e) => {
                            handleChange("age", Number(e.target.value))
                        }} />
                        :
                        val.age
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val.wage} onChange={(e) => {
                            handleChange("wage", Number(e.target.value))
                        }} />
                        :
                        val.wage
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val.group} onChange={(e) => {
                            handleChange("group", e.target.value)
                        }} />
                        :
                        val.group
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val.area} onChange={(e) => {
                            handleChange("area", e.target.value)
                        }} />
                        :
                        val.area
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.phone ? val.phone : ""} onChange={(e) => {
                            handleChange("phone", e.target.value)
                        }} />
                        :
                        val.phone
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.address ? val.address : ""} onChange={(e) => {
                            handleChange("address", e.target.value)
                        }} />
                        :
                        val.address
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.identitynumber ? val.identitynumber : ""} onChange={(e) => {
                            handleChange("identitynumber", e.target.value)
                        }} />
                        :
                        val.identitynumber
                }
            </td>
            {/* <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.cleaner ? val.cleaner : ""} onChange={(e) => {
                            handleChange("cleaner", e.target.value)
                        }} />
                        :
                        val.cleaner
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" type='number' value={val?.cleanerWage ? val.cleanerWage : ""} onChange={(e) => {
                            handleChange("cleanerWage", e.target.value)
                        }} />
                        :
                        val.cleanerWage
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.headname ? val.headname : ""} onChange={(e) => {
                            handleChange("headname", e.target.value)
                        }} />
                        :
                        val.headname
                }
            </td>
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.headnameWage ? val.headnameWage : ""} onChange={(e) => {
                            handleChange("headnameWage", e.target.value)
                        }} />
                        :
                        val.headnameWage
                }
            </td> */}
            <td className="px-4 py-3 border">
                {
                    allowEdit &&
                    <DocUploadComponent contractor={val} />
                }
                {
                    !allowEdit &&
                    (val.documents && val.documents.length > 0) &&
                    val?.documents?.map((d, di) => {
                        return (
                            <DocItem key={di} doc={d} />
                        )
                    })
                }
            </td>
            <td className="px-4 py-3 border">
            {
                    allowEdit ?
                        <Input className="!w-[200px]" value={val?.reActiveDate ? val.reActiveDate  : ""} onChange={(e) => {
                            handleChange("reActiveDate", (e.target.value))
                        }} type="date"/>
                        :
                        new Date(val.reActiveDate).toLocaleDateString() 
                }
            </td> 
            <td className="px-4 py-3 border">
                {
                    allowEdit ?
                        <Select className="!w-[120px]" value={val?.status ? val.status: ""} onChange={(e) => {
                            handleChange("status", e.target.value)
                        }} options={[{ content: "active", value: "active" }, { content: "inactive", value: "inactive" }]}/>
                        :
                        val.status
                }
            </td>
            {
                allowEdit ?
                    <td className='px-4 py-3 border space-x-4' >
                        <Button title='Save' onClick={handleUpdateContractor} />
                        <Button title='Cancel' onClick={() => { setallowEdit(false) }} />
                    </td>
                    :
                    <td className='px-4 py-3 border'>
                        <Button title='Edit' onClick={() => { setallowEdit(true) }} />

                    </td>
            }
        </>
    )
}