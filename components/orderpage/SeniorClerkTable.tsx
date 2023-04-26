// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Menue, Categories, Contractor } from '@prisma/client'
import Dialoge from '@mui/material/Dialog'
import { ContractorModel } from '@/components/ContractorModel/ContractorModel'
import { handleApiErrors } from '@/utils/handleapierrors'
import { getAvailableContractorsWithItem, updateCatgoryContractor } from '@/providers/apis'
import DialogTitle from '@mui/material/DialogTitle'
import CheckBox from '@mui/material/Checkbox'
import { DialogActions } from '@mui/material'
import { Button } from '../Button/Button'
import Input from '../Inputs/Input'
import { getMenuesApi } from '@/providers/apis/menueApis.ts'
import { updateSeniorClekMenueApi, cancelBooking } from '@/providers/apis/order'
import { Select } from '../Select'
import { functionsConstants } from '@/data/data'
import { ISODateIntoLocalDate } from '@/utils/ISODateToLocalDate'
import { ISODateIntoLocalTime } from '@/utils/ISODateToLocalTime'
import { updateDateWithHourAndMinute } from '@/utils/updateDateWithHoursAndMinutes'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getItemsApi } from '@/providers/apis'
import { createNewCategory, deleteCategory } from '@/providers/apis/category'
import Link from 'next/link'

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
    const [open, setOpen] = useState(false);
    const [menue, setmenue] = useState([]);
    const [searchedItemsResult, setsearchedItemsResult] = useState<{ title: string, item: string }[]>([])
    const [selectedItems, setselectedItems] = useState<{ item: string, counter: string, comment: string }[]>([])
    const [itemsData, setitemsData] = useState([])

    const getItemDatas = async () => {
        const res = await getItemsApi([])
    
        const { items } = res.data
        setitemsData(items)
    
      }
      useEffect(() => {
        if (itemsData) {
          let _sub = [] as string[]
          itemsData?.forEach(it => {
              _sub.push(it.itemName)
          })
    
          getItemDatas()
        }
      }, [itemsData])

    const handleOpen = async (id) => {
        setOpen(true)

        const res = await getMenuesApi({})

        const booking = res.data.menues.filter((it)=>it.id===id)
        
        setmenue(...booking)
        
    };
    const handleClose = () => {
        setOpen(false)
        setselectedItems([])
    };
    
    const handleSearchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        const toReturn = [] as { title: string, item: string }[]
        if (!e.target.value) {
          setsearchedItemsResult([])
          return;
        }
        
        itemsData?.forEach(v => {
            if (v.itemName.toLowerCase().includes(e.target.value.toLowerCase())) {
              
              toReturn.push(v)
            }
        })
    
        setsearchedItemsResult(toReturn)
        
    }
    const handleDeleteSelectedItems = (index: number) => {
        const updated = [] as {
          item: string;
          counter: string;
          comment: string;
        }[]
        selectedItems.forEach((v, i) => {
          if (i !== index) {
            updated.push(v)
          }
        })
        setselectedItems(updated)
    }
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
                // @ts-ignore
                const _departureHourMinute = data.departureTime.split(":")
                _departureTime = updateDateWithHourAndMinute(new Date(data.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]))
            }


            // 
            let _serviceTime = data.serviceTime
            if (data?.serviceTime && !data.serviceTime.toString().includes("Z")) {
                // @ts-ignore
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
                    departureDate: new Date(data.departureDate),
                    garlic: data.garlic,
                    onion: data.onion
                }
            })
            alert("Updated Successfully!")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    const handleCancel = async () => {
        try {
            await cancelBooking({
                data: {
                    bookingId: data.id,
                }
            })
            
            alert("Cancel booking Successfully!")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    const handleChangeFormData = (index: number, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value, name } = e.target
        const newData = [...selectedItems].map((v, i) => {
          if (index === i) {
            return {
              ...v,
              [name]: value
            }
          }
          return v;
        })
        setselectedItems(newData)
      }

    const handleAddCategory = async (e: React.FormEvent) => {
        e.preventDefault()

        let isOkay = true
        selectedItems.forEach(v => {
            if (!v.counter || (Number(v.counter) < 0 || Number(v.counter) > 5)) {
              isOkay = false
            }      
          })
          if (!isOkay) {
            return alert("kindly select number of counters for all items and maximum of 5.")
          }   
          
          if (selectedItems.length === 0) {
            return alert("Kindly Select Atleast One Item.")
          }

          await createNewCategory({
            menue: menue,
            selectedItems: selectedItems
          })
          
          alert("added successfully!")
        
          const res = await getMenuesApi({})
          const booking = res.data.menues.filter((it)=>it.id === menue.id)
          setmenue(...booking)
          setselectedItems([])
        
    }
    const renderSelectedItems = () => {
        return (
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3 uppercase">no.</th>
                    <th className="px-4 py-3 uppercase">item</th>
                    <th className="px-4 py-3 uppercase whitespace-nowrap">counter</th>
                    <th className="px-4 py-3 uppercase">comment</th>
                    <th className="px-4 py-3 uppercase">actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {
                    selectedItems.map((item, index) => (
                      <tr key={index} className="text-gray-700">
                        <td className="px-4 py-3 border">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 border">
                          {item.item}
                        </td>
                        <td className="px-4 py-3 border">
                          <input name='counter' type={"number"} value={item.counter} onChange={(e) => {
    
                            handleChangeFormData(index, e)
                          }} className="w-[100px] outline-none border p-1" />
                        </td>
                        <td className="px-4 py-3 border">
                          <textarea name='comment' className='outline-none border p-1' onChange={(e) => { handleChangeFormData(index, e) }} placeholder='Enter Comments...' value={item.comment}/>
                        </td>
                        <td className="px-4 py-3 border">
                          <IconButton onClick={() => { handleDeleteSelectedItems(index) }}>
                            <DeleteForeverIcon className='text-red-700' />
                          </IconButton>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <Button title="Add items" onClick={handleAddCategory} className='mt-2'/>
          </div>
        )
      }
    const itemSearchComponent = () => {
        return (
          <div className='relative'>
            <Input
              className='w-[30%]'
              endIcon={
                <div className='flex items-center space-x-3'>
                  <ExpandMoreIcon />
                  {
                    searchedItemsResult.length > 0 &&
                    <IconButton onClick={() => {
                      setsearchedItemsResult([])
                    }}>
                      <CloseIcon />
                    </IconButton>
                  }
                </div>
              }
              label='Search Items' onFocus={(e) => {
                const toReturn = [] as { title: string, item: string }[]
                if (e.target.value) {
                  return;
                }
                itemsData?.forEach(v => {
                    toReturn.push(v)
                })
                
                setsearchedItemsResult(toReturn)
              }} onChange={handleSearchItem} />
            {
              (searchedItemsResult.length !== 0) &&
              <div className='bg-white p-2 mt-2 rounded h-[300px] overflow-auto w-[50%]'>
                {
                  searchedItemsResult.map((val, index) => (
                    <div className='flex items-center'>
                      <h1 className='border p-1 flex-1 bg-white rounded-md'>{val.itemName}</h1>
                      <IconButton onClick={() => {
                        const obj = {
                          item: val.itemName,
                          counter: "0",
                          comment: "",
                        }
                        setselectedItems([...selectedItems, obj])
                      }}>
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        )
    }
    const handleDeleteItem = async (id) => {   
        const selId = {
            id: id
        }     
        await deleteCategory({ selId: selId })

        alert("Item removed successfully!")
        
          const res = await getMenuesApi({})
          const booking = res.data.menues.filter((it)=>it.id === menue.id)
          setmenue(...booking)
          setselectedItems([])
    }
    return (
        <>
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
                <Button onClick={() => { setupdate(!update) }} title="Edit" />
                <Button title="Update" onClick={handleUpdate} disabled={!update} />
                <Button title='Cancel' onClick={handleCancel} />
                <Button title='Manage' onClick={()=>handleOpen(data.id)} />

                <Link href={`/admin/menueprint/${data.id}`}>
                    <Button title='Print' />
                </Link>
            </td>
         </>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    {itemSearchComponent()}
                    {renderSelectedItems()}
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {data.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                    <div className='bg-white p-2 mt-2 rounded h-[300px] overflow-auto'>
                        {
                            menue?.Categories?.map((val, index) => (    
                                <div className='flex items-center'key={index}>
                                    <h1 className='mr-1 mt-3'>{`${index + 1} `}</h1> <h1 className='border p-1 flex-1 bg-white rounded-md mr-3 mt-2'>{val.itemName}</h1>
                                    <Button title="Remove" onClick={()=>handleDeleteItem(val.id)} className='mt-2'/>
                                </div>
                            ))
                        }
                    </div>
                    </Typography>
                </Box>
            </Modal>
        </>
        
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    overflow: 'scroll',
    height: '500px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
