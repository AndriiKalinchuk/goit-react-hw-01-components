import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friendlist">
      {friends !== undefined ? (
        friends.map(({ id, isOnline, avatar, name }) => (
          <li className="item" key={id}>
            <span className="status">
              {isOnline ? <HiStatusOnline /> : <HiStatusOffline />}
            </span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        ))
      ) : (
        <li className="item">
          <p>No friends</p>
        </li>
      )}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
