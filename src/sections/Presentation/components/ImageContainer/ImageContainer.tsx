import MainImage from "./styles/MainImage";
import capa from "../../assets/capa.jpeg";
import { Box } from "@mui/material";

function ImageContainer() {
  return (
    <Box
      color={"white"}
      height={"100%"}
      width={"50%"}
      display={{ xs: "none", lg: "flex" }}
      alignItems={"center"}
      justifyContent={"end"}
    >
      <MainImage src={capa} />
    </Box>
  );
}

export default ImageContainer;
