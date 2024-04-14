import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
              <Route path='/' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/welcome' element={<Welcome />} />
            </Routes>
        </div>
    </Router>
    
  );
}

export default App;
