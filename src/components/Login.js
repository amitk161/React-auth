import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    console.log("username is", username);
    console.log("password is", password)
    navigateLogin();
  }

  function navigateLogin() {
    let loginData = JSON.parse(localStorage.getItem("data"));
    console.log(loginData);
    console.log(loginData[1]);
    console.log(loginData[2]);

    if(username === loginData[1] && password === loginData[2]){
        navigate('/welcome')
    } else {
        alert("Invalid Credentials")
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <div>
            <div>
              <label>Email: </label>
              <input
                type="email"
                placeholder="Enter your username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <label>Password: </label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
