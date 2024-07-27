import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Presentation from "./sections/Presentation/Presentation";
import WhatIDo from "./sections/WhatIdo/WhatIdo";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <AboutMe />
      <WhatIDo />
    </>
  );
}

export default App;
