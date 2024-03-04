/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"
type Skill={
id:number,
label:string,
}
const skills=["html","css","javascript","React"]
const skillsOptions=skills.map((skill,index)=>({id:index+1,label:skill}))
const MuiComplete = () => {
    const [value,setValue]=useState<string|null>(null); 
    const [skill,setSkill]=useState<Skill|null>(null);
    console.log(skill);
    console.log(value);
    const handleChange=(e:any,newValue:string|null)=>
    {
        setValue(newValue);
    }
  return (
    <Stack spacing={2} width={"250px"}>
        <Autocomplete options={skills} renderInput={(params)=><TextField {...params} label="Skills"/>} value={value} onChange={handleChange} freeSolo/>
        <Autocomplete options={skillsOptions} renderInput={(params)=><TextField {...params} label="Skills"/>} value={skill} onChange={(e:any,newValue:Skill|null)=>setSkill(newValue)} freeSolo/>
    </Stack>
  )
}

export default MuiComplete