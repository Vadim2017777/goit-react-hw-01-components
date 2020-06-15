import React from 'react';

import Profile from './UserProfile/userProfile';
import FriendList from './FriendsList/FriendList';
import Statistics from './StatisticSection/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import User from '../data/User.json';
import Friends from '../data/Freinds.json';
import StatisticalData from '../data/Statistical-data.json';
import Transactions from '../data/Transactions.json';

const App = () => (
  <>
    <Profile
      name={User.name}
      tag={User.tag}
      location={User.location}
      avatar={User.avatar}
      stats={User.stats}
    />
    <FriendList friends={Friends} />
    <Statistics title="Upload stats" stats={StatisticalData} />
    <TransactionHistory items={Transactions} />
  </>
);
export default App;
