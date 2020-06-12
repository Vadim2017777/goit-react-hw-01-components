import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

import color from '../../helpers/color.js';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={s.item}
          style={{ backgroundColor: color() }}
        >
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
