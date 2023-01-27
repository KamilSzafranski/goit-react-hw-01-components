import css from './friendList.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import React from 'react';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(element => {
        return (
          <li key={element.id} className={css.item}>
            <span
              className={clsx(css.status, {
                [css.isOnline]: element.isOnline,
              })}
            ></span>
            <img
              className={css.awatar}
              src={element.avatar}
              alt="User avatar"
            />
            <p className={css.className}>{element.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
