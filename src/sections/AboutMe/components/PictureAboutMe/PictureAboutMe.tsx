import { Box } from "@mui/material";
import AboutMeImage from "./styles/AboutMeImage";
import aboutMe from "../../assets/about_me.jpeg";

function PictureAboutMe() {
  return (
    <Box
      color={"white"}
      display={{ lg: "block" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <AboutMeImage src={aboutMe} />
    </Box>
  );
}

export default PictureAboutMe;
