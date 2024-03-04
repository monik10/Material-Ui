import { Mail } from "@mui/icons-material"
import { Badge, Stack } from "@mui/material"


const MuiBatch = () => {
  return (
    <Stack spacing={2} direction={"row"}>
        <Badge badgeContent={5} color="primary"><Mail/></Badge>
        <Badge variant="dot" color="primary" invisible={true}><Mail/></Badge>
        <Badge badgeContent={100} color="secondary" showZero max={999}><Mail/></Badge>
    </Stack>
  )
}

export default MuiBatch