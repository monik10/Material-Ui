import { Box,FormControlLabel,Checkbox ,FormControl,FormLabel, FormGroup,FormHelperText} from "@mui/material"
import { useState } from "react"
import { BookmarkBorder } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";

const MuiCheckbox = () => {
    const[accept,setAccept]=useState(false);
    const [skills,setSkills]=useState<string[]>([]);
    console.log(accept);
    console.log(skills);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setAccept(e.target.checked)
    }
    const handleSkillchange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
   const index=skills.indexOf(e.target.value)
   if(index===-1)
   {
    setSkills([...skills,e.target.value])
}
else{
    setSkills(skills.filter(skill=>skill !== e.target.value))
}
    }
  return (
    <Box>
        <Box>
            <FormControlLabel label="i accept terms and condition" control={<Checkbox checked={accept} onChange={handleChange} size="small" color="success"/>}></FormControlLabel>
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorder/>} checkedIcon={<Bookmark/>} checked={accept} onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel label="HTML"  value="html" control={<Checkbox  checked={skills.includes("html")} onChange={handleSkillchange}/>}/>
                <FormControlLabel label="CSS" value="css" control={<Checkbox  checked={skills.includes("css")} onChange={handleSkillchange}/>}/>
                <FormControlLabel label="JS" value="js" control={<Checkbox  checked={skills.includes("js")} onChange={handleSkillchange}/>}/>
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox