const UserCard = (props) => {
    const {userId, userSurname, userName, phone} = props;
  return (
    <div key={userId}>
    <p>Name: {userName}</p>
    <p>Surname: {userSurname}</p>
    <p>Phone: {phone}</p>
  </div>
  )
}
