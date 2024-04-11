import { Button, Stack } from "@mui/material";
import { IUser } from "../interfaces/interfaces";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

interface IDrawerListProps {
    data: IUser[],
    OpenUserDetails: (newOpen: boolean, user: IUser) => () => void,
    localData: IUser[],
    setLocalData: (value: React.SetStateAction<IUser[]>) => void
}


export const UserGrid: React.FC<IDrawerListProps> = ({ data, OpenUserDetails, localData, setLocalData }: IDrawerListProps) => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'Username',
            flex: 1
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email Address',
            flex: 1
        },
        {
            field: 'Actions',
            renderCell: (params: GridRenderCellParams<any, Date>) => (
                <Stack direction={'row'} spacing={1} alignItems={'center'} height={'100%'}>
                    <Button variant="contained" onClick={OpenUserDetails(true, params.row)
                    }>Details</Button>
                    <Button variant="outlined" onClick={() => {
                        setLocalData(localData.filter((item) => item.id !== params.row.id))
                    }
                    }>Delete</Button>

                </Stack>
            ),
            flex: 1
        },

    ];

    return (

        <DataGrid
            rows={data}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            rowHeight={60}
        />
    )
}

export default UserGrid;