import capa from "../../assets/capa.jpeg";
import ScheduleSessionButton from "../../components/MainButton";

function Presentation() {
  return (
    <section className="bg-gradient-to-br from-[#F5F2F0] to-[#EDE7E3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#8B2635] leading-tight">
                É hora de iniciar sua{" "}
                <span className="relative">
                  psicoterapia!
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#8B2635]/20"
                    viewBox="0 0 200 12"
                    fill="currentColor"
                  >
                    <path
                      d="M0 8c40-4 80-4 120 0s80 4 80 0"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2635] rounded-full mt-3 flex-shrink-0"></div>
                  <p>Psicologia Clínica (CRP 04/80083)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2635] rounded-full mt-3 flex-shrink-0"></div>
                  <p>Terapeuta Cognitiva Comportamental (psicóloga TCC)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2635] rounded-full mt-3 flex-shrink-0"></div>
                  <p>Individual para adultos e adolescentes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8B2635] rounded-full mt-3 flex-shrink-0"></div>
                  <p>Terapia Online</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ScheduleSessionButton />
              <button className="border-2 border-[#8B2635] text-[#8B2635] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#8B2635] hover:text-white transition-all duration-300">
                Saiba Mais
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600 font-medium">
                  Atendimento profissional
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600 font-medium">
                  Sigilo garantido
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={capa}
                alt="Rafaela Marra - Psicóloga Clínica"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#8B2635]/10 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-[#8B2635]/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
