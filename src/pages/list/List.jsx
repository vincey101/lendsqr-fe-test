import React, { useState, useEffect } from 'react'
import './list.scss'
import axios from 'axios'
import { West } from '@mui/icons-material';
import { Link, useLocation, useParams } from 'react-router-dom'
import userIcon from '../../images/Vector.svg'

function List() {

    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [data, setData] = useState({});


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" + path)
            // console.log(res);
            setData(res.data)
        };
        getData()
    }, [path])


    return (
        <div className='list'>

            <Link to='/users' className="back">
                <West />
                <p>Back to Users</p>
            </Link>
            <div className="detail-text">
                <h2>User Details</h2>
                <div className="user-action">
                    <p className='blacklist'>Blacklist user</p>
                    <p className='activate'>Activate user</p>
                </div>
            </div>

            <div className="general-details">
                <div className="user-details">
                    <div className="icon">
                        {data.profile ? data.profile.avatar &&
                            <img src={data.profile.avatar} alt="user icon" /> :
                            <img src={userIcon} alt="user icon" />

                        }
                        <div className="name">
                            {data.profile ? <h2>{data.profile.firstName + " " + data.profile.lastName}</h2> : null}
                            <p>{data.accountNumber}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="tier">
                        <p>User's Tier</p>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>

                    </div>
                    <hr />
                    <div className="amount">
                        <h2>&#8358;{data.accountBalance}</h2>

                        <p>9912345678/Providus Bank</p>
                    </div>
                </div>

                <div className="userinfo">
                    <p className='active'>General Details</p>
                    <p>Documents</p>
                    <p>Bank Details</p>
                    <p>Loans</p>
                    <p>Savings </p>
                    <p>App and System</p>
                </div>

            </div>
            <div className="info-section">

                <div className="info-line">
                    <p className='p-info'>Personal Information</p>
                    <div className="info-container">
                        <div className="personalinfo">
                            <p>Full Name</p>
                            {data.profile ? <h3>{data.profile.firstName + " " + data.profile.lastName}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Phone Number</p>
                            {data.profile ? <h3>{data.profile.phoneNumber}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Email Address</p>
                            <h3>{data.email}</h3>
                        </div>
                        <div className="personalinfo">
                            <p>Bvn</p>
                            {data.profile ? <h3>{data.profile.bvn}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Gender</p>
                            {data.profile ? <h3>{data.profile.gender}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Marital Status</p>
                            {data.profile ? <h3>{data.profile.maritalStatus}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Children</p>
                            {data.profile ? <h3>{data.profile.children}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Type of Residence</p>
                            {data.profile ? <h3>{data.profile.typeOfResidence}</h3> : null}
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="info-line">
                    <p className='p-info'>Education and Employment</p>
                    <div className="info-container">
                        <div className="personalinfo">
                            <p>Level of Education</p>
                            {data.education ? <h3>{data.education.level}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Employment Status</p>
                            {data.education ? <h3>{data.education.employmentStatus}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Sector of Employment</p>
                            {data.education ? <h3>{data.education.sector}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Duration of Employment</p>
                            {data.education ? <h3>{data.education.duration}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>office Email</p>
                            {data.education ? <h3>{data.education.officeEmail}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Monthly Income</p>
                            {data.education ? <h3>&#8358;
                                {data.education.monthlyIncome[0] + " - " + data.education.monthlyIncome[1]}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Loan Repayment</p>
                            {data.education ? <h3> &#8358;{data.education.loanRepayment}</h3> : null}
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="info-line">
                    <p className='p-info'>Socials </p>
                    <div className="info-container">
                        <div className="personalinfo">
                            <p>Twitter </p>
                            {data.socials ? <h3>{data.socials.twitter}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Facebook</p>
                            {data.socials ? <h3>{data.socials.facebook}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Instagram</p>
                            {data.socials ? <h3>{data.socials.instagram}</h3> : null}
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="info-line">
                    <p className='p-info'>Guarantor</p>
                    <div className="info-container">
                        <div className="personalinfo">
                            <p>Full Name</p>
                            {data.guarantor ? <h3>{data.guarantor.firstName + " " + data.guarantor.lastName}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Phone Number</p>
                            {data.guarantor ? <h3>{data.guarantor.phoneNumber}</h3> : null}
                        </div>
                        <div className="personalinfo">
                            <p>Email Address</p>
                            {data.guarantor ? <h3>{data.guarantor.email}</h3> : null}

                        </div>
                        <div className="personalinfo">
                            <p>Relationship</p>
                            {data.guarantor ? <h3>{data.guarantor.relationship}</h3> : null}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default List