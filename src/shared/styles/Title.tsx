import React from 'react' // Necessário em alguns projetos com TypeScript
import clsx from 'clsx' // Se não estiver usando, veja abaixo como evitar

interface TitleProps {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className }: TitleProps) => {
  return <p className={clsx('font-bold m-0 text-2xl', className)}>{children}</p>
}

export default Title
