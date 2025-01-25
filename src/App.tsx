import { Box, Grid, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Presentation from "./sections/Presentation/Presentation";
import WhatIDo from "./sections/WhatIdo/WhatIdo";
import Footer from "./sections/Footer/Footer";
import { CREME } from "./shared/constants/Colors";
import WhatIsPsycho from "./sections/WhatIsPsycho/WhatIsPsycho";
import { theme } from "./shared/theme/theme";
import VideoSection from "./sections/VideoSection/VideoSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Grid item xs={12}>
            <VideoSection />
          </Grid>
          <Grid item xs={12}>
            <WhatIDo />
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <AboutMe />
          </Grid>
          <Grid item xs={12}>
            <WhatIsPsycho />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
