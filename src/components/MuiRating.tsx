import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Stack,Rating } from "@mui/material"
import React, { useState } from "react"

const MuiRating = () => {
    const [rate,setRate]=useState<number|null>(3);
    console.log(rate);
  
    const handleChange=(e:React.ChangeEvent<unknown>,newValue:number|null)=>
    {
setRate(newValue)
    }
  return (
    <Stack spacing={2}>
<Rating value={rate} onChange={handleChange} precision={1} size="large" icon={<Favorite fontSize="inherit" color="error"/>} emptyIcon={<FavoriteBorder fontSize="inherit"/>} highlightSelectedOnly/>
    </Stack>
  )
}

export default MuiRating