import { DatePicker,TimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material"
import { useState } from "react"


const MuiPicker = () => {
    const [selectedDate,setSelectedDate]=useState<Date|null>(null);
    const [selectedTime,setSelectedTime]=useState<Date|null>(null);
    console.log(selectedDate)
    console.log({selectedTime:selectedTime && selectedTime.toLocaleTimeString()})
  return (
    <Stack spacing={4} sx={{width:"250px"}}>
      <DatePicker label="Date Picker" renderInput={(params)=><TextField {...params}/>} value={selectedDate} onChange={(newValue)=>{setSelectedDate(newValue)}}></DatePicker>
      <TimePicker label="Time Picker" renderInput={(params)=><TextField {...params}/>} value={selectedTime} onChange={(newValue)=>{setSelectedTime(newValue)}}></TimePicker>
    </Stack>
  )
}

export default MuiPicker
