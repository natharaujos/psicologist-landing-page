import capa from "../../assets/capa.jpeg";
import Subtitle from "../../../../shared/styles/Subtitle";
import { DARK_BROWN } from "../../../../shared/constants/Colors";
import Title from "../../../../shared/styles/Title";
import ContactButton from "../../../../shared/components/Infos/ContactButton/ContactButton";

function MobileContent() {
  return (
    <div className="h-full flex justify-center">
      <div className="w-full">
        <div className="flex h-full items-center justify-center">
          <div className="text-white w-full max-h-full grid gap-4 text-center">
            <div>
              <div className="text-white h-full items-center justify-end">
                <img
                  className="w-full object-contain"
                  src={capa}
                  alt="Descrição da imagem"
                />
              </div>
            </div>
            <Title style={{ color: DARK_BROWN }} fontSize="1.4em">
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

            <div className="xs:flex xs:justify-center lg:justify-start xs:items-center lg:items-start">
              <ContactButton reverse>Agendar Minha Sessão</ContactButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileContent;
