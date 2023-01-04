import React, { useState } from 'react'
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useRecoilValue } from 'recoil'
import { userState } from '../../components/atom/UserAtom'
import axios from 'axios'


function Navbar() {
    const user = useRecoilValue(userState)
    // const [searchInput, setSearchInput] = useState('');
    // const [data, setData] = useState([]);
    // const [filteredResults, setFilteredResults] = useState([]);

    // const gety = () => {
    //     axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    //         .then((response) => {
    //             setData(response.data)
    //             // console.log(response.data);

    //         })

    // }
    // gety()



    //     .then(response => {
    //         setData(response.data)
    //         console.log(res);
    //     })


    // const searchItems = (searchValue) => {
    //     setSearchInput(searchValue)
    //     const filtered = data.filter((item) => {
    //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    //         setFilteredResults(filtered)

    //     })
    // }

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search-tab">
                    <div className="search">
                        <input type="text" placeholder='Search for anything'

                        />

                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />

                    </div>

                </div>
                <div className="items">
                    <div className="item">
                        <span>Docs</span>
                    </div>
                    <div className="item">
                        <i className="fa-regular fa-bell"></i>  </div>
                    <div className="item">
                        <img src="https://img.freepik.com/premium-photo/happy-black-man-positive-mind-casual-style-trend-look-smiling-african-guy-white-tshirt-looking-camera-isolated-light-background_279525-26139.jpg" alt="display avatar" className='avatar' />
                    </div>
                    <div className="item">
                        {user.email ?
                            <span>{user.email}</span> : null}
                        <FontAwesomeIcon className='caret' icon={faCaretDown} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar