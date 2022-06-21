import FriendItem from "./FriendItems"
import css from './friends.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
        ))}
    </ul>
  )
}