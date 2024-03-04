import { CheckRounded } from "@mui/icons-material"
import { Alert, AlertTitle, Button, Stack } from "@mui/material"


const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity="error"> This  is an error</Alert>
        <Alert severity="warning"> This  is an warning</Alert>
        <Alert severity="info"> This  is an info</Alert>
        <Alert severity="success"> This  is an success</Alert>

        <Alert variant="outlined" severity="error"> This  is an error</Alert>
        <Alert variant="outlined" severity="warning"> This  is an warning</Alert>
        <Alert variant="outlined" severity="info"> This  is an info</Alert>
        <Alert variant="outlined" severity="success"> This  is an success</Alert>

        
        <Alert variant="filled" severity="error" onClose={()=>alert("close alert")}><AlertTitle>Error</AlertTitle> This  is an error</Alert>
        <Alert variant="filled" severity="warning"> <AlertTitle>Warning</AlertTitle>This  is an warning</Alert>
        <Alert variant="filled" severity="info"> <AlertTitle>Info</AlertTitle>This  is an info</Alert>
        <Alert variant="filled" severity="success" icon={<CheckRounded fontSize="inherit"/>} action={<Button color="inherit" size="small">UNDO</Button>}> <AlertTitle>Success</AlertTitle>This  is an success</Alert>
    </Stack>
  )
}

export default MuiAlert
