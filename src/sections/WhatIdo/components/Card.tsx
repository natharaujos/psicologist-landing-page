import Title from '../../../shared/styles/Title'

interface CardProps {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="xs:w-[350px] sm:w-[600px] md:w-[650px] md:h-auto lg:w-[750px] xl:w-[600px] bg-pink p-8 md:p4 rounded-xl border-2 border-light-brown text-center">
      <Title className="pb-3 text-darkBrown">{title}</Title>
      <p className="text-center text-light-brown">{children}</p>
    </div>
  )
}

export default Card
