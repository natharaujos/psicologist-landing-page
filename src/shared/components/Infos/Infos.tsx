import { Box } from "@mui/material";
import { ReactNode } from "react";

interface InfosProps {
  children: ReactNode;
}

function Infos({ children }: InfosProps) {
  return (
    <Box width={"50%"}>
      <Box display={"flex"} height={"100%"} alignItems={"center"}>
        <Box
          color={"white"}
          width={"100%"}
          maxHeight={"100%"}
          display={"grid"}
          rowGap={"1rem"}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Infos;
