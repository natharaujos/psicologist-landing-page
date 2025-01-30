import { Box } from "@mui/material";
import InfosWhatIsPsycho from "./components/InfosWhatIsPsycho/InfosWhatIsPsycho";
import { CREME } from "../../shared/constants/Colors";

function WhatIsPsycho() {
  return (
    <section
      className="h-[120vh] 2xl:h-[70vh] xl:h-[120vh] sm:h-[60vh] xs:h-[1500px] w-full flex items-center py-10"
      style={{ backgroundColor: CREME }}
    >
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        padding={{ md: "0 12rem" }}
        className="xs:px-5"
      >
        <InfosWhatIsPsycho />
      </Box>
    </section>
  );
}

export default WhatIsPsycho;
