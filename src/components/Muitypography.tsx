import { Typography } from "@mui/material"

const Muitypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>
        <hr/>
        <Typography variant="subtitle1">subtitle1 Heading</Typography>
        <Typography variant="subtitle2">subttile2Heading</Typography>
        <hr/>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio magni repudiandae ducimus illo, ipsam tenetur amet repellat recusandae ullam ratione!</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa adipisci voluptatibus illum dolores quis nesciunt, ratione suscipit sequi earum impedit!</Typography>
    </div>
  )
}

export default Muitypography