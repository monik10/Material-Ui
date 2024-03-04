import { Mail } from "@mui/icons-material"
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const MuiList = () => {
  return (
    <Box sx={{width:"400px",bgcolor:"#efefef"}}>
        <List>
            <ListItem>
                <ListItemButton>
                <ListItemIcon><ListItemAvatar><Avatar><Mail/></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary="List item 1" secondary="secondary-text"/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemButton>
            <ListItemIcon><ListItemAvatar><Avatar><Mail/></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary="List item 2" secondary="secondary-text"/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemButton>
            <ListItemIcon><ListItemAvatar><Avatar><Mail/></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary="List item 3" secondary="secondary-text"/>
                </ListItemButton>
            </ListItem>
           

        </List>
    </Box>
  )
}

export default MuiList