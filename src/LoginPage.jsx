import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <Typography
        variant={"h6"}
        sx={{
          marginBottom: "3px",
          fontWeight: "bold"
        }}
      >
        Welcome to Coursera, Login here!
      </Typography>
      <Card
        variant="outlined"
        sx={{
          padding: 5,
          marginTop: 2,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: "300px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            sx={{
              width: "300px",
            }}
          />
          <TextField label="Password" type="password" variant="outlined" />
          <Button
            variant={"contained"}
            type="submit"
            sx={{
              background: "black",
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
