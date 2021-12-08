import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { Container } from "./styles";

export function Transactions() {
  return (
    <>
      <Container>
        <Summary />
        <TransactionsTable />
      </Container>
    </>
  );
}