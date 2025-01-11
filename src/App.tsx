import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Presentation from "./sections/Presentation/Presentation";
import WhatIDo from "./sections/WhatIdo/WhatIdo";
import Footer from "./sections/Footer/Footer";
import { CREME } from "./shared/constants/Colors";

function App() {
  return (
    <Box>
      <Grid container>
        <Navbar />
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Grid item xs={12} bgcolor={CREME}>
            <Presentation />
          </Grid>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <AboutMe />
        </Grid>
        <Grid item xs={12}>
          <WhatIDo />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
