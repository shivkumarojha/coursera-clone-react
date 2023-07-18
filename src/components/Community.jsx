import { Box, Typography } from "@mui/material";
import CommunityMember from "./CommunityMember";
import Chitranshee from '../assets/community/Chitranshee.png'
import Anisha from '../assets/community/Anisa_Ray.png'
import Carlos from '../assets/community/Carlos.png'
export default function Community() {
    return (
      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 5,
          textAlign: "center",
          backgroundColor: "black",
          color: "whitesmoke",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bolder",
          }}
        >
          From the Coursera community
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          124+ million people have already joined Coursera
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: 10  
          }}
        >
          <CommunityMember
            image={Chitranshee}
            place={"India"}
            quote={
              "“Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”"
            }
            width={"300px"}
          />
          <CommunityMember
            image={Anisha}
            place={"USA"}
            quote={
              "“Earning my IT certificates helped me demonstrate my knowledge to recruiters and enhanced my standing as an applicant. Now, I love my new job in the tech industry; technology is always evolving, and I continue to learn something every day.”"
            }
            width={"300px"}
          />
          <CommunityMember
            image={Carlos}
            place={"USA"}
            quote={
              "“The program totally changed my life. I have this career in front of me now that wasn’t even in sight before, and it’s what I want to be doing. That’s really powerful.”"
            }
            width={"300px"}
          />
        </Box>
      </Box>
    );
    
}