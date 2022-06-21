import PropTypes from 'prop-types'
import css from './friends.module.css'

export default function FriendItem(props) {
  const { avatar, name, isOnline, id } = props
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{ name }</p>
    </li>
  )
}

FriendItem.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,
  id:PropTypes.number,
}