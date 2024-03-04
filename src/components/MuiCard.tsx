import { Box,Card,CardContent ,Typography,CardActions, Button, CardMedia} from "@mui/material"


const MuiCard = () => {
  return (
    <Box width={"300px"}>
        <Card>
            <CardMedia component={"img"} height={"140px"} image="/public/jpeg-optimizer_flower.jpg" alt="flower"/>
            <CardContent>
                        <Typography gutterBottom variant="h5" component={"div"}>
React
                        </Typography>
                        <Typography variant="body2" color={"text.secondary"}>
                            React is a javascript library for building user interfaces
                        </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard