import React from 'react'
import './sidebar.scss'
import Logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBriefcase,
    faChevronDown, faUserGroup,
    faHouseChimney, faUsers, faPiggyBank
} from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { userState } from '../../components/atom/UserAtom'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const [currentUser, setcurrentUser] = useRecoilState(userState)
    const navigate = useNavigate()
    const logout = () => {
        setcurrentUser("")
        navigate("../", { replace: true })

    }
    return (
        <div className='sidebar'>
            <div className="top">
                <img src={Logo} alt="lendsqr logo" className="logo" />
            </div>
            <hr />
            <div className="dropdown">
                <FontAwesomeIcon className='icon' icon={faBriefcase} />
                {/* <i class="fa-duotone fa-briefcase"></i> */}
                <span className='switch-text'>Switch Organization</span>
                <FontAwesomeIcon className='icon' icon={faChevronDown} />
            </div>
            <div className="dashboard">
                <FontAwesomeIcon className='icon' icon={faHouseChimney} />
                <span>Dashboard</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">Customers</p>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faUserGroup} />
                        <span>Users</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faUsers} />
                        <span>Guarantors</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-sack-dollar"></i>
                        <span>Loans</span>
                    </li>
                    <li>
                        <i className="fa-regular fa-handshake"></i>
                        <span>Decision models</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faPiggyBank} />
                        <span>Savings </span>
                    </li>
                    <li>
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        <span>Loan Requests</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-user-check"></i>
                        <span>Whitelist </span>
                    </li>
                    <li>
                        <i className="fa-solid fa-user-xmark"></i>
                        <span>Karma</span>
                    </li>
                    <p className="business">Businesses</p>
                    <li>
                        <FontAwesomeIcon className='icon' icon={faBriefcase} />
                        <span>Organization</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        <span>Loan Products</span>
                    </li>
                    <li>
                        <i className="fa-sharp fa-solid fa-building-columns"></i>
                        <span>Savings Products</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-coins"></i>
                        <span>Fees and Charges</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-money-bill-transfer"></i>
                        <span>Transactions</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-fan"></i>
                        <span>Services</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-user-gear"></i>
                        <span>Service Account</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-wallet"></i>
                        <span>Settlement</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-chart-column"></i>
                        <span>Reports</span>
                    </li>
                    <p className="settings">Settings</p>
                    <li>
                        <i className="fa-solid fa-sliders"></i>
                        <span>Preference</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-money-check"></i>
                        <span>Fees and Pricing</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-receipt"></i>
                        <span>Audit Logs</span>
                    </li>

                    <hr />
                    <li onClick={logout}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Sidebar