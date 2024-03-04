import { Avatar, AvatarGroup, Stack } from "@mui/material"


const MuiAvatar = () => {
  return (
    <Stack spacing={2}>
     <Stack direction={"row"} spacing={1}>
        <Avatar sx={{bgcolor:"primary.light"}}>BW</Avatar>
        <Avatar sx={{bgcolor:"secondary.light"}}>CK</Avatar>
     </Stack>
     <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
        <Avatar sx={{bgcolor:"primary.light"}}>BW</Avatar>
        <Avatar sx={{bgcolor:"secondary.light"}}>CK</Avatar>
        <Avatar src="/public/jpeg-optimizer_flower.jpg" alt="Jahn Doe"/>
        <Avatar src="/public/vite.svg" alt="James Vite"/>
        </AvatarGroup>
     </Stack>
     <Stack direction={"row"} spacing={1}>
        <Avatar variant="square" sx={{bgcolor:"primary.light",width:48,height:48}}>BW</Avatar>
        <Avatar  variant="rounded" sx={{bgcolor:"secondary.light",width:48,height:48}}>CK</Avatar>
     </Stack>
    </Stack>
  )
}

export default MuiAvatar