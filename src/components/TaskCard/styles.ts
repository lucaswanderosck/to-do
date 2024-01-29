import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["gray-500"]};
  border: 1px solid ${({ theme }) => theme["gray-400"]};

  > div {
    display: flex;

    > label {
      display: flex;
      padding: 3px;
      align-items: center;
      gap: 0.75rem;

      > input[type="checkbox"] {
        display: none;
      }
    }
  }

  & + & {
    margin-top: 0.75rem;
  }
`;

export const Checkbox = styled.span`
  border-radius: 100%;
  height: 1.125rem;
  width: 1.125rem;
  transition: 0.2s all;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme["blue"]};
  cursor: pointer;

  &:hover {
    filter: brightness(1.4);
  }

  &.checked {
    border: 2px solid ${({ theme }) => theme["purple-dark"]};
    background-color: ${({ theme }) => theme["purple-dark"]};
  }

  > svg {
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  user-select: none;
  color: ${({ theme }) => theme["gray-100"]};
  transition: 0.2s all;
  cursor: pointer;

  &.checked {
    text-decoration: line-through;
    color: ${({ theme }) => theme["gray-300"]};
  }
`;

export const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 4px;
  padding: 5px 4px 2px 4px;
  transition: 0.2s all;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme["gray-300"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme["gray-400"]};

    > svg {
      color: ${({ theme }) => theme["danger"]};
    }
  }
`;
