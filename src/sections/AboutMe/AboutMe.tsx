import { Box } from "@mui/material";
import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
import Structure from "./styles/Structure";
import { CREME } from "../../shared/constants/Colors";

function AboutMe() {
  return (
    <Box
      component="div"
      pt={10}
      pb={10}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={CREME}
    >
      <Structure>
        <Box
          minHeight={"75%"}
          width={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          padding={{ xs: "0 2rem", md: "0 12rem" }}
        >
          <InfosAboutMe />
        </Box>
      </Structure>
    </Box>
  );
}

export default AboutMe;
