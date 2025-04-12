import capa from "../../assets/capa.jpeg";

function ImageContainer() {
  return (
    <div className="text-white h-full w-1/2 hidden lg:flex items-center justify-end">
      <img
        className="max-w-[80%] h-max object-contain rounded-[2rem]"
        src={capa}
        alt="Descrição da imagem"
      />
    </div>
  );
}

export default ImageContainer;
