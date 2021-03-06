import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 699px) {
    overflow-x: scroll;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      opacity: 0.7;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    button {
      background: transparent;
      border: 0;
      display: flex;
      align-items: center;

      svg {
        color: var(--red);
      }
    }
  }

  p {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;