import { Box } from "@mui/material";
import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
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
      className="gap-5"
    >
      <section className="h-[85vh] w-3/4 2xl:h-[60vh] 2xl:w-4/6 bg-primary flex items-center rounded-md">
        <div className="flex justify-center items-center w-full h-full pt-5">
          <Box
            component={"div"}
            width={"40%"}
            className="flex justify-center items-start h-full"
          >
            <PictureAboutMe />
          </Box>
          <Box component={"div"} width={"50%"} className="h-full">
            <InfosAboutMe />
          </Box>
        </div>
      </section>
    </Box>
  );
}

export default AboutMe;
