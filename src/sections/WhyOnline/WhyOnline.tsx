import Paragraph from "../../shared/styles/Paragraph";
import Title from "../../shared/styles/Title";

function WhyOnline() {
  return (
    <section className="h-[30vh] 2xl:h-[30vh] w-full flex items-center bg-pink py-20">
      <div className="h-full flex flex-col justify-center items-center sm:px-8 sm:py-0 md:px-44 text-center">
        <Title>Terapia online?</Title>
        <Paragraph>
          Sim, é possível!! Mesmo que em um ambiente virtual, a terapia online é
          segura e sigilosa, seguindo os requisitos éticos estabelecidos pelo
          Conselho Federal de Psicologia. Além disso, essa modalidade permite o
          conforto em fazer a terapia de qualquer lugar que você estiver, sendo
          assim mais prático. E claro, a psicoterapia tanto online quanto
          presencial são importantes e funcionais, para lhe atender.
        </Paragraph>
      </div>
    </section>
  );
}

export default WhyOnline;
