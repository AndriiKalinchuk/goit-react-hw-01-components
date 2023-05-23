import PropTypes from 'prop-types';

import { Table, Thead, Tr, Th, Tb, Td } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      <Tb>
        {items !== undefined ? (
          items.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td colSpan="3">No transactions found</Td>
          </Tr>
        )}
      </Tb>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
