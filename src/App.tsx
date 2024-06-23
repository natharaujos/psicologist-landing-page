import Navbar from "./components/Navbar";
import Presentation from "./components/Sections/Presentation";
import Image from "./components/Sections/Presentation/components/WomanImage";
import WomanImage from "./assets/woman.jpg";

function App() {
  return (
    <>
      <Presentation>
        <Navbar />
        <div style={{ height: "70%", width: "80%" }}>
          <Image src={`${WomanImage}`} />
        </div>
      </Presentation>
    </>
  );
}

export default App;
