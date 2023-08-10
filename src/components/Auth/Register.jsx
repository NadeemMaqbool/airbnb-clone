import "./Auth.css"
import loginBg from "../../assets/login-bg.jpg"
import { useState } from "react"
import axios from "axios"
import { useSignup } from "../../hooks/useSignup"

const Login = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {SignUp, error, isLoading} = useSignup()
    
    const loginHandler = async (e) => {
        e.preventDefault()

        await SignUp({
            firstName,
            lastName,
            password, 
            confirmPassword, 
            email
        })
    }
  return (
    <div className="auth-container">
        <div className="auth-form">
            <div className="form">
                {
                    error &&
                    <div className="error">
                       {error}
                    </div>
                 }
                <div className="form-heading">
                    Welcome to FunPedia
                </div>
                <form className="form-items" onSubmit={loginHandler}>
                    <div className="form-group">
                        <input
                            value={firstName}
                            name="first_name"
                            type="text"
                            className="form-control" 
                            placeholder="First Name"
                            onChange={(e)=> setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={lastName}
                            name="last_name"
                            type="text"
                            className="form-control" 
                            placeholder="Last Name"
                            onChange={(e)=> setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={email}
                            name="email"
                            type="text"
                            className="form-control" 
                            placeholder="Username Or Email"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group" >
                        <input 
                            value={password}
                            name="password"
                            type="password" 
                            className="form-control" 
                            placeholder="Password"
                            onChange={(en) => setPassword(en.target.value)} 
                        />
                    </div>
                    <div className="form-group" >
                        <input 
                            value={confirmPassword}
                            name="confirm_password"
                            type="password" 
                            className="form-control" 
                            placeholder="Cofirm Password"
                            onChange={(en) => setConfirmPassword(en.target.value)} 
                        />
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
