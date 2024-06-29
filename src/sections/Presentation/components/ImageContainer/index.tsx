import WomanImage from "./components/WomanImage";
import womanImage from "../../assets/woman-nobg.png";

function ImageContainer() {
  return (
    <div
      style={{
        color: "white",
        height: "100%",
        width: "50%",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WomanImage src={womanImage} />
    </div>
  );
}

export default ImageContainer;
