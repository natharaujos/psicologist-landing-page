import InfosPresentation from "../InfosPresentation/InfosPresentation";
import capa from "../../assets/capa.jpeg";

function DesktopContent() {
  return (
    <div className="h-full flex justify-center 2xl:px-0 lg:px-5">
      <InfosPresentation />
      <div className="text-white h-full w-1/2 lg:flex items-center justify-end">
        <img
          className=" 2xl:w-[1000px] xl:w-[800px] lg:w-[600px] sm:w-[500px] object-contain rounded-[2rem]"
          src={capa}
          alt="Descrição da imagem"
        />
      </div>
    </div>
  );
}

export default DesktopContent;
