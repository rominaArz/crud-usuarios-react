

const UserCard = ({user, deleteUser,setInfoUpdate }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
    }

  return (
    <article className="articulo">
      <h3>#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <ul>
        <li><span>Email: </span><span>{user.email}</span></li>
        <li><span>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <button onClick={handleDelete} className="delete">Delete<i class='bx bx-trash'></i> </button>
      <button onClick={handleEdit} className="edit">Edit <i class='bx bx-wrench'></i></button>
    </article>
  )
}

export default UserCard