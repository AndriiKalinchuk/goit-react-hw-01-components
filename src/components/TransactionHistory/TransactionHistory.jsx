export default function TransactionHistory({ items }) {
  return (
    <table className="transactionHistory">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items !== undefined ? (
          items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No transactions found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
