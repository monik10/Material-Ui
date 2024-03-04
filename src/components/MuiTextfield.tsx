import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

const MuiTextfield = () => {
    const [value,setValue]=useState("");
  return (
    <Stack spacing={4}>
        <Stack direction={"row"} spacing={2}>
            <TextField label="Email" variant="outlined"/>
            <TextField label="Email" variant="filled"/>
            <TextField label="Email" variant="standard"/>
        </Stack>
        <Stack direction={"row"} spacing={2}>
        <TextField label="Password" size="small" color="success"/>
        <TextField label="Name"required value={value} onChange={(e)=>setValue(e.target.value)} error={!value} helperText={!value ? "Required":"Dont share with anyone"}/>
        <TextField label="Name" helperText="Enter your name"/>
        <TextField label="Contact" disabled/>
        <TextField label="Read only" InputProps={{readOnly:true}}/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
            <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}/>
            <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}} />
            </Stack>
    </Stack>
  )
}

export default MuiTextfield