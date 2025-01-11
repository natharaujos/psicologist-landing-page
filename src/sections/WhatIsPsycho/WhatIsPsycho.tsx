import Structure from "./styles/Structure";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import { Box } from "@mui/material";
import InfosWhatIsPsycho from "./components/InfosWhatIsPsycho/InfosWhatIsPsycho";

function WhatIsPsycho() {
  return (
    <Structure>
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={{ xs: "0 2rem", md: "0 12rem" }}
      >
        <ImageContainer />
        <InfosWhatIsPsycho />
      </Box>
    </Structure>
  );
}

export default WhatIsPsycho;
