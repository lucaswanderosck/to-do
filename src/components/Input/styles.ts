import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["gray-700"]};
  background: ${({ theme }) => theme["gray-500"]};
  color: ${({ theme }) => theme["gray-100"]};
  font-weight: 400;
  line-height: 1.4;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme["purple-dark"]};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme["gray-300"]};
  }
`;
