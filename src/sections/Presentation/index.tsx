import Structure from "./components/Structure";
import Infos from "./components/Infos";
import Container from "./components/Container";
import ImageContainer from "./components/ImageContainer";

function Presentation() {
  return (
    <Structure>
      <Container>
        <Infos />
        <ImageContainer />
      </Container>
    </Structure>
  );
}

export default Presentation;
