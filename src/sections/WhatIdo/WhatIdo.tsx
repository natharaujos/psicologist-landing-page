import { Box } from "@mui/material";
import { LIGHT_BLUE } from "../../shared/constants/Colors";
import Card from "./components/Card";

function WhatIDo() {
  return (
    <Box
      id={"whatIDoSection"}
      height={"85vh"}
      width={"100%"}
      bgcolor={LIGHT_BLUE}
      display={"flex"}
      alignItems={"center"}
    >
      <Box
        height={"100%"}
        display={"flex"}
        padding={"0 6rem"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        columnGap={"1rem"}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
}

export default WhatIDo;
