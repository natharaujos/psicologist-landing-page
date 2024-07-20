import PictureAboutMe from "./components/PictureAboutMe/PictureAboutMe";
import Container from "./styles/Container";
import Structure from "./styles/Structure";

function AboutMe() {
  return (
    <Structure>
      <Container>
        <PictureAboutMe />
        <div style={{ width: "50%" }}>
          <div
            style={{ display: "flex", height: "100%", alignItems: "center" }}
          >
            <div
              style={{
                color: "white",
                maxHeight: "100%",
                width: "50%",
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Text here
            </div>
          </div>
        </div>
      </Container>
    </Structure>
  );
}

export default AboutMe;
