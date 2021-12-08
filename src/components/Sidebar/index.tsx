import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export function Sidebar() {
  return (
    <Container>
      <img src={logoImg} alt="dtmoney" />
      <nav>
        <Link to="/">
          <span>Dashboard</span>
        </Link>
        <Link to="/transactions">
          <span>Transações</span>
        </Link>
      </nav>
    </Container>
  );
}