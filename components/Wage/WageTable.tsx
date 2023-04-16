import React, { useEffect, useState } from 'react'
import { Menue, Categories, Contractor } from '@prisma/client'
import Dialoge from '@mui/material/Dialog'
import { handleApiErrors } from '@/utils/handleapierrors'
import { getAvailableContractorsWithItem, updateCategoryFinalWage, updateCatgoryContractor } from '@/providers/apis'
import DialogTitle from '@mui/material/DialogTitle'
import CheckBox from '@mui/material/Checkbox'
import { DialogActions } from '@mui/material'
import { Button } from '../Button/Button'
import Input from '../Inputs/Input'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
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
const WageTable = ({ menues }: MenueTableProp) => {
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
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            {
                updateDialoge &&
                <UpdateContractorsModal open={updateDialoge} onClose={handleClose} category={selectedCategory} />
            }
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase">Booking ID</th>
                            <th className="px-4 py-3 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white whitespace-nowrap">
                        {
                            menues.map((val, index) => (
                                <tr className="text-gray-700" key={index}>
                                    <td className="px-4 py-3 border">
                                        {val.bookingId}
                                    </td>
                                    <td className="px-4 py-3 border space-y-4 ">
                                        <span onClick={() => {
                                            window.location.href = `/wage/edit/${val.id}`
                                        }} className='cursor-pointer underline text-blue-700 underline-offset-4 '>Edit</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}
const Record = ({ cat: c }: { cat: ICategories }) => {
    const [finalWage, setfinalWage] = useState(c.finalWage ? c.finalWage : "")
    const [update, setupdate] = useState(false)
    const handleUpdate = () => {
        setupdate(!update)
    }
    const onUpdate = async () => {
        try {
            const res = await updateCategoryFinalWage({
                categoryId: c.id,
                finalWage: finalWage
            })
            alert(res.data.msg)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
                {c.contractor?.name}
            </td>
            <td className="px-4 py-3 border">
                {c.contractor?.wage}
            </td>
            <td className="px-4 py-3 border flex items-center space-x-2">
                {
                    !update ?
                        c.finalWage
                        :
                        <Input onChange={(e) => { setfinalWage(e.target.value) }} type='number' value={finalWage ? finalWage : ""} />
                }
                {
                    !update ?
                        <IconButton onClick={handleUpdate} className="ml-5 border ">
                            <EditIcon className='text-blue-700' />
                        </IconButton> :
                        <>
                            <span onClick={onUpdate} className='bg-gray-100 p-2 uppercase border cursor-pointer'>update</span>
                            <span onClick={handleUpdate} className='bg-gray-100 p-2 uppercase border cursor-pointer'>cancel</span>
                        </>
                }
            </td>
        </tr>
    )
}
export { WageTable }


