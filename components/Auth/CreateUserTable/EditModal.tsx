import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Inputs/Input';
import { resetUserApi } from '@/providers/apis';
import { handleApiErrors } from '@/utils/handleapierrors';
import { User } from '@prisma/client';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
    const [newRole, setnewRole] = React.useState<string[]>([]);

    useEffect(() => {
        setuserData(user)
    }, [user])
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { value, name } = e.target
        setuserData({
            ...userData,
            [name]: value
        })
    }

    const handleChangeSelect = (event: SelectChangeEvent<typeof newRole>) => {
        const {
          target: { value },
        } = event;
        setnewRole(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const handleUpdate = async () => {
        if (!userData.id || !userData.email || !userData.password || !userData.role) {
            return alert("Kindly Fill All The Fields OR Try Again Later.")
        }
        try {            
            const res = await resetUserApi({
                password: userData.password,
                role: newRole,
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
                    <FormControl sx={{ m: 1, width: 550 }}>
                        <InputLabel id="demo-multiple-checkbox-label">List of Roles</InputLabel>
                        <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={newRole}
                        onChange={handleChangeSelect}
                        input={<OutlinedInput label="List of Roles" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {options.map((name) => (
                            <MenuItem key={name.value} value={name.value}>
                            <Checkbox checked={newRole.indexOf(name.value) > -1} />
                            <ListItemText primary={name.content} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
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