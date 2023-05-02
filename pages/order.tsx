import { Header } from '@/components/Header/Header'
import React, { useState, useEffect } from 'react'
import { Menue } from '@prisma/client'
import Input from '@/components/Inputs/Input'
import { Select } from '@/components/Select'
// import { itemsData } from '@/data/data'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@/components/Button/Button'
import { IMenueForm } from '@/types/order'
import { handleApiErrors } from '@/utils/handleapierrors'
import { createMenueApi, createItemApi, getItemsApi } from '@/providers/apis'
import { updateDateWithHourAndMinute } from '@/utils/updateDateWithHoursAndMinutes'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { v4 as uuid } from 'uuid'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { SeniorClerkEdit } from '@/components/orderpage/SeniorClerkEdit'
import { UploadMenueExcelFile } from '@/components/orderpage/UploadMenueExcelFile'
const intitialData = {
  bookedBy: "",
  bookerMobileNumber: "",
  bookingId: "",
  cleaner: "",
  departureDate: "",
  departureTime: "",
  driverName: "",
  function: "breakfast",
  functionDate: "",
  headMobileNumber: "",
  headName: "",
  mobile: "",
  name: "",
  PAX: "",
  PLATE: "",
  serviceTime: "",
  specialInstruction: "",
  vehicleNumber: "",
  venue: "",
  words: "",
  note: "",
  onion: false,
  garlic: false
} as IMenueForm
const functionOptions = [
  {
    value: " breakfast",
    content: " Breakfast"
  },
  {
    value: "dinner",
    content: "Dinner"
  },
  {
    value: "hightea",
    content: "Hightea"
  }, {
    value: "lunch",
    content: "Lunch"
  }
] as { value: Menue["function"], content: React.ReactNode }[]
const Order = () => {
  const { data: session } = useSession()
  const [itemsNameOnly, setitemsNameOnly] = useState<string[]>([])
  const [formData, setformData] = useState(intitialData)
  const [newItem, setnewItem] = useState('')
  const [itemsData, setitemsData] = useState([])

  const [searchedItemsResult, setsearchedItemsResult] = useState<{ title: string, item: string }[]>([])
  const [selectedItems, setselectedItems] = useState<{ item: string, counter: string, comment: string }[]>([])

  const handleChangeAddItem = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const itemName = e.target.value
    setnewItem(itemName);
    
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    })
  }
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

  const informationForm = () => {
    return (
      <div className='grid grid-cols-2 w-[60%] mx-auto gap-5'>
        <Input required label='Function Date' name='functionDate' onChange={handleChange} value={formData.functionDate} type="date" />
        <Input required label='Booked By' name='bookedBy' onChange={handleChange} value={formData.bookedBy} type="text"/>

        <Input label='PAX' name='PAX' onChange={handleChange} value={formData.PAX} type="text" />
        <Input label='PLATE' name='PLATE' onChange={handleChange} value={formData.PLATE} type="text" />
        <Input required label='Booker Mobile Number' name='bookerMobileNumber' onChange={handleChange} value={formData.bookerMobileNumber} type="text" />
        <Input required label='Departure Date' name='departureDate' onChange={handleChange} value={formData.departureDate} type="date" />
        <Input required label='Departure Time' name='departureTime' onChange={handleChange} value={formData.departureTime} type="time" />
        <Select required label='Function Prospectus' name='function' onChange={handleChange} value={formData.function} options={functionOptions} />

        <Input required label='Guest Mobile' name='mobile' onChange={handleChange} value={formData.mobile} type="text" />
        <Input required label='Guest Name' name='name' onChange={handleChange} value={formData.name} type="text" />
        <Input required label='Service Time' name='serviceTime' onChange={handleChange} value={formData.serviceTime} type="time" />
        <Input label='Special Instruction' name='specialInstruction' onChange={handleChange} value={formData.specialInstruction} type="text" />
        <Input required label='Venue' name='venue' onChange={handleChange} value={formData.venue} type="text" />
        <Input label='Words' name='words' onChange={handleChange} value={formData.words} type="text" />
        <Select required label='Onion' onChange={(e) => { setformData((prev) => ({ ...prev, onion: e.target.value === "Yes" ? true : false })) }} options={[{ content: "No", value: "No" }, { content: "Yes", value: "Yes" }]} />
        <Select required label='Garlic' onChange={(e) => { setformData((prev) => ({ ...prev, garlic: e.target.value === "Yes" ? true : false })) }} options={[{ content: "No", value: "No" }, { content: "Yes", value: "Yes" }]} />
        <Input label='Note' name='note' onChange={handleChange} value={formData.note} type="text" />

      </div>
    )
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
      </div>
    )
  }
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    let isOkay = true
    let isGreaterThanFive = false
    selectedItems.forEach(v => {
      if (!v.counter || (Number(v.counter) < 0 || Number(v.counter) > 5)) {
        isOkay = false
      }      
    })
    if (!isOkay) {
      return alert("kindly select number of counters for all items and maximum of 5.")
    }
    formData.bookingId = String(uuid()).substring(0, 8)
    if (selectedItems.length === 0) {
      return alert("Kindly Select Atleast One Item.")
    }
    try {
      // _formDate.
      const _departureHourMinute = formData.departureTime.split(":")
      const _departureTime = updateDateWithHourAndMinute(new Date(formData.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]))
      // 
      const _serviceHourMinute = formData.serviceTime.split(":")
      const _serviceTime = updateDateWithHourAndMinute(new Date(formData.functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]))
      
      const res = await createMenueApi({
        formdata: {
          bookedBy: formData.bookedBy,
          bookerMobileNumber: formData.bookerMobileNumber,
          bookingId: formData.bookingId,
          cleaner: formData.cleaner,
          departureDate: new Date(formData.departureDate),
          departureTime: new Date(_departureTime),
          driverName: formData.driverName,
          function: formData.function,
          functionDate: new Date(formData.functionDate),
          headMobileNumber: formData.headMobileNumber,
          headName: formData.headName,
          mobile: formData.mobile,
          name: formData.name,
          PAX: formData.PAX,
          PLATE: formData.PLATE,
          serviceTime: _serviceTime,
          specialInstruction: formData.specialInstruction,
          vehicleNumber: formData.vehicleNumber,
          venue: formData.venue,
          words: formData.words,
          note: formData.note,
          id: "",
          onion: formData.onion !== undefined ? formData.onion : null,
          garlic: formData.garlic !== undefined ? formData.garlic : null
        },
        selectedItems: selectedItems
      })
      
      alert("created successfully!")
      window.location.href = `/admin/menueprint/${res.data.id}`
    } catch (error: any) {
      const err = handleApiErrors(error)
      // console.log('selectedItems', error);

      alert(err)
    }
  }
  const submitCreateItem = async () => {
    try {
      if(!newItem) return alert('Please enter a new item')
      
      const res = await createItemApi({ itemName: newItem })

      setnewItem('')
      alert("Item added successfully!")
    } catch (error: any) {
      const err = handleApiErrors(error)
      alert(err)
    }
    
  }

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
      setitemsNameOnly(_sub)
    }
  }, [itemsData])
  return (
    <div style={{
      backgroundImage: `url("/bg3.jpg")`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    }}
      className="h-screen overflow-auto">
      <form onSubmit={handleSubmitForm} >
        <Header />
        {informationForm()}
        <div className='grid gap-5 w-[90%] mx-auto   mt-10 pb-10'>
          {itemSearchComponent()}
          {renderSelectedItems()}
          <div className='space-x-3'>
            <Button title='Submit' type='submit' />
            <Button onClick={() => {
              window.open(`mailto:`);
            }} title='Email' type='button' />
          </div>

          <div>
            <Input label='Create new item' name='itemName' onChange={handleChangeAddItem} value={newItem} type="text" className='w-[50%]'/>
            <Button title='Add Item' className='mt-3' onClick={submitCreateItem}/>
          </div>
        </div>
      </form>
      {
        session?.user.role === "admin" &&
        (
          <div className='mb-40'>
            <UploadMenueExcelFile />
            <SeniorClerkEdit />
          </div>
        )
      }
    </div>
  )
}

export default Order


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  if (session.user.role === "operationclerk") {
    return {
      redirect: {
        destination: "/operation",
        permanent: false,
      }
    }
  }
  if (session.user.role === "wageclerk") {
    return {
      redirect: {
        destination: "/wage",
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}
