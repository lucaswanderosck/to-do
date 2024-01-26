import React from "react";
import rocket from "../../assets/images/rocket.svg";
import { Container, Title } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        <img src={rocket} alt="rocket" />
        <span>to</span>
        <span>do</span>
      </Title>
    </Container>
  );
};
