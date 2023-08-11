import "./Auth.css";
import loginBg from "../../assets/login-bg.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignin } from "../../hooks/useSignin";
import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {SignIn, error, isLoading} = useSignin();
  const navigate = useNavigate()
  const {user} = useAuthContext() 

  const loginHandler = async (e) => {
    e.preventDefault();
    await SignIn({email, password})
  };

  useEffect(() => {
    if (user) {
      navigate("/admin")
    }
  }, [user])

  return (
    <>
     <div className="auth-container">
        <div className="auth-form">
          <div className="form">
            { error &&
                <div className="error">
                    {error}
                </div>
            }
            <div className="form-heading">Welcome to FunPedia</div>
            <form className="form-items" onSubmit={loginHandler}>
              <div className="form-group">
                <input
                  value={email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Username Or Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  value={password}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(en) => setPassword(en.target.value)}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="bg-img">
            <img src={loginBg} className="login-bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
