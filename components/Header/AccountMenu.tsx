import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Info from '@mui/icons-material/Info';
import { getUserApi } from '@/providers/apis'

import Logout from '@mui/icons-material/Logout';
import { getSession, GetSessionParams, signOut, useSession } from 'next-auth/react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [OpenModel, setOpenModel] = React.useState(false);
  const [leftDate, setleftDate] = React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAdminData = async(ctx: GetSessionParams | undefined)=> {
    const session = await getSession(ctx)

    const userData = await getUserApi({email: session?.user.email})
    const expiredDate =  userData.data.user.expiryDate;
    
    const today = new Date()
    const diff = Math.floor((Date.parse(expiredDate) - (today)) / 86400000);

    setleftDate(diff);
  }

  useEffect(() => {
    getAdminData()
}, [])
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon onClick={()=> setOpenModel(true)}>
            <img src='/diploma.png' className='w-[80px] h-[80px] object-contain' />

            { leftDate === null ? '' : <div className="px-4 text-black text-lg font-semibold" >{`${leftDate} Left Days`}</div> }
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon onClick={()=> setOpenModel(true)}>
            <Info fontSize="small" />
            <div className="px-4 text-black" >Info</div>
          </ListItemIcon>
        </MenuItem>

        <MenuItem onClick={() => { signOut() }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <div>
        <Modal
          open={OpenModel}
          onClose={()=> setOpenModel(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              We are for You
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              We believe innovation and collective knowledge can transform all our futures with greater purpose.
              To amplify human potential and create the next opportunity for people, businesses and communities.
              With expertise in Digital, Engineering and Cloud, we deliver solutions that fulfill the traditional, 
              transformational and future needs of clients.
            </Typography>
          </Box>
        </Modal>
      </div>
    </React.Fragment>
  );
}