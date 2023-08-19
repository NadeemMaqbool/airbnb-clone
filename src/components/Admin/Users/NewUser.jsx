import { Checkbox } from "antd"
import { Form } from "react-router-dom"

const NewUser = () => {
  return (
    <div className="form-container">
      <div className="form-group"> 
        <div className="form-title">
          <p className="title">New User</p>
        </div>
        <form className="user-form">
          <div className="form-item">
            <label htmlFor="first_name">First Name</label>
            <input name="first_name" type="text" className="form-control" />
          </div>

          <div className="form-item">
            <label htmlFor="first_name">Last Name</label>
            <input name="last_name" type="text" className="form-control" />
          </div>

          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" className="form-control" />
          </div>

          <div className="form-item">

            <label htmlFor="status">Active</label>
            <div className="form-selects-item">
              <label>Yes
                <input name="status" type="radio"  value="Yes" className="radio"/>
              </label>
              <label>
                No
                <input name="status" type="radio" value="No"className="radio"/>
              </label>
              
            </div>
            
          </div>

        </form>
      </div>
    </div>
  )
}

export default NewUser