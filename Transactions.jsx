import React from "react";
import styled from "styled-components";

const transactions = [
  { card: "*4920", type: "Credit", date: "Sept 24, 2024", time: "10:00 am", status: "Verified", amount: 2890.0, logo: "https://tse2.mm.bing.net/th?id=OIP.LMwzmOS4wFNhM1w_8S4THgHaEK&pid=Api&P=0&h=180" },
  { card: "*5830", type: "Debit", date: "Sept 20, 2024", time: "11:00 am", status: "Rejected", amount: -49.0, logo: "https://tse3.mm.bing.net/th?id=OIP.H_XU-kpbbMS7kjHFtI9q1wHaEK&pid=Api&P=0&h=180" },
  { card: "*5711", type: "Credit", date: "Sept 19, 2024", time: "2:00 pm", status: "Pending", amount: -80.0, logo: "https://tse3.mm.bing.net/th?id=OIP.Ci0j7mR8W_tCJDWGyrymrgHaEK&pid=Api&P=0&h=180" },
  { card: "*6283", type: "Debit", date: "Sept 18, 2024", time: "11:00 am", status: "Verified", amount: -30.0, logo: "https://tse2.mm.bing.net/th?id=OIP.LMwzmOS4wFNhM1w_8S4THgHaEK&pid=Api&P=0&h=180" },
  { card: "*4443", type: "Credit", date: "Sept 17, 2024", time: "10:00 am", status: "Verified", amount: 1500.0, logo: "https://tse3.mm.bing.net/th?id=OIP.H_XU-kpbbMS7kjHFtI9q1wHaEK&pid=Api&P=0&h=180" },
  { card: "*7665", type: "Debit", date: "Sept 14, 2024", time: "9:00 am", status: "Rejected", amount: -200.0, logo: "https://tse3.mm.bing.net/th?id=OIP.Ci0j7mR8W_tCJDWGyrymrgHaEK&pid=Api&P=0&h=180" },
];

const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px grey;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: gray;
  margin-top: 2px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid black;
`;

const TableHead = styled.thead`
  background-color: grey;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
`;

const CardCell = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CardImage = styled.img`
  width: 40px;
  height: 25px;
  border-radius: 4px;
`;

const Time = styled.span`
  font-size: 12px;
  color: gray;
`;

const StatusBox = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  background-color: ${({ status }) =>
    status === "Verified" ? "green" :
    status === "Rejected" ? "red" :
    "white"};
  color: ${({ status }) =>
    status === "Verified" ? "black" :
    status === "Rejected" ? "white" :
    "black"};
  border: 1px solid black;
`;

const Amount = styled.td`
  color: ${({ amount }) => (amount  > 0 ? "green" : "red")};
  font-weight: bold;
`;

const Transactions = () => {
  return (
    <Container>
      <Header>
        <div>
          <Title>Recent Transactions</Title>
          <Subtitle>Transactions Overview</Subtitle>
        </div>
      </Header>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Card</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Amount ($)</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {transactions.map((txn, index) => (
              <TableRow key={index}>
                <TableData>
                  <CardCell>
                    <CardImage src={`${txn.logo}`} alt="Card Logo" />
                    {txn.card} ({txn.type})
                  </CardCell>
                </TableData>
                <TableData>
                  {txn.date}
                  <br />
                  <Time>{txn.time}</Time>
                </TableData>
                <TableData>
                  <StatusBox status={txn.status}>{txn.status}</StatusBox>
                </TableData>
                <Amount amount={txn.amount}>{txn.amount.toFixed(2)}</Amount>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Transactions;
