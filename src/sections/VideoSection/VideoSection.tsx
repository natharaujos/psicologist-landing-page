import { Box } from "@mui/material";
import Structure from "./styles/Structure";
import { PINK } from "../../shared/constants/Colors";
import Video from "./styles/Video";
import videoPresentation from "./assets/video_presentation.mp4";
import Title from "../../shared/styles/Title";

function VideoSection() {
  return (
    <Box
      component="div"
      pt={10}
      pb={10}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={PINK}
    >
      <Structure>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Title>Vamos em busca do controle, da leveza e independência?</Title>
          <Video src={videoPresentation} controls />
        </Box>
      </Structure>
    </Box>
  );
}

export default VideoSection;
