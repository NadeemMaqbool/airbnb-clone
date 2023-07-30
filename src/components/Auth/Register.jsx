import "./Auth.css"

const Register = () => {
  return (
    <div className="auth-container">
        <div className="auth-form">
            <form className="form" >
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username Or Email" />
                </div>

                <div className="form-group" >
                    <input type="password" className="form-control" placeholder="password" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register
