import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@/components/Button/Button';
interface IDeleteModal {
  open: boolean,
  setopen: () => void
  handleDelete?: () => void
}
const DeleteModal = ({ open, setopen, handleDelete }: IDeleteModal) => {
  return (
    <Dialog maxWidth="sm" fullWidth className='!w-full' open={open} onClose={setopen}>
      <DialogTitle>

      </DialogTitle>
      <DialogContent>
        <h1 className='text-center text-2xl font-semibold'>Delete User?</h1>
      </DialogContent>
      <DialogActions>
        <Button title='Cancel' onClick={setopen} />
        <Button title='Delete' onClick={handleDelete} />
      </DialogActions>
    </Dialog>
  )
}

export { DeleteModal }