import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["gray-400"]};
  background: ${({ theme }) => theme["gray-500"]};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  user-select: none;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;

  > label {
    cursor: pointer;

    > input[type="checkbox"] {
      display: none;
    }
  }
  > p {
    color: ${({ theme }) => theme["gray-100"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4;

    &.completed {
      text-decoration: line-through;
      color: ${({ theme }) => theme["gray-300"]};
    }
  }

  button {
    width: 24px;
    height: 24px;
    font-size: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme["gray-300"]};
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme["danger"]};
      background: ${({ theme }) => theme["gray-400"]};
    }
  }
`;

export const Checkbox = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({ theme }) => theme["blue"]};
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }

  &:before {
    content: "✔";
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme["purple-dark"]};
    border: 2px solid ${({ theme }) => theme["purple-dark"]};
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .label.checked &:before {
    opacity: 1;
  }
`;
