import { Stack, Button, IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material";
import { useState } from "react";
const MuiButton = () => {
    const[formats,setFormats]=useState<string|null>(null);
    console.log(formats);
    const handleFormatChange=(event:React.MouseEvent<HTMLElement>,updatedFormats:string|null)=>
    {
        setFormats(updatedFormats);
    }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button
          variant="text"
          href="https://mui.com/material-ui/customization/default-theme/"
        >
          Text{" "}
        </Button>
        <Button variant="contained">Text </Button>
        <Button variant="outlined">Text </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Medium
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation disableRipple onClick={()=> alert("clicked")}>Send</Button>
        <IconButton color="success" size="small"><SendIcon/></IconButton>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup variant="outlined" orientation="vertical" size="small" color="warning" aria-label="alignment button group">
      <Button onClick={()=>alert("left clicked")}>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive >
            <ToggleButton value={"bold"} aria-label="bold"><FormatBold/></ToggleButton>
            <ToggleButton value={"italic"} aria-label="italic "><FormatItalic/></ToggleButton>
            <ToggleButton value={"underlined"} aria-label="underlined "><FormatUnderlined/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
