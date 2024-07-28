import { Box } from "@mui/material";
import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
import Structure from "./styles/Structure";
import ImageContainer from "../Presentation/components/ImageContainer/ImageContainer";

function AboutMe() {
  return (
    <Structure>
      <Box
        minHeight={"75%"}
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        padding={{ xs: "0 2rem", md: "0 12rem" }}
      >
        <ImageContainer />
        <InfosAboutMe />
      </Box>
    </Structure>
  );
}

export default AboutMe;
