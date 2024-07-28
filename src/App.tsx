import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Presentation from "./sections/Presentation/Presentation";
import WhatIDo from "./sections/WhatIdo/WhatIdo";
import { LIGHT_BLUE } from "./shared/constants/Colors";

function App() {
  return (
    <Box>
      <Navbar />
      <Grid container spacing={3} bgcolor={LIGHT_BLUE}>
        <Grid item xs={12}>
          <Presentation />
        </Grid>
        <Grid item xs={12}>
          <AboutMe />
        </Grid>
        <Grid item xs={12}>
          <WhatIDo />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
