import { ReactNode } from "react";

interface InfosProps {
  children: ReactNode;
}

function Infos({ children }: InfosProps) {
  return (
    <div className="lg:w-full">
      <div className="flex h-full items-center justify-center">
        <div className="text-white w-full max-h-full grid gap-4 text-center xl:text-left">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Infos;
