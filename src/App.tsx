import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Presentation from "./sections/Presentation/Presentation";
import WhatIDo from "./sections/WhatIdo/WhatIdo";
import Footer from "./sections/Footer/Footer";
import WhatIsPsycho from "./sections/WhatIsPsycho/WhatIsPsycho";
import { theme } from "./shared/theme/theme";
import VideoSection from "./sections/VideoSection/VideoSection";
import WhyOnline from "./sections/WhyOnline/WhyOnline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col gap-20 bg-creme">
          <Presentation />
          <VideoSection />
          <WhatIDo />
          <AboutMe />
          <WhatIsPsycho />
          <WhyOnline />
          <Footer />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
