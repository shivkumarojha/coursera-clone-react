import { Box,Button, Typography } from "@mui/material";
import NextStepImage from '../assets/Image-Next-Step.png'
import { Link } from "react-router-dom";

export default function NextStep() {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#192024",
          color: "whitesmoke",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <img src={NextStepImage} alt="" style={{
            border: "2px solid gray",
            padding: 2,
            borderRadius: 5
        }}/>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "450px"
        }}>
          <Typography variant="h4" sx={{
            fontWeight: "bolder",
            letterSpacing: 1,
            paddingBottom: 2
            
          }}>
            Take the next step toward your personal and professional goals with
            Coursera.
          </Typography>

          <Typography >
            Join now to receive personalized recommendations from the full Coursera catalog.
          </Typography>
          <Link to={`/signup`}>
            <Button variant="contained" sx={{
                marginTop: 4,
                paddingY: 2,
                paddingX: 6,
                fontWeight: "bolder",
                letterSpacing: 2
            }}>Join for free</Button>
          </Link>
        </Box>
      </Box>
    );
}