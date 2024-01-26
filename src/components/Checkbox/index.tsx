import React from "react";

import { Container } from "./styles";

interface Props {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<Props> = ({ id, label, checked, onChange }) => {
  return (
    <Container>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};
