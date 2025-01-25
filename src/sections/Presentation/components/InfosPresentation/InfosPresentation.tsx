import { Box } from "@mui/material";
import Infos from "../../../../shared/components/Infos/Infos";
import ContactButton from "../../../../shared/styles/ContactButton";
import Subtitle from "../../../../shared/styles/Subtitle";
import Title from "../../../../shared/styles/Title";

function InfosPresentation() {
  return (
    <Infos lg="35%">
      <Box component="div">
        <Title color="black" fontSize="1.5em">
          Rafaela Marra
        </Title>
        <Subtitle color="black">Psicóloga Clínica - CRP 4/2025</Subtitle>
      </Box>
      <Title color="black">É hora de iniciar sua psicoterapia!</Title>
      <Subtitle color="black"> - Psicologia Clínica</Subtitle>
      <Subtitle color="black">
        - Terapeuta Cognitiva Comportamental (psicóloga TCC)
      </Subtitle>
      <Subtitle color="black">
        - Individual para adultos e adolescentes
      </Subtitle>
      <Subtitle color="black"> - Terapia Online</Subtitle>

      <ContactButton color="black">Agendar Minha Sessão</ContactButton>
    </Infos>
  );
}

export default InfosPresentation;
