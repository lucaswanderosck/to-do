import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { Checkbox, Container } from "./styles";

export const TaskCard: React.FC = () => {
  const [tarefaConcluida, setTarefaConcluida] = React.useState(false);

  const handleCheckboxChange = () => {
    setTarefaConcluida(!tarefaConcluida);
  };
  return (
    <Container>
      <label className={`label ${tarefaConcluida ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={tarefaConcluida}
          onChange={handleCheckboxChange}
        />
        <Checkbox />
      </label>
      <p className={`tarefa-texto ${tarefaConcluida ? "completed" : ""}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        laboriosam harum incidunt, itaque
      </p>
      <button>
        <FiTrash2 />
      </button>
    </Container>
  );
};
