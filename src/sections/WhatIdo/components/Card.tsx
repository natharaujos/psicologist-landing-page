import { Box } from "@mui/material";
import Title from "../../../shared/styles/Title";
import Paragraph from "../../../shared/styles/Paragraph";
import { CREME, LIGHT_BROWN } from "../../../shared/constants/Colors";

interface CardProps {
  title: string;
}

function Card({ title }: CardProps) {
  return (
    <Box
      height={"10rem"}
      width={{ xs: "260px", md: "350px" }}
      bgcolor={CREME}
      padding={"1rem"}
      borderRadius={"1rem"}
      border={"2px solid"}
      borderColor={LIGHT_BROWN}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
      <Title style={{ textAlign: "center", color: LIGHT_BROWN }}>{title}</Title>
      <Paragraph style={{ textAlign: "center", color: LIGHT_BROWN }}>
        Laborum aliquip ad ea anim ad sint id ad cillum ex commodo deserunt
        commodo.
      </Paragraph>
    </Box>
  );
}

export default Card;
