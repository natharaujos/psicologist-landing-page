import { Box } from "@mui/material";
import Title from "../../../shared/styles/Title";
import Paragraph from "../../../shared/styles/Paragraph";
import { LIGHT_BLUE } from "../../../shared/constants/Colors";

interface CardProps {
  title: string;
}

function Card({ title }: CardProps) {
  return (
    <Box
      height={"20%"}
      width={"20%"}
      bgcolor={LIGHT_BLUE}
      padding={"2rem"}
      borderRadius={"1rem"}
      border={"2px solid"}
      borderColor={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      rowGap={"1rem"}
    >
      <Title style={{ textAlign: "center" }}>{title}</Title>
      <Paragraph style={{ textAlign: "center" }}>
        Laborum aliquip ad ea anim ad sint id ad cillum ex commodo deserunt
        commodo.
      </Paragraph>
    </Box>
  );
}

export default Card;
