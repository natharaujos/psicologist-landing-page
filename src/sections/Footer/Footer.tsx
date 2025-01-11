import { Box, Grid } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { BORDO, CREME } from "../../shared/constants/Colors";

function Footer() {
  return (
    <Box
      id={"footerSection"}
      height={"10vh"}
      width={"100%"}
      bgcolor={BORDO}
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
          color={CREME}
        >
          Rafaela Marra | CRP: XPTO@@288279
        </Grid>
        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"center"} columnGap={2}>
            <SocialIcon
              href="https://instagram.com"
              url={"https://instagram.com"}
            />
            <SocialIcon
              href="https://whatsapp.com"
              url={"https://whatsapp.com"}
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
