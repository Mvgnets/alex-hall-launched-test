import React, { useEffect } from 'react';
import { Container, Drawer, Typography } from '@mui/material';
import useAxios from 'axios-hooks';
import { IUser } from '../interfaces/interfaces';
import { backupData } from '../backupData';
import DrawerList from './drawerList';
import UserGrid from './userGrid';

const Users: React.FC = () => {
    const [{ data, loading, error }] = useAxios(
        'https://jsonplaceholder.typicode.com/users'
    )

    const [open, setOpen] = React.useState(false);
    const [chosenUser, setChosenUser] = React.useState<IUser>();

    const [localData, setLocalData] = React.useState<IUser[]>([]);

    useEffect(() => {
        if (data) {
            setLocalData(data)
        }
    }, [data]);

    const OpenUserDetails = (newOpen: boolean, user: IUser) => () => {
        setOpen(newOpen);
        setChosenUser(user);
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mt: 3 }}>
                Alex Hall - Launched Test
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mt: 3 }}>
                User List
            </Typography>

            {localData
                ?
                <UserGrid data={localData} OpenUserDetails={OpenUserDetails} localData={localData} setLocalData={setLocalData} />
                :
                <UserGrid data={backupData} OpenUserDetails={OpenUserDetails} localData={localData} setLocalData={setLocalData} />

            }
            <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
                <DrawerList chosenUser={chosenUser} toggleDrawer={toggleDrawer} />
            </Drawer>
        </Container >
    );
}

export default Users;
