import capa from "../../assets/capa.jpeg";
import Subtitle from "../../../../shared/styles/Subtitle";
import { DARK_BROWN } from "../../../../shared/constants/Colors";
import Title from "../../../../shared/styles/Title";
import ContactButton from "../../../../shared/components/Infos/ContactButton/ContactButton";

function MobileContent() {
  return (
    <div className="w-full py-auto">
      <div className="w-full">
        <div className="grid w-full gap-4 text-center text-white">
          <div>
            <img
              className="w-full object-cover"
              src={capa}
              alt="Descrição da imagem"
            />
          </div>

          <Title style={{ color: DARK_BROWN }} fontSize="1.4em">
            É hora de iniciar sua psicoterapia!
          </Title>

          <Subtitle color="black">- Psicologia Clínica</Subtitle>
          <Subtitle color="black">
            - Terapeuta Cognitiva Comportamental (psicóloga TCC)
          </Subtitle>
          <Subtitle color="black">
            - Individual para adultos e adolescentes
          </Subtitle>
          <Subtitle color="black">- Terapia Online</Subtitle>

          <div className="flex justify-center items-center">
            <ContactButton reverse>Agendar Minha Sessão</ContactButton>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileContent;
