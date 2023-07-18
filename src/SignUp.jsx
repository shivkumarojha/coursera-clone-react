import {Button, Box, Typography, Card, TextField } from "@mui/material"

export default function SignUp() {

    return (
      <Box
        sx={{
          textAlign: "center",
          marginTop: "100px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
            sx={{
                fontSize:"18px",
                fontWeight: "bold",
                marginBottom: 2

            }}
        >Sign Up here,To access Courses</Typography>
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <TextField
            variant="outlined"
            label="Your Name"
            type="text"
            sx={{
              margin: 1,
              width: "300px",
            }}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            sx={{
              margin: 1,
              width: "300px",
            }}
          />
          <TextField
            variant="outlined"
            label="Enter Password"
            type="password"
            sx={{
              margin: 1,
              width: "300px",
            }}
          />
          <TextField
            variant="outlined"
            label="Confirm Password"
            type="password"
            sx={{
              margin: 1,
              width: "300px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              margin: 1,
              width: "300px",
              background: "black"
            }}
          >
            Sign Up
          </Button>
        </Card>
      </Box>
    );
}