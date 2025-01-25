import { Box } from "@mui/material";
import { CREME } from "../../shared/constants/Colors";
import Card from "./components/Card";
import Title from "../../shared/styles/Title";

function WhatIDo() {
  return (
    <Box
      id={"whatIDoSection"}
      height={{ xs: "auto" }}
      width={"100%"}
      bgcolor={CREME}
      display={"flex"}
      alignItems={"center"}
      pb={"4rem"}
      pt={"4rem"}
    >
      <Box
        height={"100%"}
        display={"flex"}
        padding={{ xs: "0 2rem", md: "0 12rem" }}
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={"4rem"}
      >
        <Title>Principais Áreas de Atuação</Title>
        <Box
          minHeight={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          rowGap={"1rem"}
          columnGap={"1rem"}
        >
          <Card title="Ansiedade" />
          <Card title="Depressão" />
          <Card title="Estressse" />
          <Card title="Mudança de comportamento" />
          <Card title="Habilidades Sociais" />
          <Card title="TOC" />
          <Card title="Autoconhecimento" />
          <Card title="Compulsão Alimentar" />
          <Card title="Síndrome do Pânico" />
        </Box>
      </Box>
    </Box>
  );
}

export default WhatIDo;
