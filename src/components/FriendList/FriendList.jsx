import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendItem,
  Status,
  Image,
  Name,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends !== undefined ? (
        friends.map(({ id, isOnline, avatar, name }) => (
          <FriendItem key={id}>
            <Status>
              {isOnline ? <HiStatusOnline /> : <HiStatusOffline />}
            </Status>
            <Image src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </FriendItem>
        ))
      ) : (
        <FriendItem>
          <p>No friends</p>
        </FriendItem>
      )}
    </FriendsList>
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
