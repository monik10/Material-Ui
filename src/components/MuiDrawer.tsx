import { Menu } from "@mui/icons-material";
import { Drawer,Box,Typography, IconButton} from "@mui/material"
import { useState } from "react"


const MuiDrawer = () => {
    const[isDrawerOpen,setIsDraweropen]=useState(false);
  return (
   <>
   <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDraweropen(true)}><Menu/></IconButton>
   <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDraweropen(false)}>
    <Box p={2} width="250px" textAlign={"center"} role="presentation">
<Typography variant="h6" component={"div"}>
Side Panel
</Typography>
    </Box>
   </Drawer>
   </>
  )
}

export default MuiDrawer