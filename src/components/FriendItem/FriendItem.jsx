import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export const FriendItem = ({ avatar, name, status, key }) => {
  return (
    <li className={css.item} id={key}>
      <span className={status ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  key: PropTypes.number.isRequired,
};
