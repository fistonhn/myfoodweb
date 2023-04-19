import { Button } from '@/components/Button/Button'
import Input from '@/components/Inputs/Input'
import React, { useState } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { Header } from '@/components/Header/Header'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { createUserApi } from '@/providers/apis'
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
            const res = await createUserApi({
                password: formdata.password,
                role: formdata.type,
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
                        onChange={(_, value) => { setformdata({ ...formdata, type: value }) }}
                        className="grid"
                    >
                        <FormControlLabel value={usersType.bookingclerk} control={<Radio />} label="Booking Manager" />
                        <FormControlLabel value={usersType.operationclerk} control={<Radio />} label="Operation Manager" />
                        <FormControlLabel value={usersType.seniorclerk} control={<Radio />} label="Senior Manager" />
                        <FormControlLabel value={usersType.wageclerk} control={<Radio />} label="Wage Manager" />
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


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    if (!session || session.user.role !== "admin") {
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
