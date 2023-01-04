
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../list/List'
import './detail.scss'

const Detail = () => {
    return (
        <div className='user'>
            <Sidebar />
            <div className="userContainer">
                <Navbar />
                <List />
            </div>
        </div>
    )
}

export default Detail