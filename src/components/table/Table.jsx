import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import moment from 'moment';


import './table.scss'
import LongMenu from '../menu/Menu';
import { useRecoilValue } from 'recoil';
import { statusState } from '../atom/StatusAtom';

const Table = () => {
    const [users, setUsers] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    // const [data, setData] = useRecoilState(statusState)
    const data = useRecoilValue(statusState)



    useEffect(() => {
        axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then(response => {
                setUsers(response.data)
            })
    }, [])

    const columns = [
        { field: 'orgName', headerName: 'ORGANIZATION', width: 200 },
        { field: 'userName', headerName: 'USERNAME', width: 170 },
        { field: 'email', headerName: 'EMAIL', width: 240 },
        { field: 'phoneNumber', headerName: 'PHONE NUMBER', width: 180 },
        {
            field: 'createdAt', headerName: 'DATE JOINED', width: 180,
            type: 'date',
            valueFormatter: params =>
                moment(params?.value).format("DD/MM/YYYY hh:mm A")

        },
        {
            field: 'actions',
            headerName: 'STATUS',
            width: 100,
            renderCell: (params) => {
                return (
                    <div className='status'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                        <span className={`status ${data}`}>{data}</span>
                        <LongMenu id={params.row.id} />
                    </div>
                )


            }
        },


    ];

    return (
        <div className='datatable'>
            < DataGrid
                sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    color: '#213F7D',
                    fontSize: '13px',
                }}

                getRowId={(row) => row.id}
                rows={users}
                disableSelectionOnClick
                columns={columns}
                loading={!users.length}
                pageSize={pageSize}
                // onCellEdit={handleCellEdit}

                rowsPerPageOptions={[10, 15, 20]}
                // checkboxSelection
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />

        </div>
    )
}


export default Table
