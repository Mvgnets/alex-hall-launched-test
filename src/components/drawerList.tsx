import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { IUser } from "../interfaces/interfaces";

interface IDrawerListProps {
    chosenUser?: IUser
    toggleDrawer: (newOpen: boolean) => () => void
}

export const DrawerList: React.FC<IDrawerListProps> = ({ chosenUser, toggleDrawer }: IDrawerListProps) => {
    return (

        <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
            <Typography variant='h6' sx={{ pt: 2, px: 2 }}>Chosen User Details</Typography>
            {chosenUser && <List>
                <ListItem>
                    <ListItemText primary={`Username: ${chosenUser.username}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Name: ${chosenUser.name}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Email: ${chosenUser.email}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Address 1: ${chosenUser.address.suite}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Address 2: ${chosenUser.address.street}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`City: ${chosenUser.address.city}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Zip: ${chosenUser.address.zipcode}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Phone: ${chosenUser.phone}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={`Company: ${chosenUser.company.name}`} />
                </ListItem>

            </List>
            }

        </Box>
    )
}

export default DrawerList;