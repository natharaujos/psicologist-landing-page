import { LIGHT_BROWN } from "../../../shared/constants/Colors";
import Title from "../../../shared/styles/Title";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div
      className="h-100 sm:w-64 md:w-80 bg-creme p-4 rounded-xl border-2 border-light-brown flex flex-col items-center justify-center"
      style={{ width: "28rem" }}
    >
      <Title style={{ color: LIGHT_BROWN }}>{title}</Title>
      <p className="text-center text-light-brown">{children}</p>
    </div>
  );
}

export default Card;
