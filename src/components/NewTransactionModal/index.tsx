import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'; 
import { FiCheckSquare } from 'react-icons/fi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { toast } from 'react-toastify';

import { ButtonSubmit, Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTansactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  const [loading, setLoading] = useState(false);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    setLoading(true);

    if(title !== '' && category !== '') {
      await createTransaction({
        title,
        amount,
        category,
        type,
      })

      setTimeout(function() {
        setTitle('');
        setAmount(0);
        setCategory('');  
        setType('deposit');
        setLoading(false);
        onRequestClose();
      }, 1500)
      
    } else {
      setLoading(false);
      toast.error("Preencha todos os campos!");
    }    
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    > 
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <ButtonSubmit
          type="submit"
          isLoading={loading}
        >
          Cadastrar
          {loading ? <AiOutlineLoading3Quarters size={16} /> : <FiCheckSquare size={16} />}
        </ButtonSubmit>
      </Container>
    </Modal>
  );
}