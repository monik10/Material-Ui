import { Face } from "@mui/icons-material"
import { Avatar, Chip, Stack } from "@mui/material"
import { useState } from "react"


const MuiChip = () => {
    const [chips,setChips]=useState(["chip 1","chip 2","chip 3"]);
    const handleDelete=(chipToDelete:string)=>
    {
        setChips(chips=>chips.filter(chip=>chip !== chipToDelete))
    }
  return (
   <Stack direction={"row"} spacing={1}>
<Chip label="Chip" color="primary" size="small" icon={<Face/>}/>
<Chip variant="outlined" label="Chip" color="secondary" size="small" avatar={<Avatar>V</Avatar>}/>
<Chip label="Click" color="success"  onClick={()=> alert("clicked")}/>
<Chip label="Delete" color="error"  onDelete={()=> alert("Delete")}/>
{
    chips.map(chip=>(
        <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}></Chip>
    ))
}
   </Stack>
  )
}

export default MuiChip
