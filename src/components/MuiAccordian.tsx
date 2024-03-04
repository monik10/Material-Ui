import { Accordion,AccordionSummary ,AccordionDetails, Typography} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { useState } from "react"

const MuiAccordian = () => {
    const [expanded,setExpanded]=useState<string|false>(false);
    const handleChange=(isExpanded:boolean,panel:string)=>
    {
        setExpanded(isExpanded ?panel:false)
    }
  return (
    <div>
        <Accordion expanded={expanded === "panel1"} onChange={(e,isExpanded)=>{handleChange(isExpanded,"panel1")}}>
            <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMore/>}>
            <Typography>Accordian 1</Typography>
            </AccordionSummary>
                <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti nam possimus blanditiis vel tenetur dolore rem deserunt tempore, earum facilis consectetur veritatis, commodi consequuntur nobis temporibus tempora, libero cum.</Typography>
                </AccordionDetails>
            
        </Accordion>
        <Accordion  expanded={expanded === "panel2"}  onChange={(e,isExpanded)=>{handleChange(isExpanded,"panel2")}}>
            <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMore/>}>
            <Typography>Accordian 2</Typography>
            </AccordionSummary>
                <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti nam possimus blanditiis vel tenetur dolore rem deserunt tempore, earum facilis consectetur veritatis, commodi consequuntur nobis temporibus tempora, libero cum.</Typography>
                </AccordionDetails>
            
        </Accordion>
        <Accordion  expanded={expanded === "panel3"}  onChange={(e,isExpanded)=>{handleChange(isExpanded,"panel3")}}>
            <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMore/>}>
            <Typography>Accordian 3</Typography>
            </AccordionSummary>
                <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti nam possimus blanditiis vel tenetur dolore rem deserunt tempore, earum facilis consectetur veritatis, commodi consequuntur nobis temporibus tempora, libero cum.</Typography>
                </AccordionDetails>
            
        </Accordion>
    </div>
  )
}

export default MuiAccordian