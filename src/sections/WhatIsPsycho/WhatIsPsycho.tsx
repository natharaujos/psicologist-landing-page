import { Box } from "@mui/material";
import InfosWhatIsPsycho from "./components/InfosWhatIsPsycho/InfosWhatIsPsycho";
import { CREME } from "../../shared/constants/Colors";

function WhatIsPsycho() {
  return (
    <section
      className="h-[120vh] 2xl:h-[60vh] w-full flex items-center py-10"
      style={{ backgroundColor: CREME }}
    >
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={{ xs: "0 2rem", md: "0 12rem" }}
      >
        <InfosWhatIsPsycho />
      </Box>
    </section>
  );
}

export default WhatIsPsycho;
