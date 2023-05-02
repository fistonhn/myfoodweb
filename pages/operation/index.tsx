import { Header } from '@/components/Header/Header'
import { getMenuesApi, uploadContractor } from '@/providers/apis'
import React, { useEffect, useState } from 'react'
import { Menue } from '@prisma/client'
import { handleApiErrors } from '@/utils/handleapierrors'
import { Button } from '@/components/Button/Button'
import { Contractor } from "@prisma/client"
import Input from '@/components/Inputs/Input'
import Dialog from '@mui/material/Dialog'
import { ContractorModel } from '@/components/ContractorModel/ContractorModel'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { OperationMenueTable } from '@/components/operation/OperationMenueTable'

type TContracotr = (Contractor)

const OperationPage = () => {
        const [formData, setformData] = useState<TContracotr>({ id: '', name: '', item: '', age: null, wage: null, group: '', area: '', phone: '', 
                                              address: null, identitynumber: '' })

        const [startDate, setstartDate] = useState("")
        const [endDate, setendDate] = useState("")
        const [contractorNameSearch, setcontractorNameSearch] = useState("")
        const [searchDepartureDate, setsearchDepartureDate] = useState("")
        const [disableContractorEdit, serdisableContractorEdit] = useState(true)
        const [menuesData, setmenuesData] = useState<Menue[]>([])
        const [menueSearch, setmenueSearch] = useState<string>("")
        const [contractorDialogeState, setcontractorDialogeState] = useState(false)

        const getMenueData = async (search = "") => {
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
        useEffect(() => {
            getMenueData()
        }, [])

    const informationForm = () => {
        return (
          <div className='grid grid-cols-2 w-[60%] mx-auto gap-5'>
            <Input required label='Name' name='name' onChange={handleChange} value={formData.name} type="text" />
            <Input required label='Item' name='item' onChange={handleChange} value={formData.item} type="text"/>
    
            <Input required label='Age' name='age' onChange={handleChange} value={formData.age} type="number" />
            <Input required label='Wage' name='wage' onChange={handleChange} value={formData.wage} type="number" />

            <Input label='Group' name='group' onChange={handleChange} value={formData.group} type="text" />
            {/* <Input required label='Assign Till Date' name='assignTillDate' onChange={handleChange} value={formData.assignTillDate} type="date" /> */}

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
            area: formData.area, 
            phone: formData.phone, 
            address: formData.address, 
            identitynumber: formData.identitynumber,
            status: 'active',
            reActiveDate: new Date()
        }]
            
          await uploadContractor({ contractors: contractors })
          
          alert("Contractor uploaded successfully!")
        } catch (error: any) {
          const err = handleApiErrors(error)
          // console.log('selectedItems', error);
    
          alert(err)
        }
      }

    const manuetable = () => {
        return (
            <div className='px-5 space-y-2'>
                <OperationMenueTable menues={menuesData} />
            </div>
        )
    }
    const handleContractorClose = () => {
        setcontractorDialogeState(false)
    }
    const contractorModals = () => {
        return (
            <Dialog fullWidth maxWidth="md" open={contractorDialogeState} onClose={handleContractorClose}>
                <ContractorModel allowEdit={disableContractorEdit} />
            </Dialog>
        )
    }
    return (
        <div style={{
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
            className="h-screen overflow-auto"
        >
            <Header />
            {manuetable()}
            {contractorModals()}

            <h1 className='mb-2 mt-7 text-center font-bold text-lg text-white'>Add new contractor</h1>
            <form onSubmit={handleSubmitForm} >
                {informationForm()}
                <Button title='Submit' type='submit' className='ml-[20%] mt-4 content-center mb-7' />
            </form>
        </div>
    )
}

export default OperationPage


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    const searchUserRole = session?.user.role?.filter((rl: any)=> rl.role === 'operationclerk')?.map((it: any)=> it.role)[0]
    const searchAdminRole = session?.user.role?.filter((rl: any)=> rl.role === 'admin')?.map((it: any)=> it.role)[0]

    if (!session || searchAdminRole !== "admin" && searchUserRole !== "operationclerk") {
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
}