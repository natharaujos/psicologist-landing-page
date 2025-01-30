import { Box } from "@mui/material";
import { DARK_BROWN, PINK } from "../../shared/constants/Colors";
import Title from "../../shared/styles/Title";

function VideoSection() {
  return (
    <Box
      component="div"
      pt={10}
      pb={10}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={PINK}
    >
      <section className="h-[60vh] 2xl:h-[40vh] xl:h-[60vh] lg:h-[30vh] w-4/6 xs:w-full flex items-center justify-center rounded-2xl">
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <div className="w-full">
            <Title style={{ color: DARK_BROWN }} className="text-center">
              Vamos em busca do controle, da leveza e independência?
            </Title>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oWN7ewJV-cY?si=r24A1YoFF2DGhAh3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ borderRadius: "2rem" }}
            className="xs:w-[365px]"
          ></iframe>
        </Box>
      </section>
    </Box>
  );
}

export default VideoSection;
