import Paragraph from "../../../../shared/styles/Paragraph";
import Title from "../../../../shared/styles/Title";

function InfosWhatIsPsycho() {
  return (
    <div className="lg:w-full">
      <div className="flex h-full items-center justify-center">
        <div className="text-white w-full max-h-full grid gap-4 text-center xl:text-left">
          <Title className="text-darkBrown">O que é psicoterapia?</Title>
          <Paragraph color="black">
            A psicoterapia é uma forma de ajuda, como em questões emocionais,
            comportamentais, psicológicas. Ela é conduzida por um profissional
            psicólogo, que por meio da escuta, olhar clínico e aplicação de
            técnicas personalizadas ajuda as pessoas a entender seus
            sentimentos, pensamentos, ações, objetivos.
          </Paragraph>
          <Paragraph color="black">
            O propósito é melhorar o bem-estar emocional, reduzir o sofrimento,
            promover mudanças positivas e qualidade de vida. Durante as sessões,
            o paciente tem um espaço seguro para expressar suas preocupações, a
            psicoterapia acontece de forma de forma ética e acolhedora. Entre em
            contato para marcar uma consulta!
          </Paragraph>
          <Title className="text-darkBrown">
            Porque a psicoterapia cognitiva comportamental?
          </Title>
          <Paragraph color="black">
            A psicoterapia baseada em evidências (PBE) é um tipo de tratamento
            que utiliza métodos e abordagens com comprovação científica de
            eficácia. Isso significa que as técnicas usadas são testadas e
            validadas por pesquisas para garantir que realmente ajudam as
            pessoas. A Terapia Cognitivo-Comportamental (TCC) é um exemplo de
            psicoterapia baseada em evidências, focando em modificar padrões de
            pensamento negativos e comportamentos.
          </Paragraph>
          <Paragraph color="black">
            A TCC é considerada um "Padrão Ouro" de tratamento para diversas
            condições, como depressão, ansiedade e fobias, pois apresenta
            resultados consistentes em estudos clínicos. A PBE oferece um
            tratamento estruturado e focado, com estratégias claras para
            alcançar resultados. Seu foco em resultados mensuráveis e eficazes
            permite aos profissionais escolherem a abordagem mais adequada para
            cada pessoa. Esse tipo de psicoterapia é altamente respeitado por
            sua eficácia e base científica sólida.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

export default InfosWhatIsPsycho;
