import { Profile } from './Profile/Profile';
import { Fragment } from 'react';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import '../index.module.css';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import React from 'react';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Fragment>
  );
};
