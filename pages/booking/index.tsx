import React, { useState, useEffect } from 'react'
import { Header } from '@/components/Header/Header'
import { SeniorClerkEdit } from '@/components/orderpage/SeniorClerkEdit'
import { UploadMenueExcelFile } from '@/components/orderpage/UploadMenueExcelFile'
import Input from '@/components/Inputs/Input'
import { uploadContractor } from '@/providers/apis'
import { handleApiErrors } from '@/utils/handleapierrors'
import { GetServerSideProps } from 'next'
import { getSession, GetSessionParams } from 'next-auth/react'
import { Button } from '@/components/Button/Button'
import { Contractor } from '@prisma/client'

type TContracotr = (Contractor)

const BookingClerk = () => {
    const [formData, setformData] = useState<TContracotr>({ id: '', name: '', item: '', age: null, wage: null, group: '', assignTillDate: null, area: '', phone: '', 
                                              address: null, identitynumber: '' })

    const informationForm = () => {
        return (
          <div className='grid grid-cols-2 w-[60%] mx-auto gap-5'>
            <Input required label='Name' name='name' onChange={handleChange} value={formData.name} type="text" />
            <Input required label='Item' name='item' onChange={handleChange} value={formData.item} type="text"/>
    
            <Input required label='Age' name='age' onChange={handleChange} value={formData.age} type="number" />
            <Input required label='Wage' name='wage' onChange={handleChange} value={formData.wage} type="number" />

            <Input required label='Group' name='group' onChange={handleChange} value={formData.group} type="text" />
            <Input required label='Assign Till Date' name='assignTillDate' onChange={handleChange} value={formData.assignTillDate} type="date" />

            <Input required label='Area' name='area' onChange={handleChange} value={formData.area} type="text" />
            <Input required label='Phone' name='phone' onChange={handleChange} value={formData.phone} type="text" />
    
            <Input required label='Address' name='address' onChange={handleChange} value={formData.address} type="text" />
            <Input required label='Identity Number' name='identitynumber' onChange={handleChange} value={formData.identitynumber} type="text" />
          </div>
        )
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
            setformData({
                ...formData,
                [name]: value
            })
    }

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        try {


        const  contractors = [{ 
            name: formData.name, 
            item: formData.item, 
            age: Number(formData.age), 
            wage: Number(formData.wage), 
            group: formData.group, 
            assignTillDate: new Date(formData.assignTillDate), 
            area: formData.area, 
            phone: formData.phone, 
            address: formData.address, 
            identitynumber: formData.identitynumber
        }]
            
          await uploadContractor({ contractors: contractors })
          
          alert("Contractor uploaded successfully!")
        } catch (error: any) {
          const err = handleApiErrors(error)
          // console.log('selectedItems', error);
    
          alert(err)
        }
      }

    return (
        <div style={{
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
            className="h-screen overflow-auto">
            <Header />
            <div className='mb-40'>
                <UploadMenueExcelFile />
                <SeniorClerkEdit />

                <h1 className='mb-2 mt-7 text-center font-bold text-lg text-white'>Add new contractor</h1>

                <form onSubmit={handleSubmitForm} >
                    {informationForm()}
                    <Button title='Submit' type='submit' className='ml-[20%] mt-4 content-center' />
                </form>
            </div>
        </div>
    )
}

export default BookingClerk

export const getServerSideProps = async (ctx: GetSessionParams | undefined) => {
    try {
        const session = await getSession(ctx)
        const searchUserRole = session?.user.role?.filter((rl: any)=> rl.role === 'bookingclerk')?.map((it: any)=> it.role)[0]
        const searchAdminRole = session?.user.role?.filter((rl: any)=> rl.role === 'admin')?.map((it: any)=> it.role)[0]

        if (!session || searchAdminRole !== "admin" && searchUserRole !== "bookingclerk") {
            return {
                redirect: {
                    destination: "/",
                    permanent: false,
                }
            }
        }
        return {
            props: {}
        }
    } catch (error: any) {
        alert(error)
      }
} 