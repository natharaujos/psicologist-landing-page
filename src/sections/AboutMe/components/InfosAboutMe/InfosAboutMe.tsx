import Infos from "../../../../shared/components/Infos/Infos";
import PersonalizedList from "../../../../shared/components/Infos/PersonalizedList/PersonalizedList";
import { listOfCourses } from "../../../../shared/constants/TextsUtil";
import Paragraph from "../../../../shared/styles/Paragraph";
import Title from "../../../../shared/styles/Title";

function InfosAboutMe() {
  return (
    <Infos lg="100%">
      <Title>Sobre Mim</Title>
      <Paragraph>
        Olá prazer, meu nome é Rafaela Marra e atualmente sou psicóloga clínica!
      </Paragraph>
      <Paragraph>
        Como estudante de psicologia, me apaixonei pela área de transtornos
        alimentares. E além disso, por ter um gosto por organização e rotina, me
        apaixonei por ajudar pessoas a estruturar suas rotinas, consequentemente
        evitar estresses e frustrações e a ter maior disposição para cumprir
        compromissos. Para isso, me aprofundei nos estudos sobre treinamentos de
        regulação emocional e habilidades sociais!
      </Paragraph>
      <Paragraph>
        Ao longo da caminho pude perceber que a abordagem da tcc era a que mais
        se adequava em meus objetivos, pois suas técnicas auxiliam em vários
        tipos de demanda e com eficácia a longo prazo. Sendo assim é a abordagem
        que utilizo hoje em meus atendimentos
      </Paragraph>
      <PersonalizedList itensToList={listOfCourses} />
    </Infos>
  );
}

export default InfosAboutMe;
