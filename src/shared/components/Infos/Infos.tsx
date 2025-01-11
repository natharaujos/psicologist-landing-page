import { Box } from "@mui/material";
import { ReactNode } from "react";

interface InfosProps {
  children: ReactNode;
}

function Infos({ children }: InfosProps) {
  return (
    <Box width={{ xs: "100%", lg: "35%" }}>
      <Box display={"flex"} height={"100%"} alignItems={"center"}>
        <Box
          color={"white"}
          width={"100%"}
          maxHeight={"100%"}
          display={"grid"}
          rowGap={"1rem"}
          textAlign={{ xs: "center", md: "left" }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Infos;
