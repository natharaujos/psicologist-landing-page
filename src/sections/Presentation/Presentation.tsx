import Structure from "./styles/Structure";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import InfosPresentation from "./components/InfosPresentation/InfosPresentation";
import { Box } from "@mui/material";

function Presentation() {
  return (
    <Structure>
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={{ xs: "0 2rem", md: "0 6rem" }}
      >
        <InfosPresentation />
        <ImageContainer />
      </Box>
    </Structure>
  );
}

export default Presentation;
