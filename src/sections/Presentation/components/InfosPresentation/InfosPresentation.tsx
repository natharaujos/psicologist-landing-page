import Infos from "../../../../shared/components/Infos/Infos";
import ContactButton from "../../../../shared/styles/ContactButton";
import Paragraph from "../../../../shared/styles/Paragraph";
import Subtitle from "../../../../shared/styles/Subtitle";
import Title from "../../../../shared/styles/Title";

function InfosPresentation() {
  return (
    <Infos>
      <Subtitle color="black">Rafaela Marra</Subtitle>
      <Title color="black">Psicóloga Comportamental</Title>
      <Paragraph color="black">
        Laborum aliquip ad ea anim ad sint id ad cillum ex commodo deserunt
        commodo. Magna ipsum elit amet culpa aute minim ex in duis non duis.
        Amet amet sunt commodo ad eu irure mollit ad Lorem aliqua exercitation.
        Laborum consectetur velit proident ad voluptate. Aute minim anim
        consequat Lorem dolor. Proident non proident do consequat.
      </Paragraph>
      <ContactButton color="black">Agendar Minha Sessão</ContactButton>
    </Infos>
  );
}

export default InfosPresentation;
