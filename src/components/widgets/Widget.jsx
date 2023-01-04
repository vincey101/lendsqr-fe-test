import './widget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faUsers, faCoins, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'


const Widget = ({ type }) => {
    let data

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                number: "2,453",
                avatar: <FontAwesomeIcon className='icon' icon={faUserGroup}
                    style={{
                        color: "DF18FF",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                        width: "18px"
                    }} />,

            };

            break;
        case "active":
            data = {
                title: "ACTIVE USERS",
                number: "2,453",
                avatar: <FontAwesomeIcon className='icon' icon={faUsers}
                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        // width: "18px"
                    }} />
            };

            break;
        case "loan":
            data = {
                title: "USERS WITH LOANS",
                number: "12,453",
                avatar: <FontAwesomeIcon className='icon' icon={faUsersBetweenLines}
                    style={{
                        color: "F55F44",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                        width: "20px"
                    }}

                />,

            };

            break;
        case "saving":
            data = {
                title: "USERS WITH SAVINGS",
                number: "102,453",
                avatar: <FontAwesomeIcon className='icon' icon={faCoins}
                    style={{
                        color: "FF3366",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                        width: "20px"
                    }}
                />

            };

            break;

        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                {data.avatar}

                <span className="title">{data.title}</span>
                <span className="fee">{data.number}</span>
            </div>
        </div>
    )
}

export default Widget

