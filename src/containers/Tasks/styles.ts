import styled from "styled-components";

export const Container = styled.div`
  max-width: 46rem;
  width: 100%;
  height: 100%;
  margin: -1.75rem auto 0;
`;

export const TaskForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

export const TaskInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  > p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme["blue"]};
    font-weight: 700;

    > span {
      background: ${({ theme }) => theme["gray-400"]};
      padding: 2px 8px;
      font-size: 0.75rem;
      color: ${({ theme }) => theme["gray-200"]};
      border-radius: 999px;
      margin-left: 0.5rem;
    }
  }

  > p:last-child {
    color: ${({ theme }) => theme["purple"]};
  }
`;

export const TaskList = styled.div``;

export const EmptyTasks = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme["gray-400"]};
  border-radius: 8px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > p {
    text-align: center;
    color: ${({ theme }) => theme["gray-300"]};
    font-size: 1rem;
    line-height: 1.4;

    &:first-line {
      font-weight: 700;
    }
  }
`;
