import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  background: ${({ theme }) => theme["blue-dark"]};
  color: ${({ theme }) => theme["gray-100"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.4;
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["blue"]};
  }
`;
