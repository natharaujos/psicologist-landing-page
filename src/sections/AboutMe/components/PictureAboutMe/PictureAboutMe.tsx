import WhiteRectangle from "./styles/WhiteRectangle";

function PictureAboutMe() {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <WhiteRectangle />
      </div>
    </div>
  );
}

export default PictureAboutMe;
