import {Link} from 'react-router-dom'
import "./Table.css"
import {CiTrash, CiEdit} from "react-icons/ci"

const Table = (props) => {
  const { users } = props

  if (!users) return null; // Added return value for the condition

  const deleteUser = (userId) => {
    console.log(userId)
  }

  const editUser = (userId) => {
    console.log(userId)
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th className='action-header'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((user, index) => (
              <tr key={index}> 
                <td className="main-item">{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td className='table-row'>{user.status ?
                    <span className='badge badge-success'>Yes</span> :
                    <span className='badge badge-error'>No</span>}</td>
                <td className='actions'>
                    <button onClick={() => deleteUser(user.id)}  className='action-btn'>
                        <CiTrash size={18} className='action-del' />
                    </button>
                    
                    <button onClick={() => editUser(user.id)} className='action-btn'>
                        <CiEdit size={20} className='action-edit'/>
                    </button>                    
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Table

