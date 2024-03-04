import { Button, Snackbar,Alert,AlertProps } from "@mui/material"
import { forwardRef, useState } from "react"

const SnackbarAlert=forwardRef<HTMLDivElement,AlertProps>(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)
const MuiSnackBar = () => {
    const[open,setOpen]=useState(false);
    const handleClose=(e?:React.SyntheticEvent | Event,reason?:string)=>
    {
if( reason ==="Clickaway")
{
    return
}
setOpen(false);
    }
  return (
   <>
   <Button onClick={()=>setOpen(true)}>Submit</Button>
   {/* <Snackbar message="Form submitted sucessfully" autoHideDuration={4000} open={open} onClose={handleClose} anchorOrigin={{vertical:"bottom",horizontal:"center"}}/> */}
   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <SnackbarAlert onClose={handleClose} severity="success">Form submitted succesfully</SnackbarAlert>
   </Snackbar>
   </>
  )
}

export default MuiSnackBar
