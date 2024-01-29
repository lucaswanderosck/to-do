import React from "react";
import { Container } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({ ...props }) => {
  return (
    <Container type="text" placeholder="Adicionar uma nova tarefa" {...props} />
  );
};
