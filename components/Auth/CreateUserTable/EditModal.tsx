import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Inputs/Input';
import { resetUserApi } from '@/providers/apis';
import { handleApiErrors } from '@/utils/handleapierrors';
import { User } from '@prisma/client';
import { usersType } from '@/constants/globalconstants';
interface IDeleteModal {
    open: boolean,
    setopen: () => void
    user: User
}

interface IOption {
    value: User["role"],
    content: string
}
const options: IOption[] = [{
    value: "bookingclerk",
    content: "Booking Clerk"
},
{
    value: "operationclerk",
    content: "Operation Clerk"
},
{
    value: "seniorclerk",
    content: "Senior Clerk"
},
{
    value: "wageclerk",
    content: "Wage Clerk"
},
]
const EditModal = ({ open, setopen, user }: IDeleteModal) => {
    const [userData, setuserData] = useState(user)
    useEffect(() => {
        setuserData(user)
    }, [user])
    console.log(userData)
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { value, name } = e.target
        setuserData({
            ...userData,
            [name]: value
        })
    }
    const handleUpdate = async () => {
        if (!userData.id || !userData.email || !userData.password || !userData.role) {
            return alert("Kindly Fill All The Fields OR Try Again Later.")
        }
        try {
            const res = await resetUserApi({
                password: userData.password,
                role: userData.role,
                email: userData.email,
                id: userData.id
            })
            alert(res.data.msg)
            setopen()
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    return (
        <Dialog maxWidth="sm" fullWidth className='!w-full' open={open} onClose={setopen}>
            <DialogTitle>
                Update User
            </DialogTitle>
            <DialogContent>
                <div className='space-y-3'>
                    <Input name='email' onChange={handleChange} value={userData?.email} />
                    <Input name='password' onChange={handleChange} value={userData?.password} />
                    <select name='role' onChange={handleChange} value={userData?.role} className="shadow-md w-full border border-gray-300 rounded-md focus:border-primary p-2 outline-none">
                        {
                            options.map((val, index) => (
                                <option key={index} value={val.value}>{val.content}</option>
                            ))
                        }
                    </select>
                </div>
            </DialogContent>
            <DialogActions>
                <Button title='Cancel' onClick={setopen} />
                <Button title='Update' onClick={handleUpdate} />
            </DialogActions>
        </Dialog>
    )
}

export { EditModal }