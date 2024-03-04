import { Box,FormControlLabel,Switch } from "@mui/material"
import { useState } from "react"

const MuiSwitch = () => {
    const[theme,setTheme]=useState(false);
    console.log(theme);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setTheme(e.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label="Dark mode" control={<Switch checked={theme} onChange={handleChange} size="small" color="secondary"/>}/>
    </Box>
  )
}

export default MuiSwitch