import { Box, Grid } from "@mui/material";
import Title from "../../shared/styles/Title";
import Subtitle from "../../shared/styles/Subtitle";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <Box
      id={"footerSection"}
      height={"30vh"}
      width={"100%"}
      bgcolor={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        container
        lg={12}
        height={"100%"}
        display={"flex"}
        padding={{ xs: "0 2rem", md: "0 12rem" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          item
          lg={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          rowGap={1}
        >
          <Title>Links Rápidos</Title>
          <Box display={"flex"} flexDirection={"column"} rowGap={2}>
            <Subtitle>Apresentação</Subtitle>
            <Subtitle>Sobre mim</Subtitle>
            <Subtitle>Aréas de atuação</Subtitle>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"center"} columnGap={2}>
            <SocialIcon
              href="https://instagram.com"
              url={"https://instagram.com"}
            />
            <SocialIcon
              href="https://twitter.com"
              url={"https://twitter.com"}
            />
            <SocialIcon
              href="https://linkedin.com"
              url={"https://linkedin.com"}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
