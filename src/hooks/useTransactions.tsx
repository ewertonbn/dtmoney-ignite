import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  removeTransaction: (id: number) => void;
}

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    try {
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
      })
      const { transaction } = response.data;

      setTransactions([
        ...transactions,
        transaction,
      ]);

      alert('Transação adicionada!')

    } catch {
      alert('Erro ao adicionar transação!')
    }
  }

  async function removeTransaction(id: number) {
    try {
      await api.delete(`/transactions/${id}`)
      const transactionFiltered = transactions.filter(transaction => id !== transaction.id)
      setTransactions(transactionFiltered)
    } catch {
      alert("Erro ao adicionar transação!");
    }
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, removeTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext)

  return context;
}