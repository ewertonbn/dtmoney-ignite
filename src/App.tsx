import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { NewTansactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";
import { Toaster } from 'react-hot-toast';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTansactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
      <Toaster />
    </TransactionProvider>
  );
}
