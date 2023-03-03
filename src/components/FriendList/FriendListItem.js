import PropTypes from 'prop-types';

function FriendListItem({ id, avatar, name, isOnline, style }) {
  const online = isOnline
    ? `${style.status} ${style.online}`
    : `${style.status} ${style.offline}`;
  return (
    <li className={style.item} key={id}>
      <span className={online}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
