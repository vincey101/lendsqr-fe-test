import React, { useState } from 'react'
import { Menu, MenuItem } from "@mui/material"
import './menu.scss'
import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { statusState } from '../atom/StatusAtom';


const LongMenu = ({ id }) => {
    const [anchorElm, setAnchorElm] = useState(null)
    const [open, setOpen] = useState(false)
    // const [itemId, setItemId] = useState(null);
    const [display, setDisplay] = useRecoilState(statusState);



    const handleClick = (event) => {
        setAnchorElm(null);
        setAnchorElm(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false)
    }

    const blackList = (id) => {
        setAnchorElm(null);

        // if (itemId === id) {
        setDisplay("Blacklisted")
        // }
        // console.log(id);
    }

    const activeList = () => {
        setDisplay("Active")
    }

    return (
        <div>
            <i variant="contained" onClick={handleClick} className='fa fa-ellipsis-v'></i>
            <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>

                <Link to={'/users/' + id} style={{ textDecoration: "none" }}>
                    <MenuItem onClick={handleClose} className="itemDetails"
                        sx={{
                            color: '#213F7D',
                            fontSize: '12px',
                        }}>
                        <i className="fa-regular fa-eye"></i>
                        <span>View Details</span>
                    </MenuItem>
                </Link>


                <MenuItem onClick={handleClose} className="itemDetails"
                    sx={{
                        color: '#213F7D',
                        fontSize: '12px',
                    }}>
                    <i className="fa-solid fa-user-xmark"></i>
                    <span onClick={() => blackList(id)} >Blacklist User</span>
                </MenuItem>
                <MenuItem onClick={handleClose} className="itemDetails"
                    sx={{
                        color: '#213F7D',
                        fontSize: '12px',
                    }}>
                    <i className="fa-solid fa-user-check"></i>
                    <span onClick={activeList} > Activate User</span>
                </MenuItem>

            </Menu>


        </div>
    )
}

export default LongMenu