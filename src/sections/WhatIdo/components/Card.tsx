import { Box } from "@mui/material";
import Title from "../../../shared/styles/Title";
import Paragraph from "../../../shared/styles/Paragraph";
import { LIGHT_BLUE } from "../../../shared/constants/Colors";

function Card() {
  return (
    <Box
      height={"auto"}
      width={"25%"}
      bgcolor={LIGHT_BLUE}
      padding={"2rem"}
      borderRadius={"1rem"}
      border={"2px solid"}
      borderColor={"white"}
    >
      <Title style={{ textAlign: "center" }}>What I Do 2</Title>
      <Paragraph style={{ textAlign: "center" }}>
        Laborum aliquip ad ea anim ad sint id ad cillum ex commodo deserunt
        commodo. Magna ipsum elit amet culpa aute minim ex in duis non duis.
        Amet amet sunt commodo ad eu irure mollit ad Lorem aliqua exercitation.
        Laborum consectetur velit proident ad voluptate. Aute minim anim
        consequat Lorem dolor. Proident non proident do consequat.
      </Paragraph>
    </Box>
  );
}

export default Card;
