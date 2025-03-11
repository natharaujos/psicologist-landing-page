import { Box } from "@mui/material";
import aboutMe from "../../assets/about_me.jpeg";

function PictureAboutMe() {
  return (
    <Box
      color={"white"}
      display={{ lg: "block" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <img className="h-auto rounded-lg max-w-[330px]" src={aboutMe} />
    </Box>
  );
}

export default PictureAboutMe;
