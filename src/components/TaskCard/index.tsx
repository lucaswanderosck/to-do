import React from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import { ITasks } from "../../containers/Tasks";
import { ButtonDelete, Checkbox, Container, Paragraph } from "./styles";

interface Props {
  data: ITasks;
  onDeleteTask: (id: number) => void;
  toggleTaskStatus: (id: number, value: boolean) => void;
}

export const TaskCard: React.FC<Props> = ({
  data,
  onDeleteTask,
  toggleTaskStatus,
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(data.id);
  };

  const handleTaskToggle = () => {
    toggleTaskStatus(data.id, !data.isChecked);
  };

  const checkboxCheckedClassname = data.isChecked ? "checked" : "";

  const paragraphCheckedClassname = data.isChecked ? "checked" : "";

  return (
    <Container>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <Checkbox className={`${checkboxCheckedClassname}`}>
            {data.isChecked && <FiCheck size={12} />}
          </Checkbox>

          <Paragraph className={` ${paragraphCheckedClassname}`}>
            {data.contentTask}
          </Paragraph>
        </label>
      </div>
      <ButtonDelete title="Deletar tarefa" onClick={handleDeleteTask}>
        <FiTrash2 size={16} />
      </ButtonDelete>
    </Container>
  );
};
