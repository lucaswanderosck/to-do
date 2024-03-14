import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Container } from './styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
      <FiPlusCircle size={16} />
    </Container>
  )
}
