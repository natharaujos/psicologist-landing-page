import Structure from "./styles/Structure";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import InfosPresentation from "./components/InfosPresentation/InfosPresentation";
import { Box } from "@mui/material";

function Presentation() {
  return (
    <Structure>
      <Box height={"100%"} display={"flex"} padding={"0 12rem"}>
        <InfosPresentation />
        <ImageContainer />
      </Box>
    </Structure>
  );
}

export default Presentation;
