export default function FriendsList({ friends }) {
  return (
    <ul className="friendlist">
      {friends !== undefined ? (
        friends.map(({ id, isOnline, avatar, name }) => (
          <li className="item" key={id}>
            <span className="status">{isOnline}</span>
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
