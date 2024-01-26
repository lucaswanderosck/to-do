import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TaskCard } from "../../components/TaskCard";
import { Container, TaskField, TaskList } from "./styles";

export const Tasks: React.FC = () => {
  return (
    <Container>
      <TaskField>
        <Input type="text" placeholder="Adicionar uma nova tarefa" />
        <Button title="Criar a tarefa" children="Criar" />
      </TaskField>
      <TaskList>
        <ul>
          <TaskCard />
        </ul>
      </TaskList>
    </Container>
  );
};
