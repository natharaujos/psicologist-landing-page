import { LIGHT_BROWN } from "../../../shared/constants/Colors";
import Title from "../../../shared/styles/Title";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div
      className="sm:w-64 md:w-80 bg-creme p-8 rounded-xl border-2 border-light-brown text-center"
      style={{ width: "28rem", minHeight: "400px" }}
    >
      <Title style={{ color: LIGHT_BROWN, fontSize: "1.9em" }} className="pb-3">
        {title}
      </Title>
      <p className="text-center text-light-brown">{children}</p>
    </div>
  );
}

export default Card;
