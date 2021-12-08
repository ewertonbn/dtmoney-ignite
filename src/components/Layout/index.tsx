import { ReactNode, useState } from "react";
import { Header } from "../Header";
import { NewTansactionModal } from "../NewTransactionModal";
import { Sidebar } from "../Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <>
      <div className="app">
        <div className="app-column">
          <Sidebar />
        </div>
        <div className="app-column">
          <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
          {children}
        </div>
      </div>

      <NewTansactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}