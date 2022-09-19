import PropTypes from 'prop-types';
import css from "./UserProfile.module.css";

export const UserProfile = ({ name, tag, location, avatar, stats }) => { 
  return (
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.wrapper}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.wrapper}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.wrapper}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)
};


UserProfile.propTypes = {
  name:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};