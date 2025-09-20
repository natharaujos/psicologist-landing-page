import { CREME } from "../../shared/constants/Colors";

function WhatIsPsycho() {
  return (
    <section
      className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center"
      style={{ backgroundColor: CREME }}
    >
      <div className="w-full max-w-7xl space-y-12">
        {/* Bloco 1 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-8 border-l-4 border-darkBrown">
          <h2 className="text-darkBrown text-2xl font-bold mb-4 relative">
            O que é psicoterapia?
            <span className="absolute -bottom-1 left-0 w-16 h-[3px] bg-darkBrown/50 rounded-full"></span>
          </h2>
          <p className="text-black leading-relaxed mb-4">
            A psicoterapia é uma forma de ajuda, como em questões emocionais,
            comportamentais, psicológicas. Ela é conduzida por um profissional
            psicólogo, que por meio da escuta, olhar clínico e aplicação de
            técnicas personalizadas ajuda as pessoas a entender seus
            sentimentos, pensamentos, ações, objetivos.
          </p>
          <p className="text-black leading-relaxed">
            O propósito é melhorar o bem-estar emocional, reduzir o sofrimento,
            promover mudanças positivas e qualidade de vida. Durante as sessões,
            o paciente tem um espaço seguro para expressar suas preocupações, a
            psicoterapia acontece de forma ética e acolhedora. Entre em contato
            para marcar uma consulta!
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-8 border-l-4 border-darkBrown">
          <h2 className="text-darkBrown text-2xl font-bold mb-4 relative">
            Porque a psicoterapia cognitiva comportamental?
            <span className="absolute -bottom-1 left-0 w-16 h-[3px] bg-darkBrown/50 rounded-full"></span>
          </h2>
          <p className="text-black leading-relaxed mb-4">
            A psicoterapia baseada em evidências (PBE) é um tipo de tratamento
            que utiliza métodos e abordagens com comprovação científica de
            eficácia. Isso significa que as técnicas usadas são testadas e
            validadas por pesquisas para garantir que realmente ajudam as
            pessoas. A Terapia Cognitivo-Comportamental (TCC) é um exemplo de
            psicoterapia baseada em evidências, focando em modificar padrões de
            pensamento negativos e comportamentos.
          </p>
          <p className="text-black leading-relaxed">
            A TCC é considerada um "Padrão Ouro" de tratamento para diversas
            condições, como depressão, ansiedade e fobias, pois apresenta
            resultados consistentes em estudos clínicos. A PBE oferece um
            tratamento estruturado e focado, com estratégias claras para
            alcançar resultados. Seu foco em resultados mensuráveis e eficazes
            permite aos profissionais escolherem a abordagem mais adequada para
            cada pessoa. Esse tipo de psicoterapia é altamente respeitado por
            sua eficácia e base científica sólida.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsPsycho;
