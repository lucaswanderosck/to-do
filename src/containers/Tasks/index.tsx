import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clipboard from "../../assets/images/clipboard.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TaskCard } from "../../components/TaskCard";
import { Container, EmptyTasks, TaskForm, TaskInfos, TaskList } from "./styles";

export interface ITasks {
  id: number;
  contentTask: string;
  isChecked: boolean;
}

export const Tasks: React.FC = () => {
  const [tasksState, setTasksState] = React.useState<ITasks[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const taskCounter = tasksState.length;
  const taskCompleted = tasksState.filter((task) => task.isChecked).length;

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) {
      return toast.error("Você precisa informar uma tarefa");
    }
    const newTask = {
      id: new Date().getTime(),
      contentTask: inputValue,
      isChecked: false,
    };

    setTasksState((state) => [...state, newTask]);
    setInputValue("");
    toast.success("Tarefa criada com sucesso");
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasksState.filter((task) => task.id !== id);
    setTasksState(updatedTasks);
  };

  const handleToggleTask = (id: number, value: boolean) => {
    const updatedTasks = tasksState.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }
      return { ...task };
    });

    setTasksState(updatedTasks);
  };

  return (
    <Container>
      <TaskForm onSubmit={handleCreateNewTask}>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button title="Criar a tarefa" children="Criar" />
      </TaskForm>
      <TaskInfos>
        <p>
          Tarefas Criadas <span>{taskCounter}</span>
        </p>
        <p>
          Concluídas <span>{taskCompleted}</span>
        </p>
      </TaskInfos>
      {taskCounter === 0 ? (
        <EmptyTasks>
          <img src={clipboard} alt="" />
          <p>
            Você ainda não tem tarefas cadastradas <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </EmptyTasks>
      ) : (
        <TaskList>
          {tasksState.map((task) => (
            <TaskCard
              key={task.id}
              data={task}
              onDeleteTask={handleDeleteTask}
              toggleTaskStatus={handleToggleTask}
            />
          ))}
        </TaskList>
      )}

      <ToastContainer theme="dark" autoClose={2500} />
    </Container>
  );
};
