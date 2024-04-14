import {React, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./Signup.css"

function Signup() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const items = [name, username, password];
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // setName('');
        setUserName('');
        setPassword('');
        let data = localStorage.setItem("data", JSON.stringify(items));
        console.log(data);
        navigateLogin();
    }   

    function navigateLogin() {
        navigate('/login')
    }

  return (
    <div className='main-div'>
      <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <h1>Authenticate</h1>
                    <div className='inner-div'>
                        <div className='element'>
                            <label>Name: </label>
                            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='element'>
                            <label>Email: </label>
                            <input type="email" placeholder='Enter your username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className='element'>
                            <label>Password: </label>
                            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
    
                    <div className='btn'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <span>Already have an account?</span>
        <Link to="/login"> Login</Link>
    </div>
  )
}

export default Signup

// if the form has a onSubmit then we should never have a onClick i=on the button and its type should never be set to 'submit'