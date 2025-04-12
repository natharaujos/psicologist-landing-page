import InfosPresentation from "./components/InfosPresentation/InfosPresentation";
import capa from "./assets/capa.jpeg";

function Presentation() {
  return (
    <section
      id="presentation"
      className="xl:h-[600px] lg:h-[550px] xs:h-[500px] w-full  bg-creme flex items-center justify-center"
    >
      <div className="h-full flex justify-center px-8 md:px-24">
        <InfosPresentation />
        <div className="text-white h-full w-1/2 hidden xl:flex items-center justify-end">
          <img
            className="max-w-[80%] h-max object-contain rounded-[2rem]"
            src={capa}
            alt="Descrição da imagem"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
