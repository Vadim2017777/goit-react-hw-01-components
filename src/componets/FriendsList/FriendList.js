import React from 'react';
import PropTypes from 'prop-types';

import s from './FreindsList.module.css';

const FreindList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map(freind => (
      <li key={freind.id} className={s.item}>
        <span className={freind.isOnline ? s.active : s.disabled}></span>
        <img
          className={s.avatar}
          src={freind.avatar}
          alt={freind.name}
          width="48"
        />
        <p className={s.name}>{freind.name}</p>
      </li>
    ))}
  </ul>
);

FreindList.defaultProps = {
  freinds: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FreindList;
