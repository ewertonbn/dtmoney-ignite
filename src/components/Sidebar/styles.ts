import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--blue-dark);
  padding: 2rem;

  nav {
    margin-top: 2rem;

    a {
      display: block;
      color: var(--shape);
      text-decoration: none;
      font-size: 1rem;
      transition: filter 0.2s;

      & + a {
        margin-top: 1rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;