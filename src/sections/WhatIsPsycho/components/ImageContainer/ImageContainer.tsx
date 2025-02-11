import WomanImage from "./styles/WomanImage";
import womanImage from "../../assets/woman-nobg.png";
import { Box } from "@mui/material";

function ImageContainer() {
  return (
    <Box
      color={"white"}
      height={"100%"}
      width={"35%"}
      alignSelf={"center"}
      display={{ xs: "none", sm: "none", lg: "flex" }}
      justifyContent={"center"}
    >
      <WomanImage src={womanImage} />
    </Box>
  );
}

export default ImageContainer;
