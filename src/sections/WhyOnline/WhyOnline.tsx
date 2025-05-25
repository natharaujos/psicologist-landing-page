import ContactButton from "../../shared/components/Infos/ContactButton/ContactButton";
import Paragraph from "../../shared/styles/Paragraph";
import Subtitle from "../../shared/styles/Subtitle";
import Title from "../../shared/styles/Title";
import capa from "./assets/onlineWhy.jpeg";

function WhyOnline() {
  return (
    <section className="xl:h-[600px] lg:h-[600px] sm:h-[900px] xs:h-[1000px] w-full flex flex-col gap-10 items-center justify-center bg-pink py-20">
      <div className="flex lg:flex-row xs:flex-col items-center justify-around w-full xs:gap-5">
        <div className="text-white h-full xl:w-[50%] lg:w-[40%] flex items-center justify-end">
          <img
            className="xl:w-[400px] xs:w-[350px] object-contain rounded-[2rem]"
            src={capa}
            alt="Descrição da imagem"
          />
        </div>
        <div className="xl:w-[50%] lg:w-[60%] xs:w-full h-full flex flex-col justify-start items-start sm:px-8 sm:py-0 xs:px-5 lg:text-left xs:text-center ">
          <div className="xl:w-[500px] xs:w-full flex flex-col lg:items-start xs:items-center gap-8">
            <Title>Terapia online?</Title>
            <Subtitle>Sim, é totalmente possível!</Subtitle>
            <Paragraph>
              A terapia online é segura, sigilosa e segue todos os requisitos
              éticos definidos pelo Conselho Federal de Psicologia. Mesmo em um
              ambiente virtual, você pode contar com acolhimento, escuta
              qualificada e profissionalismo. Além disso, essa modalidade
              oferece mais praticidade e conforto, permitindo que você realize
              suas sessões de qualquer lugar — seja em casa, no trabalho ou
              durante uma viagem. Tanto a psicoterapia online quanto a
              presencial são eficazes e adaptáveis às suas necessidades. O mais
              importante é que você se sinta bem cuidado(a) e acolhido(a) em
              cada encontro.
            </Paragraph>
            <ContactButton reverse>Agendar Minha Sessão</ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyOnline;
