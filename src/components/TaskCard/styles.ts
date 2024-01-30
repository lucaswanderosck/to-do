import styled from "styled-components";

interface Props {
  isCheckedStyled: boolean;
}

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

export const Checkbox = styled.span<Props>`
  user-select: none;
  border-radius: 100%;
  height: 1.125rem;
  width: 1.125rem;
  transition: 0.2s all;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme["blue"]};
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ isCheckedStyled, theme }) =>
    isCheckedStyled ? theme["purple-dark"] : theme["blue"]};
  background-color: ${({ isCheckedStyled, theme }) =>
    isCheckedStyled ? theme["purple-dark"] : "transparent"};

  &:hover {
    background-color: ${({ isCheckedStyled, theme }) =>
      isCheckedStyled ? theme["purple"] : "rgba(30, 111, 159, 0.2)"};
    border-color: ${({ isCheckedStyled, theme }) =>
      isCheckedStyled && theme["purple"]};
  }

  > svg {
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const Paragraph = styled.p<Props>`
  font-size: 0.875rem;
  line-height: 1.4;
  user-select: none;
  transition: 0.2s all;
  cursor: pointer;
  color: ${({ isCheckedStyled, theme }) =>
    isCheckedStyled ? theme["gray-300"] : theme["gray-100"]};
  text-decoration: ${({ isCheckedStyled }) =>
    isCheckedStyled ? "line-through" : "none"};
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
