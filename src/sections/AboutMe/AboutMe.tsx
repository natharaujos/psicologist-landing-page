import { Box } from "@mui/material";
import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
import PictureAboutMe from "./components/PictureAboutMe/PictureAboutMe";
import Structure from "./styles/Structure";

function AboutMe() {
  return (
    <Structure>
      <Box
        minHeight={"75%"}
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        padding={"0 12rem"}
      >
        <PictureAboutMe />
        <InfosAboutMe />
      </Box>
    </Structure>
  );
}

export default AboutMe;
