import React, { useState } from 'react'
import { Menu, MenuItem } from "@mui/material"
import './menu.scss'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { statusState } from '../atom/StatusAtom';



// import { MoreVertIcon } from '@mui/icons-material';

const LongMenu = ({ id }) => {
    // const [users, setUsers] = useState([]);
    const [anchorElm, setAnchorElm] = useState(null)
    const [open, setOpen] = useState(false)
    // const [display, setDisplay] = useState(action)
    const [display, setDisplay] = useRecoilState(statusState);



    const handleClick = (event) => {
        // setAnchorElm(null);
        setAnchorElm(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false)
    }


    const blackList = (id) => {
        // const menuId = setAnchorElm(event.currentTarget)
        // const menuId = event.target.innerText
        setAnchorElm(null);
        setDisplay("Blacklisted")
        // console.log(display);
        // console.log(id);
        // console.log(menuId);

    }

    const activeList = () => {
        setDisplay("Active")
        // console.log(display);
    }

    // const blackList = () => {
    //     // setStatus(status => "Blacklisted")
    //     // console.log(status);
    //     setStatus("Blacklisted");
    //     // setDisplay("Blacklisted");
    //     console.log(status);
    // }

    // const blackList = () => {
    //     setDisplay(st => {
    //         const status = [...st.status];
    //         status = "Blacklisted";
    //         return { ...st, status }
    //     })
    // }


    // let toggle = status ? 'active' : ""
    // const blackList = () => {
    //     if (status === "Pending" || status === "Active") {
    //         setStatus(status[2])
    //     }
    //     console.log(status);
    // }

    // const handleActive = () => {

    //     if (status === "pending" || status === "Blacklisted") {
    //         setStatus("Active")

    //     }
    //     // console.log(status);
    // }



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

                {/* {display.map((data, id) => (
                    <div key={id}> */}



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

                {/* </div>
                )
                )
                } */}


            </Menu>


        </div>
    )
}

export default LongMenu