import InfosPresentation from "../InfosPresentation/InfosPresentation";
import capa from "../../assets/capa.jpeg";

function DesktopContent() {
  return (
    <div className="flex h-full justify-center px-5 2xl:px-0">
      <InfosPresentation />
      <div className="flex h-full w-1/2 items-center justify-end text-white">
        <img
          className=" w-[500px] object-contain rounded-[2rem] 
                     lg:w-[600px] xl:w-[800px] 2xl:w-[1000px]"
          src={capa}
          alt="Descrição da imagem"
        />
      </div>
    </div>
  );
}

export default DesktopContent;
