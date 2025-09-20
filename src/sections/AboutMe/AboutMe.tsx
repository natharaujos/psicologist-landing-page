import aboutMe from "../../assets/about_me.jpeg";

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="w-full bg-creme py-16 px-4 sm:px-6 lg:px-8 flex justify-center"
    >
      <div className="w-full max-w-7xl bg-pink rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
        {/* Imagem */}
        <div className="flex-shrink-0">
          <img
            src={aboutMe}
            alt="Foto da psicóloga Rafaela Marra"
            className="rounded-2xl w-[280px] sm:w-[340px] lg:w-[400px] h-auto shadow-lg border-4 border-white"
          />
        </div>

        {/* Texto */}
        <div className="text-darkBrown flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-darkBrown relative inline-block">
            Sobre Mim
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-darkBrown/40 rounded-full"></span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            Olá, prazer! Meu nome é{" "}
            <span className="font-semibold">Rafaela Marra </span>e atualmente
            sou <span className="font-semibold">psicóloga clínica</span>.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Como estudante de psicologia, me apaixonei pela área de{" "}
            <span className="font-semibold">transtornos alimentares</span>. Além
            disso, pelo meu gosto por organização e rotina, encontrei satisfação
            em ajudar pessoas a estruturarem suas rotinas, evitando estresses e
            frustrações e alcançando maior disposição para cumprir compromissos.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Ao longo da minha caminhada percebi que a{" "}
            <span className="font-semibold">
              Terapia Cognitivo-Comportamental (TCC){" "}
            </span>
            era a abordagem que mais se adequava aos meus objetivos, pois suas
            técnicas auxiliam em diferentes demandas com eficácia a longo prazo.
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-md border-l-4 border-darkBrown space-y-2 text-sm sm:text-base">
            <p>
              🎓 Graduada em Psicologia pela{" "}
              <span className="font-semibold">UNILAVRAS</span>
            </p>
            <p>
              📚 Formada em Psicopatologia por{" "}
              <span className="font-semibold">Grupo PBE</span> (com Fernanda
              Landeiro)
            </p>
            <p>
              📖 Pós-Graduanda em PBE: TCC’s por{" "}
              <span className="font-semibold">Grupo PBE</span> (com Fernanda
              Landeiro)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
