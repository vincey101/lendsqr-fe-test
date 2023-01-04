import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widgets/Widget';
import './home.scss';

function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <h2>Users</h2>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="active" />
                    <Widget type="loan" />
                    <Widget type="saving" />
                </div>
                <div className="user-table">
                    <Table />

                </div>
            </div>
        </div>
    )
}

export default Home