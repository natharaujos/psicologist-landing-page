import ContactButton from "./components/ContactButton";
import Paragraph from "./components/Paragraph";
import Subtittle from "./components/Subtittle";
import Tittle from "./components/Tittle";

function Infos() {
  return (
    <div style={{ width: "50%" }}>
      <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
        <div
          style={{
            color: "white",
            width: "100%",
            maxHeight: "100%",
            display: "grid",
            rowGap: "1rem",
          }}
        >
          <Subtittle>Rafaela Marra</Subtittle>
          <Tittle>Psicóloga Comportamental</Tittle>
          <Paragraph>
            Laborum aliquip ad ea anim ad sint id ad cillum ex commodo deserunt
            commodo. Magna ipsum elit amet culpa aute minim ex in duis non duis.
            Amet amet sunt commodo ad eu irure mollit ad Lorem aliqua
            exercitation. Laborum consectetur velit proident ad voluptate. Aute
            minim anim consequat Lorem dolor. Proident non proident do
            consequat.
          </Paragraph>
          <ContactButton>Agendar Minha Sessão</ContactButton>
        </div>
      </div>
    </div>
  );
}

export default Infos;
