import Structure from "./styles/Structure";
import Infos from "./components/Infos/Infos";
import Container from "./styles/Container";
import ImageContainer from "./components/ImageContainer/ImageContainer";

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
