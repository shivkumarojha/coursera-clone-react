import { Box, Button, Typography } from "@mui/material"
import  HeaderImage from '../assets/HeaderImage.png'
import { Link } from 'react-router-dom'

export default function Header({ background, textColor }) {
    return (
      <Box
        sx={{
          backgroundColor: { background },
          '@media(max-width: 600px)': {
              width: "100%",
              textAlign: "center"
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 9,
          }}
        >
          <div
            style={{
              width: "40vw",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
              }}
            >
              Learn Without Limits
            </Typography>
            <Typography
              sx={{
                color: "white",
              }}
            >
              Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </Typography>
            <Link to={`/signup`}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  marginTop: 3,
                  padding: 2,
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontWeight: "bold",
                  marginRight: 4,
                }}
              >
                Join For Free
              </Button>
            </Link>
            <Link to={`/login`}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  marginTop: 3,
                  padding: 2,
                  paddingLeft: 10,
                  paddingRight: 10,
                  fontWeight: "bold",
                }}
              >
                Log in
              </Button>
            </Link>
          </div>
          <Box sx={{
            '@media (max-width: 800px)': {
              display: "none"
            }
          }}
          >
            <img src={HeaderImage} alt="" />
          </Box>
        </Box>
      </Box>
    );
}