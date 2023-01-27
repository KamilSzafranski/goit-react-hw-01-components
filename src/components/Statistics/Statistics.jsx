import clsx from 'clsx';
import css from './statistics.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const getBg = variant => {
  switch (variant) {
    case '.docx':
      return css.docx;
    case '.pdf':
      return css.pdf;
    case '.mp3':
      return css.mp3;
    case '.psd':
      return css.psd;
    case '.pdf2':
      return css.pdf2;
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statsList}>
        {stats.map(element => (
          <li key={element.id} className={clsx(css.item, getBg(element.label))}>
            <span className={css.label}>{element.label}</span>
            <span className={css.percentage}>{`${element.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
