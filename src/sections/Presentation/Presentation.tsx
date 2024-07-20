import Structure from "./styles/Structure";
import Container from "./styles/Container";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import InfosPresentation from "./components/InfosPresentation/InfosPresentation";

function Presentation() {
  return (
    <Structure>
      <Container>
        <InfosPresentation />
        <ImageContainer />
      </Container>
    </Structure>
  );
}

export default Presentation;
