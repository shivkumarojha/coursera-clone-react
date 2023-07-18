import { Typography, Box } from "@mui/material";
import CollaborateImage from './CollaborateImage'
import Duke from '../assets/collaborate/duke.png'
import Google from '../assets/collaborate/google.png'
import Ibm from "../assets/collaborate/ibm.png";
import Illinois from "../assets/collaborate/illinois.png";
import Imperial from "../assets/collaborate/imperial.png";
import Penn from "../assets/collaborate/penn.png";
import Stanford from "../assets/collaborate/stanford.png";
import Umich from "../assets/collaborate/umich.png";
export default function Collaborate({ background }) {
    return (
      <Box
        sx={{
          backgroundColor: { background },
          padding: 8,
        }}
      >
        <Typography
          variant={"h5"}
          sx={{
            padding: 4,
            textAlign: "center",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          We collaborate with 300+ leading universities and companies
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 3,
            marginBottom: 7,
          }}
        >
          <CollaborateImage image={Duke} />
          <CollaborateImage image={Google} />
          <CollaborateImage image={Ibm} />
          <CollaborateImage image={Illinois} />
          <CollaborateImage image={Imperial} />
          <CollaborateImage image={Penn} />
          <CollaborateImage image={Stanford} />
          <CollaborateImage image={Umich} />
        </Box>
      </Box>
    );
}