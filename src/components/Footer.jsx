import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "wheat",
        padding: 10,
      }}
    >
      <hr style={{ width: "100%" }} />
      <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 2
            
        }}
        >
          <Typography>© 2023 Coursera Inc. All rights reserved.</Typography>
          <Box sx={{
            display: "flex",
            width: "20vw",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <InstagramIcon style={{ width: 50, height: 30 }}/>
            <FacebookIcon style={{ width: 50, height: 30 }} />
            <LinkedInIcon style={{ width: 50, height: 30 }} />
            <YouTubeIcon style={{ width: 50, height: 30 }} />
            <TwitterIcon style={{ width: 50, height: 30 }} />
          </Box>
      </Box>
    </Box>
  );
}
