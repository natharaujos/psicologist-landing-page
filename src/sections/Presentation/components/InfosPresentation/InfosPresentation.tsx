import ContactButton from "../../../../shared/styles/ContactButton";
import Subtitle from "../../../../shared/styles/Subtitle";
import Title from "../../../../shared/styles/Title";
import { DARK_BROWN } from "../../../../shared/constants/Colors";

function InfosPresentation() {
  return (
    <div className="w-full xl:w-[100%]">
      <div className="flex h-full items-center justify-center">
        <div className="text-white w-full max-h-full grid gap-4 text-center xl:text-left">
          <div>
            <Title color="black" fontSize="1.5em">
              Rafaela Marra
            </Title>
            <Subtitle color="black">Psicóloga Clínica - CRP 4/2025</Subtitle>
          </div>
          <Title style={{ color: DARK_BROWN }} fontSize="1.5em">
            É hora de iniciar sua psicoterapia!
          </Title>
          <Subtitle color="black"> - Psicologia Clínica</Subtitle>
          <Subtitle color="black">
            - Terapeuta Cognitiva Comportamental (psicóloga TCC)
          </Subtitle>
          <Subtitle color="black">
            - Individual para adultos e adolescentes
          </Subtitle>
          <Subtitle color="black"> - Terapia Online</Subtitle>

          <div className="xs:justify-center xs:items-center">
            <ContactButton color="black">Agendar Minha Sessão</ContactButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfosPresentation;
