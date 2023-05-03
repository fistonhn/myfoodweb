import { deleteUserApi, getUsersApi, getUserApi } from '@/providers/apis'
import { handleApiErrors } from '@/utils/handleapierrors'
import React, { useEffect, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { DeleteModal } from './Modal'
import { EditModal } from './EditModal';
import { User } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

const CreateUserTable = () => {

    const [selectedItem, setselectedItem] = useState<User>()
    const [deleteModal, setdeleteModal] = useState(false)
    const [data, setdata] = useState<User[]>([])
    const [updateModalState, setupdateModalState] = useState(false)
    const getUserData = async () => {
        try {
            const res = await getUsersApi({})            
            setdata(res.data.users)
        } catch (error: any) {
            alert(handleApiErrors(error))
        }
    }
    useEffect(() => {
        getUserData()
    }, [])
    const handleDeleteUser = (item: User) => {
        setselectedItem(item)
        setdeleteModal(!deleteModal)
    }
    const handleCopy = (item: User) => {
        navigator.clipboard.writeText(
            `
            Username: ${item.email}
            Password: ${item.password}
            `
        ).then(() => {
            alert("Credentials Copied Successfully!")
        })
    }
    const handleDeleteModalClose = () => {
        setdeleteModal(false)
    }
    const handleDelete = async () => {
        try {
            if (!selectedItem) {
                return;
            }
            const res = await deleteUserApi({
                id: selectedItem?.id
            })
            alert(res.data.msg)
            setdeleteModal(false)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    const handleUpdateModalClose = () => {
        setupdateModalState(!updateModalState)
    }
    return (
        <>
            {
                selectedItem &&
                <>
                    <EditModal user={{
                        id: selectedItem.id,
                        email: selectedItem.email,
                        password: selectedItem.password,
                        role: selectedItem.role

                    }} open={updateModalState} setopen={handleUpdateModalClose} />
                    <DeleteModal handleDelete={handleDelete} open={deleteModal} setopen={handleDeleteModalClose} />
                </>
            }
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto max-h-[650px]">
                    <table className="w-full">
                        <thead className='sticky top-0'>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3 uppercase">id</th>
                                <th className="px-4 py-3 uppercase">email</th>
                                <th className="px-4 py-3 uppercase whitespace-nowrap">password</th>
                                <th className="px-4 py-3 uppercase">role</th>
                                <th className="px-4 py-3 uppercase">actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white ">
                            {
                                data?.map((item, index) => (
                                    <tr key={index} className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {item.email}
                                        </td>
                                        <td className="px-4 py-3 border">
                                            {item.password}
                                        </td>
                                        <td className="px-4 py-3 border whitespace-nowrap">
                                            {item?.role?.map((cont: { role: any; }, i: number) => `${
                                                
                                                cont.role === 'admin' ? 'Admin' :                                              
                                                cont.role === 'bookingclerk' ? 'Booking Manager' : 
                                                cont.role === 'operationclerk' ? 'Operation Manager' : 
                                                cont.role === 'seniorclerk' ? 'Senior Manager' : 
                                                cont.role === 'wageclerk' ? 'Wage Manager' : 'No role'
                                            
                                            } ${i < item.role.length - 1 ? "," : ""}`)}

                                        </td>
                                        <td className="px-4 py-3 border">
                                            <IconButton onClick={() => { handleCopy(item) }}>
                                                <ContentCopyIcon fontSize='small' className='text-green-700' />
                                            </IconButton>
                                            <IconButton onClick={() => {
                                                setselectedItem(item)
                                                setupdateModalState(true)
                                            }}>
                                                <EditIcon fontSize='small' className='text-blue-700' />
                                            </IconButton>
                                            <IconButton onClick={() => { handleDeleteUser(item) }}>
                                                <DeleteIcon fontSize='small' className='text-red-700' />
                                            </IconButton>
                                        </td>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)
    const fetchUserData = await getUserApi({email: session?.user.email})

    const searchAdminRole = fetchUserData?.data?.user?.role?.filter((rl: any)=> rl.role === 'admin')?.map((it: any)=> it.role)[0]
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
}

export { CreateUserTable }