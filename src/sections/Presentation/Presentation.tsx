import ImageContainer from "./components/ImageContainer/ImageContainer";
import InfosPresentation from "./components/InfosPresentation/InfosPresentation";
import { Box } from "@mui/material";

function Presentation() {
  return (
    <section className="h-[80vh] w-full bg-creme flex items-center">
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={{ xs: "0 2rem", md: "0 6rem" }}
      >
        <InfosPresentation />
        <ImageContainer />
      </Box>
    </section>
  );
}

export default Presentation;
