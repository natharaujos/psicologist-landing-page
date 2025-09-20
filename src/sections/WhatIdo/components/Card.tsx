import Title from "../../../shared/styles/Title";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="bg-pink rounded-2xl border border-light-brown p-6 sm:p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-[340px] sm:w-[520px] md:w-[600px] lg:w-[380px] xl:w-[400px] flex flex-col">
      {/* Decorativo no título */}
      <div className="flex flex-col items-center mb-4">
        <span className="w-12 h-1 bg-darkBrown rounded-full mb-2"></span>
        <Title className="text-darkBrown text-xl font-semibold text-center">
          {title}
        </Title>
      </div>

      {/* Conteúdo */}
      <p className="text-light-brown text-base sm:text-lg leading-relaxed text-center space-y-4">
        {children}
      </p>
    </div>
  );
}

export default Card;
