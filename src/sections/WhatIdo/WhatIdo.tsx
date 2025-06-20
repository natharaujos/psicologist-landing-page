import Card from './components/Card'
import Title from '../../shared/styles/Title'

function WhatIDo() {
  return (
    <div
      id={'whatIDoSection'}
      className="sm:h-auto bg-creme w-full flex items-center 2xl:justify-center py-10"
    >
      <div className="h-full w-full 2xl:w-3/4 flex flex-col items-center gap-4 px-10">
        <div className="w-full flex items-center justify-center">
          <Title className="text-center text-darkBrown">Principais Áreas de Atuação</Title>
        </div>
        <div className="min-h-full flex flex-wrap items-center justify-center gap-4">
          <Card title="Rotina/Planejamento">
            ‘’Eu precisava ir à academia, mas preciso estudar’’, ‘’Não deu tempo de fazer essa
            tarefa que eu deveria ter feito na segunda-feira’’. Frequentemente uma vida sem rotina
            estabelecida e planejamento acaba gerando situações parecidas com nos exemplos acima,
            assim um dia mal organizado gera prejuízos como postergar atividades importantes, perder
            os prazos das tarefas, desejo de realizar o que não realizou em uma semana em apenas um
            dia, levando a frustração e quebra de expectativas.
          </Card>
          <Card title="Autoestima">
            Muitas vezes fixamos pensamentos como ‘’eu não sou capaz’’, ‘’eu sou fútil’’, ‘’eu sou
            assim mesmo’’. Esses pensamentos frequentemente são crenças que podem te prejudicar no
            dia a dia, nas suas relações e no seu bem-estar. Por isso, vamos enfrentar juntos essas
            situações que causam esses pensamentos como nos exemplos, assim vamos questionar suas
            crenças através de técnicas de enfrentamento, assim construindo uma boa autoestima e
            diminuindo o desconforto das situações difíceis.
          </Card>
          <Card title="Desregulação Emocional ">
            Quantas vezes nos estressamos em situações como: quebrar algum objeto em casa, com o
            incômodo da música alta do vizinho, sentimos raiva porque o chefe não elogiou o
            trabalho, sentimos tristeza porque não conseguimos o que queria. Bom e se todas essas
            emoções vem de uma forma muito intensa, precisamos avaliá-las e logo colocar em prática
            técnicas de autorregulação emocional, as quais são feitas diariamente, bem como no
            momento estressor também. Assim, o objetivo da autorregulação é te treinar para que
            consiga manejar suas emoções, gerando bem-estar, qualidade de vida e diminuindo os
            prejuízos de uma desregulação emocional.
          </Card>
          <Card title="Transtornos Alimentares">
            Você já sentiu culpa por comer maiores quantidades de comida ou por ficar petiscando o
            dia todo? Não consegue seguir seu plano alimentar? Ou você segue sua dieta apenas até o
            almoço e depois joga tudo aos ventos? Se você respondeu sim para alguma dessas
            perguntas, saiba que nós podemos juntos mudar esses hábitos. Através das técnicas da TCC
            conseguimos questionar todo esse ciclo de culpa e frustração que você vem vivendo, e com
            isso nos movimentamos em busca do seu controle e independência alimentar. Assim
            cultivando a boa relação com a comida, essa que é tão importante para nos nutrir e gerar
            bem-estar, qualidade de vida.
          </Card>
          <Card title="Disciplina">
            Tal palavra vem sendo muito cobrada hoje em dia, em diversos ambitos inclusive, como
            escola, trabalho, vida pessoal. Mas porque? Bom, podemos citar alguns dos benefícios da
            disciplina: o autocontrole (não ceder a todo momento as emoções, com ex: ‘’hoje não vou
            fazer essa tarefa pois me sinto um pouco cansada); produtividade (realizar o que você se
            propôs a fazer, é cumprir um compromisso com você mesmo); qualidade de vida (quando não
            temos disciplina, temos tendência a desistir de realizar algumas tarefas que são
            importantes, como se alimentar bem por exemplo). Quanto está lhe custando não ter
            disciplina? Se você possui dificuldade em construir esse processo chamado disciplina,
            deixa eu te ajudar!
          </Card>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
