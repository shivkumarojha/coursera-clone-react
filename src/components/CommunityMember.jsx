import { Box, Typography } from "@mui/material";

export default function CommunityMember({ image, place, quote, widht }) {
  return (
    <Box sx={{
        width: "300px"
    }}>
        <img src={image} alt="" />
        <Typography>
            {place}
        </Typography>
        <hr style={{
            width: "50px"
        }}/>
        <Typography>
            {quote}
        </Typography>
    </Box>
  )
}
