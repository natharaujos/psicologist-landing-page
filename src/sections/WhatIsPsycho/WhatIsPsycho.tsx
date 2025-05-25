import { Box } from "@mui/material";
import InfosWhatIsPsycho from "./components/InfosWhatIsPsycho/InfosWhatIsPsycho";
import { CREME } from "../../shared/constants/Colors";

function WhatIsPsycho() {
  return (
    <section
      className="xs:h-[1400px] sm:h-auto md:h-[800px] lg:h-[650px] w-full flex items-center py-10"
      style={{ backgroundColor: CREME }}
    >
      <Box
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        className="xs:px-5 xl:mx-[12rem]"
      >
        <InfosWhatIsPsycho />
      </Box>
    </section>
  );
}

export default WhatIsPsycho;
