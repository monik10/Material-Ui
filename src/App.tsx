import { createTheme,colors, ThemeProvider } from "@mui/material";

// import Muitypography from "./components/Muitypography"
// import MuiTabs from "./components/MuiTabs"

// import MuiMasonry from "./components/MuiMasnory"
import MuiResponsiveness from "./components/MuiResponsiveness"

// import MuiTimeline from "./components/MuiTimeline"

// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// import MuiLoadingButton from "./components/MuiLoadingButton"
// import MuiPicker from "./components/MuiPicker";

// import MuiProgress from "./components/MuiProgress"
// import MuiSkeleton from "./components/MuiSkeleton"

// import MuiDialog from "./components/MuiDialog"
// import MuiSnackBar from "./components/MuiSnackBar"

// import MuiAlert from "./components/MuiAlert"

// import MuiTable from "./components/MuiTable"
// import MuiTooltip from "./components/MuiTooltip"

// import MuiBatch from "./components/MuiBatch"
// import MuiChip from "./components/MuiChip"
// import MuiList from "./components/MuiList"

// import MuiAvatar from "./components/MuiAvatar"

// import MuiBottomNavigation from "./components/MuiBottomNavigation"
// import MuiSpeedDial from "./components/MuiSpeedDial"

// import MuiImageList from "./components/MuiImageList"

// import MuiAccordian from "./components/MuiAccordian"9
// import MuiNavbar from "./components/MuiNavbar"

// import MuiComplete from "./components/MuiComplete"
// import MuiCard from "./components/MuiCard"
// import MuiLayout from "./components/MuiLayout"
// import MuiRating from "./components/MuiRating"

// import MuiSwitch from "./components/MuiSwitch"

// import MuiCheckbox from "./components/MuiCheckbox"

// import MuiRadioButton from "./components/MuiRadioButton"

// import MuiSelect from "./components/MuiSelect"

// import MuiTextfield from "./components/MuiTextfield"

// import MuiButton from "./components/MuiButton";




const theme=createTheme({
  status:{
    danger:"#e53e3e"
  },
  palette:{
    secondary:{
      main:colors.orange[500]
    },
    neutral :{
      main:colors.grey[500],
    }
  }

})
const App = () => {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div>
      {/* <Muitypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextfield/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckbox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiComplete/> */}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordian/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiImageList/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}
      {/* <MuiAvatar/> */}
      {/* <MuiBatch/> */}
      {/* <MuiList/> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackBar/> */}
      {/* <MuiDialog/> */}
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      {/* <MuiPicker/> */}
      {/* <MuiTabs/> */}
      {/* <MuiTimeline/> */}
      {/* <MuiMasonry/> */}
      <ThemeProvider theme={theme}>
      <MuiResponsiveness />
      </ThemeProvider>
      
    </div>
    // </LocalizationProvider>
  )
}

export default App
