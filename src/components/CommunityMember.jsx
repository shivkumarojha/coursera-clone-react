import { Box, Typography } from "@mui/material";

export default function CommunityMember({ image, name, place, quote, widht }) {
  return (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <img src={image} alt="" />
      <Typography
        sx={{
          fontWeight: "bold",
          marginTop: 2,
          marginBottom: 1,
          letterSpacing: 1.5,
        }}
      >
        {name}
      </Typography>
      <Typography>{place}</Typography>
      <hr
        style={{
          width: "80px",
        }}
      />
      <Typography>{quote}</Typography>
    </Box>
  );
}
