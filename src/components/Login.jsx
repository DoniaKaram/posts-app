import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../state/authSlice";
import { login } from "../state/authSlice";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
   const {loading,error}=useSelector(state=>state.auth)
  const dispatch = useDispatch();

  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    let userCredintals = {
      username,
      password,
    };
    console.log(userCredintals);
    dispatch(loginUser(userCredintals)).then((result)=>{
           if(result.payload){
               setUserName('');
               setPassword('');
               dispatch(login())
               navigate('/dashboard',{replace:true});
           }
    });
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={handleLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label> Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                {loading?'loading...':'Login'}
              </button>
              <Link to={"/Signup"} className="btn btn-success">
                New user
              </Link>
              {error&&(<div className="alert alert-danger" role='alert'>{error}</div>)}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
