import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:"300px"}}>
   <Table aria-label="simple table" stickyHeader>
    <TableHead>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First</TableCell>
            <TableCell>Last</TableCell>
            <TableCell align="center">Email</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
            tableData.map((row)=>(
                <TableRow key={row.id} sx={{"&:last-child td,&:last-child th":{border:0}}}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell  align="center">{row.email}</TableCell>
                </TableRow>
            ))
        }
    </TableBody>
   </Table>
    </TableContainer>
  )
}
const tableData=[{
    "id": 1,
    "first_name": "Gale",
    "last_name": "Bilovus",
    "email": "gbilovus0@who.int",
    "gender": "Male",
    "ip_address": "196.203.51.134"
  }, {
    "id": 2,
    "first_name": "Marieann",
    "last_name": "Gossling",
    "email": "mgossling1@cnbc.com",
    "gender": "Female",
    "ip_address": "219.216.183.193"
  }, {
    "id": 3,
    "first_name": "Janice",
    "last_name": "Gobell",
    "email": "jgobell2@technorati.com",
    "gender": "Female",
    "ip_address": "188.180.155.47"
  }, {
    "id": 4,
    "first_name": "Clifford",
    "last_name": "Stuchburie",
    "email": "cstuchburie3@g.co",
    "gender": "Male",
    "ip_address": "29.94.10.230"
  }, {
    "id": 5,
    "first_name": "Kelli",
    "last_name": "Clague",
    "email": "kclague4@pen.io",
    "gender": "Genderqueer",
    "ip_address": "80.163.118.78"
  }, {
    "id": 6,
    "first_name": "Haze",
    "last_name": "Parkeson",
    "email": "hparkeson5@hud.gov",
    "gender": "Male",
    "ip_address": "152.6.147.95"
  }, {
    "id": 7,
    "first_name": "Emlyn",
    "last_name": "Gellett",
    "email": "egellett6@joomla.org",
    "gender": "Non-binary",
    "ip_address": "221.59.136.92"
  }, {
    "id": 8,
    "first_name": "Dorotea",
    "last_name": "Draisey",
    "email": "ddraisey7@163.com",
    "gender": "Female",
    "ip_address": "122.244.196.28"
  }, {
    "id": 9,
    "first_name": "Ermanno",
    "last_name": "Ferebee",
    "email": "eferebee8@techcrunch.com",
    "gender": "Male",
    "ip_address": "80.161.112.229"
  }, {
    "id": 10,
    "first_name": "Shellie",
    "last_name": "Snozzwell",
    "email": "ssnozzwell9@businessweek.com",
    "gender": "Female",
    "ip_address": "9.0.33.22"
  }]

export default MuiTable
