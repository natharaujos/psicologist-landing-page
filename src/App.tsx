import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Presentation from "./sections/Presentation/Presentation";
import WhatIDo from "./sections/WhatIdo/WhatIdo";
import { LIGHT_BLUE } from "./shared/constants/Colors";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <Box>
      <Grid container>
        <Navbar />
      </Grid>
      <Grid container spacing={20} bgcolor={LIGHT_BLUE}>
        <Grid item xs={12}>
          <Presentation />
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
