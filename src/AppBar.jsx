import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom'
 
export default function AppBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        color: "white",
        paddingTop: 2,
        paddingBottom:2,
      }}
    >
      <Link to={`/`} style={{ textDecoration: "none"}}>
        <Typography
          variant="h5"
          letterSpacing={3}
          fontWeight={"bold"}
          sx={{
                color: "white",
                paddingLeft: 2            
          }}
        >
          Courses
        </Typography>
      </Link>
      <Box>
        <Link to={`login/`}>
          <Button variant="contained" sx={{ marginRight: 3}}>
            Sign In
          </Button>
        </Link>
        <Link to={`signup/`}>
          <Button variant="contained" sx={{ marginRight: 3}} >
            Sing Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
