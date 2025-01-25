import { Box } from "@mui/material";
import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
import Structure from "./styles/Structure";
import { CREME } from "../../shared/constants/Colors";
import PictureAboutMe from "./components/PictureAboutMe/PictureAboutMe";

function AboutMe() {
  return (
    <Box
      component="div"
      pt={5}
      pb={5}
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
          padding={{ lg: "1rem 1rem" }}
        >
          <Box
            component={"div"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              component={"div"}
              width={"40%"}
              display={"flex"}
              alignItems={"flex-start"}
              height={"100%"}
            >
              <PictureAboutMe />
            </Box>
            <Box component={"div"} width={"50%"}>
              <InfosAboutMe />
            </Box>
          </Box>
        </Box>
      </Structure>
    </Box>
  );
}

export default AboutMe;
