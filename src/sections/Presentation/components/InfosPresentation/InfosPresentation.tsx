import Subtitle from "../../../../shared/styles/Subtitle";
import ContactButton from "../../../../shared/components/Infos/ContactButton/ContactButton";
import CRP from "../../../../shared/constants/CRP";

function InfosPresentation() {
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex h-full items-center justify-center">
        <div className="text-white w-full max-h-full grid gap-4 text-center lg:text-left">
          <p className="font-bold text-darkBrown xl:text-[2em] lg:text-[1.5em]">
            É hora de iniciar sua psicoterapia!
          </p>
          <Subtitle color="black"> - Psicologia Clínica (CRP {CRP})</Subtitle>
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
  );
}

export default InfosPresentation;
