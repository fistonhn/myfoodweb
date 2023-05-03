import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import React, { useState } from 'react'
import { getSession, GetSessionParams, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { Header } from '@/components/Header/Header'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { createUserApi, getUserApi } from '@/providers/apis'
import { CreateUserTable } from '@/components/Auth/CreateUserTable'
import { Session } from 'next-auth'
import { usersType } from '@/constants/globalconstants'
import { User } from '@prisma/client'
interface IInitialData {
    username: string,
    password: string,
    type: User["role"]
}
const intitalData: IInitialData = {
    username: "",
    password: "",
    type: "bookingclerk"
}
const CreateUsers = () => {
    const [formdata, setformdata] = useState(intitalData)

    const [booking, setbooking] = useState(null)
    const [operation, setoperation] = useState(null)
    const [wage, setwage] = useState(null)
    const [senior, setsenior] = useState(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setformdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {

            const roles: any[] = []

            if(booking) {roles.push(booking)}
            if(operation) {roles.push(operation)}
            if(wage) {roles.push(wage)}
            if(senior) {roles.push(senior)}
            
            const res = await createUserApi({
                password: formdata.password,
                role: roles,
                email: formdata.username
            })
            alert(res.data.msg)            

        } catch (error: any) {
            if (error?.response?.data?.msg) {
                alert(error?.response?.data?.msg)
            } else {
                alert(error.message)
            }
        }
    }
    
    return (
        <div style={{
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
            className="h-screen overflow-auto"
        >
            <Header

            />
            <div className='flex items-center justify-center  mt-14 pb-14' >
                <form onSubmit={handleSubmit} className="grid w-[30%] m-auto gap-y-3 bg-white p-10 shadow-md rounded-md">
                    <h1 className='font-bold text-center text-2xl mb-5'>Create Users</h1>
                    <Input required name='username' onChange={handleChange} placeholder='Username' />
                    <Input required name='password' onChange={handleChange} placeholder='Password' type='password' />
                    <h1 className='font-semibold mt-2'>Select type:</h1>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={formdata.type}
                        // @ts-ignore
                        className="grid"
                    >
                        <FormControlLabel value={booking} control={<Checkbox onChange={(e :any) => { setbooking(usersType.bookingclerk) }} />} label="Booking Manager" />
                        <FormControlLabel value={operation} control={<Checkbox onChange={(e :any) => { setoperation(usersType.operationclerk) }}/>} label="Operation Manager" />
                        <FormControlLabel value={senior} control={<Checkbox onChange={() => { setsenior(usersType.seniorclerk) }}/>} label="Senior Manager" />
                        <FormControlLabel value={wage} control={<Checkbox onChange={() => { setwage(usersType.wageclerk) }}/>} label="Wage Manager" />
                    </RadioGroup>
                    <Button title='Submit' type='submit' /> 
                </form>
            </div>
            <div className='my-14 w-[60%] mx-auto'>
                <h1 className='text-2xl text-white font-bold text-center mb-3'>Users</h1>
                <CreateUserTable />
            </div>
        </div>
    )
}

export default CreateUsers


export const getServerSideProps = async (ctx: GetSessionParams | undefined) => {
    try {
        const session = await getSession(ctx)
        const fetchUserData = await getUserApi({email: session?.user.email})
    
        const searchAdminRole = fetchUserData?.data?.user.role?.filter((rl: any)=> rl.role==='admin')?.map((it: any)=> it.role)[0]

        if (!session || searchAdminRole !== "admin") {
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
