import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme['gray-700']};
  padding: 5rem 0;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;

  > img {
    margin-right: 0.2rem;
  }

  > span:nth-last-child(2) {
    color: ${({ theme }) => theme.blue};
  }

  > span:last-child {
    color: ${({ theme }) => theme['purple-dark']};
  }
`
