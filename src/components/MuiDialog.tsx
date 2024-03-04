import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"


const MuiDialog = () => {
    const[open,setOpen]=useState(false);
  return (
  <>
   <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
   <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description" open={open} onClose={()=>setOpen(false)}>
    <DialogTitle>Submit the text</DialogTitle>
    <DialogContent>
        <DialogContentText id="dialog-description">Are you sure want to submit</DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={()=>setOpen(false)}>Cancel</Button>
        <Button autoFocus>Submit</Button>
    </DialogActions>
   </Dialog></>
  )
}

export default MuiDialog
