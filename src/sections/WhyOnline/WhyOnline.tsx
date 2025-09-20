import ScheduleSessionButton from "../../components/MainButton";
import Paragraph from "../../shared/styles/Paragraph";
import Subtitle from "../../shared/styles/Subtitle";
import Title from "../../shared/styles/Title";
import capa from "./assets/onlineWhy.jpeg";

function WhyOnline() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-pink">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem */}
        <div className="relative flex justify-center lg:justify-end lg:w-1/2">
          <img
            className="rounded-3xl shadow-xl w-[320px] sm:w-[400px] lg:w-[450px] object-cover"
            src={capa}
            alt="Descrição da imagem"
          />
          {/* Glow decorativo */}
          <div className="absolute -inset-4 bg-pink-100/40 rounded-3xl blur-3xl -z-10"></div>
        </div>

        {/* Texto */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-8 sm:p-10 space-y-6 max-w-xl">
            <div>
              <Title className="text-darkBrown text-3xl font-bold relative">
                Terapia online?
                <span className="block w-16 h-[3px] bg-darkBrown/40 mt-1 rounded-full"></span>
              </Title>
              <Subtitle className="text-lg sm:text-xl text-darkBrown mt-2">
                Sim, é totalmente possível!
              </Subtitle>
            </div>

            <Paragraph className="text-black leading-relaxed">
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

            <div className="flex justify-center lg:justify-start">
              <ScheduleSessionButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyOnline;
