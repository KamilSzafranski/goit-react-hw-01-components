import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Table,
  TableHead,
  TableHeadRow,
  TableRow,
} from './transactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeadRow>
      </TableHead>
      <tbody>
        {transactions.map((element, index) => {
          return (
            <TableRow key={element.id} index={index}>
              <td>{element.type}</td>
              <td>{element.amount}</td>
              <td>{element.currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
