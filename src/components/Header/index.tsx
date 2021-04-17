import logoImg from '../../assets/logo.svg'
import { FiPlus } from 'react-icons/fi';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
          <FiPlus size={16} color="#FFF" />
        </button>
      </Content>
    </Container>
  );
}