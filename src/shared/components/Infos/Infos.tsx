import { ReactNode } from "react";

interface InfosProps {
  children: ReactNode;
}

function Infos({ children }: InfosProps) {
  return (
    <div style={{ width: "50%" }}>
      <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
        <div
          style={{
            color: "white",
            width: "100%",
            maxHeight: "100%",
            display: "grid",
            rowGap: "1rem",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Infos;
