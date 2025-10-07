import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={
          <div className="home-wrapper">
            <div className="logo">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="white" opacity="0.2"/>
                <path d="M30 40 L50 20 L70 40 L70 70 L30 70 Z" fill="white"/>
                <circle cx="45" cy="35" r="3" fill="var(--primary-color)"/>
                <circle cx="55" cy="35" r="3" fill="var(--primary-color)"/>
                <path d="M45 45 Q50 50 55 45" stroke="var(--primary-color)" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h1>My App</h1>
            <div className="nav-links">
              <Link to='/signup'>Go to Signup</Link>
              <Link to='/login'>Go to Login</Link>
            </div>
          </div>
        } />
        
        {/* Signup Page */}
        <Route path='/signup' element={<Signup />} />
        
        {/* Login Page */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App