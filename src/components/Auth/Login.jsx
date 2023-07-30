import "./Auth.css"
import loginBg from "../../assets/login-bg.jpg"

const Login = () => {
  return (
    <div className="auth-container">
        <div className="auth-form">
            <div className="form">
                <div className="form-heading">
                    Welcome to FunPedia
                </div>
                <form className="form-items">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username Or Email" />
                    </div>

                    <div className="form-group" >
                        <input type="password" className="form-control" placeholder="password" />
                    </div>

                    <div className="form-group" >
                        <button type="submit" className="btn btn-primary" > Submit </button>
                    </div>
                </form>
            </div>
            <div className="bg-img">
                <img src={loginBg} className="login-bg"/>
            </div>
        </div>
    </div>
  )
}

export default Login
