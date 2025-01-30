import { LIGHT_BROWN } from "../../../shared/constants/Colors";
import Title from "../../../shared/styles/Title";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div
      className="sm:w-64 md:w-80 xs:w-[350px] bg-creme p-8 rounded-xl border-2 border-light-brown text-center"
      style={{ minHeight: "400px" }}
    >
      <Title style={{ color: LIGHT_BROWN }} className="pb-3" fontSize="1.5em">
        {title}
      </Title>
      <p className="text-center text-light-brown">{children}</p>
    </div>
  );
}

export default Card;
