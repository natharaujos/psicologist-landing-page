import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
import PictureAboutMe from "./components/PictureAboutMe/PictureAboutMe";
import Container from "./styles/Container";
import Structure from "./styles/Structure";

function AboutMe() {
  return (
    <Structure>
      <Container>
        <PictureAboutMe />
        <InfosAboutMe />
      </Container>
    </Structure>
  );
}

export default AboutMe;
